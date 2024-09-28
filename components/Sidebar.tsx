import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <section className='sticky left-0 top-0 h-screen w-20 p-2 max-sm:hidden'>
      <div className='flex h-full flex-col items-center rounded-xl bg-[#F8FAFC] p-2'>
        <div className='flex grow flex-col justify-between'>
          <div>
            {/* ZuAI  */}
            <div className='hover-translate-down rounded-lg pt-2'>
              <Link href='/'>
                <Image
                  className='size-full'
                  src='/images/zuai-logo.svg'
                  alt='ZuAi'
                  width={50}
                  height={44}
                />
              </Link>
            </div>

            {/* Icons  */}
            <div className='flex flex-col items-center justify-center gap-3 pt-3'>
              <Link href='#' className='hover-translate-down'>
                <Image src='/images/dashboard.svg' alt='Dashboard' height={44} width={44} />
              </Link>

              <Link href='#' className='hover-translate-down cursor-not-allowed'>
                <Image src='/images/book.svg' alt='Resources' height={25} width={25} />
              </Link>

              <Link href='#' className='hover-translate-down cursor-not-allowed'>
                <Image src='/images/file.svg' alt='Course Work' height={25} width={25} />
              </Link>

              <Link href='#' className='hover-translate-down cursor-not-allowed'>
                <Image src='/images/quiz.svg' alt='Mock Exam' height={25} width={25} />
              </Link>
            </div>
          </div>

          <div className='hover-translate-up rounded-full border-2 border-[#EAF0F2]'>
            <Link href='#'>
              <Image src='/images/teen.png' alt='User' height={44} width={44} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
