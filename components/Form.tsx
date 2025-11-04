'use client'


import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import React, { use } from 'react'
import { createUser as createUserAction } from '@/app/utils/actions';
function Form() {

    const [message, formAction] = useActionState(createUserAction, null);




    return (
        <form action={formAction} className={formStyle}>
            {message && <p>{message}</p>}
            <h2 className='text-2xl capitalize mb-4'>create a user</h2>
            <input className={inputStyle} type="text" name='firstName' defaultValue={'peter'} />
            <input className={inputStyle} type="text" name='lastName' defaultValue={'mansur'} />
            <SubmitButton />

        </form>
    )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
    'bg-blue-500 hover:bg-blue-700 '


export default Form


const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type='submit' className={btnStyle} disabled={pending}>{pending ? 'submitting...' : 'submit'}</button>
    )
}
