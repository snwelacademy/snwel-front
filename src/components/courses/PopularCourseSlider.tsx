import { getPopularCourses } from '@/services/course-service';
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"
import CourseCard from './CourseCard';

const PopularCourseSlider = () => {
    const courses = getPopularCourses()
    return (
        <div>
            <Carousel
            opts={{
                loop: true
            }}
            plugins={[
                Autoplay({
                  delay: 5000,
                }),

              ]}
            >
                <CarouselContent>
                    {courses.map((courseData) => (
                        <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={courseData.id}>
                            <CourseCard course={courseData} />
                        </CarouselItem>
                    ))
                    }
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>

        </div>
    )
}

export default PopularCourseSlider