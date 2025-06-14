
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailsPage({ params }) {
    const { newsid } = await params;
    const newsItem = await getNewsItem(newsid);

    // do an extra check whether newsItem exists
    if (!newsItem) {
        notFound(); // will retrieve the closest not-found.js content
    }
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.newsid}/image`}>
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}> {newsItem.date}</time>
            </header>
            <p> {newsItem.content}</p>
        </article >
    );
}