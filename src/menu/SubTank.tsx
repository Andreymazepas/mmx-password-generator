import React, { MouseEvent, useState } from 'react';

interface STProps {
    onChange: (option: string, value: boolean) => void;
    id: 'sub_armadillo' | 'sub_flame' | 'sub_eagle' | 'sub_spark';
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
};

const SubTank: React.FC<STProps> = ({ onChange, id, onMouseEnter,
    onMouseLeave }) => {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        onChange(id, !state);
        setState(!state);
    };

    const className = `SubTank ${!state ? 'ST-inactive' : ''} ${id}`;

    return (
        <div className={className} onClick={handleClick} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />
    );
}

export default SubTank;