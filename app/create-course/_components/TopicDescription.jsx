import { Input } from '@/@/components/ui/input'
import { Textarea } from '@/@/components/ui/textarea'
import { UserInputContext } from '@/app/_context/UserInputContext'
import React, { useContext } from 'react'

export default function TopicDescription() {
      const {userCourseInput,setUserCourseInput}=useContext(UserInputContext)
  
        const handleInputChange=(fieldName,value)=>{
            setUserCourseInput(prev=>({
              ...prev,
              [fieldName]:value
            }))
        }
  return (
    <div className='mx-20 lg:mx-44'>
      {/* input topic */}
        <div className='mt-5'>
            <label>⛳Write a topic for which you want to generate a course (e.g.,python Course,yoga ,etc);</label>
            <Input placeholder={'Topic'} className="h-14 text-xl"
            dafaultValue={userCourseInput?.topic}
            onChange={(e)=>handleInputChange('topic',e.target.value)}/>
        </div>
        <div className='mt-5'>
            <label>💆Tell us more about your course,what you want to include in thee (optional)</label>
            <Textarea placeholder="About your course"
            dafaultValue={userCourseInput?.description} className="h-24 text-xl"
            onChange={(e)=>handleInputChange('description',e.target.value)}/>
        </div>
      {/* text area for the description */}
    </div>
  )
}
