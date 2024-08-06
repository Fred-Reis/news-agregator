import { Plus, Minus } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ChipsProps {
  action: (value: string, category: string) => void;
  category: string;
  checked: boolean;
  value: string;
}

export const Chips = ({ action, value, checked, category }: ChipsProps) => {
  return (
    <div
      onClick={() => action(value, category)}
      className={twMerge(
        "items-center cursor-pointer flex rounded-full w-max h-max px-3 py-1 border-2 border-slate-400 gap-1",
        checked && "border-[#59b0d7]"
      )}
    >
      <p
        className={twMerge(
          "select-none text-slate-400 text-sm w-max",
          checked && "text-[#59b0d7]"
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
    </div>
  );
};
