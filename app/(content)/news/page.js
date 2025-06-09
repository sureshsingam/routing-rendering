
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
    return (
        <main>
            <h1>News Page</h1>
            <p>Welcome to the news section. Here you will find the latest updates and articles.</p>
            <NewsList news={DUMMY_NEWS} />
        </main>

    );

}
