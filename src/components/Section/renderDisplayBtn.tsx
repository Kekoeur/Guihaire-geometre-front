import React from 'react';
import { DisplayBtn, TextBtn } from '@/types/api';
import RenderTextBtn from '../Type/renderTextBtn';

const RenderDisplayBtn: React.FC<DisplayBtn> = (props) => {
    return (
        <section className="display-btn">
            <h2>{props.Title}</h2>
            <div className='content'>
                {props.Button.map((Btn, index) => (
                    <RenderTextBtn key={index} {...(Btn as TextBtn)} />
                ))}
            </div>
        </section>
    );
};

export default RenderDisplayBtn;
