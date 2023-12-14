export const calcProgressPerc = (a: string, b: string) => {
  const div = Number(a) / Number(b);
  return Number(div) * 100;
};

export const calcCurationPerc = (start: string, end: string) => {
  const now = new Date().getTime() / 1000;
  const yeetDuration = Number(end) - Number(start);
  const currentDuration = Number(end) - Number(now);

  return (currentDuration / yeetDuration) * 100;
};

export const calcYeetIsActive = (start: string, end: string) => {
  const now = new Date().getTime() / 1000;

  return Number(start) < now && Number(end) > now;
};

export const calcYeetIsEnded = (end: string) => {
  const now = new Date().getTime() / 1000;

  return Number(end) < now;
};

export const calcYeetIsComingSoon = (start: string) => {
  const now = new Date().getTime() / 1000;

  return Number(start) > now;
};
