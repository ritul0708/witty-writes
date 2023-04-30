export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: '2-digit'
  });
  return date;
};

export const makeCategory = (slug: string):string => {
  if (typeof slug === 'string') {
    return slug.split('-').join(' ');
  }
  return '';
}

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (func: (query: string) => void, timeout=300) => {
  let timer: NodeJS.Timeout;

  const setDebounce = (...args: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  };
  return setDebounce;
}