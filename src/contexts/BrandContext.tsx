import {
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  useState,
  useCallback,
  useRef,
  RefObject,
} from 'react';

interface BrandContextValue {
  brand: string;
  handleBrandChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  brandSelectRef: RefObject<HTMLSelectElement | null>;
}

const BrandContext = createContext<BrandContextValue | null>(null);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [brand, setBrand] = useState<string>('');
  const handleBrandChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  }, []);
  const brandSelectRef = useRef<HTMLSelectElement | null>(null);

  return (
    <BrandContext.Provider value={{ brand, handleBrandChange, brandSelectRef }}>
      {children}
    </BrandContext.Provider>
  );
};

export function useBrandContext(): BrandContextValue {
  const ctx = useContext(BrandContext);
  if (!ctx) {
    throw new Error(
      'useBrandContext는 BrandContextProvider 내에서 사용되어야 합니다.'
    );
  }
  return ctx;
}
