import React from 'react';

interface BossProps {
    id?: 'heart_armadillo' | 'heart_boomer' | 'heart_chill' | 'heart_flame' | 'heart_octopus' | 'heart_spark' | 'heart_sting' | 'heart_eagle' | 'sub_armadillo' | 'sub_spark' | 'sub_eagle' | 'sub_flame' | null;
};

const offset = {
    heart_armadillo: 0,
    heart_boomer: 16,
    heart_chill: 32,
    heart_flame: 48,
    heart_octopus: 64,
    heart_spark: 80,
    heart_sting: 96,
    heart_eagle: 112,
    sub_armadillo: 0,
    sub_spark: 80,
    sub_eagle: 112,
    sub_flame: 48
}

const BossTitle: React.FC<BossProps> = ({ id }) => {
    const style = id ? {
        backgroundPositionY: `calc(-${offset[id]}px * 3)`,
    } : { display: 'none' };

    return (
        <div className="BossTitle" style={style} />
    );
}

export default BossTitle;