import MyList from './MyList';
import {useState} from 'react';

const MyContainer = () => {
   const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
   ]);

    const onClick = () => {
        const textarea = document.getElementById('textarea');
        const text = textarea.value;
        const newItems = [...items, { id: items.length + 1, text }];
        setItems(newItems);
        textarea.value = '';
    }
        

  return (
    <div>
        <h1>My Container</h1>
        <textarea id='textarea' placeholder='Add item'></textarea>
        <button onClick={onClick}>Add</button>

        {/* Passing props to MyList component*/}
        <MyList 
            header="Really epic list component"
            items={items}
        />
    </div>
  )
}

export default MyContainer