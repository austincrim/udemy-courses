import blogs from "../data";

const PostList = props => {
    return (
        <div>
            <ul>
                {props.posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </ul>
            <style>{`
                .post {
                    border-radius: 10px;
                    padding: 5px 25px;
                    margin: 50px;
                    transition: transform .3s, box-shadow .3s;
                }
                .post:hover {
                    transform: translate(0, -5px);
                    box-shadow: 1px 1px 10px;
                }
            `}</style>
        </div>
    );
};

export default PostList;
