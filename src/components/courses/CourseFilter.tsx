/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import CourseCategorySelector from './CourseCategorySelector';


export type CourseListMode = 'LIST' | 'GRID';

const CourseFilterSchema = z.object({
    search: z.string().optional(),
    category: z.string().optional()
})

export type CourseFilterData  = z.infer<typeof CourseFilterSchema>

const CourseFilter = ({
    value,
}: {
    value?: z.infer<typeof CourseFilterSchema>,
    onChange?: (value: z.infer<typeof CourseFilterSchema>) => void
}) => {

    const form = useForm<z.infer<typeof CourseFilterSchema>>({
        resolver: zodResolver(CourseFilterSchema),
        defaultValues: { ...value }
    });

    // const handleSubmit = (value: z.infer<typeof CourseFilterSchema>) => {
    //     console.log("BValue", {value})
    //     onChange?.(value)
    // }

    // useEffect(() => {
    //     form.handleSubmit(handleSubmit)()
    //     form.trigger();
    // }, [])

    // useEffect(() => {
    //     if(value){
    //         for (const key in value) {
    //             const val = value[key]
    //             if()
    //             form.setValue(key as any, value[key] as any || '')
    //         }
    //     }
    // }, [value])
    
    return (
        <Form {...form}>
            <form>
                <div className='flex items-center justify-between flex-col md:flex-row gap-3'>
                    
                        <FormField
                            control={form.control}
                            name="search"
                            render={({ field }) => (
                                <FormItem className='w-full md:w-auto'>
                                    <FormControl>
                                        <div className='border-b flex items-center gap-2 px-2'>
                                            <Input className='border-0 bg-transparent' placeholder="Search" {...field} />
                                            <SearchIcon className='text-primary' />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className='w-full md:w-auto'>
                                    <FormControl>
                                        <CourseCategorySelector {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                
                </div>
            </form>
        </Form>
    )
}

export default CourseFilter