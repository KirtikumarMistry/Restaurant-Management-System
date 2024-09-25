import { useState } from "react";

function ItemControl() 
{
    const [itemcount, setitemcount]=useState(0);

    function handleadd()
    {
        setitemcount(itemcount+1);
    }

    function handlesub()
    {
        if(itemcount>0)
        {
            setitemcount(itemcount-1);
        }
    }

    return (
        <div className="ItemControl">
            <div className="flex justify-center gap-x-3">
                <button
                    title="Add New"
                    class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    onClick={handleadd}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        class="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
                    >
                        <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                    </svg>
                </button>

                <span className="item-count text-3xl">{itemcount}</span>

                <button
                    title="Add New"
                    class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    onClick={handlesub}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        class="stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
                    >
                        <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
            
                    </svg>
                </button>



            </div>

        </div>
    )
}

export default ItemControl;



