import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
