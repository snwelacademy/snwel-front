/* eslint-disable @typescript-eslint/no-explicit-any */
import { Course } from '@/types';
import { DEFAULT_LIST_OPTIONS } from './../../types/ListOptions';
import { protectedApi } from "@/lib/api";
import { ApiResponse, ListResponse } from '@/types/ApiResponses';
import { ListOptions } from "@/types/ListOptions";
import { AxiosResponse } from 'axios';
import { listOptionsToUrlSearchParams } from '@/lib/utils';

export async function getAllCourses (options?: ListOptions) {
    try {
        options = {...DEFAULT_LIST_OPTIONS, ...options}
        const res = await protectedApi.get<any, AxiosResponse<ApiResponse<ListResponse<Course>>>>(`/course?${listOptionsToUrlSearchParams(options)}`);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.log("Error: getAllCourses: ", error);
        throw new Error("Error in fetching course list. Please try again")
    }
}
export async function createCourse (mutateCourse: any) {
    try {
        
        const res = await protectedApi.post<any, AxiosResponse<ApiResponse<Course>>>('/course', mutateCourse);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.log("Error: createCourse: ", error);
        throw new Error("Error in creating course list. Please try again")
    }
}
export async function updateCourse (courseId: string, mutateCourse: any) {
    try {
        
        const res = await protectedApi.put<any, AxiosResponse<ApiResponse<Course>>>(`/course/${courseId}`, mutateCourse);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.log("Error: updateCourse: ", error);
        throw new Error("Error in updating course. Please try again")
    }
}
export async function deleteCourse (courseId: string) {
    try {
        const res = await protectedApi.delete<any, AxiosResponse<ApiResponse<Course>>>(`/course/${courseId}`);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.log("Error: deleteCourse: ", error);
        throw new Error("Error in deleting course. Please try again")
    }
}
export async function getCourse (courseId: string) {
    try {
        const res = await protectedApi.get<any, AxiosResponse<ApiResponse<Course>>>(`/course/${courseId}`);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.log("Error: deleteCourse: ", error);
        throw new Error("Error in deleting course. Please try again")
    }
}

