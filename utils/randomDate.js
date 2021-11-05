import moment from "moment";

// RANDOM DATETIME AND CONVERT
export const randomDate = () => {
  const start = new Date(2021, 10, 11);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return moment(randomDate).endOf('day').fromNow();
}