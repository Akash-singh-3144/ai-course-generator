import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src={'/logo.png'} width={50} height={50} />
        <UserButton/>
    </div>
  )
}
