
import { getSetting, getAllSettings } from '@/services/admin/setting-service';
import { SETTINGS } from '@/types/Setting';
import { useSearchParams } from 'react-router-dom';
import { getListOptionsFromSearchParams } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

interface UseSettingsOptions {
    code: SETTINGS;
}

export function useSetting({ code }: UseSettingsOptions) {
   
    const { data, isLoading, error } = useQuery({queryKey: ['settings', code], queryFn: () => getSetting(code)});

    return { data, isLoading, error };
}
export function useSettings({ code }: UseSettingsOptions) {
    const [searchParams] = useSearchParams();
    const { data, isLoading, error } = useQuery({queryKey: ['settings', code], queryFn: () =>  getAllSettings(getListOptionsFromSearchParams(searchParams))});

    return { data, isLoading, error };
}
