'use client'
import React, {useState} from "react";
import prisma from "@/lib/prisma";

const TodoForm = () => {
    const [todoText, setTodoText] = useState("");
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleFormSubmitServerSide();
        setTodoText('');
    }

    const handleFormSubmitServerSide = async () => {
        console.log(todoText)
        const JSONdata = JSON.stringify({todoText: todoText})

        const endpoint = '/todo/api'

        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

    }

    return (<form onSubmit={handleFormSubmit}
             className="form">
        <label>
            Todo
            <input className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" id="todo-input" value={todoText} onChange={(e) => setTodoText(e.currentTarget.value)} required/>
            <button type="submit">Submit</button>
        </label>
    </form>);
}

export default TodoForm;