import React from 'react'
import HeadingSubtitle from '../shared/SectionLable'
import Typography from '../typography'
import HighlightedText from '../typography/HighlightedHeading'
import PremiumCourseCard from './PremiumCourseCard'
import { getAllCourses } from '@/services/course-service'

const PremiumCourseSection = () => {
    
    const premiumCourses = getAllCourses().slice(0, 3);
  return (
    <section className='py-20 bg-primary/5'>
        <div className='text-primary flex items-center justify-center flex-col max-w-4xl mx-auto text-center mb-10'>
            <HeadingSubtitle title='LINKING UP EDUCATION' className='before:bg-primary after:bg-primary text-primary' />
            <Typography as="title" className='mb-7'>Explore Our <HighlightedText>Job Guaranteed Courses</HighlightedText></Typography>
            <Typography as="p" >
                Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Velit euismod in pellentesque massa placerat duis. Nisi quis eleifend quam adipiscing vitae. Egestas pretium aenean.
            </Typography>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center container gap-10 '>
            {
                premiumCourses.map(pc => {
                    return <PremiumCourseCard course={pc} courseImage={pc.images?.promotionalCardImage} />
                })
            }
        </div>
    </section>
  )
}

export default PremiumCourseSection