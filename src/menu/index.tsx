import React, { useState } from 'react';
import Weapon from './Weapon';

interface MenuProps {
    onChange: (state: MMXState) => void;
    initial?: MMXState;
}

interface MMXState {
    [key: string]: boolean;
}

type IWeapons = 'armadillo' | 'boomer' | 'chill' | 'flame' | 'octopus' | 'spark' | 'sting' | 'eagle';

const weapons: IWeapons[] = [
    'armadillo',
    'boomer',
    'chill',
    'flame',
    'octopus',
    'spark',
    'sting',
    'eagle'
];

const hearts = [
    'heart_armadillo',
    'heart_boomer',
    'heart_chill',
    'heart_flame',
    'heart_octopus',
    'heart_spark',
    'heart_sting',
    'heart_eagle'
]

const subs = [
    'sub_armadillo',
    'sub_flame',
    'sub_eagle'
]

const parts = [
    'leg',
    'head',
    'arm',
    'body'
]


const checkboxOptions = [
    [...weapons],
    [...hearts],
    [...subs],
    [...parts]
];

const Menu: React.FC<MenuProps> = ({ onChange, initial }) => {
    const [state, setState] = useState<MMXState>(
        initial || {
            armadillo: false,
            boomer: false,
            chill: false,
            flame: false,
            octopus: false,
            spark: false,
            sting: false,
            eagle: false,
            heart_armadillo: false,
            heart_boomer: false,
            heart_chill: false,
            heart_flame: false,
            heart_octopus: false,
            heart_spark: false,
            heart_sting: false,
            heart_eagle: false,
            sub_armadillo: false,
            sub_flame: false,
            sub_eagle: false,
            leg: false,
            head: false,
            arm: false,
            body: false
        }
    );

    const [hoverWeapon, setHoverWeapon] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onChange(state);
    };

    const handleChange = (option: string, value: boolean) => {
        setState({ ...state, [option]: value });

        onChange({ ...state, [option]: value });
    };

    const handleWeaponMouseEnter = (weapon: string) => {
        setHoverWeapon(weapon);
    };

    const handleWeaponMouseLeave = () => {
        setHoverWeapon(null);
    };

    return (
        <div className="Menu">
            <div className="Weapons">
                {weapons.map((weapon) => (
                    <Weapon key={weapon} id={weapon} onChange={handleChange} onMouseEnter={() => handleWeaponMouseEnter(weapon)} onMouseLeave={handleWeaponMouseLeave} />
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                {/* {checkboxOptions.map((option) => (
                    <div className="checkbox" key={option}>
                        <input
                            type="checkbox"
                            id={option}
                            name={option}
                            checked={state[option]}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
                <button type="submit">Submit</button> */}
            </form>
        </div>
    );
};

export default Menu;
