import BreadCrumb from '@/components/BreadCrumb';
import { Heading } from '@/components/ui/Heading';
import { Separator } from '@/components/ui/separator';
import MutateWidgetForm from '@/components/widget/MutateWidgetForm';



const CreateNewWidgetPage = () => {

    const breadcrumbItems = [{ title: "New Webinar", link: "/admin/widget/create" }];

    return (
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />

            <div className="flex items-start justify-between">
                <Heading
                    title={'Create Widget'}
                    description={'Create New Widget'}
                />
            </div>
            <Separator />

            <MutateWidgetForm />
        </div>
    )
}

export default CreateNewWidgetPage