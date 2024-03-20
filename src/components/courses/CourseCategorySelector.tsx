
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getAllCourseCategories } from "@/services/caourse-category-service";

const CourseCategorySelector = ({
    value,
    onChange
}: {
    onChange?: (value?: string) => void,
    value?: string
}) => {
    const courseCategories = getAllCourseCategories();
    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Courses"/>
            </SelectTrigger>
            <SelectContent>
                {
                    courseCategories.map(cs => {
                        return  <SelectItem value={cs.id}>{cs.title}</SelectItem>
                    })
                }
            </SelectContent>
        </Select>
    )
}

export default CourseCategorySelector