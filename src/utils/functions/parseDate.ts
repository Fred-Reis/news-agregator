const cardOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const filterOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

export function parseDate(date: string, from: "card" | "filter" = "card") {
  const parsedDate = new Intl.DateTimeFormat(
    "en-US",
    from === "card" ? cardOptions : filterOptions
  ).format(new Date(date));

  return parsedDate;
}
