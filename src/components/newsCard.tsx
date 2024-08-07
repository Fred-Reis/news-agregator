import { memo } from "react";

import Image from "next/image";
import Link from "next/link";

import { ChevronRightCircle, Timer } from "lucide-react";

import { parseDate } from "@/utils/functions/parseDate";
import { Article } from "@/@types/articles";

export const Card = memo(({ news }: { news: Article }) => (
  <div
    key={news.id}
    className="flex flex-row sm:flex-col rounded-lg overflow-hidden w-full sm:w-[300px] bg-white shadow-2xl h-58 sm:h-full transition-all hover:-translate-y-2.5 hover:ring-4 hover:ring-[#59b0d7]"
  >
    <Image
      alt="news-image"
      className="w-44 sm:h-auto sm:w-auto aspect-square object-cover"
      src={news.urlToImage}
      width={250}
      height={250}
    />

    <div className="p-2 sm:p-4 flex-1 flex flex-col h-auto">
      <div className="flex flex-row md:flex-col items-center md:items-start gap-16 md:gap-0">
        <span className="text-gray-500 flex items-center gap-1 text-[10px] sm:mt-2 font-bold">
          <Timer className="w-4 h-4" />
          {parseDate(news.publishedAt)}
        </span>

        <span className="text-[#59b0d7] text-xs sm:mt-2 font-semibold">
          {news.source}
        </span>
      </div>

      <h3 className="text-gray-700 text-md sm:text-lg mt-1 sm:mt-2 max-h-28 overflow-hidden text-ellipsis ...">
        {news.title}
      </h3>

      <p className="text-gray-500 text-xs my-1 sm:my-4 max-h-20 overflow-hidden text-ellipsis ...">
        {news.content.split("[+")[0]}
      </p>

      <Link
        href={news.url}
        target="_blank"
        className="mt-auto text-[#59b0d7] text-sm flex items-center gap-2"
      >
        <ChevronRightCircle className="w-5 h-5 text-[#59b0d7]" />
        Find out more
      </Link>
    </div>
  </div>
));
