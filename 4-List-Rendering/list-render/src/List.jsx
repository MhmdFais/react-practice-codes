function List(){
    const foods = [
        {name: 'Burger', price: 100}, 
        {name: 'Pizza', price: 200}, 
        {name: 'Biryani', price: 150}, 
        {name: 'Noodles', price: 120}, 
        {name: 'Pasta', price: 180},
        {name: 'Parotta', price: 50},
        {name: 'Dosa', price: 40},
    ];

    // sort by price
    //foods.sort( (a, b) => a.price - b.price);

    // sort by name
    //foods.sort( (a, b) => a.name.localeCompare(b.name));

    // filter by price > 100 and add a new array
    const filteredFoods = foods.filter( (food) => food.price > 100);

    const filteredFoodList = filteredFoods.map( (food, index) => <li key={index}>{food.name} - {food.price}</li>);

    // ALL FOODS
    const foodList = foods.map( (food, index) => <li key={index}>{food.name} - {food.price}</li>);

    return(
        <>
            <h1>Food Menu</h1>
            <ul>
                {foodList}
            </ul>
            <h1>Foods which are above Rs.100 </h1>
            <ul>
                {filteredFoodList}
            </ul>
        </>
    );
}

// YOU COULD USE INDEX AS KEY BUT IT IS NOT RECOMMENDED

// IN REAL WORLD SCENARIO, YOU WILL HAVE A UNIQUE ID FOR EACH ITEM IN THE LIST
// SO, USE THAT UNIQUE ID AS KEY

export default List;