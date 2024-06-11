export const getCurrentTime = () => {
  const now = new Date();
  let hour = now.getHours().toString();
  let minute = now.getMinutes().toString();

  if (Number(hour) < 10) {
    hour = `0${hour}`;
  }

  if (Number(minute) < 10) {
    minute = `0${minute}`;
  }

  return `${hour}:${minute}`;
};

export const getBlogStatus = (status: 'in-progress' | 'draft' | 'published') => {
  const statusMapper: Record<
    string,
    {
      label: string;
      variant: 'default' | 'destructive' | 'outline' | 'secondary' | null | undefined;
    }
  > = {
    'in-progress': {
      label: 'In progress',
      variant: 'secondary',
    },
    draft: {
      label: 'Draft',
      variant: 'outline',
    },
    published: {
      label: 'Published',
      variant: 'default',
    },
  };

  return statusMapper[status];
};
