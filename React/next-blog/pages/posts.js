import Layout from '../components/Layout'
import PostList from '../components/PostList'
import blogs from '../data'

const Posts = (props) => {

    return (
        <Layout>
            <PostList posts={props.blogs} />
        </Layout>
    )
}


Posts.getInitialProps = () => {
    return {blogs};
};

export default Posts;