import type { MousePosition } from "@/types";

interface CustomCursorProps {
    mousePosition: MousePosition;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition }) => (
    <div
        className="fixed w-4 h-4 border-2 border-brand-green rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
        }}
    />
);