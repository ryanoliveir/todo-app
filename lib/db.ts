import { prisma } from "./prisma";

export interface Todo{
    id: number;
    description: string;
}


export async function getAllTodos(){
    const data = await prisma.todo.findMany();
    return data;
}


export async function createTodo(description: String){
    await prisma.todo.create({
        data:{
            description,
        }
    })
}