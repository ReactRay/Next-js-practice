import React from 'react'
import DeleteButton from './DeleteButton';
import { fetchUsers } from '@/app/utils/actions';
async function UserList() {
    const users = await fetchUsers();
    return (
        <div className='mt-4'>
            {users.length ? <div >{users.map((user) => <div className={flexStyle} key={user.id}><h4>
                {user.firstName} {user.lastName}
            </h4> <DeleteButton id={user.id} /></div>)}</div>
                : <div> no users</div>}
        </div>
    )
}

export default UserList

const flexStyle = 'flex justify-between items-center mb-4'