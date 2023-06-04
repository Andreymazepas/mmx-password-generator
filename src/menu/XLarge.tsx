import React from 'react';

interface XProps {
    weapon: "armadillo" | "boomer" | "chill" | "flame" | "octopus" | "spark" | "sting" | "eagle" | null;
    head: boolean;
    arm: boolean;
    body: boolean;
    leg: boolean;
};

const offset = {
    armadillo: 112,
    boomer: 224,
    chill: 336,
    flame: 448,
    octopus: 560,
    spark: 672,
    sting: 784,
    eagle: 896
}

const XLarge: React.FC<XProps> = ({ weapon, head, arm, body, leg }) => {
    const style = weapon ? {
        backgroundPositionX: `calc(-${offset[weapon]}px * 3)`,
    } : {};

    return (
        <div className="X-large-root" style={style}>
            <div className="X-large-base" style={style} />
            {head && <div className="X-large-head" style={style} />}
            {arm && <div className="X-large-arm" style={style} />}
            {body && <div className="X-large-body" style={style} />}
            {leg && <div className="X-large-leg" style={style} />}
        </div>
    );
}

export default XLarge;