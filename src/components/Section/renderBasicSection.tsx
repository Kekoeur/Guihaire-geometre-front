import React from 'react';
import { BasicSection, Paragraph } from '@/types/api';
import RenderParagraphText from '@/utils/displayUtils';

const renderBasicSection: React.FC<BasicSection> = (props)  => {
    const Component = props
    //console.log(Component)

    return (
        <section className="basic-section">
            <h2>{Component.Title}</h2>
            {Component.Content.map((Item, index) => (
                <div key={index}>
                    <h3>{Item.Title}</h3>
                    <RenderParagraphText paragraphs={Item.Summary as Paragraph[]} />
                </div>
            ))}
        </section>
    );
};

export default renderBasicSection;
