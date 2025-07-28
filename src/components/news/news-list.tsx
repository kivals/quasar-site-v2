import { Search } from "lucide-react";
import { PropsWithChildren } from "react";
import { newsData } from "@/data/news";

interface NewsListProps {
  news: typeof newsData;
}

function NewsList({ news }: NewsListProps) {
  return (
    <div className="flex flex-col gap-y-5">
      {!news.length ? (
        <p>Новостей по выбранным фильтрам нет</p>
      ) : (
        news.map(({ date, content: { title, text } }, index) => (
          <NewsItem key={index} title={title} date={date} text={text} />
        ))
      )}
    </div>
  );
}

interface NewsItemProps {
  title: string;
  text: string;
  date: string;
}

function NewsItem({ title, text, date }: NewsItemProps) {
  return (
    <div className="rounded-[30px] bg-white p-4 lg:p-6 2xl:p-9">
      <div className="mb-2.5 flex items-center justify-between font-medium text-[18px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px]">
        <p>{title}</p>
        <span className="text-black/50">{date}</span>
      </div>
      <div className="mb-2.5 font-light text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[32px]">
        {text}
      </div>
      <div className="hidden lg:flex justify-end">
        <SearchButton>Читать</SearchButton>
      </div>
    </div>
  );
}

function SearchButton({ children }: PropsWithChildren) {
  return (
    <button className="flex items-center gap-x-2 font-semibold text-gray-500 transition-colors hover:text-black lg:text-[22px] xl:text-[26px] 2xl:text-[32px]">
      <Search
        size={35}
        className="lg:mr-1 lg:size-[30px] 2xl:mr-2 2xl:size-[35px]"
      />
      {children}
    </button>
  );
}

export default NewsList;
