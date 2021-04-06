const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
  expect(actual).toEqual(expect.arrayContaining(
    Array(10).fill(expect.objectContaining({
      username: expect.any(String),
      completed: expect.any(Number)
    }))
  ))
})
