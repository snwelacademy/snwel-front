import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CourseSelector from './CourseSelector';
import Typography from '../typography';


const formSchema = z.object({
  name: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email(),
  course: z.string()
})

const JoinCourseForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });


  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value)
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 rounded-2xl bg-primary/5 p-4 md:p-10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Our Course</FormLabel>
              <FormControl>
                <CourseSelector {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='pt-5 space-y-3'>
          <Button type="submit" size={'lg'} className='w-full'>Submit</Button>
          <Typography as="lable" className='text-primary block'>By sharing your email, you agree to our Privacy Policy and Terms and Service.</Typography>
        </div>
      </form>
    </Form>
  )
}

export default JoinCourseForm