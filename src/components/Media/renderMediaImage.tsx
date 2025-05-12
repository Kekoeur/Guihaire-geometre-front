import React from 'react';
import Image from "next/image";
import { MediaImage } from '@/types/api';
import baseImageUrl from '@/utils/config';

type RenderMediaImageProps = MediaImage & {
  className?: string;
};

const RenderMediaImage: React.FC<RenderMediaImageProps> = (props) => {
    if (!props?.Image || !props.Image.url) {
        return null;
    }

    const ImageUrl = `${baseImageUrl}${props.Image.url}`;

    return (
        <Image
            src={ImageUrl}
            alt={props.ImgAlt || props.ImgTitle || "Image"}
            title={props.ImgTitle || props.ImgAlt || ""}
            fill={true}
            unoptimized={true}
            className={props.className}
        />
    );
};

export default RenderMediaImage;
