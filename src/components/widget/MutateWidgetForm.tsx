/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import slugify from 'slugify';
import { Button } from '../ui/button';
import { createWidget, updateWidget, CreateWidget, UpdateWidget } from '@/types/WidgetTypes';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import SliderSubForm from './SliderForm';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface MutateWidgetFormProps {
    widgetData?: UpdateWidget;
}

const MutateWidgetForm: React.FC<MutateWidgetFormProps> = ({ widgetData }) => {
    const [loading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof createWidget>>({
        defaultValues: {

        },
        resolver: zodResolver(widgetData ? updateWidget : createWidget),
    });

    const watchFields = useWatch({ control: form.control });
    const widgetType = form.watch('type')

    const handleSubmit = async (values: z.infer<typeof createWidget>) => {
        console.log({ values });
        return;
    };

    useEffect(() => {
        if (watchFields.title) {
            form.setValue('code', slugify(watchFields.title, { lower: false }).toUpperCase());
        }
    }, [watchFields.title, form]);

    useEffect(() => {
        if (widgetData) {
            Object.keys(widgetData).forEach((key: any) => {
                form.setValue(key, widgetData[key as keyof CreateWidget]);
            });
        }
    }, [widgetData, form]);

    useEffect(() => {
        console.log({error: form.formState.errors})
    }, [form.formState.errors])
    

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className='mx-auto'>
                        <Card>
                            <CardHeader title={widgetData ? 'Update Widget' : 'Create Widget'} />
                            <CardContent className='space-y-4'>
                                <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Title..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="code"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Code</FormLabel>
                                                <FormControl>
                                                    <Input disabled placeholder="Enter Widget Code" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a verified email to display" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Slider">Slider</SelectItem>
                                                        <SelectItem value="Cta Banner">Cta Banner</SelectItem>
                                                        <SelectItem value="Marketing Popup">Marketing Popup</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Content</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Content" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /> */}

                                {widgetType === 'Slider' && (
                                    <SliderSubForm control={form.control}/>
                                )}

                                {/* <FormField
                                    control={form.control}
                                    name="isActive"
                                    render={({ field }) => (
                                        <FormItem className='w-full flex items-center space-x-3'>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormLabel>Active</FormLabel>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /> */}
                                <div className='flex justify-end pt-5'>
                                    <Button disabled={loading} type='submit'>
                                        {widgetData ? 'Update' : 'Create'}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default MutateWidgetForm;
