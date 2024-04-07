## API Endpoints

## Authentication

#### POST /api/auth/signup

- **Description:** Creates a new user account.
- **Request Body:** JSON object containing user credentials.
- **Response:** JSON object containing user details and authentication token.

#### POST /api/auth/signin

- **Description:** Authenticates a user.
- **Request Body:** JSON object containing user credentials.
- **Response:** JSON object containing user details and authentication token.

#### POST /api/auth/google

- **Description:** Authenticates a user using Google OAuth.
- **Response:** JSON object containing user details and authentication token.

#### POST /api/auth/signout

- **Description:** Signs out a user.
- **Authorization:** Bearer token in the Authorization header.

## Listings

#### POST /api/listing/create

- **Description:** Creates a new property listing.
- **Authorization:** Bearer token in the Authorization header.
- **Request Body:** JSON object representing the new property listing.
- **Response:** JSON object representing the newly created property listing.

#### GET /api/listing/get

- **Description:** Retrieves a list of all property listings.
- **Response:** JSON array of property objects.

#### GET /api/listing/get/:id

- **Description:** Retrieves details of a specific property listing by ID.
- **Parameters:** `id`: ID of the property listing to retrieve.
- **Response:** JSON object representing the property listing.


#### POST /api/listing/update/:id

- **Description:** Updates details of a specific property listing by ID.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `id`: ID of the property listing to update.
- **Request Body:** JSON object containing updated property listing details.
- **Response:** JSON object representing the updated property listing.

#### DELETE /api/listing/delete/:id

- **Description:** Deletes a property listing by ID.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `id`: ID of the property listing to delete.
- **Response:** JSON object indicating success or failure.

## User

#### GET /api/user/:id

- **Description:** Retrieves details of a specific user by ID.
- **Parameters:** `id`: ID of the user to retrieve.
- **Response:** JSON object representing the user details.

#### PUT /api/user/update/:id

- **Description:** Updates details of a specific user by ID.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `id`: ID of the user to update.
- **Request Body:** JSON object containing updated user details.
- **Response:** JSON object representing the updated user details.

#### DELETE /api/user/:id

- **Description:** Deletes a user account by ID.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `id`: ID of the user to delete.
- **Response:** JSON object indicating success or failure.

#### GET /api/user/:id/listings

- **Description:** Retrieves a list of property listings associated with a specific user.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `id`: ID of the user.
- **Response:** JSON array of property objects.

## Wishlist

#### POST /api/wishlist/create

- **Description:** Adds a property to the user's wishlist.
- **Authorization:** Bearer token in the Authorization header.
- **Request Body:** JSON object containing property ID.
- **Response:** JSON object indicating success or failure.

#### DELETE /api/wishlist/delete/:id

- **Description:** Removes a property from the user's wishlist by ID.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `id`: ID of the wishlist item.
- **Response:** JSON object indicating success or failure.

#### GET /api/wishlist/list/:id

- **Description:** Retrieves a list of properties in the user's wishlist.
- **Authorization:** Bearer token in the Authorization header.
- **Parameters:** `userId`: ID of the user.
- **Response:** JSON array of property objects.
