import './Tables.css'; 
import Table from './Table.js';

function Tables()
{
    const table=[
        { number : 1 , status : "busy"},
        { number : 2 , status : "free"},
        { number : 3 , status : "busy"},
        { number : 4 , status : "busy"},
    ];
    
    return (
        <div className="Tables">
            <div className="Tables_heading">
                <h1>Tables</h1>
            </div>
            <div className="Tables_table">
                {
                    table.map((tab) => {
                        return (
                            <Table tabledata={tab}></Table>
                        )
                    })
                }
            </div>
            <div className="Tables_button">
            </div>
        </div>
    )
}

export default Tables;