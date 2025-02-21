"use client";
import { X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
    videoId: string;
    onClose: () => void;
}

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={handleBackdropClick}>
            <div className="relative w-full max-w-4xl px-4">
                <button onClick={onClose} className="absolute -top-10 right-4 text-white hover:text-gray-300">
                    <X className="h-6 w-6" />
                </button>
                <div className="relative aspect-video w-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        className="absolute h-full w-full rounded-lg"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );

    // 使用 createPortal 將 modal 內容渲染到 body 的最後面
    return createPortal(modalContent, document.body);
}
