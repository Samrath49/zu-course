import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='sticky top-0 flex items-center justify-between bg-[#FFFFFF] p-2 shadow-sm sm:hidden'>
      <div>
        <Link href='/'>
          <Image
            src='/images/zuai-logo.svg'
            alt='ZuAi'
            className='size-full'
            height={50}
            width={65}
          />
        </Link>
      </div>

      <div className='cursor-pointer'>
        <Image src='/images/menu.svg' alt='ZuAi' height={24} width={24} />
      </div>
    </div>
  )
}
