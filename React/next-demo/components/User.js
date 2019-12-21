import Link from "next/link";

const User = props => {
    return (
        <>
            <div className="user">
                <img src={props.picture} />
                <h1>{props.firstname} {props.lastname}</h1>
                <p>{props.email}</p>
            </div>
            <style jsx>{`
                .user {
                    border-radius: 10px;
                    padding: 5px 25px;
                    text-align: center;
                    margin: 50px;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .user:hover {
                    transform: translate(0, -5px);
                    box-shadow: 1px 1px 10px;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                img {
                    border-radius: 100%;
                }
            `}</style>
        </>
    );
};

export default User;
