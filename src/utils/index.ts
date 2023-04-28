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