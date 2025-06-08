import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
    const { year } = await params;
    //get all news for the given year
    const news_in_given_year = getNewsForYear(year);

    return (
        <NewsList news={news_in_given_year} />
    )
}