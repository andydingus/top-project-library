// Ready to be scripted!
const myLibrary = [];

// HTML Elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const divLibrary = document.querySelector('.library');
const btnDisplayLibrary = document.getElementById('btnDisplayLibrary');
const btnAddBook = document.getElementById('btnAddBook');



// Stuff to do
// 1̶)̶ C̶r̶e̶a̶t̶e̶ f̶u̶n̶c̶t̶i̶o̶n̶ t̶h̶a̶t̶ c̶a̶n̶ t̶a̶k̶e̶ u̶s̶e̶r̶'̶s̶ i̶n̶p̶u̶t̶ a̶n̶d̶ s̶t̶o̶r̶e̶ t̶h̶e̶ n̶e̶w̶ b̶o̶o̶k̶ o̶b̶j̶e̶c̶t̶s̶ i̶n̶t̶o̶ a̶n̶ a̶r̶r̶a̶y̶ 
// 2) Create another function that loops through the array and displays each book on the page (either through a "table" or a "card")

function Book(title, author, pages, read) {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    };
}

// Step 2 stuff
function addBookToLibrary() {
    this.userInput = prompt('Add to your library?');
    if (this.userInput == 'y') {
        myLibrary.push(theHobbit);
        alert('Book added.');
    } else {
        alert('Book not added.');
    }
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.textContent = myLibrary[i].title;
        bookCard.setAttribute('class', 'book card');
        divLibrary.appendChild(bookCard);
    }
    
    
}

// Step 3 stuff
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const theGiver = new Book("The Giver", "Lois Lowry", 179, "read");
const theBFG = new Book("The B.F.G.", "Roald Dahl", 208, "not read yet");

// Manually adding to the library
myLibrary.push(theHobbit);
myLibrary.push(theBFG);
myLibrary.push(theGiver);

btnDisplayLibrary.addEventListener("click", displayLibrary)

// Step 4 stuff
btnAddBook.addEventListener("click", addBookToLibrary);


// addBookToLibrary(theHobbit);