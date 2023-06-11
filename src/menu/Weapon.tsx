import React, { MouseEvent } from 'react';
import { IWeapons } from '../common/types';

interface MenuProps {
    onChange: (option: IWeapons, value: boolean) => void;
    id: IWeapons;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
    active?: boolean;
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
    onMouseLeave, active }) => {

    const handleClick = () => {
        onChange(id, !active);
    };

    const className = `Weapon ${!active ? 'inactive' : ''} ${id}`;

    const style = {
        backgroundPositionX: !active ? '264px' : '0px',
        backgroundPositionY: `calc(-${offset[id]}px * 3)`,
    }

    return (
        <div className={className} onClick={handleClick} style={style} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />
    );
}

export default Weapon;