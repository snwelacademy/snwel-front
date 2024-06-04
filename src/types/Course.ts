import { CourseCategory } from ".";

export type Course = {
    _id: string,
    image?: string,
    title: string;
    shortDescription: string;
    slug: string,
    text: string;
    courseDuration: string;
    categories: CourseCategory[];
    difficulty: string;
    language: string[];
    assessment: string;
    certificate: boolean;
    lessons: number;
    rating: number;
    enrolled: number;
    isPopular: boolean;
    price: number,
    currency: string,
    discount?: number,
    isPremium?: boolean,
    masterCategory: string,
    appearence?: {
        themeColor?: string,
        forgroundColor?: string
    }
    images?: {
        promotionalCardImage?: string,
        iconImage?: string
    },
    curriculum:{title: string, duration: string} []
}