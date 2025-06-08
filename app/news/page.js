import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function NewsPage() {
    return (
        <main>
            <h1>News Page</h1>
            <p>Welcome to the news section. Here you will find the latest updates and articles.</p>
            <ul className="news-list">
                {DUMMY_NEWS.map(
                    (newsItem) => (
                        <li key={newsItem.id}>
                            <Link href={`/news/${newsItem.newsid}`}>
                                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                                <span> {newsItem.title}</span>
                            </Link>
                        </li>
                    )
                )}

            </ul>
        </main>

    );

}
