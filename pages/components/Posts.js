import BlogPost from "../blog/[id]"

export default function Posts({ posts, onPostClick }) {
    return (
        <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-20 m-10 text-gray-200">
            {posts.map((post) => (
                <li key={post.id} className="bg-gray-400 p-3 text-lg">
                    <h3 className="text-3xl flex justify-center p-2" >{post.title}</h3>
                    <p>{post.content.substring(0, 100)}</p>
                    <a className="flex justify-center hover:text-blue-500" href={`/blog/${encodeURIComponent(post.id)}`} onClick={(e)=>onPostClick(e, post)}>
                     Read the article
                    </a>
                </li>
            ))}
        </ul>
    )
}