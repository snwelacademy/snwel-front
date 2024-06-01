/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { cn } from '@/lib/utils';
import PhoneInput from '../ui/phoneInput';
import { createEnrollmentAnonymous } from '@/services/course-enrollment-service';
import { useToast } from '../ui/use-toast';
import { useState } from 'react';
import OTPForm from '../otp/OtpForm';
import { CheckCircle } from 'lucide-react';


const formSchema = z.object({
  name: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email(),
  courseId: z.string(),
  phone: z.string(),
})

const JoinCourseForm = ({ className, value, onClose}: { className?: string, value?: z.infer<typeof formSchema>, onClose?: () => void }) => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: value || {}
  });

  const [state, setState] = useState<{ isVerified: boolean, token?: string, invalidOtp?: boolean, invalidToken?: boolean, enrollmentId?: string } | null>(null);

  async function onSubmit(value: z.infer<typeof formSchema>) {
    try {
      const res = await createEnrollmentAnonymous(value);
      setState(res);
    } catch (error: any) {
      toast({ title: error.message || "Something went wrong!", variant: 'destructive' })
    }
  }

  if (state?.token) {
    return <OTPForm token={state.token} onVerified={setState} />
  }

  // if(state?.isVerified && state.enrollmentId){
  //   return <div className='w-full aspect-square bg-center bg-cover bg-no-repeat relative flex ite' style={{backgroundImage: `url(/assets/images/otp-verifed.svg)`}}>
  //     <div></div>
  //   </div>
  // }
  if (state?.isVerified && state.enrollmentId) {
    return <div className="modal-body space-y-3 flex flex-col items-center">
      <div className="flex items-center justify-center">
        <CheckCircle className='w-[150px] h-[150px] text-green-700' />
      </div>
      <p className='font-bold'>Congratulations! You have successfully applied for the course.</p>
      <p>We will review your application and notify you of the outcome soon. In the meantime, you can check out the course detailes.</p>

      <Button type="button" onClick={() => {setState(null); onClose?.()}}>Close</Button>
    </div>
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(["space-y-3 rounded-2xl bg-primary/5 p-4 md:p-10", className])}>
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
                <Input placeholder="Your email"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseId"
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

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput inputStyle={{ width: "100%" }} country={'in'} placeholder="Your email" {...field} />
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