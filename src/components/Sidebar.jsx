import Icons from "./Icons";

const sidebarSections = [
  {
    label: "MY PROJECTS",
    items: [
      { icon: "Agents", label: "Agents" },
      { icon: "AIModels", label: "AI Models" },
      { icon: "Library", label: "Library" },
    ],
  },
  {
    label: "ORCHESTRATOR",
    items: [
      { icon: "Published", label: "Published" },
      { icon: "Machines", label: "Machines" },
      { icon: "Queues", label: "Queues" },
      { icon: "Triggers", label: "Triggers" },
      { icon: "Jobs", label: "Jobs" },
      { icon: "Executions", label: "Executions" },
      { icon: "Vault", label: "Vault" },
      { icon: "KnowledgeBase", label: "Knowledge Base", active: true },
      { icon: "KeyStore", label: "Key Store" },
    ],
  },
  {
    label: "ADMIN",
    items: [
      { icon: "Tenant", label: "Tenant" },
      { icon: "Integrations", label: "Integrations" },
    ],
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          "fixed top-14 left-0 bottom-0 z-30 w-[220px]",
          "bg-white border-r border-gray-200 overflow-y-auto py-4",
          "transition-transform duration-300 ease-in-out",
          "lg:relative lg:top-auto lg:left-auto lg:bottom-auto lg:z-auto",
          "lg:shrink-0 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {sidebarSections.map((section) => (
          <div key={section.label} className="mb-2 px-4 ">
            <p className="text-[10px] font-semibold text-gray-400 tracking-[0.08em] px-5 pt-2 pb-1 m-0">
              {section.label}
            </p>
            {section.items.map((item) => {
              const IconComp = Icons[item.icon.replace(/\s/g, "")];
              return (
                <button
                  key={item.label}
                  className={[
                    "flex rounded-md items-center gap-2.5 w-full px-5 py-2 text-[13.5px] text-left",
                    "border-0 border-l-4 transition-colors cursor-pointer",
                    item.active
                      ? "bg-indigo-50 border-indigo-600 text-indigo-600 font-semibold"
                      : "bg-transparent border-transparent text-gray-700 font-normal hover:bg-gray-50",
                  ].join(" ")}
                >
                  {IconComp && (
                    <span className="flex-shrink-0">
                      <IconComp />
                    </span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>
        ))}
      </aside>
    </>
  );
}
