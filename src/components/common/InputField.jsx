const InputField = ({ type, placeholder }) => {
    return ( 
        <input 
            type={type} 
            placeholder={placeholder} 
            className="w-full px-2 py-2 mb-4 text-white duration-300 bg-transparent border-b border-gray-400 outline-none focus:border-tertiary placeholder:focus:text-tertiary"
        />
    );
}
 
export default InputField;