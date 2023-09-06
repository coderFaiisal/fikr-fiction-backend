### Fikr Fiction Backend

### User

    users/create-user (POST)
    users/login (POST)
    users/refreshToken (POST)

### Book

books/create-book (POST) (Auth User)
books/review/:id (POST) (Auth User | Login User)
books/ (GET)
books/:id (GET) (Details Info)
books/? search - title | author | genre or filter on genre & publication year (GET)
books/:id (PATCH) (Auth User | Author User)
books/:id (DELETE) (Auth User | Author User)

### Wish List

wishLists/create-wishList (POST)
wishLists/ (GET) (Auth User)

### Reading List

readingLists/create-readingList (POST)
readingLists/ (GET) (Auth User)
readingLists/:id (PATCH) (Auth User)
