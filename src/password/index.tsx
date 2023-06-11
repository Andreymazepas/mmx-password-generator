import { IPassword } from "../common/types";
import Counter from "./Counter";
import { useEffect, useState } from "react";

interface PasswordScreenProps {
    encodedPassword?: IPassword | null;
    onChange: (password: IPassword) => void;
    invalidPassword?: boolean;
}

const PasswordScreen = ({ encodedPassword, onChange, invalidPassword }: PasswordScreenProps) => {
    const [password, setPassword] = useState<IPassword>(encodedPassword || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    useEffect(() => {
        setPassword(encodedPassword || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    }, [encodedPassword]);

    const handleClick = (index: number) => {
        const newPass = password.map((el: number, i: number) => {
            if (index === i) {
                return el >= 8 ? 1 : el + 1;
            }
            return el;
        });
        setPassword(
            newPass as IPassword
        );
        onChange(newPass as IPassword);
    };

    const reset = () => {
        setPassword(encodedPassword || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        onChange(encodedPassword || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    };

    const debug = () => {
        console.log({
            password,
            encodedPassword,
            invalidPassword
        })
    }

    return (
        <div className="container">
            {password.map((num, index) => (
                <div className="box" key={index}>
                    <div className="image-cursor" onClick={() => handleClick(index)}>
                        <Counter num={num} />
                    </div>
                </div>
            ))}
            <div className="text">
                <span>
                    <h1>
                        {invalidPassword && <p>Invalid password!</p>}
                    </h1>
                </span>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <button
                        onClick={reset}
                    >
                        reset
                    </button>
                    <button
                        onClick={debug}
                    >
                        debug
                    </button>
                </div>

            </div>
        </div>
    );
}

export default PasswordScreen;