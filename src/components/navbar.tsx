"use client";

import { Chips, Collapsible } from "@/components";

import usePreferencesStore from "@/store/preferencesStore";
import useCheckHandler from "@/hooks/useCheckHandler";
import { FilterItemProps } from "@/@types/filter";

export const Navbar = () => {
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
    <nav className="z-20 relative hidden lg:flex justify-between w-full p-3 bg-slate-200 ">
      <div className="flex flex-1 items-center justify-evenly max-w-[1400px] m-auto">
        <Collapsible title="Sources">
          {sources.map((source: FilterItemProps) => (
            <Chips
              key={source.value}
              value={source.value}
              checked={source.checked}
              category={"source"}
              action={handleCheckSources}
            />
          ))}
        </Collapsible>

        <Collapsible title="Categories">
          {categories.map((category: FilterItemProps) => (
            <Chips
              key={category.value}
              value={category.value}
              checked={category.checked}
              category={"category"}
              action={handleCheckCategories}
            />
          ))}
        </Collapsible>

        <Collapsible title="Authors">
          {authors.map((author: FilterItemProps) => (
            <Chips
              key={author.value}
              value={author.value}
              checked={author.checked}
              category={"author"}
              action={handleCheckAuthors}
            />
          ))}
        </Collapsible>
      </div>
    </nav>
  );
};
