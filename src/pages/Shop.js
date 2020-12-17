import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const items = await data.json();

    console.log(items.data);
    setItems(items.data);
  }

  return (
    <div className='shop'>
      <h1>Shop</h1>
      <ul className='shop-items'>
        {items.map(item => (
          <li key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>
              {item.item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
