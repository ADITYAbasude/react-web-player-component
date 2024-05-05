export const convertTime = (time?: number): string => {
  if (time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    const convertedTime: string = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return convertedTime;
  }

  return '0';
};
