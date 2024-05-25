export const getCurrentTime = () => {
  const now = new Date();
  const hour = now.getHours().toString();
  let minute = now.getMinutes().toString();

  if (Number(minute) < 10) {
    minute = `0${minute}`;
  }

  return `${hour}:${minute}`;
};
