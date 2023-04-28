export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: '2-digit'
  });
  return date;
};