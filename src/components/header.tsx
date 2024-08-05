"use client";

import { useState, useCallback } from "react";

import Link from "next/link";

import { Search, Newspaper, Grip } from "lucide-react";

import { Filter, Navbar, SliderMenu } from "@/components";

export const Header = () => {
  const [showSliderMenu, setShowSliderMenu] = useState(false);

  const handleToggleSliderMenu = useCallback(() => {
    setShowSliderMenu((prev) => !prev);
  }, [setShowSliderMenu]);

  return (
    <>
      <header className="z-30 border-b-2 sticky top-0 bg-white">
        <div className="max-w-[1400px] flex flex-col gap-4 lg:flex-row  lg:items-center p-6 sm:px-16 justify-between m-auto min-w-fit">
          <div className="flex items-center justify-between min-w-fit">
            <Link
              href="/"
              className="flex gap-2 items-center font-extrabold text-lg sm:text-2xl md:text-3xl text-[#59b0d7] min-w-fit"
            >
              News Agregator
              <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </Link>
            <button className="lg:hidden" onClick={handleToggleSliderMenu}>
              <Grip className="w-6 h-6 md:w-8 md:h-8 text-[#59b0d7]" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Filter />

            <form className="flex items-center rounded-md bg-slate-100 ring-2 ring-[#59b0d7] px-5 py-2 gap-3 w-full lg:w-[320px]">
              <Search className="w-5 h-5 text-[#59b0d7]" />

              <input
                placeholder="Search"
                className="outline-none flex-1 bg-transparent placeholder:text-gray-400 text-gray-800"
              />
            </form>

            {/* <button
              className="rounded-md text-sm text-[#59b0d7] border-2 border-[#59b0d7] p-2  "
              type="submit"
            >
              Submit
            </button> */}
          </div>
        </div>
      </header>

      <Navbar />

      <SliderMenu
        showSliderMenu={showSliderMenu}
        toggleSliderMenu={handleToggleSliderMenu}
      />
    </>
  );
};
