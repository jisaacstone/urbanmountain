SELECT order_id, customer_id, customers.email, total_price, quantity
FROM orders
JOIN (SELECT MAX(id)
