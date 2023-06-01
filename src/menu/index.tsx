import React, { useState } from 'react';

interface MenuProps {
    onChange: (state: MMXState) => void;
}

interface MMXState {
    [key: string]: boolean;
}

const checkboxOptions = [
    'armadillo',
    'boomer',
    'chill',
    'flame',
    'octopus',
    'spark',
    'sting',
    'eagle',
    'heart_armadillo',
    'heart_boomer',
    'heart_chill',
    'heart_flame',
    'heart_octopus',
    'heart_spark',
    'heart_sting',
    'heart_eagle',
    'sub_armadillo',
    'sub_flame',
    'sub_eagle',
    'leg',
    'head',
    'arm',
    'body',
];

const Menu: React.FC<MenuProps> = ({ onChange }) => {
    const [state, setState] = useState<MMXState>(
        checkboxOptions.reduce(
            (acc, option) => ({ ...acc, [option]: false }),
            {}
        )
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onChange(state);
    };

    const handleCheckboxChange = (option: string) => {
        setState((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };

    return (
        <div className="Menu">
            <form onSubmit={handleSubmit}>
                {checkboxOptions.map((option) => (
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Menu;
