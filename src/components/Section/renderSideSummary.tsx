import React from 'react';
import { SideSummary, MediaImage, Paragraph } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';
import RenderParagraphText from '@/utils/displayUtils';

const renderSideSummary: React.FC<SideSummary> = (props)  => {
    const Component = props;
    //console.log(Component)

    let classType = "";

    switch(Component.Type) {
        case "BackgroundImage":
            classType = "main-summary bg-cover bg-center bg-no-repeat min-h-[300px]";
        case "SideRight":
            classType = "side-summary summary-right";
        case "SideLeft":
            classType = "side-summary summary-left";
        default:
            classType = "side-summary summary-left";
    }

    return (
        <section className="side-summary">
            <h2>{Component.Title}</h2>
            <div className='content'>
                {Component.Summary.map((Item, index) => (
                    <div key={index} className='summary'>
                    <h3 className='summary-title'>{Item.Title}</h3>
                        <RenderParagraphText paragraphs={Item.Summary as Paragraph[]} />
                    </div>
                ))}
                <div className='image-container'>
                    <RenderMediaImage  {...(Component.SideImage as MediaImage)} />
                </div>
            </div>
                
            
        </section>
    );
};

export default renderSideSummary;

