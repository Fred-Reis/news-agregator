"use client";

import { useState } from "react";

import { Plus, Minus } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface CollapsibleProps {
  children?: React.ReactNode;
  title: string;
}

export const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={twMerge(
          "flex p-4 lg:p-0 border-b-2 lg:border-none flex-1 lg:flex-none w-full lg:w-auto z-20 items-center gap-1 outline-none text-md text-slate-500 lg:hover:text-[#59b0d7]/80",
          isOpen && "text-[#59b0d7]"
        )}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {title}
        {isOpen ? (
          <Minus className="w-3 h-3 text-sm" />
        ) : (
          <Plus className="w-3 h-3 text-sm" />
        )}
      </button>

      <div
        className={twMerge(
          "hidden lg:flex lg:absolute lg:-top-6 left-0 z-10 lg:opacity-0 justify-between w-full border-b-2 bg-slate-50 lg:p-3 transform transition ease-in duration-150",
          isOpen
            ? "lg:opacity-100 lg:translate-y-[70px] flex"
            : "lg:-z-10! lg:translate-y-0 hidden lg:flex"
        )}
      >
        <ul className="flex gap-2 items-center justify-between w-[1400px] lg:max-h-full lg:pb-2 m-auto whitespace-nowrap overflow-scroll lg:overflow-y-hidden">
          {children}
        </ul>
      </div>
    </>
  );
};
