import { useTodo, useTodosIds } from "@/services/queries"


export const Todo = () => {
    const { isPending, isError, data } = useTodosIds()
    const todoQueries = useTodo(data)

    if(isPending) {
        return <>Loading...</>
    }

    if (isError) {
      return <>Error...</>;
    }


    return (
        <div className="flex flex-col ml-4" >
            <div className="flex flex-col gap-2 ml-2" >
                {todoQueries.map(({data}) => (
                    <div key={data?.id} >
                        <p>Id: {data?.id}</p>
                        <p>Title: {data?.title}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}