import React, { useState } from 'react';

interface MenuProps {
    onChange: (option: string, value: boolean) => void;

};

type IParts = 'leg' | 'head' | 'arm' | 'body';

const PartsMenu: React.FC<MenuProps> = ({ onChange }) => {
    const [parts, setParts] = useState({
        leg: false,
        head: false,
        arm: false,
        body: false
    })

    const handleClick = (id: IParts) => {
        onChange(id, !parts[id]);
        setParts({ ...parts, [id]: !parts[id] });
    };

    return (
        <div className="Parts-root" >
            <div className={`Parts-menu Parts-head ${parts.head ? 'Parts-active' : ''}`} onClick={() => handleClick("head")} />
            <div className={`Parts-menu Parts-arm ${parts.arm ? 'Parts-active' : ''}`}
                onClick={() => handleClick("arm")} />
            <div className={`Parts-menu Parts-body ${parts.body ? 'Parts-active' : ''}`}
                onClick={() => handleClick("body")} />
            <div className={`Parts-menu Parts-leg ${parts.leg ? 'Parts-active' : ''}`}
                onClick={() => handleClick("leg")} />
        </div>

    );
}

export default PartsMenu;