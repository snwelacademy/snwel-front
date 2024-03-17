
import { Card } from '../ui/card';
import { nanoid } from 'nanoid';
import Typography from '../typography';

const content: { title: string, content: string }[] = [
    {
        title: 'LEARN',
        content: 'Get Knowledge & Skill'
    },
    {
        title: 'GROW',
        content: 'Be a Subject Matter Expert'
    },
    {
        title: 'SUCCEED',
        content: 'Be Successful in Your Career'
    },
]

const HighlightPan = () => {
    return (

        <Card className=' bg-primary-foreground rounded-2xl p-3 flex items-center justify-around  '>
            {
                content.map((item) => {
                    return <div key={nanoid()} className='border-r border-primary w-full last:border-r-0 flex items-center justify-center h-32 pr-5 flex-col gap-3'>
                        <Typography as="h2" className='text-primary'>
                            {item.title}
                        </Typography>
                        <Typography as="lable" className='text-muted-foreground'>
                            {item.content}
                        </Typography>

                    </div>
                })
            }
        </Card>

    )
}

export default HighlightPan