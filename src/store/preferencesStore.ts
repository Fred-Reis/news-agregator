import { create } from "zustand";

interface ValueProps {
  value: string;
  checked: boolean;
}

interface UserStoreProps {
  categories: ValueProps[];
  sources: ValueProps[];
  authors: ValueProps[];
  handleSetCategoriesList: (value: ValueProps[]) => void;
  handleSetSourcesList: (value: ValueProps[]) => void;
  handleSetAuthorsList: (value: ValueProps[]) => void;
}

const usePreferencesStore = create<UserStoreProps>((set) => ({
  categories: [
    { value: "Health", checked: true },
    { value: "Technology", checked: true },
    { value: "Cook", checked: true },
  ],

  sources: [
    { value: "wired", checked: true },
    { value: "BBC", checked: true },
    { value: "NYT", checked: true },
  ],

  authors: [
    { value: "John Doe", checked: true },
    { value: "Jane Doe", checked: true },
    { value: "Joe Doe", checked: true },
  ],

  handleSetCategoriesList: (value: ValueProps[]) => set({ categories: value }),
  handleSetSourcesList: (value: ValueProps[]) => set({ sources: value }),
  handleSetAuthorsList: (value: ValueProps[]) => set({ authors: value }),
}));

export default usePreferencesStore;
