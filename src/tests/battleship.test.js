import battleshipFactory from '../battleship'   

test('shows battleship name', () => {
    const submarine = battleshipFactory("submarine", 4);
    expect(submarine).toHaveProperty("name")
    expect(submarine.name).toBe("submarine")
})

test('shows battleship length', () => {
    const cruiser = battleshipFactory('cruiser', 3);
    expect(cruiser.length).toBe(3)
})

test('shows battleship has hit and isSunk methods', () => {
    const carrier = battleshipFactory("carrier", 5);
    expect(carrier).toHaveProperty('hit');
    expect(carrier).toHaveProperty('isSunk');
})


test('shows if battleship isSunk', () => {
    const corvette = battleshipFactory('corvette', 3);
    expect(corvette.isSunk()).toBe(false)
})

test('shows if battleship isSunk when all positions hit', () => {
    const frigate = battleshipFactory('frigate', 3)
    frigate.hit(0);
    frigate.hit(1);
    frigate.hit(2);
    expect(frigate.isSunk()).toBe(true);
})

test('shows battleship is not sunk despite being hit once', () => {
    const destroyer = battleshipFactory('destroyer', 5)
    destroyer.hit(2)
    expect(destroyer.isSunk()).toBe(false)
})