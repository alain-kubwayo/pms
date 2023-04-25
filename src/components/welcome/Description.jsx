const Description = () => {
    return ( 
        <div class="text-center lg:text-left">
            <h1 className="mb-4 text-4xl font-extrabold text-center text-tertiary lg:text-left">PMS</h1>
            <div className="space-y-4 text-lg text-tertiary lg:space-y-7">
                <p>Managing projects has never been easy</p>
                <p>With PMS, you can manage either a single or multiple projects in a single place.</p>
                <p>With PMS, you can:</p>
                <ul className="pl-4">
                    <li>Track individual progress</li>
                    <li>Track teams' progress</li>
                    <li>And ship projects in time!</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Description;