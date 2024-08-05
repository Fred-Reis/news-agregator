import { memo } from "react";

import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";

interface CheckItemProps {
  action: (value: string, category: string) => void;
  category: string;
  checked: boolean;
  value: string;
}

export const FilterItem = memo(
  ({ value, checked, action, category }: CheckItemProps) => (
    <li className="flex px-4 py-2 items-center">
      <label className="relative block pl-7 cursor-pointer text-sm text-slate-500 select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => action(value, category)}
          className="absolute opacity-0 cursor-pointer h-0 w-0"
        />
        <span
          className={twMerge(
            "absolute top-0 left-0 h-5 w-5 rounded bg-slate-200",
            checked ? "bg-[#59b0d7]" : "hover:bg-slate-300"
          )}
        >
          {checked && <Check className="w-5 h-5 text-white" />}
        </span>
        {value}
      </label>
    </li>
  )
);
