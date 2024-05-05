import React from "react";
import { MdAdd } from "react-icons/md";

const CreateGig = () => {
    return(
        <div className="flex items-center justify-center">
            <button className="flex text-sm bg-[#2C36F0] text-white outline-0 p-3 w-32 space-x-5 justify-center items-center rounded-xl">
                <MdAdd size={20} color="#fff" className="mr-3" />
                Create
            </button>
        </div>
    )
}

export default CreateGig;