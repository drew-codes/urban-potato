export const formatDuration = (duration: string) => {
  const regex = /PT(\d+H)?(\d+M)?/;
  const matches = duration.match(regex);

  const hours = matches?.[1] ? matches[1].slice(0, -1) : "0";
  const minutes = matches?.[2] ? matches[2].slice(0, -1) : "00";

  const paddedMinutes = minutes.padStart(2, "0");

  return `${hours}h${paddedMinutes}m`;
};
