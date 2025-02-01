// src/components/Accordion.tsx
import React, { useState } from 'react';

interface AccordionProps {
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Track the currently open item

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the item
    };

    return (
        <div className="w-full">
            {React.Children.map(children, (child, index) => {
                // Pass the toggle function and open state to each AccordionItem
                return React.cloneElement(child as React.ReactElement<AccordionItemExtendedProps>, {
                    isOpen: openIndex === index,
                    onToggle: () => toggleItem(index),
                });
            })}
        </div>
    );
};

interface AccordionItemProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

// Extend AccordionItemProps to include isOpen and onToggle
interface AccordionItemExtendedProps extends AccordionItemProps {
    isOpen?: boolean;
    onToggle?: () => void;
}

// Update the AccordionItem component to use the extended props
const AccordionItem: React.FC<AccordionItemProps> = ({ children, isOpen, onToggle }) => {
    return (
        <div className="border-b">
            {React.Children.map(children, (child) => {
                // Clone the child and pass the necessary props
                return React.cloneElement(child as React.ReactElement, {
                    isOpen,
                    onToggle,
                });
            })}
        </div>
    );
};

interface AccordionTriggerProps {
    children: React.ReactNode;
    onToggle?: () => void;
    isOpen?: boolean;
    openIcon?: React.ReactNode;
    closedIcon?: React.ReactNode;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, onToggle, isOpen, openIcon, closedIcon }) => {
    return (
        <button
            onClick={onToggle}
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition-all duration-300 hover:underline hover:cursor-pointer"
        >
            <span className="font-semibold">{children}</span>
            <span>
                {isOpen ? openIcon : closedIcon} {/* Use the passed icons */}
            </span>
        </button>
    );
};

interface AccordionContentProps {
    isOpen?: boolean;
    children: React.ReactNode;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ isOpen, children }) => {
    return (
        <div
            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-10' : 'h-0'}`}
            style={{ transitionProperty: 'height' }}
        >
            <div className="px-4 text-left">{children}</div>
        </div>
    );
};

export { 
    Accordion, 
    AccordionItem,
    AccordionTrigger,
    AccordionContent
};