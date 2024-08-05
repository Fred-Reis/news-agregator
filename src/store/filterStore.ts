import { create } from "zustand";

interface ValueProps {
  value: string;
  checked: boolean;
}

interface UserStoreProps {
  categories: ValueProps[];
  sources: ValueProps[];
  dates: ValueProps[];
  handleSetCategoriesList: (value: ValueProps[]) => void;
  handleSetSourcesList: (value: ValueProps[]) => void;
  handleSetDatesList: (value: ValueProps[]) => void;
}

const useFilterStore = create<UserStoreProps>((set) => ({
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

  dates: [
    { value: "20/03/2023", checked: true },
    { value: "21/03/2023", checked: true },
    { value: "22/03/2023", checked: true },
  ],

  handleSetCategoriesList: (value: ValueProps[]) => set({ categories: value }),
  handleSetSourcesList: (value: ValueProps[]) => set({ sources: value }),
  handleSetDatesList: (value: ValueProps[]) => set({ dates: value }),
}));

export default useFilterStore;
