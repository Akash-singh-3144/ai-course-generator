
import { Button } from '@/@/components/ui/button';
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      
        <Image src="/logo.png" width={150} height={100} alt="Logo" />
        <Button>GET STARTED</Button>
      
    </div>
  );
}
