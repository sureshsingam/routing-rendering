import Link from "next/link";

export default function NewsPage() {
    return (
        <main>
            <h1>News Page</h1>
            <p>Welcome to the news section. Here you will find the latest updates and articles.</p>
            <ul>
                <li>
                    <Link href="/news/news-article-1">News Item 1</Link>
                </li>
                <li>
                    <Link href="/news/news-article-2">News Item 2</Link>
                </li>
                <li>
                    <Link href="/news/news-article-3">News Item 3</Link>
                </li>
            </ul>
        </main>

    );

}