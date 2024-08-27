import { useProjects } from "@/services/queries";
import { useState } from "react";

export const Projects = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isError, error, isPlaceholderData, isFetching } =
    useProjects(page);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {data.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
      <span>Current page: {page}</span>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPlaceholderData) {
            setPage((prev) => prev + 1);
          }
        }}
        disabled={isPlaceholderData}
      >
        Next Page
      </button>
      {isFetching ? "loading..." : null}
    </div>
  );
};
