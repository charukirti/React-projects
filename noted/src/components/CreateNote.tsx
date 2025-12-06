import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { postNotes } from "../notesOptions";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: postNotes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setTitle("");
      setContent("");
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title || !content) return;

    mutate({ title, content });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-4 border rounded bg-gray-50"
    >
      <h3 className="font-bold mb-2">Add a Note</h3>
      <div className="flex flex-col gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save Note"}
        </button>
      </div>
    </form>
  );
}
