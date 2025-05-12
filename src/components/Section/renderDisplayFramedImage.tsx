import React from 'react';
import { DisplayFramedImage, FramedImg } from '@/types/api';
import RenderFramedImg from '../Type/renderFramedImg';

const renderDisplayFramedImage: React.FC<DisplayFramedImage> = (props)  => {
    const Component = props
    //console.log(Component)

    return (
        <section className="display-framed-image">
            <h2>{Component.Title}</h2>
            <div className='content'>
                {Component.Element.map((Item, index) => (   
                    <div key={index} className={`framed-image-item ${Component.FramedType.Type}-framed`}>
                        <RenderFramedImg {...(Item as FramedImg)} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default renderDisplayFramedImage;
