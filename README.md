### Live Link: https://fikr-fiction-backend.vercel.app/api/v1

### User

- https://fikr-fiction-backend.vercel.app/api/v1/users/create-user (POST)
- https://fikr-fiction-backend.vercel.app/api/v1/users/login (POST)
- https://fikr-fiction-backend.vercel.app/api/v1/users/refreshToken (POST)

### Book

- https://fikr-fiction-backend.vercel.app/api/v1/books/create-book (POST) (Login User)
- https://fikr-fiction-backend.vercel.app/api/v1/books/review/:id (POST) (Login User)
- https://fikr-fiction-backend.vercel.app/api/v1/books/ (GET)
- https://fikr-fiction-backend.vercel.app/api/v1/books/:id (GET) (Details Info)
- https://fikr-fiction-backend.vercel.app/api/v1/books/? search - title | author | genre or filter on genre & publication year (GET)
- https://fikr-fiction-backend.vercel.app/api/v1/books/:id (PATCH) (Auth User | Book Author)
- https://fikr-fiction-backend.vercel.app/api/v1/books/:id (DELETE) (Auth User | Book Author)

### Wish List

https://fikr-fiction-backend.vercel.app/api/v1/wishLists/create-wishList (POST) (Login User)
https://fikr-fiction-backend.vercel.app/api/v1/wishLists/ (GET) (Auth User)

### Reading List

- https://fikr-fiction-backend.vercel.app/api/v1/readingLists/create-readingList (POST) (Login User)
- https://fikr-fiction-backend.vercel.app/api/v1/readingLists/ (GET) (Auth User)
- https://fikr-fiction-backend.vercel.app/api/v1/readingLists/:id (PATCH) (Auth User)
