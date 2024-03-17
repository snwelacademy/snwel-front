import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const HighlightedText = ({
    className,
    children
}: {
    className?: string,
    children?: ReactNode
}) => {
  return (
    <span className={cn([
        'underline text-primary',
        className
    ])} >{children}</span>
  )
}

export default HighlightedText