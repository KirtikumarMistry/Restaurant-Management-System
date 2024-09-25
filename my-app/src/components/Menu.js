function Menu()
{
    const menu=[
        {"item-name" : "Paneer Butter Masala", price : "350"},
        {"item-name" : "Paneer Chilly", price : "250"},
        {"item-name" : "Butter Garlic Naan", price : "100"},
        {"item-name" : "French Fries", price : "200"},
        {"item-name" : "Buttermilk", price : "50"},
    ]

    return (
        <div>
            {
                menu.map((item) => {
                    return (
                        <div className="Menu_item">
                            <div className="item_name">
                                <h2>{item["item-name"]}</h2>
                            </div>
                            <div className="item_price">
                                Rs. {item["price"]}
                            </div>
                            <button>
                                Add
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu;