export const getDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const fullDate = `${year}년 ${month}월 ${date}일 ${hour}시 ${minutes}분`;
  return fullDate;
};
