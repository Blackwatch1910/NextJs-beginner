import User from "../components/user";

export default function UserList({ users }) {
    return (
      <>
        <h1>List of Users</h1>

        {users.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
              <hr />
            </div>
          );
        })}
      </>
    );
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data         // any key value pair which will be automatically injected as props
        }
    }
}