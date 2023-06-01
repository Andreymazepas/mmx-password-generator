const Counter = ({ num }: { num: number }) => {
    return (
        <div
            className="counter"
            style={{
                backgroundPositionX: `calc(-28 * 3 * ${num - 1}px) `,
                color: 'pink',
            }}
        ></div>
    );
};

export default Counter;