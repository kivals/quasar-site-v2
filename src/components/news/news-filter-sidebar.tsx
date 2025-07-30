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
    <div className="flex flex-col gap-y-4 lg:gap-y-8">
      <FilterPart<string>
        title="Тип"
        list={types}
        onChange={onChangeTypes}
        selectedValue={selectedType}
        isShowTitle={true}
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
  isShowTitle?: boolean;
}

function FilterPart<T extends string | number>({
  title,
  list,
  onChange,
  selectedValue,
  isShowTitle = false,
}: FilterPartProps<T>) {
  return (
    <div>
      <span className="mb-5 hidden font-medium lg:inline-block lg:text-[22px] xl:text-[26px] 2xl:text-[32px]">
        {title}
      </span>
      <ul className="scroll-x-no-bar flex gap-x-3 overflow-x-scroll lg:flex-col lg:gap-y-3 lg:overflow-auto 2xl:gap-y-5">
        {isShowTitle && (
          <li className="lg:hidden">
            <h2 className="text-[28px] font-medium">Новости</h2>
          </li>
        )}
        {list.map((v, index) => (
          <li key={index}>
            <Button
              onClick={() => onChange(v)}
              className={cn(
                "text-accent w-[110px] rounded-[30px] bg-transparent py-1 text-black/50 uppercase shadow-none lg:rounded-[20px] lg:py-8 lg:text-[22px] lg:normal-case xl:w-[230px] xl:text-[26px] 2xl:w-[273px] 2xl:text-[32px]",
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
