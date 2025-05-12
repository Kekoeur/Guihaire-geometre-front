import React from 'react';
import { TextBtn } from '@/types/api';

// Définition des composants spécifiques à chaque type de bouton
const ArrowIcon = () => (
    <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
    </span>
);

const Line = () => (
    <>
        <div className="button__line"></div>
        <div className="button__line"></div>
    </>
);

const Draw = () => (
    <div className='drow-container'>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
    </div>
);

const ArrowSVG = () => (
    <div className='icon'>
        <svg className="arrow" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="arrow-path"
            ></path>
        </svg>
    </div>
);

const PaperPlane = () => (
    <div className='paper-plane-container'>
        <svg className="paper-plane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
        </svg>
    </div>
)

// Configuration des types de boutons
const buttonConfigMap: Record<
    string,
    { className: string; ElementBefore?: React.FC; ElementAfter?: React.FC }
> = {
    basic: { className: 'button1' },
    link: { className: 'button2', ElementBefore: ArrowIcon },
    //go_to: { className: 'button3', ElementBefore: Line, ElementAfter: Draw },
    explore: { className: 'button4', ElementAfter: ArrowSVG },
    explore2: { className: 'button8', ElementAfter: ArrowSVG },
    explore3: { className: 'button9', ElementAfter: ArrowSVG},
    excavated: { className: 'button5' },
    excavated2: { className: 'button6' },
    paper_plane: { className: 'button7', ElementBefore: PaperPlane },
    paper_plane2: { className: 'button10', ElementBefore: PaperPlane }
};

const RenderTextBtn: React.FC<TextBtn> = (props) => {

    const config = buttonConfigMap[props.Type] || { className: 'button1' };
    const IconComponentBefore = config.ElementBefore;
    const IconComponentAfter = config.ElementAfter;

    return (
        <a href={props.RedirUrl} className={`btn ${config.className}`}>
            <div className='button-content'>
                {IconComponentBefore && <IconComponentBefore />}
                <p 
                    className="button-text" 
                    style={{ "--text-length": `${props.Text.length}` } as React.CSSProperties}
                >
                    {props.Text}
                </p>
                {IconComponentAfter && <IconComponentAfter />}
            </div>
        </a>
    );
};

export default RenderTextBtn;
