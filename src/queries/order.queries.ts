export const dbQueries = {
  insertOrder:
    'INSERT INTO orders (buyer_id, product_id, quantity) VALUES ($1, $2, $3)',
  selectOrdersByUserId: 'SELECT * FROM orders WHERE buyer_id = $1',
};
