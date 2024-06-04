/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import slugify from 'slugify'
import { Textarea } from '../ui/textarea'
import Editor from '../Editor'
import FileUploadModal from '../modal/FileUploadModal'
import { Button } from '../ui/button'
import { Course } from '@/types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { useToast } from '../ui/use-toast'
import { createCourse, updateCourse } from '@/services/admin/admin-course-service'
import { AfterCourseCreatedModal } from '../modal/AfterCourseCreated'
import CategorySelectorFormElement from '../course-category/CategorySelector'

const createCourseSchema = z.object({
    image: z.string().optional(),
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    text: z.string(),
    courseDuration: z.string(),
    difficulty: z.string().optional(),
    certificate: z.boolean().optional().default(false),
    currency: z.string().optional(),
    price: z.number().default(0),
    isPremium: z.boolean().default(false),
    isPopular: z.boolean().default(false),
    categories: z.array(z.string()).default([]),
    appearence: z.object({
        themeColor: z.string().optional(),
        forgroundColor: z.string().optional()
    }),
    images: z.object({
        promotionalCardImage: z.string().optional(),
        iconImage: z.string().optional()
    }).optional(),
    curriculum: z.array(z.object({ title: z.string(), duration: z.string() })).default([])
})


const MutateCourse = ({ courseData }: { courseData?: Course }) => {

    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast()
    const form = useForm<z.infer<typeof createCourseSchema>>({
        defaultValues: {
            difficulty: 'begginer',
            price: 0,
            isPremium: false,
            isPopular: false,
            curriculum: []
        },
        resolver: zodResolver(createCourseSchema)
    })
    const Watch = useWatch({ control: form.control });
    const { fields, append } = useFieldArray({ name: "curriculum", control: form.control })
    const handleSubmit = async (value: z.infer<typeof createCourseSchema>) => {
        try {
            setLoading(true);
            if (courseData) {
                await updateCourse(courseData._id, value);
            } else {
                await createCourse(value);
                setOpen(true)
            }
            toast({ title: `Course ${courseData ? 'Updated' : 'created'} successfully!` })
        } catch (error: any) {
            toast({ title: `Error: ${error.message}` });
        } finally {
            setLoading(false);
        }
    }

    const onAddNew = () => {
        form.reset();
        setOpen(false)
    }

    useEffect(() => {
        if (Watch.title) {
            form.setValue('slug', slugify(Watch.title, { lower: true }));
        }

    }, [Watch.title])

    useEffect(() => {
        if (courseData) {
            Object.keys(courseData).map((key: any) => {
                if (key === "categories") {
                    form.setValue(key, courseData['categories'].map(ctg => ctg._id));
                } else {
                    form.setValue(key, courseData[key as keyof Course]);
                }
            });
        }
    }, [courseData])

    useEffect(() => {
        console.log("Error", form.formState.errors)
    }, [form.formState.errors])


    return (
        <div>
            <AfterCourseCreatedModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onAddNew={onAddNew}
                loading={loading}
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className='mx-auto'>
                        <Card>
                            <CardHeader />
                            <CardContent className='space-y-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                    <div className='space-y-2'>
                                        <label>Thumbnail Image</label>
                                        <div className='rounded-2xl border-dashed border-gray-600 py-10 aspect-square max-w-sm border-2 flex items-center justify-center bg-center bg-cover' style={{ backgroundImage: `url(${Watch.image})` }}>

                                            {
                                                Watch.image ?
                                                    <FileUploadModal trigger={<Button>Change Image</Button>} onChange={path => form.setValue('image', path)} />
                                                    : <FileUploadModal trigger={<Button>Upload File</Button>} onChange={path => form.setValue('image', path)} />
                                            }
                                        </div>
                                    </div>
                                    <div className='space-y-2'>
                                        <label>Promotional Image</label>
                                        <div className='rounded-2xl border-dashed border-gray-600 py-10 aspect-square max-w-sm border-2 flex items-center justify-center bg-center bg-cover' style={{ backgroundImage: `url(${Watch.images?.promotionalCardImage})` }}>

                                            {
                                                Watch.images?.promotionalCardImage ?
                                                    <FileUploadModal trigger={<Button>Change Image</Button>} onChange={path => form.setValue('images.promotionalCardImage', path)} />
                                                    : <FileUploadModal trigger={<Button>Upload Image</Button>} onChange={path => form.setValue('images.promotionalCardImage', path)} />
                                            }
                                        </div>
                                    </div>
                                </div>
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
                                        name="slug"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Slug</FormLabel>
                                                <FormControl>
                                                    <Input disabled placeholder="Slug" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="shortDescription"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Short Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Short Description" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="text"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Course Content</FormLabel>
                                            <FormControl>
                                                <Editor {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>

                                    <FormField
                                        control={form.control}
                                        name="courseDuration"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Course Duration</FormLabel>
                                                <FormControl>
                                                    <Input type='number' placeholder="Course Duration" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Course Price</FormLabel>
                                                <FormControl>
                                                    <Input type='number' placeholder="Course Price" {...field} onChange={val => field.onChange(Number(val.target.value))} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="difficulty"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Choose Level</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select course level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="begginer">Beginner</SelectItem>
                                                        <SelectItem value="intermidiate">Intermidiate</SelectItem>
                                                        <SelectItem value="advanced">Advanced</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex items-center gap-5 ">
                                    <FormField
                                        control={form.control}
                                        name="certificate"
                                        render={({ field }) => (
                                            <FormItem className='w-full flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>

                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        Certificate
                                                    </FormLabel>

                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="isPremium"
                                        render={({ field }) => (
                                            <FormItem className='w-full flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>

                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        Premium Course
                                                    </FormLabel>

                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="isPopular"
                                        render={({ field }) => (
                                            <FormItem className='w-full flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>

                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        Mark As Popular
                                                    </FormLabel>

                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="categories"
                                        render={({ field }) => (
                                            <FormItem className='w-full items-start space-x-3 space-y-0 rounded-md border p-4'>
                                                <FormLabel>
                                                    Categories
                                                </FormLabel>
                                                <FormControl>
                                                    <CategorySelectorFormElement {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex items-center justify-center gap-5'>
                                    <FormField
                                        control={form.control}
                                        name="appearence.themeColor"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Theme Color</FormLabel>
                                                <FormControl>
                                                    <Input type="color" placeholder="Select Theme Color" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="appearence.forgroundColor"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Foreground Color</FormLabel>
                                                <FormControl>
                                                    <Input type="color" placeholder="Select Foreground Color" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='space-y-3'>
                                    {fields.map((field, index) => (
                                        <div className='flex items-center gap-5'>
                                            <FormField
                                            control={form.control}
                                            key={field.id}
                                            name={`curriculum.${index}.title`}
                                            render={({ field }) => (
                                                <FormItem className='flex flex-grow'>
                                                   
                                                    <FormControl>
                                                        <Input placeholder='Title' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            key={field.id}
                                            name={`curriculum.${index}.duration`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    
                                                    <FormControl>
                                                        <Input  placeholder='Duration' type='number' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="mt-2"
                                        onClick={() => append({ title: "", duration: "0" })}
                                    >
                                        Add Curriculum
                                    </Button>
                                </div>


                                <div className='flex justify-end pt-5'>
                                    <Button disabled={loading} type='submit'>{courseData ? "Update" : "Create"}</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default MutateCourse