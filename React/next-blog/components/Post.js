import Link from "next/link";

const Post = props => {
    return (
        <>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>
                    <div className="post">
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .post {
                    border-radius: 10px;
                    padding: 5px 25px;
                    margin: 50px;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .post:hover {
                    transform: translate(0, -5px);
                    box-shadow: 1px 1px 10px;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
};

export default Post;
