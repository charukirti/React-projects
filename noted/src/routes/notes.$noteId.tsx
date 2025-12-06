import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { deleteNote, noteQueryOptions } from "../notesOptions";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const Route = createFileRoute("/notes/$noteId")({
  loader: ({ context, params }) => {
    return context.queryClient.ensureQueryData(noteQueryOptions(params.noteId));
  },
  component: NoteDetail,
});

function NoteDetail() {
  const { noteId } = Route.useParams();
  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      navigate({to: '/'})
    },
  });

  function deleteThisNote() {
    mutate(noteId);
  }

  const { data: note } = useSuspenseQuery(noteQueryOptions(noteId));
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-500 mb-4 block hover:underline">
        ← Back to List
      </Link>

      <div className="border p-6 rounded shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {note.content}
        </p>
      </div>
      <button onClick={() => deleteThisNote()} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50">
        {isPending ? "Deleting..." : "Delete note"}
      </button>
    </div>
  );
}
