import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { User } from '../../models/User';

interface UsersPageProps {
    users: User[];
}

//const Users: React.FunctionComponent<UsersProps> = (props) => {
const UsersPage: NextPage<UsersPageProps> = (props) => {

    const { users } = props;

    return (
        <div>
            <ul>
                {
                    users && users.map(u => (
                        <li key={ u.id }>{ u.name } - { u.email }</li>
                    ))
                }
            </ul>
        </div>
    );
};

export const getServerSideProps : GetServerSideProps = async (context) => {

    const { data } = await axios.get("http://app:3000/api/users");

    console.log(data);

    return {
        props: {
            users: data
        }
    }

}

export default UsersPage;