import React from 'react';
import { LineDivider } from '@/types/api';

const renderLineDivider: React.FC<LineDivider> = (props)  => {
    const Component = props
    //console.log(Component)

    return (
        <section className="line-divider">
            <div className="line">
            </div>
        </section>
    );
};

export default renderLineDivider;
