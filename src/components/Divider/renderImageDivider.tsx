import React from 'react';
import { ImageDivider, MediaImage } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';

const renderImageDivider: React.FC<ImageDivider> = (props)  => {
    const Component = props
    //console.log(Component)

    return (
        <section className="image-divider image-container">
            <RenderMediaImage  {... (Component.Image as MediaImage)}/>
        </section>
    );
};

export default renderImageDivider;
