import Layout from '../components/Layout'
import UserList from '../components/UserList'
import fetch from 'isomorphic-unfetch'


const Users = (props) => {

    return (
        <Layout>
            <UserList users={props.users} />
        </Layout>
    )
}


Users.getInitialProps = async function() {
    const res = await fetch("https://randomuser.me/api/?results=5")
    const data = await res.json();
    
    return {users: data.results}
};

export default Users;