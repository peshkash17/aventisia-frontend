import { useState } from "react";
import Icons from "./Icons";

export default function KnowledgeCard({ title, description, date }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className=" border border-gray-200 rounded-xl p-5 flex flex-col gap-3 relative hover:shadow-md transition-shadow min-h-[160px]"
      onClick={() => menuOpen && setMenuOpen(false)}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[15px] font-semibold text-gray-900 m-0 leading-snug">
          {title}
        </h3>
        <div className="relative flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((o) => !o);
            }}
            className="bg-transparent border-none cursor-pointer text-gray-400 p-0.5 rounded hover:text-gray-600 flex items-center"
            aria-label="Card options"
          >
            <Icons.MoreVertical />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[140px] py-1">
              {["Edit", "Duplicate", "Delete"].map((action) => (
                <button
                  key={action}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(false);
                  }}
                  className={[
                    "block w-full px-4 py-2 bg-transparent border-none cursor-pointer text-left text-[13px] hover:bg-gray-50",
                    action === "Delete" ? "text-red-500" : "text-gray-700",
                  ].join(" ")}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-gray-500 leading-relaxed m-0 flex-1 ">
        {description}
      </p>
      <div className="border border-gray-200 mt-6"></div>

      {/* Footer */}
      <p className="text-xs text-gray-400 m-0">
        Created On: <strong className="text-gray-500">{date}</strong>
      </p>
    </div>
  );
}
