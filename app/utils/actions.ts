
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


export const createUser = async (formData: FormData) => {
    'use server'
    const { firstName, lastName } = Object.fromEntries(formData) as { firstName: string, lastName: string }


    const newUser: User = { firstName, lastName, id: Date.now().toString() }

    await saveUser(newUser);
    redirect('/')
}

export const fetchUsers = async () => {
    const result = await readFile(filePath, 'utf-8');
    const users: User[] = result ? JSON.parse(result) : [];
    return users;
}


const saveUser = async (user: User) => {
    let users = await fetchUsers();

    users = [...users, user];

    await writeFile(filePath, JSON.stringify(users));
}