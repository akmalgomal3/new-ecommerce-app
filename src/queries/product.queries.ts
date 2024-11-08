export const dbQueries = {
  insertProduct:
    'INSERT INTO products (name, price, quantity, seller_id) VALUES ($1, $2, $3, $4)',
  selectAllProducts: 'SELECT * FROM products',
};
