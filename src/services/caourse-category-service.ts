import coursCategories from "@/data/courseCategories";

export function getAllCourseCategories() {
    return coursCategories
}

export function getCategoryById(id: string){
    return coursCategories.find(ct => ct._id === id)
}

