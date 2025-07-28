import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";

interface NewsFilterSidebarProps {
  types: string[];
  years: number[];
  onChangeTypes: (v: string) => void;
  onChangeYears: (v: number) => void;
  selectedYear: number;
  selectedType: string;
}

function NewsFilterSidebar({
  types,
  years,
  onChangeYears,
  onChangeTypes,
  selectedType,
  selectedYear,
}: NewsFilterSidebarProps) {
  return (
    <div className="flex flex-col gap-y-8">
      <FilterPart<string>
        title="Тип"
        list={types}
        onChange={onChangeTypes}
        selectedValue={selectedType}
      />
      <FilterPart<number>
        title="Год"
        list={years}
        onChange={onChangeYears}
        selectedValue={selectedYear}
      />
    </div>
  );
}

interface FilterPartProps<T extends string | number> {
  title: string;
  list: T[];
  onChange: (value: T) => void;
  selectedValue: T;
}

function FilterPart<T extends string | number>({
  title,
  list,
  onChange,
  selectedValue,
}: FilterPartProps<T>) {
  return (
    <div>
      <span className="mb-5 inline-block font-medium lg:text-[22px] xl:text-[26px] 2xl:text-[32px]">
        {title}
      </span>
      <ul className="flex flex-col lg:gap-y-3 2xl:gap-y-5">
        {list.map((v, index) => (
          <li key={index}>
            <Button
              onClick={() => onChange(v)}
              className={cn(
                "text-accent lg:w-[230px] 2xl:w-[273px] rounded-[20px] bg-transparent py-8 text-black/50 shadow-none lg:text-[22px] xl:text-[26px] 2xl:text-[32px]",
                selectedValue === v && "bg-primary text-white",
              )}
            >
              {v}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFilterSidebar;
