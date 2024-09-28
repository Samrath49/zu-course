'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  courseworkType: z.string(),
  courseworkSubject: z.string(),
  courseTitle: z.string(),
})

export default function Hero() {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values)
    router.push('/evaluate')
  }

  return (
    <section className='flex flex-col items-end gap-2 md:flex-row md:space-x-8'>
      <div className='flex flex-1 flex-col justify-between space-y-4'>
        <h1 className='text-xl font-bold md:text-2xl lg:text-3xl'>
          Hey IB Folks! Unsure about the quality of your answers?{' '}
          <span className='text-[#6947BF]'>We get you.</span>
        </h1>
        <div className='h-max rounded-xl bg-[#f5f7fa] p-5'>
          <div className='rounded-lg border-2 border-dashed border-[#CEC4EB] bg-[#fcfbfd] p-8 text-center'>
            <div className='mx-auto w-44'>
              <Image
                src='/images/upload-file.svg'
                alt='Upload File'
                width={30}
                height={38}
                className='mx-auto pb-2'
              />

              <div className='flex flex-col justify-center text-[#7A8196]'>
                <p className='font-medium'>Drag and drop a PDF</p>
                <p className='text-xs'>
                  <span className='-mt-2 mr-[1px]'>*</span>Limit 25 MB per file.
                </p>
              </div>

              <div className='flex cursor-pointer items-center justify-center'>
                <Button
                  variant='outline'
                  className='mt-4 w-full rounded-full border-[#CEC4EB] font-bold text-[#6947BF] shadow-2xl shadow-[#CEC4EB] hover:text-[#6947BF]'
                >
                  Upload your file
                </Button>
              </div>
            </div>
          </div>

          <div className='mt-4 gap-4 space-y-7'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <div className='space-y-2.5'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-[#7A8196]'>Select your course & subjects*</FormLabel>
                    <div className='flex gap-5'>
                      <FormField
                        control={form.control}
                        name='courseworkType'
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl className='rounded-full py-2 pl-4 pr-3 font-medium text-[#5B6170]'>
                                <SelectTrigger className='bg-white' aria-label='Coursework Type'>
                                  <SelectValue
                                    className='font-semibold'
                                    placeholder='Coursework Type'
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className='font-medium text-[#5B6170]'>
                                <SelectItem value='course1'>Course 1</SelectItem>
                                <SelectItem value='course2'>Course 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='courseworkSubject'
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl className='rounded-full py-2 pl-4 pr-3 font-medium text-[#5B6170]'>
                                <SelectTrigger className='bg-white' aria-label='Subject'>
                                  <SelectValue placeholder='Subject' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className='font-medium text-[#5B6170]'>
                                <SelectItem value='mathematics'>Mathematics</SelectItem>
                                <SelectItem value='science'>Science</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name='courseTitle'
                    render={({ field }) => (
                      <FormItem className='space-y-0.5'>
                        <FormLabel className='border-none text-[#7A8196]'>
                          Enter your essay title*(Required)
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='rounded-full bg-white !placeholder-[#C1CCD6] focus-visible:ring-[#FF4800] sm:w-auto lg:w-72'
                            placeholder='how nation works.....'
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex max-sm:justify-center'>
                  <Button
                    type='submit'
                    className='flex w-full gap-2 rounded-full bg-[#ADB8C9] p-2 pr-6 hover:bg-[#6947BF] hover:text-white md:w-52'
                  >
                    <Image src='/images/evaluate-text.svg' alt='Evaluate' width={24} height={24} />
                    <span className='font-semibold text-white'>Evaluate your Score</span>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className='max-lg:hidden md:w-72'>
        <Image
          src='/images/frame.png'
          alt='Evaluate your coursework with a single click'
          width={290}
          height={528}
          className='mx-auto'
        />
      </div>
    </section>
  )
}
