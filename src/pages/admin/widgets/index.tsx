import BreadCrumb from '@/components/BreadCrumb';
import Loader from '@/components/Loader';
import { DataTable } from '@/components/shared/DataTable';
import { widgetColumns as columns } from '@/components/tables/widget-table/widget-columns';
import { Heading } from '@/components/ui/Heading';
import { buttonVariants } from '@/components/ui/button';
import { cn, getListOptionsFromSearchParams, getTotalPages } from '@/lib/utils';
import { fetchAllWidgets } from '@/services/admin/admin-widget-service';
import { Separator } from '@radix-ui/react-separator';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const breadcrumbItems = [{ title: "Widgets", link: "/admin/widget" }];

const WidgetPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ['/admin/widgets'], 
    queryFn: () => fetchAllWidgets(getListOptionsFromSearchParams(searchParams))
  });

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />

      <div className="flex items-start justify-between">
        <Heading
          title={`Widgets (${data?.total || 0})`}
          description="Manage All Widget List"
        />

        <Link
          to={"/admin/widget/new"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Link>
      </div>
      <Separator />

      {isLoading ? 
        <Loader type="default" /> :
        <DataTable
          searchKey="name"
          pageNo={data?.currentPage || 1}
          columns={columns}
          total={data?.total || 0}
          data={data?.docs || []}
          pageCount={data?.total ? getTotalPages(data.total, data.limit) : 0}
        />
      }
    </div>
  );
};

export default WidgetPage;
