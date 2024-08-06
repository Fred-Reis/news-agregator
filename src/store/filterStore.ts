import { create } from "zustand";

import { FilterItemProps } from "@/@types/filter";

interface UserStoreProps {
  categories: FilterItemProps[];
  sources: FilterItemProps[];
  dates: FilterItemProps[];
  handleSetCategoriesList: (value: FilterItemProps[]) => void;
  handleSetSourcesList: (value: FilterItemProps[]) => void;
  handleSetDatesList: (value: FilterItemProps[]) => void;
}

const useFilterStore = create<UserStoreProps>((set) => ({
  categories: [],
  sources: [],
  dates: [],

  handleSetCategoriesList: (value: FilterItemProps[]) =>
    set({ categories: value }),
  handleSetSourcesList: (value: FilterItemProps[]) => set({ sources: value }),
  handleSetDatesList: (value: FilterItemProps[]) => set({ dates: value }),
}));

export default useFilterStore;
