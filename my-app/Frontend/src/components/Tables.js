import './Tables.css'; 
import Table from './Table.js';
import { useEffect, useState } from 'react';

function Tables()
{
    const [tables, settables]=useState([]);
    
    useEffect(() => 
    {
        fetch('http://localhost:5000/gettables',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {

            settables(data);
            console.log(data);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="Tables">
            {
                tables.length===0 ? 
                <h3>No Tables Available Yet </h3> :
                <div>
                    <div className="Tables_heading">
                        <h1>Tables</h1>
                    </div>
                    <div className="Tables_table">
                        {
                            tables.map((tab) => {
                                return (
                                    <Table tabledata={tab}></Table>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Tables;