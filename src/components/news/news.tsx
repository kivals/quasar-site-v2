"use client";

import { newsData } from "@/data/news";
import NewsFilterSidebar from "@/components/news/news-filter-sidebar";
import { useMemo, useState } from "react";
import NewsList from "@/components/news/news-list";

const types: string[] = [...new Set(newsData.map((data) => data.type))];
const years: number[] = [
  ...new Set(newsData.map((data) => new Date(data.date).getFullYear())),
];

function News() {
  const [selectedType, setSelectedType] = useState<string>(types[0]);
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);

  const filteredNews = useMemo(() => {
    return newsData.filter((data) => {
      const year = new Date(data.date).getFullYear();
      return data.type === selectedType && year === selectedYear;
    });
  }, [selectedYear, selectedType]);

  return (
    <div className="flex gap-x-8">
      <NewsFilterSidebar
        types={types}
        years={years}
        onChangeTypes={setSelectedType}
        onChangeYears={setSelectedYear}
        selectedYear={selectedYear}
        selectedType={selectedType}
      />

      <NewsList news={filteredNews} />
    </div>
  );
}

export default News;
