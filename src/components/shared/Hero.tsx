
import Typography from '../typography'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import HighlightPan from './HighlightPan'
import HeadingSubtitle from './SectionLable'
import {Parallax} from 'react-scroll-parallax';

// const content = {
//     title: "",
//     subtitle: "",
//     buttonText: "",
//     image: ""
// }

const Hero = () => {

    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <Parallax speed={-40}>
                    <div className='min-h-screen' style={{ backgroundImage: 'url(src/assets/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="px-6 text-center lg:text-left bg-transparent">
                            <div className="w-100 mx-auto pt-20">
                                <div className="flex ">
                                    <div className="w-[40%]">
                                        <img src="src/assets/hero-img-1.webp" className="w-full" alt="" />
                                    </div>
                                    <div className="flex items-center">
                                        <div className=" lg:mt-0 text-center  ">
                                            <HeadingSubtitle title='independent institution with' />
                                            <Typography as={'heroTitle'} className="mb-16 text-4xl font-black tracking-tight md:text-6xl xl:text-6xl text-primary-foreground text-center">
                                                Elevate Your Engineering Expertise <br />with Specialized Training
                                            </Typography>
                                            <div className='space-x-2'>
                                                <Button size={'lg'} variant={'destructive'}>GET STARTED</Button>
                                                <Button size={'lg'} variant={'secondary'}>LEARN MORE</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[40%]">
                                        <img src="src/assets/hero-img-2.webp" className="w-full" alt="" />
                                    </div>
                                </div>

                                <div className=''>
                                    <HighlightPan />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Parallax>
                </CarouselItem>
                <CarouselItem>
                    <div className='min-h-screen' style={{ backgroundImage: 'url(src/assets/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="px-6 text-center lg:text-left bg-transparent">
                            <div className="w-100 mx-auto pt-20">
                                <div className="flex ">
                                    <div className="w-[40%]">
                                        <img src="src/assets/hero-img-1.webp" className="w-full" alt="" />
                                    </div>
                                    <div className="flex items-center">
                                        <div className=" lg:mt-0 text-center  ">
                                            <HeadingSubtitle title='independent institution with' />
                                            <Typography as={'heroTitle'} className="mb-16 text-4xl font-black tracking-tight md:text-6xl xl:text-6xl text-primary-foreground text-center">
                                                Elevate Your Engineering Expertise <br />with Specialized Training
                                            </Typography>
                                            <div className='space-x-2'>
                                                <Button size={'lg'} variant={'destructive'}>GET STARTED</Button>
                                                <Button size={'lg'} variant={'secondary'}>LEARN MORE</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[40%]">
                                        <img src="src/assets/hero-img-2.webp" className="w-full" alt="" />
                                    </div>
                                </div>

                                <div className=''>
                                    <HighlightPan />
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default Hero