
// import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'
import Typography from '../typography'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import HighlightPan from './HighlightPan'
import HeadingSubtitle from './SectionLable'
// import gsap from "@/lib/gsap";
// import { useGSAP} from '@gsap/react';
import { useRef } from 'react'
import EnrollCourseModal from '../courses/EnrollCourseModal'
// import {Parallax} from 'react-scroll-parallax';


const Hero = () => {
    const container = useRef(null);
    // const [pause, setPause] = useState(true)

    // useGSAP(() => {
    //     const tl = gsap.timeline({defaults: {duration: .5, ease: "power1.in", paused: pause}});
    //     tl.from('.hero-title', {opacity: 0, y: 20})
    //     .from('.hero-subtitle', {opacity: 0, y: 20})
    //     .from('.hero-btn-1',  {opacity: 0, y: 20})
    //     .from('.hero-btn-2',  {opacity: 0, y: 20})
    //     .from('.highlight-pan',  {opacity: 0, y: 20})
    //     .from('.hero-img-1',  {opacity: 0, y: 40})
    //     .from('.hero-img-2',  {opacity: 0, y: 40})
        
    // }, {scope: container, dependencies: [pause]});

    // useEffect(() => {
    //   setTimeout(() => {
    //     setPause(false)
    //   }, 2000);
    // }, [])
    

    return (
        <Carousel 
        onChange={e => console.log({e})}
        opts={{
            loop: true
        }}
        plugins={[
            

          ]}
        >
            <CarouselContent ref={container}>
                <CarouselItem>
                    {/* <Parallax speed={-10}> */}
                    <div className='min-h-screen pb-5' style={{ backgroundImage: 'url(assets/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="px-6 text-center lg:text-left bg-transparent">
                            <div className="w-100 mx-auto pt-20">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full  lg:w-[40%]">
                                        <img src="/assets/images/hero-img-1.webp" className="w-full hero-img-1" alt="" />
                                    </div>
                                    <div className="flex items-center">
                                        <div className=" lg:mt-0 text-center ">
                                            <HeadingSubtitle className='hero-title text-primary-foreground before:bg-primary-foreground after:bg-primary-foreground' title='independent institution with' />
                                            <Typography as={'heroTitle'} className="hero-subtitle mb-16 text-4xl font-black tracking-tight md:text-6xl xl:text-6xl text-primary-foreground text-center">
                                                Elevate Your Engineering Expertise <br />with Specialized Training
                                            </Typography>
                                            <div className='space-x-2'>
                                                <EnrollCourseModal
                                                trigger={<Button className='hero-btn-1' size={'lg'} variant={'destructive'}>BUY COURSE</Button>}
                                                courseId=''
                                                />
                                                <Link to="/courses"><Button className='hero-btn-2' size={'lg'} variant={'secondary'}>EXPLORE COURSES</Button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-[40%]">
                                        <img src="/assets/images/hero-img-2.webp" className="w-full hero-img-1" alt="" />
                                    </div>
                                </div>

                                <div className='mt-10 lg:mt-0 highlight-pan'>
                                    <HighlightPan />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Parallax> */}
                </CarouselItem>
                <CarouselItem>
                {/* <Parallax speed={-10}> */}
                    <div className='min-h-screen pb-5' style={{ backgroundImage: 'url(assets/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="px-6 text-center lg:text-left bg-transparent">
                            <div className="w-100 mx-auto pt-20">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full  lg:w-[40%]">
                                        <img src="/assets/images/hero-img-1.webp" className="w-full" alt="" />
                                    </div>
                                    <div className="flex items-center">
                                        <div className=" lg:mt-0 text-center ">
                                            <HeadingSubtitle className='text-primary-foreground before:bg-primary-foreground after:bg-primary-foreground' title='independent institution with' />
                                            <Typography as={'heroTitle'} className="mb-16 text-4xl font-black tracking-tight md:text-6xl xl:text-6xl text-primary-foreground text-center">
                                                Elevate Your Engineering Expertise <br />with Specialized Training
                                            </Typography>
                                            <div className='space-x-2'>
                                                <Button size={'lg'} variant={'destructive'}>GET STARTED</Button>
                                                <Button size={'lg'} variant={'secondary'}>LEARN MORE</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-[40%]">
                                        <img src="/assets/images/hero-img-2.webp" className="w-full" alt="" />
                                    </div>
                                </div>

                                <div className='mt-10 lg:mt-0'>
                                    <HighlightPan />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Parallax> */}
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default Hero