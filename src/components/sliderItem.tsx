import { memo } from "react";

import { Plus, Minus } from "lucide-react";
import { twMerge } from "tailwind-merge";
interface ListItemProps {
  action: (value: string, category: string) => void;
  category: string;
  checked: boolean;
  value: string;
}

export const SliderItem = memo(
  ({ action, checked, value, category }: ListItemProps) => {
    return (
      <li
        className="text-slate-500 p-2 pl-6 border-t-2 border-[#59b0d7]/50 w-full flex flex-1 items-center gap-2"
        onClick={() => action(value, category)}
      >
        <p
          className={twMerge(
            "select-none text-slate-400 text-sm",
            checked && "text-[#59b0d7] font-semibold"
          )}
        >
          {value}
        </p>

        {checked ? (
          <Minus
            className={twMerge(
              "w-3 h-3 text-slate-400 text-sm",
              checked && "text-[#59b0d7]"
            )}
          />
        ) : (
          <Plus
            className={twMerge(
              "w-3 h-3 text-slate-400 text-sm",
              checked && "text-[#59b0d7]"
            )}
          />
        )}
      </li>
    );
  }
);
