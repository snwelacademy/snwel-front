export type Course = {
    id: string,
    image?: string,
    title: string;
    shortDescription: string;
    description: string;
    courseDuration: string;
    category: string[];
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
    appearence?: {
        themeColor?: string,
        forgroundColor?: string
    }
    images?: {
        promotionalCardImage?: string
    },
    curriculum:{title: string, duration: string} []
}