// components/MenuContext.tsx
"use client";
import React, { useState, createContext, useContext, ReactNode } from 'react';

interface IMenuContext {
    selectedMenuItem: string;
    setSelectedMenuItem: (item: string) => void;
}

const MenuContext = createContext<IMenuContext | undefined>(undefined);

const DEFAULT_MENU_ITEM = '销量';

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<string>(DEFAULT_MENU_ITEM);
    return (
        <MenuContext.Provider value={{ selectedMenuItem, setSelectedMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = (): IMenuContext => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
}

