import { Skeleton } from "@/components";

export default function HomeLoading() {
  return (
    <section className="grid gap-y-10 p-8 lg:pt-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-w-[1400px] gap-6 mx-auto  place-content-between">
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
      <Skeleton className="w-[300px] h-[600px] shadow-2xl" />
    </section>
  );
}
