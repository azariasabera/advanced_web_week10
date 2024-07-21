import './MyList.css';

function MyList({ header, items, updateItem }) {

    const getClassName = (clicked) => {
        if (clicked)
            return 'clicked';
    }

    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map(item => (
                    <li key={item.id} onClick={()=>updateItem(item.id)} className={getClassName(item.clicked)}
                    >{item.text}</li>
                ))}
            </ol>
        </div>
    )
}

// Alternative way to give className (very easy way)
// className={ item.clicked ? 'clicked' : '' }


export default MyList