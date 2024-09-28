'use client'

import CriteriaCard from '@/components/CriteriaCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Evaluate() {
  return (
    <div className='w-full overflow-hidden overscroll-contain p-6 pt-10 2xl:p-14'>
      <div className='flex flex-col gap-6 md:items-start lg:flex-row'>
        <section className='w-full'>
          <div className='flex flex-col'>
            <div className='flex h-14 flex-1 items-start justify-between rounded-t-3xl bg-[#FFFFFF48] p-2 max-md:h-auto max-md:flex-col max-md:py-2 md:items-center'>
              <span className='whitespace-nowrap rounded-full bg-[#FFFFFF] px-2.5 py-[2px] font-medium text-[#3D404B] max-lg:text-sm'>
                IB Economic Paper IA2 .pdf
              </span>
              <div className='flex items-center justify-between max-md:w-full max-md:py-1'>
                <div className='flex items-center justify-between space-x-4 max-md:w-full'>
                  <div>
                    <div className='flex gap-1.5'>
                      <Image src='/images/zoom-out.svg' alt='Zoom Out' width={20} height={20} />

                      <span className='text-[#5B6170]'>60%</span>

                      <Image src='/images/zoom-in.svg' alt='Zoom In' width={20} height={20} />
                    </div>
                  </div>

                  <div className='flex space-x-4'>
                    <div className='rounded-full bg-[#FCFBFD] p-1'>
                      <Image src='/images/fullscreen.svg' alt='Fullscreen' width={20} height={20} />
                    </div>

                    <div className='flex items-center gap-1 rounded-full bg-[#FCFBFD] p-1 pr-3'>
                      <Image src='/images/collapse.svg' alt='Collapse' width={20} height={20} />
                      <span className='text-sm font-medium text-[#5B6170]'>Collapse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='max-h-screen overflow-hidden overscroll-none rounded-b-3xl bg-[#FFFFFF] p-6'>
              <div className='h-screen overflow-y-hidden overscroll-none rounded-2xl px-6 py-8 text-sm text-[#5B6170] shadow-md transition-colors duration-300 hover:text-black md:text-base'>
                {
                  "It was always the Monday mornings. It never seemed to happen on Tuesday morning, Wednesday morning, or any other morning during the week. But it happened every Monday morning like clockwork. He mentally prepared himself to once again deal with what was about to happen, but this time he also placed a knife in his pocket just in case. Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin. It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case. The deadline had arrived and the project remained unfinished."
                }
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-3.5 sm:w-full lg:w-7/12'>
          {/* Overall score */}
          <div className='flex items-center justify-between rounded-2xl bg-[#FFFFFF] p-3 pl-6'>
            <div>
              <p className='text-sm font-medium leading-4 text-[#3D404B]'>Overall Score</p>
              <h2 className='text-base font-bold leading-7 md:text-xl'>
                Remark : <span className='text-[#3CC28A]'>Good</span>
              </h2>
              <p className='text-xs font-normal leading-3 text-[#98A1BB]'>
                Evaluated on 12 jul 2024
              </p>
            </div>

            <div></div>

            <div className='flex size-20 items-center justify-center'>
              <CircularProgressbar
                value={(13 / 20) * 100}
                strokeWidth={9}
                text='13/20'
                className='font-bold'
                styles={buildStyles({
                  textSize: '24px',
                  textColor: '#1E2026',
                  trailColor: '#EAF0F2',
                  pathColor: '#3CC28A',
                })}
              />
            </div>
          </div>

          {/* Criteria */}
          <div className='space-y-2'>
            <CriteriaCard
              title='A'
              criteria='Understading Knowledge Questions'
              givenScore={8}
              totalScore={10}
            />

            <CriteriaCard
              title='B'
              criteria='Understading Knowledge Questions'
              givenScore={5}
              totalScore={10}
            />

            <CriteriaCard
              title='C'
              criteria='Understading Knowledge Questions'
              givenScore={3}
              totalScore={10}
            />
          </div>
          <Button className='flex w-fit rounded-full bg-white px-4 font-semibold text-[#6947BF] hover:bg-white hover:shadow-md'>
            Check detailed Evaluation
            <Image
              src='/images/arrowRight.svg'
              alt='Check Evaluation'
              height={20}
              width={20}
              className='ml-2'
            />
          </Button>
        </section>
      </div>
    </div>
  )
}
