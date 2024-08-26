import { useCreateTodo } from "@/services/mutations";
import { useTodo, useTodosIds } from "@/services/queries";
import { Todo } from "@/types/todo";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Todos = () => {
  const { isPending, isError, data } = useTodosIds();
  const todoQueries = useTodo(data);

  const createTodoMutation = useCreateTodo();

  const { register, handleSubmit } = useForm<Todo>();

  if (isPending) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error...</>;
  }

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data)
  };

  return (
    <div className="flex flex-col ml-4">
      <form
        onSubmit={handleSubmit(handleCreateTodoSubmit)}
        className="space-y-6 mb-4 w-fit"
      >
        <h3 className="text-xl">New Todo</h3>
        <div className="space-y-4">
          <Input placeholder="title" {...register("title")} />
          <Input placeholder="description" {...register("description")} />
        </div>
        <Button type="submit" >Submit</Button>
      </form>

      <div className="flex flex-col gap-2 ml-2">
        {todoQueries.map(({ data }) => (
          <div key={data?.id}>
            <p>Id: {data?.id}</p>
            <p>Title: {data?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
