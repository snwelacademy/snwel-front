import { webinarData } from "@/data/webinar"

export const getAllWebinars = () => {
    return webinarData;
}


export const getWebinarBySlug = (slug: string) => {
    return webinarData.find(wb => wb.slug === slug);
}

export const searchWebinar = (query: string) => {
    return webinarData.filter(wb => wb.title.toLowerCase().replace(' ', '').includes(query.toLowerCase().replace(' ','')))
}
