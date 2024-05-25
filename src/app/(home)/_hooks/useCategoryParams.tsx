import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CATEGORIES, CATEGORY_QUERY } from '../constants';

const useCategoryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get(CATEGORY_QUERY);

  const handleAddCategoryParams = (category: string) => {
    const searchParams = new URLSearchParams({
      [CATEGORY_QUERY]: category,
    });
    router.push(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    if (category) return;

    handleAddCategoryParams(CATEGORIES[0].path);
  }, [category]);

  return { category, handleAddCategoryParams };
};

export default useCategoryParams;
