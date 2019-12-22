import User from "./User";

const UserList = props => {
    return (
        <div>
            <ul>
                {props.users.map(user => (
                    <div key={user.login.uuid}>
                        <User user={user}/>
                    </div>
                ))}
            </ul>
            <style jsx>{`
                ul {
                    padding-left: 0;
                }
            `}</style>
        </div>
    );
};

export default UserList;
