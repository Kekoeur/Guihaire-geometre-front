import React from 'react';
import { ImageBetweenFramed, MediaImage, Paragraph } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';
import RenderParagraphText from '@/utils/displayUtils';

const renderImageBetweenFramed: React.FC<ImageBetweenFramed> = (props)  => {
    const Component = props;
    //console.log(Component)

    return (
        <section className="image-between-framed">
            <div className='content'>
                <div className={`left-elt framed-text ${Component.FramedType.Type}-framed`}>
                    <h3>{Component.LeftFramed.Title}</h3>
                    <RenderParagraphText paragraphs={Component.LeftFramed.Text as Paragraph[]} />
                </div>
                <div className='center-elt image image-container squircle'>
                    <RenderMediaImage  {... (Component.Image as MediaImage)}/>
                </div>
                <div className={`right-elt framed-text ${Component.FramedType.Type}-framed`}>
                    <h3>{Component.RightFramed.Title}</h3>
                    <RenderParagraphText paragraphs={Component.RightFramed.Text as Paragraph[]} />
                </div>
            </div>
        </section>
    );
};

export default renderImageBetweenFramed;