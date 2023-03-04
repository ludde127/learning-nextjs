import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
// https://vercel.com/guides/nextjs-prisma-postgres
// lib/prisma.ts

export async function FetchTodos() {
    const todos = await prisma.todo.findMany();
    return {props: {todos}, revalidate:10 }
}

export default prisma;