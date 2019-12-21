import Link from "next/link";
import User from "./User";

const UserList = props => {
    return (
        <div>
            <ul>
                {props.users.map(user => (
                    <div key={user.login.uuid}>
                        <User firstname={user.name.first} lastname={user.name.last} email={user.email} picture={user.picture.large}/>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
