"use client";
import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import TypingText from "../Type/renderTypingText";
import { HeadingSummaryAnimated, Paragraph, MediaImage, DisplayBtn, TextBtn } from "@/types/api";
import baseImageUrl from "@/utils/config";
import RenderMediaImage from "../Media/renderMediaImage";
import RenderParagraphText from "@/utils/displayUtils";
import RenderTextBtn from "../Type/renderTextBtn";
import RenderModal from "../Type/renderModal";

const RenderSummaryAnimated: React.FC<HeadingSummaryAnimated> = (props) => {
    const [sequences, setSequences] = useState<(string | number)[][]>([]);
    const [longestText, setLongestTexts] = useState<string[]>([]);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!props || !props.Summary || !Array.isArray(props.Summary)) return;

        const newSequences: (string | number)[][] = [];
        const newLongestTexts: string[] = [];

        props.Summary.forEach((summaryItem) => {
            let maxText = "";
            if (summaryItem?.AnimatedTitle?.TypingElt) {
                const seq: (string | number)[] = [];
                summaryItem.AnimatedTitle.TypingElt.forEach((item) => {
                    if (item.Element.length > maxText.length) {
                        maxText = item.Element;
                    }
                    seq.push(item.Element);
                    seq.push(summaryItem.AnimatedTitle.DelayAnimation);
                });
                newSequences.push(seq);
            } else {
                newSequences.push([]);
            }
            newLongestTexts.push(maxText);
        });

        setSequences(newSequences);
        setLongestTexts(newLongestTexts);
    }, [props]);

    useEffect(() => {
        if (sectionRef.current) {
            const sectionHeight = sectionRef.current.scrollHeight;
            const windowHeight = window.innerHeight;
            console.log(sectionHeight);
            console.log(windowHeight);
            setIsOverflowing(sectionHeight > windowHeight);
        }
    }, [props, sectionRef]);

    if (!props || !props.Title || !props.Image?.Image?.url) {
        return <div>Loading...</div>;
    }

    const ImageUrl = `${baseImageUrl}${props.Image.Image.url}`;

    return (
        <section
            className={`heading relative flex flex-col justify-center items-center ${
                props.AnimatedType === "MainHeading" ? "bg-cover bg-center bg-no-repeat" : ""
            }`}
            style={{
                backgroundImage: props.AnimatedType === "MainHeading" ? `url(${ImageUrl})` : "none",
            }}
        >
            <div ref={sectionRef} className={`heading-content ${isOverflowing ? "max-w-3xl" : "max-w-5xl"}`}>
                <h1>{props.Title}</h1>
                <div>
                    {props.Summary.map((summaryItem, index) => (
                        <div key={index} className="summary-item typewriter-container">
                            <div
                                className="summary-title"
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    fontSize: "1rem",
                                    lineHeight: "1.5",
                                }}
                            >
                                {/* Fantôme en relative : alloue exactement la place occupée */}
                                <div
                                    style={{
                                    visibility: "hidden",
                                    pointerEvents: "none",
                                    userSelect: "none",
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                    }}
                                >
                                        <span>{summaryItem.AnimatedTitle.TextBefore} </span>
                                        <span className="longest-typing">{longestText[index]}</span>
                                        <span> {summaryItem.AnimatedTitle.TextAfter}</span>
                                </div>

                                {/* Conteneur visible en absolute par-dessus */}
                                <div
                                    style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                    }}
                                >
                                    <div className="typing-wrapper">
                                        <span>{summaryItem.AnimatedTitle.TextBefore} </span>
                                        <TypingText
                                        texts={summaryItem.AnimatedTitle.TypingElt.map((e) => e.Element)}
                                        longestText={longestText[index]}
                                        />
                                        <span> {summaryItem.AnimatedTitle.TextAfter}</span>
                                    </div>
                                </div>
                            </div>


                            {isOverflowing ? (
                                <button onClick={() => setOpenModalIndex(index)}>En voir plus +</button>
                            ) : (
                                <div className="summary-display">
                                    <RenderParagraphText paragraphs={summaryItem.Summary as Paragraph[]} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {props.Button?.length > 0 && (
                    <div className="button-display">
                        {props.Button.map((ButtonItem, index) => (
                            <RenderTextBtn key={index} {...(ButtonItem as TextBtn)} />
                        ))}
                    </div>
                )}
            </div>

            {props.AnimatedType !== "MainHeading" && (
                <div className="absolute inset-0 z-0 image-container">
                    <RenderMediaImage {...(props.Image as MediaImage)} />
                </div>
            )}

            {openModalIndex !== null && (
                <RenderModal
                    isOpen={true}
                    onClose={() => setOpenModalIndex(null)}
                    title={{
                        TextBefore: props.Summary[openModalIndex].AnimatedTitle.TextBefore,
                        TextAfter: props.Summary[openModalIndex].AnimatedTitle.TextAfter,
                        sequence: sequences[openModalIndex],
                        longestText: longestText[openModalIndex],
                    }}
                >
                    {props.Summary[openModalIndex].Summary as Paragraph[]}
                </RenderModal>
            )}
        </section>
    );
};

export default RenderSummaryAnimated;
