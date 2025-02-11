const got = require('got')

/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
async function solution () {
  const urls = [
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users'
  ]
  const data = await Promise.all(urls.map(url => got(url)))
  const [todos, users] = data
    .map(response => response.body)
    .map(JSON.parse)

  const todosAccountedFor = []

  for (const user of users) {
    const completed = todos.filter(todo => {
      return (
        todo.completed === true &&
        todo.userId === user.id
      )
    }).length

    todosAccountedFor.push({
      username: user.username,
      completed
    })
  }

  return todosAccountedFor
}

module.exports = solution
