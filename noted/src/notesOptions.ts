import { queryOptions } from "@tanstack/react-query"; // this bundels the queryKey and queryFn together like useQuery

export type Note = {
  id: string;
  title: string;
  content: string;
};

// simulating delay

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function fetchNotes() {
  await wait(500);
  const notes = localStorage.getItem("notes");
  return (notes ? JSON.parse(notes) : []) as Note[];
}

// this mimic sending data to server
export async function postNotes(note: { title: string; content: string }) {
  await wait(500);

  const notes = JSON.parse(localStorage.getItem("notes") || "[]") as Note[];

  const newNote: Note = {
    ...note,
    id: Math.random().toString(36).substring(7),
  };

  localStorage.setItem("notes", JSON.stringify([...notes, newNote]));

  return newNote;
}

// get single note

async function fetchNote(id: string) {
  await wait(500);
  const notes = JSON.parse(localStorage.getItem("notes") || "[]") as Note[];
  const note = notes.find((n) => n.id === id);
  if (!note) throw new Error("Note not found");
  return note;
}

// delete note

export async function deleteNote(id: string) {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]") as Note[];
  const newNotes = notes.filter((n) => n.id !== id);
  localStorage.setItem("notes", JSON.stringify(newNotes))
  return id;
}

/* 
The Query Options
// This bundles the Key and the Function together.
// Both the Router (for pre-loading) and the Component (for display) will use this.
*/
export const notesQueryOptions = queryOptions({
  queryKey: ["notes"],
  queryFn: fetchNotes,
});

export const noteQueryOptions = (noteId: string) =>
  queryOptions({
    queryKey: ["notes", noteId],
    queryFn: () => fetchNote(noteId),
  });
