import { Paragraph } from "@/types/api";
import RenderParagraphText from "@/utils/displayUtils";
import React from "react";
import TypingText from "./renderTypingText";

interface AnimatedTitle {
    TextBefore: string;
    TextAfter: string;
    sequence: (string | number)[];
    longestText: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string | AnimatedTitle;
    children: Paragraph[];
}

const RenderModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-2 right-2 text-xl">✖</button>

                <div className="summary-title mb-4">
                    {typeof title === "string" ? (
                        <h2>{title}</h2>
                    ) : (
                        <div
                            style={{
                                position: "relative",
                                fontSize: "1rem",
                                lineHeight: "1.5",
                            }}
                        >
                            {/* Ghost text pour réserver l’espace */}
                            <div
                                aria-hidden
                                style={{
                                    visibility: "hidden",
                                    whiteSpace: "normal",
                                }}
                            >
                                <span>{title.TextBefore}</span>{" "}
                                <span>{title.longestText}</span>{" "}
                                <span>{title.TextAfter}</span>
                            </div>

                            {/* Texte visible en overlay exact */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    gap: "0.3rem",
                                }}
                            >
                                <span style={{ whiteSpace: "nowrap" }}>{title.TextBefore}</span>
                                <div
                                    style={{
                                        display: "inline-block",
                                        maxWidth: "100%",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    <TypingText
                                        texts={title.sequence.filter(e => typeof e === 'string') as string[]}
                                        longestText={title.longestText}
                                    />
                                </div>
                                <span style={{ whiteSpace: "nowrap" }}>{title.TextAfter}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="summary-display mt-2 p-4 rounded shadow">
                    <RenderParagraphText paragraphs={children} />
                </div>
            </div>
        </div>
    );
};

export default RenderModal;
