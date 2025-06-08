import Link from "next/link"
import Image from "next/image";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {news.map(
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

    )
}