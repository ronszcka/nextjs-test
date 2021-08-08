import axios from 'axios';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import { User } from '../models/User';

export default function UsersPage() {

    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        
        axios.get("http://localhost:3333/api/users")
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            });

    }, []);

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
