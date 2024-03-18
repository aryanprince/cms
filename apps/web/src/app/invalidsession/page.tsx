'use client';

import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';

const page = () => {
  useEffect(() => {
    signOut({
      callbackUrl: '/signin',
    });
    toast('Too many devices connected. Logging out!', {
      action: {
        label: 'Close',
        onClick: () => console.log('Closed Toast'),
      },
    });
  }, []);

  return (
    <div>
      <Toaster />
    </div>
  );
};

export default page;
