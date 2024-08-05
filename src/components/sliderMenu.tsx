import { PanelRightClose } from "lucide-react";
import { twMerge } from "tailwind-merge";

import usePreferencesStore from "@/store/preferencesStore";
import { Collapsible, SliderItem } from "@/components";
import useCheckHandler from "@/hooks/useCheckHandler";
import { FilterItemProps } from "@/@types/filter";

interface SliderProps {
  toggleSliderMenu: () => void;
  showSliderMenu: boolean;
}

export const SliderMenu = ({
  toggleSliderMenu,
  showSliderMenu,
}: SliderProps) => {
  const {
    authors,
    handleSetAuthorsList,
    categories,
    handleSetCategoriesList,
    sources,
    handleSetSourcesList,
  } = usePreferencesStore();

  const handleCheckAuthors = useCheckHandler({
    items: authors,
    updateItems: handleSetAuthorsList,
    valueKey: "value",
    checkedKey: "checked",
  });

  const handleCheckCategories = useCheckHandler({
    items: categories,
    updateItems: handleSetCategoriesList,
    valueKey: "value",
    checkedKey: "checked",
  });

  const handleCheckSources = useCheckHandler({
    items: sources,
    updateItems: handleSetSourcesList,
    valueKey: "value",
    checkedKey: "checked",
  });

  return (
    <aside
      id="nav"
      className={twMerge(
        "w-80 -right-80 fixed z-40 h-full p-4 pt-14 transform transition-transform ease-in duration-150 bg-slate-100 shadow-2xl font-medium border-l-4",
        !showSliderMenu ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <button className="absolute right-5 top-5" onClick={toggleSliderMenu}>
        <span aria-hidden="true">
          <PanelRightClose className="text-slate-600" />
        </span>
      </button>

      <h3 className="text-slate-600 font-semibold mb-4">Preferences</h3>

      <Collapsible title="Sources">
        <ul className="w-full flex flex-1 flex-col">
          {sources.map((source: FilterItemProps) => (
            <SliderItem
              key={source.value}
              action={handleCheckSources}
              checked={source.checked}
              value={source.value}
              category="source"
            />
          ))}
        </ul>
      </Collapsible>
      <Collapsible title="Categories">
        <ul className="w-full flex flex-1 flex-col">
          {categories.map((category: FilterItemProps) => (
            <SliderItem
              key={category.value}
              action={handleCheckCategories}
              checked={category.checked}
              value={category.value}
              category="category"
            />
          ))}
        </ul>
      </Collapsible>
      <Collapsible title="Authors">
        <ul className="w-full flex flex-1 flex-col">
          {authors.map((author: FilterItemProps) => (
            <SliderItem
              key={author.value}
              action={handleCheckAuthors}
              checked={author.checked}
              value={author.value}
              category="author"
            />
          ))}
        </ul>
      </Collapsible>
    </aside>
  );
};
