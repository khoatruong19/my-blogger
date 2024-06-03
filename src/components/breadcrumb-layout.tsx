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
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const BreadCrumbLayout = ({ children }: PropsWithChildren) => {
  const paths = usePathname();
  const params = useParams();

  const paramValues = Object.values(params);

  const pathNames = paths.split('/').filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join('/'),
  }));

  const isParam = (value: string) => paramValues.includes(value);

  return (
    <>
      <Breadcrumb className='mb-5'>
        <BreadcrumbList className='text-lg font-medium capitalize'>
          {pathItems.map((item, idx) => (
            <>
              {idx === pathItems.length - 1 || isParam(item.name) ? (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbPage
                      className={cn({
                        'font-bold': !isParam(item.name),
                      })}
                    >
                      {item.name}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  {isParam(item.name) && <BreadcrumbSeparator />}
                </>
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
