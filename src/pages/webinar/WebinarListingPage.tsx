

import Typography from '@/components/typography'
import { Input } from '@/components/ui/input'
import WebinarGridList from '@/components/webinar/WebinarGridList'
import { getAllWebinars, searchWebinar } from '@/services/webinar-service'
import { Webinar } from '@/types/Webinar'
import { useState } from 'react'

const WebinarListingPage = () => {
    const [webinars, setWebinar] = useState<Webinar[]>(getAllWebinars());
    // const webinarList = getAllWebinars();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.currentTarget.value;
        if(value){
            setWebinar(searchWebinar(value))
        }
    }
    return (
        <>
            <div className='relative w-full bg-center bg-cover flex flex-col items-center justify-center  min-h-96 bg-primary/10 text-center space-y-3 px-4'>
                <Typography as="heroTitle" className='text-primary z-20 max-w-3xl text-center'>Webinars</Typography>
                <Typography as="p" className='max-w-3xl text-center'>Register now and unlock a world of knowledge designed to elevate your engineering skills and propel your career forward!</Typography>

                <div className='flex items-center justify-center w-full'>
                    <Input className='w-full max-w-sm' placeholder='Search Webinars...' onChange={handleSearch} />
                </div>
            </div>
            <section className='py-20'>
                <div className='container'>
                    <WebinarGridList webinarList={webinars} />
                </div>
            </section>
        </>
    )
}

export default WebinarListingPage