import { useState } from 'react';
import CustomerPage from './CustomerPage';
import Manager from './Manager';

function HomePage() {
    const [userlogin, setuserlogin] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleLogin = async () => {
        try
        {
            // Fetch the /login API
            const loginResponse = await fetch('http://localhost:5000/login', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const loginData = await loginResponse.json();
            console.log(loginData);

            // Check if login was successful
            if (loginData.status === true) {
                setuserlogin(true);

                // Fetch the next API based on the loginData.identity
                const userResponse = await fetch(`http://localhost:5000/${loginData.identity}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const userData = await userResponse.json();
                setUserData(userData);
            }
            else
            {
                setuserlogin(false);
                console.log("Login failed.");
            }
        } 
        catch (error) 
        {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>
                Fetch User Info
            </button>
            <Manager></Manager>
        </div>
    );
}

export default HomePage;
