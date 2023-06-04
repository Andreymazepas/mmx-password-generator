import React from 'react';

interface XProps {
    weapon: "armadillo" | "boomer" | "chill" | "flame" | "octopus" | "spark" | "sting" | "eagle" | null;
    head: boolean;
    arm: boolean;
    body: boolean;
    leg: boolean;
};

const offset = {
    armadillo: 30,
    boomer: 60,
    chill: 90,
    flame: 120,
    octopus: 150,
    spark: 180,
    sting: 210,
    eagle: 240
}

const X: React.FC<XProps> = ({ weapon, head, arm, body, leg }) => {
    const style = weapon ? {
        backgroundPositionX: `calc(-${offset[weapon]}px * 3)`,
    } : {};

    return (
        <div className="X-root" style={style}>
            <div className="X-base" style={style} />
            {head && <div className="X-head" style={style} />}
            {arm && <div className="X-arm" style={style} />}
            {body && <div className="X-body" style={style} />}
            {leg && <div className="X-leg" style={style} />}
        </div>
    );
}

export default X;