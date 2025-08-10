'use client';

import React from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

const CustomCursor: React.FC = () => {
    const mousePosition = useMousePosition();

    return (
        <>
            {/* Main cursor */}
            <div
                className="fixed w-6 h-6 border-2 border-crimson-red rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {/* Inner dot */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-crimson-red rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

                {/* Rotating outer ring */}
                <div className="absolute inset-0 border border-electric-blue rounded-full animate-spin opacity-50" style={{ animationDuration: '3s' }} />
            </div>

            {/* Trailing particles */}
            <div
                className="fixed w-2 h-2 bg-crimson-red rounded-full pointer-events-none z-40 opacity-60 animate-pulse"
                style={{
                    left: mousePosition.x - 20,
                    top: mousePosition.y - 10,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.3s ease-out, top 0.3s ease-out',
                }}
            />
            <div
                className="fixed w-1 h-1 bg-electric-blue rounded-full pointer-events-none z-40 opacity-40 animate-pulse"
                style={{
                    left: mousePosition.x - 40,
                    top: mousePosition.y - 20,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.5s ease-out, top 0.5s ease-out',
                    animationDelay: '0.5s',
                }}
            />
        </>
    );
};

export default CustomCursor;