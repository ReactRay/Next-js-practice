'use client'


import { useFormState, useFormStatus } from 'react-dom';
import React from 'react'
import { createUser as createUserAction } from '@/app/utils/actions';
function Form() {





    return (
        <form action={createUserAction} className={formStyle}>
            <h2 className='text-2xl capitalize mb-4'>create a user</h2>
            <input className={inputStyle} type="text" name='firstName' defaultValue={'peter'} />
            <input className={inputStyle} type="text" name='lastName' defaultValue={'mansur'} />
            <button className={btnStyle} type='submit' >submit</button>

        </form>
    )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
    'bg-blue-500 hover:bg-blue-700 '


export default Form
