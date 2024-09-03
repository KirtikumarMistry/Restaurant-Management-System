import './Table.css';
import Item from './Item.js';

function Table(props)
{

    return (
        <div className="Table">
            <div className="Table_number">
                    Table {`${props.tabledata.number}`}
            </div>
            <div className="Table_status" style={{
                color: props.tabledata.status === "busy" ? "green" : "blue",
            }}
            >
                Status : {`${props.tabledata.status}`}
            </div>
            <div>
                {
                    props.tabledata.status === "busy" ? <Item></Item> : null
                }
            </div>
        </div>
    )
}

export default Table;