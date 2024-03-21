import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllCourseCategories } from "@/services/caourse-category-service"
import { getCourseByCategory } from "@/services/course-service";
import { nanoid } from "nanoid";
import CourseCard from "./CourseCard";


const CourseTabByCategory = () => {
    const categories = getAllCourseCategories();
    return (
        <Tabs defaultValue={categories[0].id} className="">
            <TabsList className="w-full justify-start overflow-x-auto">
                {
                    categories.map(ct => {
                        return  <TabsTrigger key={ct.id} value={ct.id}>{ct.title}</TabsTrigger>
                    })
                }
            </TabsList>
            {
                categories.map(ct => {
                    return  <TabsContent key={nanoid()} value={ct.id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center">
                            {
                                getCourseByCategory(ct.id).map(cs => {
                                    return <div key={nanoid()} className="w-full">
                                        <CourseCard key={nanoid()} course={cs} />
                                    </div>
                                })
                            }
                        </div>
                    </TabsContent>
                })
            }
            {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
    )
}

export default CourseTabByCategory