import React from 'react';
import { FramedBetweenImage, MediaImage, Paragraph } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';
import RenderParagraphText from '@/utils/displayUtils';

const renderFramedBetweenImage: React.FC<FramedBetweenImage> = (props)  => {
    const Component = props;
    //console.log(Component)

    return (
        <section className="framed-between-image">
            <div className="content">
                <div className='left-elt image image-container'>
                    <RenderMediaImage  {... (Component.LeftImage as MediaImage)}/>
                </div>
                <div className={`center-elt framed-text ${Component.FramedType.Type}-framed`}>
                    <h3>{Component.UniqueFramedText.Title}</h3>
                    <RenderParagraphText paragraphs={Component.UniqueFramedText.Text as Paragraph[]} />
                </div>
                <div className='right-elt image image-container'>
                    <RenderMediaImage  {... (Component.RightImage as MediaImage)}/>
                </div>
            </div>    
        </section>
    );
};

export default renderFramedBetweenImage;