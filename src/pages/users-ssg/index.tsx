import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

interface User {
    id: number,
    name: string,
    username: string,
}

interface UsersProps {
    users: User[]
}

const UsersPage: NextPage<UsersProps> = ( props ) => {

    const { users } = props;

    const router = useRouter();

    if (router.isFallback) {
        return <div>carregando...</div>
    }

    if (!users || users.length === 0) {
        return <div>not found!</div>
    }

    return (
        <div>
            {
                users.map((user) => (
                    <Link key={user.id} href="/users-ssg/[id]" as={`/users-ssg/${user.id}`}><a><p>{user.name}</p></a></Link>
                ))
            }
        </div>
    );

};

export const getStaticProps : GetStaticProps = async (context) => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.data;

    return {
        props: { users : users },
    };
    
};

export default UsersPage;