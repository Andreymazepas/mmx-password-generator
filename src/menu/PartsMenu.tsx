import React from 'react';
import { IParts, PartMap } from '../common/types';

interface MenuProps {
    onChange: (option: string, value: boolean) => void;
    parts: PartMap;
};


const PartsMenu: React.FC<MenuProps> = ({ onChange, parts }) => {

    const handleClick = (id: IParts) => {
        onChange(id, !parts[id]);
    };

    const { head, arm, body, foot } = parts;

    return (
        <div className="Parts-root" >
            <div className={`Parts-menu Parts-head ${head ? 'Parts-active' : ''}`} onClick={() => handleClick("head")} />
            <div className={`Parts-menu Parts-arm ${arm ? 'Parts-active' : ''}`}
                onClick={() => handleClick("arm")} />
            <div className={`Parts-menu Parts-body ${body ? 'Parts-active' : ''}`}
                onClick={() => handleClick("body")} />
            <div className={`Parts-menu Parts-leg ${foot ? 'Parts-active' : ''}`}
                onClick={() => handleClick("foot")} />
        </div>

    );
}

export default PartsMenu;