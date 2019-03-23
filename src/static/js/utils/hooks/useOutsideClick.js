

import { useRef, useEffect } from 'react';

const useOutsideClick = cb => {
    const elementInstance = useRef(null);

    const onDocumentClick = event => {
        if (!elementInstance.current.contains(event.target)) { cb(); }
    };

    useEffect(() => {
        document.addEventListener('click', onDocumentClick);

        return () => document.removeEventListener('click', onDocumentClick);
    }, []);

    return elementInstance;
};

export default useOutsideClick;
