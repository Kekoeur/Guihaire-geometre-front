import React from 'react';
import { DisplayGallery, MediaImage } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';

const renderDisplayGallery: React.FC<DisplayGallery> = (props)  => {
    const Component = props;
    //console.log(Component)

    return (
        <section className="gallery">
            {Component.Element.map((GalleryElt, index) => (
                <div key={index} className='gallery-item image-container'>
                    <RenderMediaImage  {... (GalleryElt.Image as MediaImage)}/>
                </div>
            ))}
                
            
        </section>
    );
};

export default renderDisplayGallery;