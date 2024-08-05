const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function parseDate(date: string) {
  const parsedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );

  return parsedDate;
}
