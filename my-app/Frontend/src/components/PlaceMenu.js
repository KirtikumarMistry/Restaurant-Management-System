import PlaceMenuItem from "./PlaceMenuItem";

function PlaceMenu(props)
{
    const menu=props.menu;

    return (
        <div>
            {
                menu.map((item) => {
                    return <PlaceMenuItem name={item.name}></PlaceMenuItem>
                })
            }
        </div>
    )
}

export default PlaceMenu;