"use client";
import { Button } from '@/@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react';
import { HiMiniSquares2X2, HiLightBulb, HiClipboardDocumentCheck } from "react-icons/hi2";

import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';

export default function CreateCourse() {
  const stepperOptions = [
    { id: 1, name: 'Category', icon: <HiMiniSquares2X2 /> },
    { id: 2, name: 'Topic & Desc', icon: <HiLightBulb /> },
    { id: 3, name: 'Options', icon: <HiClipboardDocumentCheck /> }
  ];

  const [loading, setLoading] = useState(false);
  const { userCourseInput } = useContext(UserInputContext);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log("userCourseInput", userCourseInput);
  }, [userCourseInput]);

  const checkStatus = () => {
    if (!userCourseInput || Object.keys(userCourseInput).length === 0) return true;

    if (activeIndex === 0 && !userCourseInput.category?.trim()) return true;
    if (activeIndex === 1 && !userCourseInput.topic?.trim()) return true;
    if (activeIndex === 2) {
      const { level, duration, displayVideo, noOfChapter } = userCourseInput;
      return (
        level === undefined ||
        duration === undefined ||
        displayVideo === undefined ||
        noOfChapter === undefined
      );
    }

    return false;
  };

  const generateCourseLayout = async () => {
    setLoading(true);

    const BASIC_PROMPT = 'Generate a course tutorial with fields: Course Name, Description, Chapter Name, About, Duration.\n';
    const USER_INPUT_PROMPT = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic}, Level: ${userCourseInput?.level}, Duration: ${userCourseInput?.duration}, No. of Chapters: ${userCourseInput?.noOfChapter}`;
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;

    try {
      const res = await fetch('/api/generate-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: FINAL_PROMPT })
      });

      const data = await res.json();
      console.log("Generated Layout:", data.result);
    } catch (error) {
      console.error("Error generating content:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Steppers */}
      <div className='flex flex-col justify-center items-center mt-10'>
        <h2 className='text-4xl text-indigo-600 font-medium'>Create Course</h2>
        <div className='flex mt-10'>
          {stepperOptions.map((items, index) => (
            <div className='flex items-center' key={items.id}>
              <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                <div className={`bg-gray-200 p-3 rounded-b-full text-white ${activeIndex > index - 1 && 'bg-indigo-600'}`}>
                  {items.icon}
                </div>
                <h2 className='hidden md:block md:text-sm'>{items.name}</h2>
              </div>
              {index !== stepperOptions.length - 1 &&
                <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${activeIndex - 1 >= index && 'bg-indigo-600'}`}></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Component Body */}
      <div className='px-10 md:px-20 lg:px-44 mt-10'>
        {activeIndex === 0 ? <SelectCategory /> :
          activeIndex === 1 ? <TopicDescription /> : <SelectOption />}

        {/* Navigation Buttons */}
        <div className='flex justify-between mt-10'>
          <Button
            disabled={activeIndex === 0}
            variant='outline'
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>

          {activeIndex < 2 && (
            <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>
              Next
            </Button>
          )}

          {activeIndex === 2 && (
            <Button disabled={checkStatus()} onClick={generateCourseLayout}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
