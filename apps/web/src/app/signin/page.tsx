import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Signin from '../../components/Signin';
import { authOptions } from '../../lib/auth';

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }
  return <Signin />;
};

export default SigninPage;
