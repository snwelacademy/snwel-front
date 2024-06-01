
import Typography from '../typography'
import { Webinar } from '@/types/Webinar'
import WebinarRegistrationForm from './WebinarRegistrationForm'
import { getPublicImage } from '@/lib/utils'

const SingleWebinar = ({
    webinar
}: {
    webinar: Webinar
}) => {
    return (
        <>
            <section className={`py-20 bg-[#e4e5ff] bg-center bg-cover bg-no-repeat bg-blend-overlay `} style={{backgroundImage: `url(${webinar.coverImage})`}}>
                {/* <div className="absolute w-ful h-full bg-primary/5  " ></div> */}
                <div className=' container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-10 '>
                    <div className='space-y-5 max-w-lg'>
                        <Typography as="title">{webinar.title}</Typography>
                        <Typography as="p">{webinar.shortDescription}</Typography>
                    </div>

                    <div>
                        <div className='rounded-2xl bg-white border-2 border-primary/5 shadow-xl'><WebinarRegistrationForm /></div>
                    </div>
                </div>
            </section>

            <section className='py-20'>
            <div className='container mx-auto '>
                <div className="rounded-2xl border-2 border-primary/10 flex flex-col md:flex-row items-center gap-10 p-10 shadow-2xl shadow-primary/10">
                    <div className='flex-auto'><img className='w-full' src={getPublicImage('/In-this-webinar.svg')} /></div>
                    <div>
                        <Typography as="h1" 
                        className='mb-5'>Things you will learn:</Typography>
                    <article className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: webinar.content }}></article>
                    </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default SingleWebinar