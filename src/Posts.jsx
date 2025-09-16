import { use } from "react";
import Post from "./Post";

export default function Posts({fetchPromise}) {
    const posts = use(fetchPromise);

    return (
        <div className="student">
            <h2>All Posts Here</h2>
            <h3>Total Posts : {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};
