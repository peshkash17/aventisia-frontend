const Icons = {
  Logo: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#4F46E5" opacity="0.2" />
      <path d="M10 16 Q16 8 22 16 Q16 24 10 16Z" fill="#818CF8" />
      <circle cx="16" cy="16" r="4" fill="white" />
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ChevronDown: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Search: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Bell: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2a5 5 0 00-5 5v3l-1.5 2h13L14 10V7a5 5 0 00-5-5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 15a1.5 1.5 0 003 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  MoreVertical: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="4" r="1.2" fill="currentColor" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="8" cy="12" r="1.2" fill="currentColor" />
    </svg>
  ),
  Close: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChevronRight: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChevronsLeft: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 3L3 7l4 4M11 3L7 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChevronsRight: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 3l4 4-4 4M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  SelectArrow: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5l4 4 4-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Sidebar icons
  Agents: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 15c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  AIModels: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Library: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="3" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="3" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Published: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Machines: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 14v2M13 14v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Queues: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 5h14M2 9h10M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Triggers: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10 2L4 10h5l-1 6 7-9h-5l1-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  Jobs: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10h6M6 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Executions: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8l4 1-4 1V8z" fill="currentColor" />
    </svg>
  ),
  Vault: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L3 5v6c0 3.3 2.7 6 6 6s6-2.7 6-6V5L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  KnowledgeBase: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="9" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  KeyStore: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 11h10M14 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Tenant: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 4V3a1 1 0 012 0v1M10 4V3a1 1 0 012 0v1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Integrations: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 9h14M9 2a10 10 0 010 14M9 2a10 10 0 000 14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  EmptyState: () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="15" y="10" width="50" height="60" rx="6" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="22" y="22" width="36" height="4" rx="2" fill="#D1D5DB" />
      <rect x="22" y="32" width="28" height="4" rx="2" fill="#E5E7EB" />
      <rect x="22" y="42" width="20" height="4" rx="2" fill="#E5E7EB" />
      <circle cx="55" cy="55" r="18" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M48 55h14M55 48v14" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export default Icons;
