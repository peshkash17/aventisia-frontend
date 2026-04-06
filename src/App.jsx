import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KnowledgeCard from "./components/KnowledgeCard";
import CreateNewModal from "./components/CreateNewModal";
import Pagination from "./components/Pagination";
import Icons from "./components/Icons";

const initialCards = [
  { id: 1, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: "14/07/2025" },
  { id: 2, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: "14/07/2025" },
  { id: 3, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: "14/07/2025" },
  { id: 4, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: "14/07/2025" },
  { id: 5, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: "14/07/2025" },
  { id: 6, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: "14/07/2025" },
];

export default function App() {
  const [cards, setCards] = useState(initialCards);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredCards = cards.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = (data) => {
    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: data.name,
        description: data.description || "No description provided.",
        date: new Date().toLocaleDateString("en-GB"),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50">
      <div className="p-2 ">
      <Navbar onMenuToggle={() => setSidebarOpen((o) => !o)} />


      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 flex flex-col overflow-hidden bg-white">
          {/* Page Header */}
          <div className="flex items-center justify-between px-5 md:px-7 py-5  shrink-0 gap-3 flex-wrap">
            <h1 className="text-xl md:text-[22px] font-bold text-gray-900 m-0">
              Knowledge Base
            </h1>
            <div className="flex gap-3 flex-wrap items-center">
              {/* Search */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3.5 py-2 bg-white">
                <span className="text-gray-400">
                  <Icons.Search />
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="border-none outline-none text-[13.5px] text-gray-700 w-28 sm:w-44 bg-transparent"
                />
              </div>
              {/* Create Button */}
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-[#4F46E5] hover:bg-indigo-700 text-white border-none rounded-lg px-4 md:px-[18px] py-2 text-[13.5px] font-semibold cursor-pointer transition-colors"
              >
                <Icons.Plus />
                <span>Create New</span>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex-1 overflow-y-auto p-6 ">
          <div className="flex-1 overflow-y-auto  rounded-xl p-3 transition-shadow border border-gray-200  ">
            {filteredCards.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
                <Icons.EmptyState />
                <p className="text-[15px] m-0">No Knowledge Bases Found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCards.map((card) => (
                  <KnowledgeCard key={card.id} {...card} />
                ))}
              </div>
            )}
          </div>
          </div>

          {/* Pagination */}
          <Pagination
            total={filteredCards.length}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        </main>
      </div>

      {showModal && (
        <CreateNewModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
}
