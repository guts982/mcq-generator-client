import Divider from '@/components/Divider'
import InputSection from '@/components/InputSection'
import OutputSection from '@/components/OutputSection'

export default function HomePage() {
  return (
   <div className='bg-slate-100 min-h-screen w-screen
   flex justify-start items-center   flex-col
   '>
      <h1 className='text-white bg-black w-full text-center py-4  2xl:py-10 font-montserrat font-semibold text-lg  2xl:text-2xl'>MCQ Generator (Powered by OpenAI)</h1>
    
      <InputSection />
      <Divider />
      <OutputSection />

   </div>
  )
}
