import React from "react";
import { HeadingSummaryBasic, Paragraph, MediaImage } from "@/types/api";
import baseImageUrl from "@/utils/config";
import RenderMediaImage from "../Media/renderMediaImage";
import RenderParagraphText from "@/utils/displayUtils";

const RenderSummaryBasic: React.FC<HeadingSummaryBasic> = (props) => {
    const Component = props;
    if (!Component || !Component.Title || !Component.Image?.Image?.url) {
        return <div>Loading...</div>; // Affiche un état de chargement si les données ne sont pas encore prêtes
    }

    // Définition des classes dynamiques
    let classType = "";

    switch(Component.BasicType) {
        case "MainHeading":
            classType = "main-summary bg-cover bg-center bg-no-repeat min-h-[300px]";
        case "SideHeadingRight":
            classType = "side-summary summary-right";
        case "SideHeadingLeft":
            classType = "side-summary summary-left";
        default:
            classType = "side-summary summary-left";
    }
    

    // Définition de l'URL d'image pour le background
    const ImageUrl = `${baseImageUrl}${Component.Image.Image.url}`;

    return (
        <section className={classType} style={Component.BasicType === "MainHeading" ? { backgroundImage: `url(${ImageUrl})` } : {}}>
            <div>
                <h1>{Component.Title}</h1>
                {/* Contenu principal */}
                <div className="summary-display">
                    {Component.Summary.map((summaryItem, index) => (
                    <div key={index} className="summary-item">
                        <div className="summary-title">
                        <h2>{summaryItem.Title}</h2>
                        </div>
                        <div>
                        <RenderParagraphText paragraphs={summaryItem.Summary as Paragraph[]} />
                        </div>
                    </div>
                    ))}
                </div>

                {/* Boutons */}
                {Component.Button?.length > 0 && (
                    <div className="button-display">
                    {Component.Button.map((ButtonItem, index) => (
                        <div key={index} className="button-item">
                        <a className="button" href={ButtonItem.RedirUrl}>
                            {ButtonItem.Text}
                        </a>
                        </div>
                    ))}
                    </div>
                )}
            </div>
            {Component.BasicType !== "MainHeading" ? (
                <div className="image-container">
                    <RenderMediaImage {...(Component.Image as MediaImage)} />
                </div>
            ) : null}

        </section>
    );
};

export default RenderSummaryBasic;