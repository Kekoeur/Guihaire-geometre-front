import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { HeadingSummaryComponent } from '@/types/api';
import baseImageUrl from '@/utilis/config';
import { renderParagraphText } from '@/utilis/displayUtils';

const HeadingSummary = (Component: HeadingSummaryComponent) => {
    const [sequences, setSequences] = useState<(string | number)[][]>([]);

    useEffect(() => {
        if (!Component || !Component.Summary || !Array.isArray(Component.Summary)) {
            return;
        }

        const newSequences: (string | number)[][] = Component.Summary.map((summaryItem) => {
            if (summaryItem?.Title?.TypingElt) {
                const seq: (string | number)[] = [];
                summaryItem.Title.TypingElt.forEach((item) => {
                    seq.push(item.Element);
                    seq.push(1000); // Délai après chaque élément
                });
                return seq;
            }
            return [];
        });

        setSequences(newSequences);
    }, [Component]);

    if (!Component || !Component.Title || !Component.BackgroundImage?.Image?.url) {
        return <div>Loading...</div>; // Affichez un état de chargement si les données ne sont pas encore prêtes
    }

    const backgroundImageUrl = `${baseImageUrl}${Component.BackgroundImage.Image.url}`;

    return (
        <section
            className="main-summary bg-cover bg-center bg-no-repeat min-h-[300px]"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <h1>{Component.Title}</h1>

            <div className='summary-display'>
            {Component.Summary.map((summaryItem, index) => (
                <div key={index} className="summary-item">
                    <div className="summary-title">
                      <div>{summaryItem.Title.TextBefore}</div>
                      {sequences[index]?.length > 0 ? (
                          <TypeAnimation
                              sequence={sequences[index]}
                              repeat={Infinity}
                              cursor={true}
                          />
                      ) : (
                          <div>No animation available</div>
                      )}
                      <div>{summaryItem.Title.TextAfter}</div>
                    </div>
                    <div>{renderParagraphText(summaryItem.Summary)}</div>
                </div>
            ))}
            </div>

            <div className='button-display'>
            {Component.Button.map((ButtonItem, index) => (
                <div key={index} className="button-item">
                    <a className="button" href={`${ButtonItem.RedirUrl}`}>{ButtonItem.Texte}</a>
                </div>
            ))}
            </div>
            
        </section>
    );
};

export default HeadingSummary;
