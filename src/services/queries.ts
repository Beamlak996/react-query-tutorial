import { useQuery, useQueries, keepPreviousData } from "@tanstack/react-query";
import { getProjects, getTodo, getTodosId } from "./api"

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

export function useProjects (page: number) {
    return useQuery({
        queryKey: ["projects", { page }],
        queryFn: () => getProjects(page),
        placeholderData: keepPreviousData
    })
}