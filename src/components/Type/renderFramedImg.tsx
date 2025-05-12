import React from 'react';
import { FramedImg, MediaImage } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';

const renderFramedImg: React.FC<FramedImg> = (props)  => {
    const Component = props
    //console.log(Component)

    return (
        <div className='framed-img'>
            <a href={Component.RedirUrl} className='image-container'>
                <RenderMediaImage {...(Component.Image as MediaImage)} />
                <p>{Component.Text}</p>
            </a>
        </div>
    );
};

export default renderFramedImg;
