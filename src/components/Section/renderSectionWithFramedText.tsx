import React from 'react';
import { Paragraph, SectionWithFramedText } from '@/types/api';
import RenderParagraphText from '@/utils/displayUtils';

const renderSectionWithFramedText: React.FC<SectionWithFramedText> = (props)  => {
    const Component = props;
    //console.log(Component)

    return (
        <section className="section-framed-text">
            <h2>{Component.Title}</h2>
            <div className='content'>
                {Component.MultipleFramedText.map((Framed, index) => (
                    <div key={index} className={`framed-text ${Component.FramedType.Type}-framed summary`}>
                        {Framed.Title && <h3 className="summary-title">{Framed.Title}</h3>}
                        <RenderParagraphText paragraphs={Framed.Text as Paragraph[]} />
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default renderSectionWithFramedText;
