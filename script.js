// Ready to be scripted!
const myLibrary = [];

// HTML Elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const divLibrary = document.querySelector('.library');
const newBookForm = document.getElementById('newBookForm');

const btnDisplayLibrary = document.getElementById('btnDisplayLibrary');
const btnNewBookForm = document.getElementById('btnNewBookForm');



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

    addBookToLibrary(this);
}

// Step 2 stuff
function addBookToLibrary(book) {
    this.userInput = prompt(`Add "${book.title}" to your library? (y/n)`);
    if (this.userInput == 'y') {
        myLibrary.push(book);
        alert('Book added.');
    } else {
        alert('Book not added.');
    }
}

function displayLibrary() {
    if(divLibrary.innerHTML.trim().length == 0) {
        for (let i = 0; i < myLibrary.length; i++) {
            const bookCard = document.createElement('div');
            const bookCardText = document.createElement('p');
            bookCardText.textContent = myLibrary[i].title;
            bookCard.setAttribute('class', 'book card');
    
            divLibrary.appendChild(bookCard);
            bookCard.appendChild(bookCardText);
        }

        if (myLibrary.length == 0) {
            btnDisplayLibrary.textContent = 'Display library'
        } else {
            btnDisplayLibrary.textContent = 'Remove display';
        }
        
    } else {
        divLibrary.replaceChildren();
        btnDisplayLibrary.textContent = 'Display library';
    }
}

btnDisplayLibrary.addEventListener("click", displayLibrary)

// Step 4 stuff
newBookForm.style.display = 'none'; // Hide the display until NEW BOOK button is pressed
btnNewBookForm.addEventListener('click', () => {
    if (newBookForm.style.display = 'none') {
        newBookForm.style.display = 'block';
    }
});

newBookForm.addEventListener('submit', (event) => {
    // https://stackoverflow.com/questions/3547035/getting-html-form-values
    // Check link above for help completing this function
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    let newBook = new Book(formProps.title, formProps.author, formProps.pages, formProps.readStatus);
    event.preventDefault();
})


// addBookToLibrary(theHobbit);