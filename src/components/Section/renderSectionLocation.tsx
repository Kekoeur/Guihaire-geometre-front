import React from 'react';
import RenderMediaImage from '../Media/renderMediaImage';
import { SectionLocation, MediaImage, Paragraph } from '@/types/api';
import RenderParagraphText from '@/utils/displayUtils';

const renderSectionLocation: React.FC<SectionLocation> = (props) => {
  const Component = props;

  const gpsCount = Component.RedirGPS.length;

  const getLayoutClass = () => {
    if (gpsCount % 2 === 0 && gpsCount % 3 !== 0) return 'two-per-row';
    return 'three-per-row';
  };

  return (
    <section className="location">
      <h2>{Component.Title}</h2>

      <div className="plan image-container">
        <RenderMediaImage {...(Component.Plan as MediaImage)} />
      </div>

      <div className="address">
        <h3>{Component.AddressTitle}</h3>
        <div className='address-line'>
            <div className="loader-shape-3"></div>
            <p>{Component.Address}</p>
        </div>

        <div className={`redirgps-container ${getLayoutClass()}`}>
          {Component.RedirGPS.map((ButtonItem, index) => (
            <div key={index} className="redirgps-item">
              <a href={ButtonItem.RedirUrl} className="image-container button-icon">
                <RenderMediaImage
                  {...(ButtonItem.Image as MediaImage)}
                  className=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule">
        <h3>{Component.ScheduleTitle}</h3>
        <RenderParagraphText paragraphs={Component.Schedule as Paragraph[]} />
      </div>

      <div className="location-image">
        {Component.LocationImg.map((img, index) => (
          <div key={index} className="redirgps-item image-container">
            <RenderMediaImage {...(img as MediaImage)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default renderSectionLocation;
