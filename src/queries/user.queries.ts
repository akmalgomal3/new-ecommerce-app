export const dbQueries = {
  insertUser:
    'INSERT INTO users (username, password, role) VALUES ($1, $2, $3)',
  selectUserByUsername: 'SELECT * FROM users WHERE username = $1',
  selectAllUsers: 'SELECT * FROM users',
  selectUsersByName: 'SELECT * FROM users WHERE username LIKE $1',
};
