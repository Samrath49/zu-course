'use client'

import { Button } from '@/components/ui/button'
import { exploreCourseWorkLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import CourseworkCard from './CourseworkCard'

export default function ExploreCoursework() {
  const [currentCourseworkType, setCurrentCourseworkType] = useState<string | undefined>(
    exploreCourseWorkLinks.at(0)
  )

  return (
    <section>
      <h2 className='mb-4 text-xl font-medium text-[#5B6170]'>Explore coursework</h2>
      <div className='mb-4 flex flex-wrap'>
        {exploreCourseWorkLinks.map((courseworkLink, idx) => {
          const isActive = currentCourseworkType === courseworkLink
          return (
            <Button
              key={idx}
              variant='link'
              onClick={() => setCurrentCourseworkType(courseworkLink)}
              className={cn(
                'font-semibold text-[#98A1BB] transition-all ease-in hover:no-underline',
                {
                  'rounded-2xl bg-[#FFFFFF] font-bold text-[#6947BF]': isActive,
                }
              )}
            >
              {courseworkLink}
            </Button>
          )
        })}
      </div>
      <div className='grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
        <CourseworkCard
          content='How does the temperature of a Copper pipe affect the time it takes a magnet to'
          subject='Physics HL'
          readingTime='18'
          wordCount='2388'
          language='English'
          rating='7'
          gradientColor='#E9D8F4'
        />

        <CourseworkCard
          content='How does the temperature of a Copper pipe affect the time it takes a magnet to'
          subject='Physics HL'
          readingTime='18'
          wordCount='2388'
          language='English'
          rating='7'
          gradientColor='#F4EAD8'
        />

        <CourseworkCard
          readingTime='18'
          subject='Physics HL'
          wordCount='2388'
          language='English'
          rating='7'
          content='How does the temperature of a Copper pipe affect the time it takes a magnet to'
          gradientColor='#F4EAD8'
        />

        <CourseworkCard
          content='How does the temperature of a Copper pipe affect the time it takes a magnet to'
          subject='Physics HL'
          readingTime='18'
          wordCount='2388'
          language='English'
          rating='7'
          gradientColor='#D8E3F4'
        />
      </div>
    </section>
  )
}
