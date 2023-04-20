const Heading = ({ description, customClasses }) => {
    return ( 
        <p className={`${customClasses}`}>{description}</p>
    );
}
 
export default Heading;