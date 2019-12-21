import Layout from '../components/Layout'
import UserList from '../components/UserList'


const Posts = (props) => {

    return (
        <Layout>
            <UserList users={props.users} />
        </Layout>
    )
}


Posts.getInitialProps = async function() {
    const res = await fetch("https://randomuser.me/api/?results=5")
    const data = await res.json();
    
    return {users: data.results}
};

export default Posts;