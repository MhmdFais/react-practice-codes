function List(){
    const foods = [
        {name: 'Burger', price: 100}, 
        {name: 'Pizza', price: 200}, 
        {name: 'Biryani', price: 150}, 
        {name: 'Noodles', price: 120}, 
        {name: 'Pasta', price: 180}
    ];

    const foodList = foods.map( (food, index) => <li key={index}>{food.name} - {food.price}</li>);

    return(
        <>
            <h1>Food Menu</h1>
            <ul>
                {foodList}
            </ul>
        </>
    );
}

// YOU COULD USE INDEX AS KEY BUT IT IS NOT RECOMMENDED

// IN REAL WORLD SCENARIO, YOU WILL HAVE A UNIQUE ID FOR EACH ITEM IN THE LIST
// SO, USE THAT UNIQUE ID AS KEY

export default List;