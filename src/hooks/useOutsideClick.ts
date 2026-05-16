import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
    const ref = useRef<T>(null);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callbackRef.current();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return ref;
};
