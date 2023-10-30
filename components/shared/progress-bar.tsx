import { Progress } from '@/components/ui/progress'
import React from 'react'

type Props = {
  percentage: number
  showPercentage?: boolean
}

const ProgressBar = ({ percentage, showPercentage = true }: Props) => {
  return (
    <div className={'w-full'}>
      <Progress value={percentage} max={100} /> {showPercentage ? `${percentage}%` : ''}
    </div>
  )
}
export default ProgressBar
