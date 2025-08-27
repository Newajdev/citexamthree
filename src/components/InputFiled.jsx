

const InputFiled = ({type, placeHolder, name}) => {
    return (
        <input name={name} className="InputField" type={type} placeholder={placeHolder} />
    );
};

export default InputFiled;