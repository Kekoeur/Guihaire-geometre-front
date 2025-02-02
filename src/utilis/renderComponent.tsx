import React from 'react';
import HeadingSummary from '@/components/HeadingSummary'
import Location from '@/components/Location';
import { HeadingSummaryComponent, LocationComponent } from '@/types/api'; 

const renderComponent = (components: (HeadingSummaryComponent | LocationComponent)[]) => {
    return components.map((component, index) => {
        switch (component.__typename) {
            case 'ComponentSectionHeadingSummary':
                return <HeadingSummary key={index} {...component} />;
            case 'ComponentSectionLocation':
                return <Location key={index} {...component} />;
            default:
                return (
                    <div key={index}>
                        Unknown component : {component}
                    </div>
                );
        }
    });
};

export default renderComponent;
/*const renderComponent = (component, key) => {
  switch (component.__typename) {
    case "ComponentSectionHeadingSummary":
      return <HeadingSummary key={key} data={component} />;
    case "ComponentSectionLocation":
      return <LocationSection key={key} data={component} />;
    default:
      return null;
  }
};

export default renderComponent;*/
