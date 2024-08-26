import { Todo } from "@/types/todo";
import axios from "axios"

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({baseURL: BASE_URL})

export const getTodosId = async () => {
    return (await axiosInstance.get<Todo[]>("todos")).data.map((todo)=> todo.id)
}