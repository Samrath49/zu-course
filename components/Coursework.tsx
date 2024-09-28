import Link from 'next/link'
import CourseworkCard from './CourseworkCard'

export default function Coursework() {
  return (
    <section className='flex w-full flex-col gap-2'>
      {/* Heading */}
      <h2 className='mb-4 text-xl font-medium text-[#5B6170]'>My coursework</h2>

      {/* Boxes */}
      <div className='flex gap-4 max-sm:flex-col'>
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
          content='How does the temperature of a Copper pipe affect the time it takes a magnet to'
          subject='Physics HL'
          readingTime='18'
          wordCount='2388'
          language='English'
          rating='7'
          gradientColor='#D8E3F4'
        />
      </div>

      {/* Bottom */}
      <div className='mt-4 text-center'>
        <Link href='#' className='text-[#98A1BB]' prefetch={true}>
          View all
        </Link>
      </div>
    </section>
  )
}
