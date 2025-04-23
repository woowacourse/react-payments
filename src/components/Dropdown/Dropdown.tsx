import { createContext, useContext, useState, useRef, useEffect } from 'react';

const DropdownContext = createContext<any>(null);

export default function NewDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>메뉴 열기 ⬇</DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => alert('1번 선택')}>1번 항목</DropdownItem>
        <DropdownItem onSelect={() => alert('2번 선택')}>2번 항목</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node) && triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>{children}</div>
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error('Dropdown.* components must be wrapped in <Dropdown>');
  return ctx;
};

export const DropdownTrigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen, open, triggerRef } = useDropdownContext();

  return (
    <button ref={triggerRef} onClick={() => setOpen(!open)} style={{ padding: '8px', cursor: 'pointer' }}>
      {children}
    </button>
  );
};

export const DropdownContent = ({ children }: { children: React.ReactNode }) => {
  const { open, contentRef } = useDropdownContext();

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      style={{
        position: 'absolute',
        top: '100%',
        marginTop: '8px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      {children}
    </div>
  );
};

export const DropdownItem = ({ children, onSelect }: { children: React.ReactNode; onSelect?: () => void }) => {
  const { setOpen } = useDropdownContext();

  return (
    <div
      onClick={() => {
        onSelect?.();
        setOpen(false);
      }}
      style={{
        padding: '8px 12px',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = '#f0f0f0';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = 'transparent';
      }}
    >
      {children}
    </div>
  );
};
