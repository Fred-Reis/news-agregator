import { useCallback } from "react";

type ToggleHandlerParams<T> = {
  items: T[];
  updateItems: (items: T[]) => void;
  valueKey: keyof T;
  checkedKey: keyof T;
};

const useToggleHandler = <T>({
  items,
  updateItems,
  valueKey,
  checkedKey,
}: ToggleHandlerParams<T>) => {
  const handleToggle = useCallback(
    (value: any) => {
      const updatedItems = items.map((item) =>
        item[valueKey] === value
          ? { ...item, [checkedKey]: !(item[checkedKey] as unknown as boolean) }
          : item
      );
      updateItems(updatedItems);
    },
    [items, updateItems, valueKey, checkedKey]
  );

  return handleToggle;
};

export default useToggleHandler;
