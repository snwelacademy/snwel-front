import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getAllCourses } from '@/services/course-service';

const CourseSelector = ({
    value,
    onChange
}: {
    onChange?: (value?: string) => void,
    value?: string
}) => {
    const courses = getAllCourses();
    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger className="">
                <SelectValue placeholder="Choose Courses"/>
            </SelectTrigger>
            <SelectContent>
                {
                    courses.map(cs => {
                        return  <SelectItem value={cs.id}>{cs.title}</SelectItem>
                    })
                }
            </SelectContent>
        </Select>
    )
}

export default CourseSelector