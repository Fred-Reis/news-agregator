import Image from "next/image";

export const NoArticles = () => (
  <div className="flex flex-col justify-center items-center h-full w-full">
    <Image
      alt="No Articles Found"
      src="https://parallaximag.gr/wp-content/uploads/nonews.png"
      width={600}
      height={600}
    />
    <h1 className="text-3xl text-slate-600 font-bold mt-8">
      No articles were found for this query
    </h1>
  </div>
);
