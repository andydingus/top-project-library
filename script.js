// Ready to be scripted!
const myLibrary = [];

// HTML Elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const divLibrary = document.querySelector('.library');
const newBookForm = document.getElementById('newBookForm');
const dialog = document.querySelector('dialog');
const msgParagraph = document.getElementById('message');

const btnDisplayLibrary = document.getElementById('btnDisplayLibrary');
const btnNewBookForm = document.getElementById('btnNewBookForm');
const btnClose = document.getElementById('btnClose');



// Stuff to do
// Add a button on each book’s display to change its read status. 

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

function addBookToLibrary(book) {
    this.userInput = prompt(`Add "${book.title}" to your library? (y/n)`);
    if (this.userInput == 'y') {
        myLibrary.push(book);
        alert('Book added.');
    } else {
        alert('Book not added.');
    }
}

function removeFromLibrary() {
    const divCardNode = this.parentNode;
    const bookTitleNode = this.previousElementSibling;
    const bookTitle = bookTitleNode.textContent;
    const bookIndex = myLibrary.map(bookObj => bookObj.title).indexOf(`${bookTitle}`);
    console.log(bookIndex); //Debugging
    if (bookIndex > -1) { // only splice array when item is found
        myLibrary.splice(bookIndex, 1); // 2nd parameter means remove one item only
    }
    updateDisplayLibrary(divCardNode);
    changeBtnDisplayLibrary();
}

// Purpose of this: anytime a book is removed from the library using the "Remove Library" button, this should update it accordingly
function updateDisplayLibrary(node){
    if(myLibrary.length == 0){
        divLibrary.replaceChildren();
    } else if (myLibrary.length > 0) {
        divLibrary.removeChild(node);
    }
}

function changeBtnDisplayLibrary(){
    if (myLibrary.length == 0) {
        btnDisplayLibrary.textContent = 'Display library';
    } else {
        btnDisplayLibrary.textContent = 'Remove display';
    }
}

function displayLibrary() {
    if(divLibrary.innerHTML.trim().length == 0 && myLibrary.length > 0) {
        for (let i = 0; i < myLibrary.length; i++) {
            const bookCard = document.createElement('div');
            const bookCardText = document.createElement('p');
            const removeFromLibraryButton = document.createElement('button');
            const readStatusButton = document.createElement('button');
            bookCardText.textContent = myLibrary[i].title;
            removeFromLibraryButton.textContent = 'Remove from library';
            readStatusButton.textContent = 'Change read status';
            bookCard.setAttribute('class', 'book card');
            bookCard.setAttribute('data-index-number', `${i}`);
            
            divLibrary.appendChild(bookCard);
            bookCard.appendChild(bookCardText);
            bookCard.appendChild(removeFromLibraryButton);
            bookCard.appendChild(readStatusButton);

            // Set eventListener for the removeFromLibrary button
            removeFromLibraryButton.addEventListener('click', removeFromLibrary);

            // Set eventListener for the readStatusButton
            readStatusButton.addEventListener('click', changeReadStatus);

            // If the added book has been read, it's green. If not, it's red.
            if (myLibrary[i].read == 'read'){
                bookCard.style.backgroundColor = 'green';
            } else {
                bookCard.style.backgroundColor = 'red';
            }
        }
        changeBtnDisplayLibrary();
        
    } else {
        // Stopped here. Look to replace all the alert messages with setting the text content on this element
        msgParagraph.textContent = 'There are no books in your library. Add some!';
        divLibrary.replaceChildren();
        btnDisplayLibrary.textContent = 'Display library';
    }
}

// Step 6
// Needs to toggle the Book prototype's read status
function changeReadStatus(){
    const divCardNode = this.parentNode;
    const index = divCardNode.getAttribute('data-index-number');
    console.log(`The data-index-number value is: ${index}. In myLibrary, that is the book ${myLibrary[index].title}`); // Debugging purposes
    if (myLibrary[index].read == 'read') {
        myLibrary[index].read = 'notRead';
        divCardNode.style.backgroundColor = 'red';
    } else {
        myLibrary[index].read = 'read';
        divCardNode.style.backgroundColor = 'green';
    }
}

btnDisplayLibrary.addEventListener("click", displayLibrary)

btnNewBookForm.addEventListener('click', () => {
    dialog.showModal();
});

btnClose.addEventListener('click', () => {
    dialog.close();
});

newBookForm.addEventListener('submit', (event) => {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    let newBook = new Book(formProps.title, formProps.author, formProps.pages, formProps.readStatus);
    event.preventDefault();
})



// addBookToLibrary(theHobbit);