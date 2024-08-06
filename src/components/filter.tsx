"use client";

import { useState } from "react";

import { FilterIcon } from "lucide-react";

import useCheckHandler from "@/hooks/useCheckHandler";
import { FilterItemProps } from "@/@types/filter";
import useFilterStore from "@/store/filterStore";
import { FilterItem } from "@/components";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    dates,
    handleSetDatesList,
    categories,
    handleSetCategoriesList,
    sources,
    handleSetSourcesList,
  } = useFilterStore();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckDates = useCheckHandler({
    items: dates,
    updateItems: handleSetDatesList,
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
    <div className="w-full min-w-52 h-10 rounded-md text-base ring-2 outline-none bg-slate-100 ring-[#59b0d7]">
      <div className="relative">
        <button
          type="button"
          className="w-full flex justify-between px-4 py-2 text-slate-400 outline-none rounded-lg text-md items-center"
          onClick={toggleDropdown}
        >
          Filter By
          <FilterIcon className="w-5 h-5 text-[#59b0d7]" />
        </button>

        {isOpen && (
          <div className="absolute flex flex-col h-80 right-0 mt-2 w-full rounded-lg border-2 bg-[#fff] border-[#59b0d7] overflow-scroll">
            <ul aria-orientation="vertical" aria-labelledby="options-menu">
              <span className="flex px-4 py-1 text-slate-600 font-semibold">
                Date
              </span>

              {dates.map((date: FilterItemProps) => (
                <FilterItem
                  key={date.value}
                  value={date.value}
                  action={handleCheckDates}
                  checked={date.checked}
                  category={"date"}
                />
              ))}
            </ul>

            <ul aria-orientation="vertical" aria-labelledby="options-menu">
              <span className="flex px-4 py-1 text-slate-600 font-semibold">
                Category
              </span>

              {categories.map((category: FilterItemProps) => (
                <FilterItem
                  key={category.value}
                  value={category.value}
                  action={handleCheckCategories}
                  checked={category.checked}
                  category={"category"}
                />
              ))}
            </ul>

            <ul aria-orientation="vertical" aria-labelledby="options-menu">
              <span className="flex px-4 py-1 text-slate-600 font-semibold">
                Source
              </span>

              {sources.map((source: FilterItemProps) => (
                <FilterItem
                  key={source.value}
                  value={source.value}
                  action={handleCheckSources}
                  checked={source.checked}
                  category={"source"}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
