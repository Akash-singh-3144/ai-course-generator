import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from 'next/image';

export default function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader>
        
          <AlertDialogDescription>
          <div className='flex flex-col items-center py-10'>
             <Image src="/business-development.gif" width={100} height={100} />
           <h2>please wait... Ai Working on your course</h2>
          </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
       
      </AlertDialogContent>
    </AlertDialog>
  );
}
