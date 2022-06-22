import playerFactory from '../player'

test('generate random coords', () => {
    let computer = playerFactory();
    computer.generateRandomCoordinates();
    computer.generateRandomCoordinates();
    computer.generateRandomCoordinates();
    expect(computer.previousMoves.length).toBe(3)
})

test('returns object with orientaiton propery', () => {
    let computer = playerFactory();
    expect(computer).toHaveProperty('chooseOrientation')
})

test('returns horizontal or vertical', () => {
    let computer = playerFactory();
    expect(computer.chooseOrientation()).toEqual('vertical')
})

test("sends the receiveAttack message to enemyBoard", () => {
    let computer = playerFactory();
    let myMock = jest.fn();
    let enemyBoard = { receiveAttack: myMock };
    computer.computerTurn(enemyBoard);
    expect(myMock.mock.calls.length).toBe(1);
  });