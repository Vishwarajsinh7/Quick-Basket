import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-[#f5efe6] min-h-screen p-6">
        <Header />
        {children}
      </div>

    </div>
  );
}