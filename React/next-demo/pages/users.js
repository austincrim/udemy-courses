import Layout from "../components/Layout";
import UserList from "../components/UserList";
import fetch from "isomorphic-unfetch";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const Users = props => {
  return (
    <Layout>
      <Link href="./users">
        <Button variant="contained">Fetch</Button>
      </Link>
      <p>Notice that users get re-fetched without page refresh.</p>
      <UserList users={props.users} />
    </Layout>
  );
};

Users.getInitialProps = async function() {
  const res = await fetch("https://randomuser.me/api/?results=5");
  const data = await res.json();

  return { users: data.results };
};

export default Users;
