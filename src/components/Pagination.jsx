import Icons from "./Icons";

export default function Pagination({ total, rowsPerPage, onRowsPerPageChange }) {
  return (
    <div className="flex items-center justify-between px-5 md:px-9 py-3 bg-white  shrink-0 flex-wrap gap-3">
      <span className="text-[13px] font-semibold text-gray-900">{total} rows</span>

      <div className="flex items-center gap-4 md:gap-5 flex-wrap">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-900 hidden sm:block">
            Rows per page
          </span>
          <div className="relative">
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="border border-gray-300 rounded-md pl-2.5 pr-7 py-1 text-[13px] text-gray-700 bg-white appearance-none cursor-pointer outline-none"
            >
              {[5, 10, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icons.SelectArrow />
            </span>
          </div>
        </div>

        {/* Page info */}
        <span className="text-[13px] font-semibold text-gray-900">page 1 of 1</span>

        {/* Nav buttons */}
        <div className="flex gap-1">
          {[
            { Icon: Icons.ChevronsLeft, title: "First" },
            { Icon: Icons.ChevronLeft, title: "Prev" },
            { Icon: Icons.ChevronRight, title: "Next" },
            { Icon: Icons.ChevronsRight, title: "Last" },
          ].map(({ Icon, title }) => (
            <button
              key={title}
              title={title}
              className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md bg-white text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
