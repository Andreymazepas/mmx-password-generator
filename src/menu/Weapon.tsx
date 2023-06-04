import React, { MouseEvent, useState } from 'react';

interface MenuProps {
    onChange: (option: string, value: boolean) => void;
    id: 'armadillo' | 'boomer' | 'chill' | 'flame' | 'octopus' | 'spark' | 'sting' | 'eagle';
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
};

const offset = {
    armadillo: 60,
    boomer: 140,
    chill: 160,
    flame: 80,
    octopus: 20,
    spark: 120,
    sting: 40,
    eagle: 100
};

const Weapon: React.FC<MenuProps> = ({ onChange, id, onMouseEnter,
    onMouseLeave }) => {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        onChange(id, !state);
        setState(!state);
    };

    const className = `Weapon ${!state ? 'inactive' : ''} ${id}`;

    const style = {
        backgroundPositionX: !state ? '264px' : '0px',
        backgroundPositionY: `calc(-${offset[id]}px * 3)`,
    }

    return (
        <div className={className} onClick={handleClick} style={style} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />
    );
}

export default Weapon;