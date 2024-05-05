const GigFilters = () =>{
    return(
        <div className="flex py-5 border-b w-full items-center border-stroke space-x-5 px-8 ml-3">
                <select name="amout" id="amount" className="flex rounded-full outline-0 py-2 px-4 border border-stroke w-40">
                    <option value="default">Earned amount</option>
                    <option value="100">$0 - $200</option>
                    <option value="100">$50 - $300</option>
                    <option value="100">$100 - $500</option>
                </select>
                <select name="amout" id="amount" className="flex rounded-full outline-0 py-2 px-4 border border-stroke">
                    <option value="default">Experience level</option>
                    <option value="100">$0 - $200</option>
                    <option value="100">$50 - $300</option>
                    <option value="100">$100 - $500</option>
                </select>
                <select name="amout" id="amount" className="flex rounded-full outline-0 py-2 px-4 border border-stroke">
                    <option value="default">Gig type</option>
                    <option value="100">$0 - $200</option>
                    <option value="100">$50 - $300</option>
                    <option value="100">$100 - $500</option>
                </select>
                <select name="amout" id="amount" className="flex rounded-full outline-0 py-2 px-4 border border-stroke">
                    <option value="default">Content type</option>
                    <option value="100">$0 - $200</option>
                    <option value="100">$50 - $300</option>
                    <option value="100">$100 - $500</option>
                </select>
                <select name="amout" id="amount" className="flex rounded-full outline-0 px-4 py-2 border border-stroke">
                    <option value="default">Location</option>
                    <option value="100">$0 - $200</option>
                    <option value="100">$50 - $300</option>
                    <option value="100">$100 - $500</option>
                </select>
            <hr className="border border-stroke h-7"/>
            <button className="flex rounded-full outline-0 px-4 py-2 border border-stroke">All filters</button>
        </div>
    )
}

export default GigFilters;