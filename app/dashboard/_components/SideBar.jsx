"use client"
import Image from 'next/image';
import React from 'react';
import { BiHome } from "react-icons/bi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { AiOutlinePoweroff } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/@/components/ui/progress';





export default function SideBar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <BiHome />,
      path: '/dashboard'
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: '/dashboard/explore'
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <IoShieldCheckmarkOutline />,
      path: '/dashboard/upgrade'
    },
    {
      id: 4,
      name: "Logout",
      icon: <AiOutlinePoweroff />,
      path: '/dashboard/logout'
    }
  ];
  const path=usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src="/logo.png" alt="Logo" width={150} height={100} />
      <hr className="my-5" />
      <ul>
        {Menu.map((item) => (
            <Link href={item.path}>
          <div
            key={item.id}
            className={`flex items-center gap-2 text-gray-600 p-3 
            cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2
             ${item.path==path&&'bg-gray-100 text-black'}`}
          >
            <div className="text-2xl">{item.icon}</div>
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))}
      </ul>
      <div className='absolute bottom-10 w-[80%]'>
       <Progress value={33}/>
       <h2 className='text-sm my-2'>3 out of 5 courses created</h2>
       <h2 className='text-xs text-gray-500'>Upgrade your plane for unlimited course generation</h2>
      </div>
    </div>
  );
}
