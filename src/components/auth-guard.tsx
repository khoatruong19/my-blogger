'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FC } from 'react';

const withAuth = (WrappedComponent: FC): FC => {
  const AuthWrapper: FC = (props) => {
    const { isSignedIn, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && !isSignedIn) {
        router.replace('/sign-in');
      }
    }, [isLoaded, isSignedIn, router]);

    if (!isLoaded || !isSignedIn) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
