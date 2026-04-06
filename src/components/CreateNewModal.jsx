import { useState } from "react";
import Icons from "./Icons";

export default function CreateNewModal({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vectorStore, setVectorStore] = useState("Qdrant");
  const [llmModel, setLlmModel] = useState("text-embedding-ada-002");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit({ name, description, vectorStore, llmModel });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 flex justify-end"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full sm:w-[480px] h-full bg-white flex flex-col shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-gray-100 shrink-0">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 m-0">
                Create New Knowledge Base
              </h2>
              <p className="text-[13px] text-gray-500 mt-1.5 leading-snug m-0">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-transparent border-none cursor-pointer text-gray-500 p-1 rounded-md hover:bg-gray-100 flex items-center shrink-0 -mt-0.5"
              aria-label="Close"
            >
              <Icons.Close />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-7 flex-1 overflow-y-auto space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-2">
              Name (Cannot be edited later)
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows={4}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors resize-y font-[inherit]"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-2">
              Vector Store<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={vectorStore}
                onChange={(e) => setVectorStore(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none appearance-none bg-white cursor-pointer focus:border-indigo-600"
              >
                <option>Qdrant</option>
                <option>Pinecone</option>
                <option>Weaviate</option>
                <option>Chroma</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icons.SelectArrow />
              </span>
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-2">
              LLM Embedding Model<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={llmModel}
                onChange={(e) => setLlmModel(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none appearance-none bg-white cursor-pointer focus:border-indigo-600"
              >
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
                <option>text-embedding-3-large</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icons.SelectArrow />
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-7 py-4 border-t border-gray-100 flex justify-end shrink-0">
          <button
            onClick={handleSubmit}
            className="bg-[#4F46E5] hover:bg-indigo-700 text-white border-none rounded-lg px-7 py-2.5 text-sm font-semibold cursor-pointer transition-colors"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
