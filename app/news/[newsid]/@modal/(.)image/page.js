//if user tries to access this page from another route.

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {

    const { newsid } = await params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.newsid === newsid);

    if (!newsItem) {
        notFound(); // will retrieve the closest not-found.js content
    }
    return (
        <>
            <div className="modal-backdrop" />

            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={700} height={700} />
                </div>
            </dialog>

        </>
    );
}