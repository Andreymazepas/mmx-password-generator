import React, { useState } from 'react';
import Weapon from './Weapon';
import Heart from './Heart';
import BossTitle from './BossTitle';
import SubTank from './SubTank';
import X from './X';
import XLarge from './XLarge';
import PartsMenu from './PartsMenu';
import { IHearts, IState, ISubs, IWeapons } from '../common/types';
import { hearts, subs, weapons } from '../common/common';

interface MenuProps {
    onChange: (state: IState) => void;
    state: IState;
}


const Menu: React.FC<MenuProps> = ({ onChange, state }) => {
    const [hoverWeapon, setHoverWeapon] = useState<IWeapons | null>(null);
    const [hoverItem, setHoverItem] = useState<IHearts | ISubs | null>(null);

    const handleWeaponChange = (weapon: IWeapons, value: boolean) => {
        const { weapons } = state;
        onChange({ ...state, weapons: { ...weapons, [weapon]: value } });
    };

    const handleHeartChange = (heart: IHearts, value: boolean) => {
        const { hearts } = state;
        onChange({ ...state, hearts: { ...hearts, [heart]: value } });
    };

    const handleSubChange = (sub: ISubs, value: boolean) => {
        const { subs } = state;
        onChange({ ...state, subs: { ...subs, [sub]: value } });
    };

    const handlePartsChange = (part: string, value: boolean) => {
        const { parts } = state;
        onChange({ ...state, parts: { ...parts, [part]: value } });
    };

    const handleWeaponMouseEnter = (weapon: IWeapons) => {
        setHoverWeapon(weapon);
    };

    const handleWeaponMouseLeave = () => {
        setHoverWeapon(null);
    };

    const handleItemMouseEnter = (item: IHearts | ISubs) => {
        setHoverItem(item);
    };

    const handleItemMouseLeave = () => {
        setHoverItem(null);
    };

    return (
        <div className="Menu">
            <div className="Weapons">
                {weapons.map((weapon: IWeapons) => (
                    <Weapon key={weapon} id={weapon} onChange={handleWeaponChange} onMouseEnter={() => handleWeaponMouseEnter(weapon)} onMouseLeave={handleWeaponMouseLeave} active={state.weapons[weapon]} />
                ))}
            </div>
            <div className="Subs">
                {subs.map((sub: ISubs) => (
                    <SubTank key={sub} id={sub} onChange={handleSubChange} onMouseEnter={() => handleItemMouseEnter(sub)} onMouseLeave={handleItemMouseLeave} active={state.subs[sub]} />
                ))}
            </div>
            <div className="Hearts">
                {hearts.map((heart) => (
                    <Heart key={heart} id={heart} onChange={handleHeartChange} onMouseEnter={() => handleItemMouseEnter(heart)} onMouseLeave={handleItemMouseLeave} active={state.hearts[heart]} />
                ))}
            </div>
            <BossTitle id={hoverItem} />
            <X weapon={hoverWeapon} parts={state.parts} />
            <XLarge weapon={hoverWeapon} parts={state.parts} />
            <PartsMenu onChange={handlePartsChange} parts={state.parts} />
        </div>
    );
};

export default Menu;
