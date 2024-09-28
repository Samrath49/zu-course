'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { z } from 'zod'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from './ui/use-toast'
import { useForm } from 'react-hook-form'

const FormSchema = z.object({
  type: z.string(),
  subject: z.string(),
  title: z.string(),
})

export default function EvaluationForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-4 space-y-7'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none text-[#7A8196] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Select your course & subjects*
            </label>
            <div className='mx-auto flex space-x-4'>
              <FormField
                name='type'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select>
                      <FormControl className='rounded-full text-[#5B6170]'>
                        <SelectTrigger aria-label='Coursework Type'>
                          <SelectValue placeholder='Coursework Type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='type1'>Type 1</SelectItem>
                        <SelectItem value='type2'>Type 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                name='subject'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select>
                      <FormControl className='rounded-full text-[#5B6170]'>
                        <SelectTrigger aria-label='Subject'>
                          <SelectValue placeholder='Subject' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='subject1'>Subject 1</SelectItem>
                        <SelectItem value='subject2'>Subject 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            name='subject'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[#7A8196]'>Enter your essay title*(Required)</FormLabel>
                <FormControl className='rounded-full text-[#7A8196] focus-visible:ring-[#FF4800]'>
                  <Input {...field} placeholder='how nation works...' required />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className='flex max-sm:justify-center'>
          <Button
            type='submit'
            className='flex gap-2 rounded-full bg-[#ADB8C9] p-2 pr-6 hover:bg-[#6947BF] hover:text-white'
          >
            <Image src='/images/evaluate-text.svg' alt='Evaluate' width={24} height={24} />
            <span className='font-semibold text-white'>Evaluate your Score</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
