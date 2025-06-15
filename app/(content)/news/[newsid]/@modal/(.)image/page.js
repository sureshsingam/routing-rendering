import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {



    const { newsid } = await params;
    const newsItem = await getNewsItem(newsid);

    if (!newsItem) {
        notFound(); // will retrieve the closest not-found.js content
    }
    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={700} height={700} />
                </div>
            </dialog>

        </>
    );
}