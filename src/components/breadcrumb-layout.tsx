'use client';

import { PropsWithChildren } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

const BreadCrumbLayout = ({ children }: PropsWithChildren) => {
  const paths = usePathname();

  const pathNames = paths.split('/').filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join('/'),
  }));

  return (
    <>
      <Breadcrumb className='mb-5'>
        <BreadcrumbList className='text-lg capitalize font-medium'>
          {pathItems.map((item, idx) => (
            <>
              {idx === pathItems.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage className='font-bold'>{item.name}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem key={item.path}>
                    <BreadcrumbLink href={`/${item.path}`}>{item.name}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </>
  );
};

export default BreadCrumbLayout;
