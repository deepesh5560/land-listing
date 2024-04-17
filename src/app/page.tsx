import Category from "@/components/category/Category";
import PopularMain from "@/components/popularSearch/PopularMain";
import RecentMain from "@/components/recent-Activity/RecentMain";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | number };
}) {

  return (
    <main>
      <Category searchParams={searchParams} />
      {/* <PopularMain /> */}
      <RecentMain />
    </main>
  );
}
