const GigFilters = () =>{
    return(
        <div className="flex py-5 border-b w-full items-center justify-between border-stroke">
            <div className="flex items-center w-3/4 px-4 space-x-8">
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
            </div>
        </div>
    )
}

export default GigFilters;