import React from 'react';
import { IWeapons, PartMap } from '../common/types';

interface XProps {
    weapon: IWeapons | null;
    parts: PartMap;
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

const X: React.FC<XProps> = ({ weapon, parts }) => {
    const style = weapon ? {
        backgroundPositionX: `calc(-${offset[weapon]}px * 3)`,
    } : {};
    const { head, arm, body, foot } = parts;

    return (
        <div className="X-root" style={style}>
            <div className="X X-base" style={style} />
            {head && <div className="X X-head" style={style} />}
            {arm && <div className="X X-arm" style={style} />}
            {body && <div className="X X-body" style={style} />}
            {foot && <div className="X X-foot" style={style} />}
        </div>
    );
}

export default X;