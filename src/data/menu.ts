import { getAllCourseCategories } from "@/services/caourse-category-service";
import { getCourseByCategory } from "@/services/course-service";
import { Course } from "@/types/Course";
import { CourseCategory } from "@/types/CourseCategory";
import { ReactNode } from "react"

export type Menu = {
    label: string,
    link?: string,
    children?: Menu[],
    icon?: ReactNode
}

const convertCourseDataToMenu = (option?: {isPremiumAllowed?: boolean}) => {
    const categories = filterCategory(getAllCourseCategories(), {isPremiumAllwed: option?.isPremiumAllowed});
    return categories.map(cc => {
        return {
            label: cc.title,
            link: `/courses/?category=${cc.id}`,
            children: filterCourse(getCourseByCategory(cc.id), {isPremiumAllwed: option?.isPremiumAllowed}).map(cs => {
                return {
                    label: cs.title
                }
            })

        } as Menu;
    })
}

const filterCourse = (courses: Course[],{isPremiumAllwed}: {isPremiumAllwed?: boolean}) => {
    const c = courses.filter(cs => {
        const is = (Boolean(cs.isPremium) === isPremiumAllwed);
        return is;
    });
    return c;
}

const filterCategory = (courses: CourseCategory[],{isPremiumAllwed}: {isPremiumAllwed?: boolean}) => {
    const c = courses.filter(cs => {
        const is = (Boolean(cs.isPremium) === isPremiumAllwed);
        return is;
    });
    return c;
}

const menus: Menu[] = [
    {
        label: 'Home',
        link: '/'
    },

    {
        label: "Courses",
        link: '/courses',
        children: convertCourseDataToMenu({isPremiumAllowed: false})
    },

    {
        label: 'About',
        link: '/about'
    },

    {
        label: 'Contact',
        link: '/contact'
    }
];


export default menus;