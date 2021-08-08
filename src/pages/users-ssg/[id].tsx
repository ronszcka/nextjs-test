import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";

interface User {
    id: number,
    name: string,
    username: string,
}

interface UserProps {
    user: User
}

const UsersPage: NextPage<UserProps> = ( props ) => {

    const { user } = props;

    const router = useRouter();

    if (router.isFallback) {
        return <div>carregando...</div>
    }

    if (!user) {
        return <div>not found!</div>
    }

    return (
        <div>
            <p>{ user.id }</p>
            <p>{ user.name }</p>
            <p>{ user.username }</p>
        </div>
    );

};

export const getStaticProps : GetStaticProps = async (context) => {

    const {
        params: { id }
    } = context;

    console.log(id);

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        { params: { id: id } }
    );

    console.log(response);

    const user = await response.data[0];

    console.log(user);

    return {
        props: { user },
    };
    
};

export const getStaticPaths : GetStaticPaths = async () => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.data;

    const paths = users.map((user) => {
        return { params: { id: String(user.id) } };
    });

    return {
        paths,
        fallback: true,
    };

};

export default UsersPage;