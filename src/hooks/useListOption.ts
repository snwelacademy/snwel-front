/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DEFAULT_LIST_OPTIONS } from './../types/ListOptions';
import { ListOptions } from "@/types/ListOptions";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useListOptions = (): [ListOptions, (options: ListOptions) => void] => {
    const [options, setOptions] = useState<ListOptions>({...DEFAULT_LIST_OPTIONS});
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        let filter: any = {};
        const params = Object.fromEntries(searchParams.entries());
        if(params.category)filter['category'] = params.category;
        if(params.isPremium)filter['isPremium'] = params.isPremium;
        const newOptions = {
            page: params.page ? parseInt(params.page as string) : 1,
            limit: params.limit ? parseInt(params.limit as string) : 10,
            search: params.search ? params.search as string : undefined,
            filter: Object.keys(filter).length > 0 ? filter : undefined
        };
        setOptions(newOptions);
    }, [searchParams]);

    const updateOptions = (newOptions: ListOptions) => {
        const searchParams = new URLSearchParams();
        if (newOptions.page) searchParams.set('page', newOptions.page.toString());
        if (newOptions.limit) searchParams.set('limit', newOptions.limit.toString());
        if (newOptions.search) searchParams.set('search', newOptions.search);
        if (newOptions.filter) Object.keys(newOptions.filter).forEach(key => searchParams.set(key, newOptions.filter[key]))
        setSearchParams(searchParams);
        setOptions(newOptions);
    };

    return [options, updateOptions];
};