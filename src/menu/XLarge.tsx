import React from 'react';
import { IWeapons, PartMap } from '../common/types';

interface XProps {
    weapon: IWeapons | null;
    parts: PartMap;
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

const XLarge: React.FC<XProps> = ({ weapon, parts }) => {
    const style = weapon ? {
        backgroundPositionX: `calc(-${offset[weapon]}px * 3)`,
    } : {};
    const { head, arm, body, foot } = parts;

    return (
        <div className="X-large X-large-root" style={style}>
            <div className="X-large X-large-base" style={style} />
            {head && <div className="X-large X-large-head" style={style} />}
            {arm && <div className="X-large X-large-arm" style={style} />}
            {body && <div className="X-large X-large-body" style={style} />}
            {foot && <div className="X-large X-large-foot" style={style} />}
        </div>
    );
}

export default XLarge;