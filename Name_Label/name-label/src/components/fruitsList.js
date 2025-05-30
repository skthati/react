function FruitsList(){
    const fruits = ['apples', 'bananas', 'grapes', 'oranges']

    const mylst = fruits.map((fruit) => <h4> {fruit} </h4>)

    return mylst
}

export default FruitsList