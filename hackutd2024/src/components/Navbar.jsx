import React from 'react';


function Navbar() {
return(
<div>
<div>
    {/*Content*/}
    <div className = "flex items-center justify-between px-8 py-4">
        <h1 className = "poppins-bold text-3xl text-amber-300">UTDFreebies</h1>
    {/*Nav*/}
    <div/>
    <div className = "poppins-semibold flex gap-5 px-2 py-1 text-2xl">
    <p>new</p>
    <p>browse</p>
    <p>upload</p>
</div>
{/*icons*/}


</div>
</div>

<hr className = "w-full border t-3 border-gray-400 border opacity-50"></hr>
</div>
);
};
export default Navbar;