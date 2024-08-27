import {
  useQuery,
  useQueries,
  keepPreviousData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getProduct, getProducts, getProjects, getTodo, getTodosId } from "./api"

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

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
}

export function useProduct (id: number | null) {
    const queryClient = useQueryClient()

    return useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProduct(id!),
        enabled: !!id
    })
}