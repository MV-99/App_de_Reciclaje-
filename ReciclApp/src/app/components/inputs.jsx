import '@styles/Inputs.css';

export default function Input({placeholder, type, className, maxLength}) {
    return (
        <input
            placeholder={placeholder}
            type={type}
            className={className}
            maxLength={maxLength}
        />


    );
}