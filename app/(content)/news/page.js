
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";


export default async function NewsPage() {

    /* const response = await fetch('http://localhost:8080/news');
   
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    const news = await response.json();
    */
    const news = await getAllNews();

    // reach directly to the database within a folder

    return (
        <>
            <h1>News Page</h1>
            <p>Welcome to the news section. Here you will find the latest updates and articles.</p>
            <NewsList news={news} />;
        </>

    );

}
