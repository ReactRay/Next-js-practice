
'use server'

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const filePath = path.join(process.cwd(), 'users.json');


type User = {
    id: string,
    firstName: string,
    lastName: string
}


export const createUser = async (prevState: any, formData: FormData) => {

    console.log(prevState, 'prev state')

    const { firstName, lastName } = Object.fromEntries(formData) as { firstName: string, lastName: string }


    const newUser: User = { firstName, lastName, id: Date.now().toString() }

    try {
        await saveUser(newUser);
        revalidatePath('/actions');
        return 'the user was created'
    } catch (error) {
        console.log(error)
        return 'something went wrong'
    }

}

export const fetchUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = await readFile(filePath, 'utf-8');
    const users: User[] = result ? JSON.parse(result) : [];
    return users;
}


const saveUser = async (user: User) => {
    let users = await fetchUsers();

    users = [...users, user];

    await writeFile(filePath, JSON.stringify(users));
}