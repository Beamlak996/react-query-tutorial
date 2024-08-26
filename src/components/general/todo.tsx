import { useTodosIds } from "@/services/queries"


export const Todo = () => {
    const { isPending, isError, data } = useTodosIds()

    if(isPending) {
        return <>Loading...</>
    }

    if (isError) {
      return <>Error...</>;
    }

    return (
        <div className="flex flex-col ml-4 gap-2" >
            {data.map((todoId) => (
                <div key={todoId} >Id: {todoId}</div>
            ))}
        </div>
    )
}