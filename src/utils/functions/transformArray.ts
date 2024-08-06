export const transformArray = <T>(
  dataArray: T[]
): { value: T; checked: boolean }[] => {
  return dataArray.map((item) => ({
    value: item,
    checked: false,
  }));
};
