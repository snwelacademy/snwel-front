
import { nanoid } from 'nanoid'
import WebinarCard from './WebinarCard'
import { Webinar } from '@/types/Webinar'

const WebinarGridList = ({
    webinarList
}: {
    webinarList: Webinar[]
}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-10'>
            {
                webinarList.map(wb => {
                    return <div className='w-full' key={nanoid()}><WebinarCard webinar={wb} /></div>
                })
            }
        </div>
    )
}

export default WebinarGridList