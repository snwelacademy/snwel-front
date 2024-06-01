/* eslint-disable @typescript-eslint/no-explicit-any */
import courseData from "@/data/courses"
import { api } from "@/lib/api";
import { ApiResponse } from "@/types/ApiResponses";
import { Course } from "@/types/Course";
import { AxiosResponse } from "axios";

export const getAllCourses = () => {
    return courseData;
}

export const getCourse = (id: string) => {
    return courseData.find(course => course._id === id);
}

// export const getCourseBySlug = (slug: string) => {
//     return courseData.find(course => course.slug === slug);
// }

export const getCourseByCategory = (category: string) => {
    return courseData.filter(course => course.categories.find(cat => (cat.toLowerCase() === category.toLowerCase())));
}

export const getPopularCourses = () => {
    return courseData.filter(course => course.isPopular);
}

export async function getCourseBySlug (slug: string) {
    try {
        const res = await api.get<any, AxiosResponse<ApiResponse<Course>>>(`/course/${slug}`);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.log("Error: getCourse: ", error);
        throw new Error("Error in getting course. Please try again")
    }
}

