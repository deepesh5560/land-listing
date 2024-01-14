import Category from "@/components/category/Category";
import PopularMain from "@/components/popularSearch/PopularMain";
import RecentMain from "@/components/recent-Activity/RecentMain";

export default function Home() {
  return (
    <main>
      <Category />
      <PopularMain />
      <RecentMain />
    </main>
  );
}
