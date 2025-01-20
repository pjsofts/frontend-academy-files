import { useState } from "react";
import { addTodo, getTodos } from "./api/todo";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setValue } from "./store/todo-slice";

function Todo() {
  const queryClient = useQueryClient();
  const value = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();
  const {
    isPending,
    error,
    data: todos,
  } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const mutation = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (old: Todo[]) => [
        ...old,
        { ...newTodo, id: 2000 },
      ]);
      return { previousTodos };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }

  return (
    <>
      <div>
        <Link to="/">Home Page </Link>
      </div>

      <div>
        <input
          value={value}
          onChange={(e) => {
            dispatch(setValue(e.target.value));
          }}
          className="border m-4 p-4 border-blue-500 h-10 w-96"
          type="text"
          placeholder="new Todo"
        />
        <button
          type="button"
          onClick={async () => {
            console.log("inside add", value);

            mutation.mutate({ content: value });
          }}
        >
          Add
        </button>
      </div>
      <div className="">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="border-b p-4">
              {todo.content}
              <span className="bg-red-300 p-2">{todo.id}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
