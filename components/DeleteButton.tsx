

import React from 'react'
import { deleteUser } from '@/app/utils/actions';

function DeleteButton({ id }: { id: string }) {
    return (
        <form action={deleteUser}>
            <input type='hidden' name='id' value={id} />
            <button className={btnStyle} type='submit'>Delete</button>

        </form>
    )
}

export default DeleteButton

const btnStyle = 'bg-red-500 text-white text-xs rounded p-2'