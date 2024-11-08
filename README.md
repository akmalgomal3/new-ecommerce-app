# new-ecommerce-app
Learning Nest.JS, PostgreSQL, Redis, and ElasticSearch

## End-point: register
### Register User

This endpoint allows the client to register a new user with the provided username, password, and role.

#### Request Body

- `username` (string) - The username of the user to be registered.

- `password` (string) - The password for the user account.

- `role` (string) - The role of the user (e.g., seller, buyer, admin).


#### Response

The response for this request is a JSON object with the following schema:

``` json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    },
    "username": {
      "type": "string"
    },
    "role": {
      "type": "string"
    }
  }
}

 ```
### Method: POST
>```
>/v1/users/register
>```
### Body (**raw**)

```json
{
  "username": "test2",
  "password": "test2",
  "role": "seller"
}

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login
### POST /v1/users/login

This endpoint is used to authenticate a user and obtain a token for subsequent API calls.

#### Request Body

- `username` (string) - The username of the user.

- `password` (string) - The password of the user.


#### Response

The response is in JSON format with the following schema:

``` json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "code": {
      "type": "integer"
    },
    "data": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string"
        }
      }
    },
    "error": {
      "type": "null"
    },
    "meta": {
      "type": "null"
    }
  }
}

 ```

The response contains the following keys:

- `success` (boolean) - Indicates if the request was successful.

- `code` (integer) - A code to represent the status of the request.

- `data` (object) - Contains the token for successful authentication.

  - `token` (string) - The authentication token.

- `error` (null) - Null if no error occurred.

- `meta` (null) - Null if no additional metadata is provided.
### Method: POST
>```
>/v1/users/login
>```
### Body (**raw**)

```json
{
  "username": "akmal",
  "password": "akmal"
}

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getAllUsers
### GET /v1/users

This endpoint retrieves a list of users.

#### Request

There are no request parameters for this endpoint.

#### Response

The response is in JSON format and has the following schema:

``` json
{
    "type": "object",
    "properties": {
        "success": {
            "type": "boolean"
        },
        "code": {
            "type": "integer"
        },
        "data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "username": {
                        "type": "string"
                    },
                    "password": {
                        "type": "string"
                    },
                    "role": {
                        "type": "string"
                    },
                    "created_at": {
                        "type": "string"
                    }
                }
            }
        },
        "error": {
            "type": ["string", "null"]
        },
        "meta": {
            "type": ["object", "null"]
        }
    }
}

 ```
### Method: GET
>```
>/v1/users
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer |



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: createProduct
### POST /v1/products

This endpoint is used to create a new product.

#### Request Body

- name (string, required): The name of the product.

- price (number, required): The price of the product.

- quantity (number, required): The quantity of the product.


#### Response

The response is in JSON format and follows the schema below:

``` json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "code": {
      "type": "number"
    },
    "data": {
      "type": "null"
    },
    "error": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string"
        },
        "details": {
          "type": "null"
        }
      }
    },
    "meta": {
      "type": "null"
    }
  }
}

 ```
### Method: POST
>```
>/v1/products
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer |


### Body (**raw**)

```json
{
  "name": "Product5",
  "price": 10000,
  "quantity": 10
}

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getAllProduct
### Retrieve Products

This endpoint makes an HTTP GET request to retrieve a list of products.

#### Request Body

This request does not require a request body.

#### Response Body

- `success` (boolean): Indicates if the request was successful.

- `code` (integer): A code to represent the status of the request.

- `data` (array): An array of product objects, each containing the following:

  - `id` (integer): The unique identifier of the product.

  - `name` (string): The name of the product.

  - `price` (string): The price of the product.

  - `quantity` (integer): The available quantity of the product.

  - `seller_id` (integer): The unique identifier of the seller.

  - `created_at` (string): The timestamp of when the product was created.

- `error` (null): Indicates any error that occurred during the request.

- `meta` (null): Additional metadata related to the response.


#### Example

``` json
{
    "success": true,
    "code": 0,
    "data": [
        {
            "id": 0,
            "name": "",
            "price": "",
            "quantity": 0,
            "seller_id": 0,
            "created_at": ""
        }
    ],
    "error": null,
    "meta": null
}

 ```
### Method: GET
>```
>/v1/products
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: orders
### Create a New Order

This endpoint allows you to create a new order.

#### Request Body

- productId (number): The ID of the product.

- quantity (number): The quantity of the product.


#### Response

The response is in JSON format and has the following schema:

``` json
{
    "type": "object",
    "properties": {
        "success": {
            "type": "boolean"
        },
        "code": {
            "type": "number"
        },
        "data": {
            "type": "null"
        },
        "error": {
            "type": "null"
        },
        "meta": {
            "type": "null"
        }
    }
}

 ```
### Method: POST
>```
>/v1/orders
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer |


### Body (**raw**)

```json
{
  "productId": 4,
  "quantity": 5
}

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getAllOrders
# Get Orders

This endpoint makes an HTTP GET request to retrieve a list of orders.

### Request Body

This request does not require a request body.

### Response Body

- `success` (boolean): Indicates if the request was successful.

- `code` (integer): The status code of the response.

- `data` (array): An array of order objects, each containing the following fields:

  - `id` (integer): The unique identifier of the order.

  - `buyer_id` (integer): The ID of the buyer associated with the order.

  - `product_id` (integer): The ID of the product in the order.

  - `quantity` (integer): The quantity of the product in the order.

  - `created_at` (string): The timestamp indicating when the order was created.

- `error` (null): Indicates no error in the response.

- `meta` (null): Additional metadata, if available.


### Example

``` json
{
    "success": true,
    "code": 0,
    "data": [
        {
            "id": 0,
            "buyer_id": 0,
            "product_id": 0,
            "quantity": 0,
            "created_at": ""
        }
    ],
    "error": null,
    "meta": null
}

 ```
### Method: GET
>```
>/v1/orders
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer |



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getAUsers
This endpoint retrieves user data based on the provided name parameter. The response returns a JSON object with a success status, data array containing user details, error message, and meta information if available.

``` json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "code": {
      "type": "integer"
    },
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "created_at": {
            "type": "string"
          }
        }
      }
    },
    "error": {
      "type": ["string", "null"]
    },
    "meta": {
      "type": ["object", "null"]
    }
  }
}

 ```
### Method: GET
>```
>/v1/users?name=akmal
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer |


### Query Params

|Param|value|
|---|---|
|name|akmal|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
