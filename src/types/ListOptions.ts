/* eslint-disable @typescript-eslint/no-explicit-any */
export type ListOptions<F=any> = {
    page?: number,
    limit?: number,
    search?: string,
    filter?: F
}

export const DEFAULT_LIST_OPTIONS: ListOptions = {
    page: 1,
    limit: 10
}