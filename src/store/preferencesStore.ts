import { create } from "zustand";

import { FilterItemProps } from "@/@types/filter";

interface UserStoreProps {
  categories: FilterItemProps[];
  sources: FilterItemProps[];
  authors: FilterItemProps[];
  handleSetCategoriesList: (value: FilterItemProps[]) => void;
  handleSetSourcesList: (value: FilterItemProps[]) => void;
  handleSetAuthorsList: (value: FilterItemProps[]) => void;
}

const usePreferencesStore = create<UserStoreProps>((set) => ({
  categories: [],
  sources: [],
  authors: [],

  handleSetCategoriesList: (value: FilterItemProps[]) =>
    set({ categories: value }),
  handleSetSourcesList: (value: FilterItemProps[]) => set({ sources: value }),
  handleSetAuthorsList: (value: FilterItemProps[]) => set({ authors: value }),
}));

export default usePreferencesStore;
