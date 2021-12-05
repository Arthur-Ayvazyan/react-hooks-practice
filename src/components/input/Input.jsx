import styles from './input.module.scss';

const Input = (props) => {
    const {inputStyles} = styles;

    return (
        <input className={inputStyles} {...props} />
    );
}

export default Input;