
"use client";
import { use } from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
    const router = useRouter();


    const { newsid } = use(params);
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.newsid === newsid);

    if (!newsItem) {
        notFound(); // will retrieve the closest not-found.js content
    }
    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />

            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={700} height={700} />
                </div>
            </dialog>

        </>
    );
}