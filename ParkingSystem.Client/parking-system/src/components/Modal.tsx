import type { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
}

function Modal({
    isOpen,
    title,
    children,
    onClose,
}: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {title}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-xl text-gray-400 hover:text-gray-600"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default Modal;