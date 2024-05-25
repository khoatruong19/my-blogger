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
