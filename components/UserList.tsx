import React from 'react'
import { fetchUsers } from '@/app/utils/actions';
async function UserList() {
    const users = await fetchUsers();
    return (
        <div className='mt-4 '>
            {users.length ? <div>{users.map((user) => <div key={user.id}>{user.firstName} {user.lastName}</div>)}</div>
                : <div> no users</div>}
        </div>
    )
}

export default UserList
