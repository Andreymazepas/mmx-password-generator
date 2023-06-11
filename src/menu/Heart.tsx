import React, { MouseEvent } from 'react';
import { IHearts } from '../common/types';

interface MenuProps {
    onChange: (option: IHearts, value: boolean) => void;
    id: IHearts;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
    active?: boolean;
};

const Heart: React.FC<MenuProps> = ({ onChange, id, onMouseEnter,
    onMouseLeave, active }) => {

    const handleClick = () => {
        onChange(id, !active);
    };

    const className = `Heart ${!active ? 'Heart-inactive' : ''} ${id}`;

    return (
        <div className={className} onClick={handleClick} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />
    );
}

export default Heart;