import NewsList from "@/components/news-list";
import Link from "next/link";

import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
    const { filter } = await params;

    const selectedYear = filter ? filter[0] : undefined;
    const selectedMonth = filter ? filter[1] : undefined;

    // filter is a catch all route parameter and will be an array of segments
    console.log("Filter:", filter);
    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }
    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];

    }

    let newsContent = <p>No news found for the selected period </p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }
    //get all news for the given year
    //const news_in_given_year = getNewsForYear(year);
    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))) {
        throw new Error("Invalid filter");
    }


    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => {
                            //dynamically derive the ref value  from the link
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href} > {link} </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

            </header>
            {newsContent}
        </>
    )
}

