const Wrapper = ({ children, className="p-4 md:p-8 lg:p-16" }) => {
    return ( 
        <div className={`max-w-7xl mx-auto ${className}`}>{ children }</div>
    );
}
 
export default Wrapper;

// p-4 md:p-8 lg:p-16 