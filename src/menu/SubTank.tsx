import React, { MouseEvent, useState } from 'react';
import { ISubs } from '../common/types';

interface STProps {
    onChange: (option: ISubs, value: boolean) => void;
    id: ISubs;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
    active?: boolean;
};

const SubTank: React.FC<STProps> = ({ onChange, id, onMouseEnter,
    onMouseLeave, active }) => {


    const handleClick = () => {
        onChange(id, !active);
    };

    const className = `SubTank ${!active ? 'ST-inactive' : ''} ${id}`;

    return (
        <div className={className} onClick={handleClick} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />
    );
}

export default SubTank;