import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
    const [mobile, setMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MobileContext.Provider value={{ mobile, setMobile }}>
            {children}
        </MobileContext.Provider>
    );
};


export const useMobile = () => {
    return useContext(MobileContext);
};
