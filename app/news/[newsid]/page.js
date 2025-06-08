import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailsPage({ params }) {
    const { newsid } = await params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.newsid === newsid);

    // do an extra check whether newsItem exists
    if (!newsItem) {
        notFound(); // will retrieve the closest not-found.js content
    }
    return (
        <article className="news-article">
            <header>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}> {newsItem.date}</time>
            </header>
            <p> {newsItem.content}</p>
        </article>
    );
}