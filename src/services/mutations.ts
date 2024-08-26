import { Todo } from "@/types/todo"
import { useMutation } from "@tanstack/react-query"
import { createTodo } from "./api"

export function useCreateTodo() {
    return useMutation({
        mutationFn: (data: Todo) => createTodo(data),
        onMutate: () => {
            console.log('mutate')
        },
        onError: () => {
            console.log("error")
        },
        onSuccess: () => {
            console.log('success')
        },
        onSettled: () => {
            console.log('settled')
        }
    })
}