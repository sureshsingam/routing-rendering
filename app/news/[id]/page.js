
export default function NewsDetailsPage({ params }) {
    const { id } = params;
    return (
        <div>
            <h1>News Page</h1>
            <p>News ID: {id}</p>
        </div>
    );
}