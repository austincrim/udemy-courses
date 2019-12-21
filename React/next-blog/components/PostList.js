import Link from "next/link";
import Post from "../components/Post";

const PostList = props => {
    return (
        <div>
            <ul>
                {props.posts.map(post => (
                    <div key={post.id}>
                        <Post title={post.title} content={post.content} id={post.id}/>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
