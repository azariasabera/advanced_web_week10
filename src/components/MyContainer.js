import MyList from './MyList';

const MyContainer = () => {
  return (
    <div>
        <h1>My Container</h1>
        <MyList 
            header="Really epic list component"
            items={[
                {id: 1, text: "Item 1"},
                {id: 2, text: "Item 2"},
            ]}
        />
    </div>
  )
}

export default MyContainer