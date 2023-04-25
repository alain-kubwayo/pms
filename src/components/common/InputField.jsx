const InputField = ({ type, placeholder }) => {
    return ( 
        <div className="relative z-0 w-full mb-6 group">
            <input 
                type={type} 
                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-tertiary focus:outline-none focus:ring-0 focus:border-tertiary peer" placeholder=" " 
            />
            <label 
                htmlFor={placeholder} 
                className="peer-focus:font-medium absolute text-gray-500 scale-75 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-tertiary peer-focus:dark:text-tertiary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >{placeholder}</label>
        </div>
    );
}
 
export default InputField;