import { Suspense } from "react";
import NewsList from "@/components/news-list";
import Link from "next/link";

import { getAllNews, getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

async function FilterHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;

    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }
    else if (year && month) {
        links = [];
    }
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        //dynamically derive the ref value  from the link
                        const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

                        return (
                            <li key={link}>
                                <Link href={href} > {link} </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        </header>
    );
}

async function FilteredNews({ year, month }) {
    let news;

    if (year && !month) {
        news = await getNewsForYear(year);

    }
    else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }
    else if (!year && !month) {
        news = await getAllNews();
    }

    let newsContent = <p>No news found for the selected period </p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }
    return newsContent;


}
export default async function FilteredNewsPage({ params }) {
    const { filter } = await params;

    const selectedYear = filter ? filter[0] : undefined;
    const selectedMonth = filter ? filter[1] : undefined;

    // filter is a catch all route parameter and will be an array of segments
    console.log("Filter:", filter);
    const availableYears = await getAvailableNewsYears();

    //get all news for the given year
    //const news_in_given_year = getNewsForYear(year);
    if (selectedYear && !availableYears.includes(selectedYear) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))) {
        throw new Error("Invalid filter");
    }


    return (
        <>
            <Suspense fallback={<p>Loading Header..</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>

            <Suspense fallback={<p>Loading News...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>

        </>
    )
}
