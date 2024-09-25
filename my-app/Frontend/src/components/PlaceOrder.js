import { useEffect, useState } from 'react';
import './PlaceOrder.css';
import PlaceMenu from './PlaceMenu';

function PlaceOrder()
{
    const [menu, setmenu]=useState([]);

    useEffect(async() => {
        await fetch('http://localhost:5000/getitem',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setmenu(data);
        })
        .catch(error => console.error(error));
    }, []);

    console.log(menu);

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Menu</h1>
            {
                menuItems.map(item => (
                    <Card key={item.id} className="mb-6 overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/3">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <CardContent className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                            <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            </div>
                            <p className="text-xl font-bold text-green-600">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2">
                            <Button 
                                variant="outline" 
                                size="icon"
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={!quantities[item.id]}
                                className="bg-red-100 hover:bg-red-200 text-red-600"
                            >
                                <MinusIcon className="h-4 w-4" />
                            </Button>
                            <span className="text-lg font-medium text-gray-700 w-8 text-center">
                                {quantities[item.id] || 0}
                            </span>
                            <Button 
                                variant="outline" 
                                size="icon"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="bg-green-100 hover:bg-green-200 text-green-600"
                            >
                                <PlusIcon className="h-4 w-4" />
                            </Button>
                            </div>
                            <Button 
                            onClick={() => addToCart(item.id)}
                            className="bg-primary hover:bg-primary/90 text-white"
                            >
                            <ShoppingCartIcon className="h-4 w-4 mr-2" />
                            Add to Cart
                            </Button>
                        </div>
                        </CardContent>
                    </div>
                    </Card>
            ))}
            <div className='wrapper'>
                < input type='text' placeholder='' />
                <span>Enter Table Number</span>
            </div>
            <div>
                <PlaceMenu menu={menu}></PlaceMenu>
            </div>
            <div>
                <button>Order Now</button>
            </div>
        </div>
    )
}

export default PlaceOrder;