import { cn } from '@/lib/utils'

const HeadingSubtitle = ({
    className,
    title
}: {
    className?: string,
    title: string
}) => {
  return (
    <span 
    className={cn([
        `heading-subtitle text-primary-foreground before:bg-primary-foreground after:bg-primary-foreground mb-5 tracking-widest text-xs md:text-base text-center`,
        className
    ])}
    >{title}</span>
  )
}

export default HeadingSubtitle