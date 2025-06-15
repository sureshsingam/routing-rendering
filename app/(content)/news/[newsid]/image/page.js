
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {

    const { newsid } = await params;
    const newsItem = await getNewsItem(newsid);

    if (!newsItem) {
        notFound(); // will retrieve the closest not-found.js content
    }
    return (
        <div className="fullscreen-image">
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={800} height={800} />
        </div>
    );
}