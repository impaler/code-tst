const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
  expect.arrayContaining(expect.objectContaining({
    username: expect.any(String),
    completed: expect.any(Number)
  }))
})
