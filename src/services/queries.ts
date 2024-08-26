import { useQuery } from "@tanstack/react-query"
import { getTodosId } from "./api"

export const useTodosIds = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodosId
    })
} 