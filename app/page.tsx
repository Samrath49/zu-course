import Coursework from '@/components/Coursework'
import ExploreCoursework from '@/components/ExploreCoursework'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='mx-auto flex w-full flex-col space-y-8 overflow-x-hidden p-5 md:p-12 2xl:p-48'>
      <Hero />
      <Coursework />
      <ExploreCoursework />
    </main>
  )
}
