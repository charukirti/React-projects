import { createFileRoute, Link } from "@tanstack/react-router";
import { notesQueryOptions } from "../notesOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import CreateNote from "../components/CreateNote";

export const Route = createFileRoute("/")({
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(notesQueryOptions);
  },
  pendingComponent: () => (
    <div className="p-4 text-gray-500 animate-pulse">Loading your notes...</div>
  ),
  component: Index,
});

function Index() {
  const { data: notes } = useSuspenseQuery(notesQueryOptions);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>

      <CreateNote />

      {notes.length === 0 ? (
        <p className="text-gray-500">No notes found. Create one!</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to="/notes/$noteId" params={{ noteId: note.id }}>
                <div className="font-bold text-lg">
                  {note.title.slice(0, 50)}
                </div>
                <div className="text-gray-600 mt-1">
                  {note.content.length > 50 ? "..." : ""}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
