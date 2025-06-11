import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/@/components/ui/select"
import { Input } from '@/@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext'
export default function SelectOption() {
     const {userCourseInput,setUserCourseInput}=useContext(UserInputContext)
      
            const handleInputChange=(fieldName,value)=>{
                setUserCourseInput(prev=>({
                  ...prev,
                  [fieldName]:value
                }))
            }
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className='text-sm'>🕵️‍♂️Difficulty Level</label>
                    <Select onValueChange={(value)=>handleInputChange('level',value)}
                        dafaultValue={userCourseInput?.level}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <label className='text-sm'>🕖Course Duration</label>
                    <Select 
                    dafaultValue={userCourseInput?.duration}
                     onValueChange={(value)=>handleInputChange('duration',value)}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hours">1 Hours</SelectItem>
                            <SelectItem value="2 Hourse ">2 Hourse </SelectItem>
                            <SelectItem value="More than 3 Hourse">More than 3 Hourse</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <label className='text-sm'>📺Add Video</label>
                    <Select onValueChange={(value)=>handleInputChange('displayVideo',value)}
                        dafaultValue={userCourseInput?.displayVideo}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No </SelectItem>
               
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <label className='text-sm'>No of Chapters</label>
                    <Input type="number" className="h-14 text-lg"
                    dafaultValue={userCourseInput?.noOfChapter}
                        onChange={(e)=>handleInputChange('noOfChapter',e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
