const DefaultButton = ({ description, customClasses }) => {
    return ( 
        <button 
        className={`px-2 py-2 text-tertiary ${customClasses}`}
        >{description}</button>
     );
}
 
export default DefaultButton;