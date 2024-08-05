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

// Part of Step 5
function removeFromLibrary() {
    // Thinking of trying to reference the text content of the <p> tag that is the sibling to the parentNode but unsure if I should go through with it
    const divCardNode = this.parentNode;
    const index = myLibrary.indexOf(divCardNode.getAttribute('data-index-number'));
    // Index is apparently -1? Check that out
    if (index > -1) { // only splice array when item is found
        myLibrary.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(index);
    console.log(myLibrary);
}

// Working on Step 5 stuff. removeFromLibraryButton doesn't get an eventListener for some reason, look to fix that
function displayLibrary() {
    if(divLibrary.innerHTML.trim().length == 0) {
        for (let i = 0; i < myLibrary.length; i++) {
            const bookCard = document.createElement('div');
            const bookCardText = document.createElement('p');
            const removeFromLibraryButton = document.createElement('button');
            bookCardText.textContent = myLibrary[i].title;
            removeFromLibraryButton.textContent = 'Remove from library';
            bookCard.setAttribute('class', 'book card');
            bookCard.setAttribute('data-index-number', `${i}`);
            
            
    
            divLibrary.appendChild(bookCard);
            bookCard.appendChild(bookCardText);
            bookCard.appendChild(removeFromLibraryButton);

            // Set eventListener for the removeFromLibrary button
            removeFromLibraryButton.addEventListener('click', removeFromLibrary)
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
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    let newBook = new Book(formProps.title, formProps.author, formProps.pages, formProps.readStatus);
    event.preventDefault();
})


// addBookToLibrary(theHobbit);