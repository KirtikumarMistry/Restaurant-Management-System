const { useState } = require("react")

function Addtocart(props)
{
    const [count, setcount] =useState(0);

    function addcount()
    {
        setcount(count+1);
        props.cart(count+1);
    }
    function subcount()
    {
        if(count>=1)
        {
            setcount(count-1);
            props.cart(count-1);
        }
    }

    return (
        <div className="Addtocart">
            <button onClick={addcount}>
                +
            </button>
            <div className="order_count">
                {count}
            </div>
            <button onClick={subcount}>
                -
            </button>
        </div>
    )
}

export default Addtocart;