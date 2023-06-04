import React, { MouseEvent, useState } from 'react';

interface MenuProps {
    onChange: (option: string, value: boolean) => void;
    id: 'heart_armadillo' | 'heart_boomer' | 'heart_chill' | 'heart_flame' | 'heart_octopus' | 'heart_spark' | 'heart_sting' | 'heart_eagle';
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
};

const Heart: React.FC<MenuProps> = ({ onChange, id, onMouseEnter,
    onMouseLeave }) => {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        onChange(id, !state);
        setState(!state);
    };

    const className = `Heart ${!state ? 'inactive' : ''} ${id}`;

    return (
        <div className={className} onClick={handleClick} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />
    );
}

export default Heart;