import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link href="/">
                    <li>
                        <a>HOME</a>
                    </li>
                </Link>
                <Link href="./posts">
                    <li>
                        <a>POSTS</a>
                    </li>
                </Link>
            </ul>

            <style jsx>{`
                ul {
                    border-bottom: 0.5px solid #ddd;
                    text-align: center;
                    padding-bottom: 10px;
                }
                li {
                    display: inline;
                    list-style: none;
                    margin-right: 40px;
                }

                li:hover {
                    cursor: pointer;
                    opacity: 0.6;
                }
            `}</style>
        </div>
    );
};

export default Navbar;
