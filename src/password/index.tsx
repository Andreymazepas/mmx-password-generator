import Counter from "./Counter";
import { useEffect, useState } from "react";

interface PasswordScreenProps {
    receivedPassword?: number[];
}

const PasswordScreen = ({ receivedPassword }: PasswordScreenProps) => {
    const [password, setPassword] = useState(receivedPassword || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    useEffect(() => {
        setPassword(receivedPassword || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    }, [receivedPassword]);

    const handleClick = (index: number) => {
        setPassword(
            password.map((el: number, i: number) => {
                if (index === i) {
                    return el >= 8 ? 1 : el + 1;
                }
                return el;
            })
        );
    };

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
                <button
                    onClick={() => {
                        setPassword(password.map((el) => 1));
                    }}
                >
                    reset
                </button>
                <button
                    onClick={() => {
                        console.log(password);
                    }}
                >
                    debug
                </button>
                <button
                    onClick={() => {
                        setPassword(password.map((el) => Math.floor(Math.random() * 8)));
                    }}
                >
                    random
                </button>
            </div>
        </div>
    );
}

export default PasswordScreen;