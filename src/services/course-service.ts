import courseData from "@/data/courses"

export const getAllCourses = () => {
    return courseData;
}

export const getCourse = (id: string) => {
    return courseData.find(course => course.id === id);
}

// export const getCourseBySlug = (slug: string) => {
//     return courseData.find(course => course.slug === slug);
// }

export const getCourseByCategory = (category: string) => {
    return courseData.filter(course => course.category.find(cat => (cat.toLowerCase() === category.toLowerCase())));
}

export const getPopularCourses = () => {
    return courseData.filter(course => course.isPopular);
}

