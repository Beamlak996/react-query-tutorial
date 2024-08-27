import { useQuery, useQueries } from "@tanstack/react-query"
import { getTodo, getTodosId } from "./api"

export const useTodosIds = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodosId
    })
} 

export const useTodo = (ids: (number | undefined)[] | undefined) => {
    return useQueries({
        queries: (ids ?? []).map((id)=> {
            return {
              queryKey: ["todo", { id }],
              queryFn: () => getTodo(id!)
            };
        })
    })
}