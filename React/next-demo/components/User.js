import Link from "next/link";

const User = props => {
    console.log(props)
    return (
        <>
            <div className="user">
                <img src={props.user.picture.large} />
                <h1>{props.user.name.first} {props.user.name.last}</h1>
                <p>{props.user.email}</p>
                <p>{props.user.phone}</p>
            </div>
            <style jsx>{`
                .user {
                    background-color: #dfc;
                    border-radius: 10px;
                    padding: 10px 25px;
                    text-align: center;
                    transition: transform 0.3s, box-shadow 0.3s;
                    margin: 30px auto;
                    width: 50%;
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
