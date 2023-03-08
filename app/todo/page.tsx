import prisma, {FetchTodos} from "@/lib/prisma";
import {Metadata} from "next";
import TodoForm from "@/components/todo-form";

export const metadata: Metadata = {
    title: "This is a page demo"
}
export default async function page() {
    let props = await FetchTodos();

    return <div className="text-center">
        <h1>Here you can see all todos</h1>
        <br></br>
        <TodoForm></TodoForm>

        <ul className="list-disc list-inside">
            {props.props.todos.map((todo, i) => <li key={todo.id}>{todo.todo}</li>)}
        </ul>
    </div>
}

