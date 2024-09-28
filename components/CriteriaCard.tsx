import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function CriteriaCard({
  title,
  criteria,
  givenScore,
  totalScore,
}: {
  title: string
  criteria: string
  givenScore: number
  totalScore: number
}) {
  const [isOpen, setIsOpen] = useState(false)
  const percent = (givenScore / totalScore) * 100
  const color = percent === 50 ? '#F9C94E' : percent > 50 ? '#3CC28A' : '#EB751F'

  return (
    <div
      className='rounded-2xl bg-[#FFFFFF] p-3 hover:cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex items-center justify-between gap-3 rounded-2xl bg-[#FFFFFF] p-3'>
        <div className='flex items-center gap-2'>
          <div className='flex size-16 items-center justify-center'>
            <CircularProgressbar
              value={percent}
              strokeWidth={9}
              text={`${givenScore}/${totalScore}`}
              className='font-semibold'
              styles={buildStyles({
                textSize: '24px',
                textColor: '#1E2026',
                trailColor: '#EAF0F2',
                pathColor: color,
              })}
            />
          </div>
          <div>
            <p className='text-sm font-medium leading-4 text-[#98A1BB]'>Criteria {title}:</p>
            <p className='md:text-md text-sm font-semibold text-[#3D404B]'>{criteria}</p>
          </div>
        </div>

        <Image
          src='/images/arrowdown.svg'
          alt='Dropdown'
          height={20}
          width={20}
          className={cn('min-h-full transition-all duration-300 ease-in-out hover:cursor-pointer', {
            'origin-center rotate-180': isOpen,
          })}
        />
      </div>

      <div>
        {isOpen && (
          <div
            className={`overflow-hidden border-t-[1px] border-[#D6DFE4] p-2 transition-all duration-300 ${
              isOpen ? 'animate-slide-down opacity-100' : 'animate-slide-up opacity-0'
            }`}
          >
            <p className='text-sm leading-4 text-[#5B6170]'>
              The essay identifies and focuses on the knowledge question regarding the resolvability
              of disputes over knowledge claims within disciplines.
            </p>

            <div className='space-y-2 pt-2'>
              <h2 className='text-lg font-bold'>Strengths</h2>
              <ul className='list-checkmark text-sm md:text-base'>
                <li>
                  Demonstrates a good understanding of the prescribed title and the associated
                  knowledge questions.
                </li>
                <li>
                  Addresses the nature of disputes in both the Natural Sciences and Human Sciences
                  effectively.
                </li>
              </ul>
            </div>

            <div className='space-y-2 pt-2'>
              <h2 className='text-lg font-bold'>Scope of Improvement</h2>
              <ul className='list-warning text-sm md:text-base'>
                <li>
                  Demonstrates a good understanding of the prescribed title and the associated
                  knowledge questions.
                </li>
                <li>
                  Addresses the nature of disputes in both the Natural Sciences and Human Sciences
                  effectively.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
