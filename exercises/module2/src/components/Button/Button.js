const Button = ({ onClick, text, delta}) => {
    
     return <button data-delta={delta} onClick={onClick}>{text}</button>;
}
    
export default Button

