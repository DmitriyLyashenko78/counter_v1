
type ButtonPropsType = {
    name: string
    disable: boolean
    onClick: () => void
}

export const Button = ( {name, disable, onClick}:ButtonPropsType ) => {
    return (
        <button
            className={"button"}
            disabled={disable}
            onClick={onClick}
        >
            {name}
        </button>
    );
};
