$(document).ready(function() {
    // Sample book data (replace with your actual data)
    const books = [
        { 
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 10.99,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_.jpg" 
        },
        { 
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 8.99,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" 
        },
        { 
            title: "DM THANG QUANG NGU NHU CHO",
            author: "HUNG VIP PROOO MAX",
            price: 100000,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" 
        },
        // Add more books...
    ];

    const bookList = $('#bookList');

    // Function to display book information
    function displayBooks() {
        bookList.empty(); // Clear previous listings

        books.forEach(book => {
            let bookElement = `
                <div class="col-md-4">
                    <div class="card book-card">
                        <img src="${book.imageUrl}" class="card-img-top" alt="${book.title}">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">By: ${book.author}</p>
                            <p class="card-text">Price: $${book.price}</p>
                        </div>
                    </div>
                </div>
            `;
            bookList.append(bookElement);
        });
    }

    // Initial display of books
    displayBooks();
});