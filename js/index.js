// // const myLibrary = [];
// // const body = document.querySelector("body");
// // const newBookBtn = document.getElementById("newBook");
// // const color = '#10b981';
// // const formCon = document.querySelector(".formCon")
// // let isClicked = true;
// // let form = document.querySelector("form");
// // const submitBtn = document.querySelector(".submit")

// // function Book(title, author, pages, read) {
// //     this.title = title;
// //     this.author = author;
// //     this.pages = pages;
// //     this.read = read;
// // }

// // function addBookToLibrary(title, author, pages, read) {
// //     let book = new Book(title, author, pages, read);
// //     myLibrary.push(book);
// //     console.log(myLibrary);
// // }

// // let book1 = addBookToLibrary('1984', 'George Orwell', '102', 'no')
// // // let book2 = addBookToLibrary('A Little Life', 'Hanya Yanga', '190', 'yes')

// // function displayBook() {
// //     for(let i = 0; i < myLibrary.length; i++) {
// //         let newDiv = document.createElement("div");
// //         newDiv.classList.add('card');
// //         body.appendChild(newDiv);
// //         newDiv.style.display = 'grid';
// //         newDiv.style.gridTemplateColumns = '1fr';
// //         newDiv.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
// //         newDiv.style.height = '200px';
// //         newDiv.style.justifyContent = 'center'
// //         newDiv.style.alignItems = 'center'
// //         newDiv.style.backgroundColor = color
// //         newDiv.style.borderRadius = '20px'
// //         newDiv.style.width = '200px'
// //         newDiv.style.padding = '10px'
// //         newDiv.style.border = '5px solid white'

// //         let book = myLibrary[i];
// //         let title = document.createElement("p");
// //         let author = document.createElement("p");
// //         let pages = document.createElement("p");
// //         let read = document.createElement("p");
// //         newDiv.append(title, author, pages, read)
// //         title.textContent = `Title: ${book.title}`;
// //         author.textContent = `Author: ${book.author}`;
// //         pages.textContent = `Pages: ${book.pages}`;
// //         read.textContent = `Read: ${book.read}`;
// //     }
// // }

// // newBookBtn.addEventListener('click', function () {
// //     if(isClicked === true) {
// //         formCon.style.display = 'block'
// //         isClicked = false
// //     }
// //     else if(isClicked === false) {
// //         formCon.style.display = 'none'
// //         isClicked = true
// //     }
// // })

// // form.addEventListener("submit", function(event) {
// //     event.preventDefault();

// //     const title = document.querySelector("#title").value;
// //     const author = document.querySelector("#author").value;
// //     const pages = document.querySelector("#pages").value;
// //     const read = document.querySelector("#read").value;
// //     addBookToLibrary(title, author, pages, read);
// // })

// // submitBtn.addEventListener("click", displayBook);










// const main = document.querySelector(".main");
// const newBookBtn = document.querySelector(".newBook");
// const form = document.querySelector("form");
// const submit = document.querySelector(".submit");


// let myLibrary = [];
// //function to create an array with the information giving
// function CreateBook(title, author, pages, status){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
// }
// //store the new books in the library array
// function addBookToLibrary(title, author, pages, status){
//     let book = new CreateBook(title, author, pages, status);
//     myLibrary.push(book);
// }
// //test
// addBookToLibrary(123,123,123,123)
// addBookToLibrary(123,123,123,123)


// //function to display the current items in library
// function displayCard(){
//     for(let i = 0; i < myLibrary.length; i++){
//         let card = document.createElement("div");
//         card.classList.add("card");
//         main.appendChild(card);

//         let book = myLibrary[i]
//         let title = document.createElement("p");
//         let author = document.createElement("p");
//         let pages = document.createElement("p");
//         let status = document.createElement("p");

//         card.append(title, author, pages, status)

//         title.textContent = `title: ${book.title}`;
//         author.textContent = `author: ${book.author}`;
//         pages.textContent = `pages: ${book.pages}`;
//         status.textContent = `status: ${book.status}`;
//     }
// }
// displayCard();
// let clicked = false;
// newBookBtn.addEventListener("click", function(){
//     if(clicked === true){
//         form.style.display = "flex";
//         form.style
//         clicked = false;
//     }else if(clicked === false) {
//         form.style.display = "none"
//         clicked = true
//     }
    
// })

// submit.addEventListener("click", function(event){
//     event.preventDefault();
//     const title = document.querySelector("title");
//     const author = document.querySelector("author")
//     const pages = document.querySelector("pages");
//     const status = document.querySelector("status");

    
//     let book = new CreateBook(title, author, pages, status)
//     newCard = document.createElement("div");
//     newCard.classList.add("card")
//     main.appendChild(newCard)
//     let titlep = document.createElement("p");
//     let authorp = document.createElement("p");
//     let pagesp = document.createElement("p");
//     let statusp = document.createElement("p");
//     newCard.append(titlep, authorp, pagesp, statusp)

    
//     console.log(book)
// })

//array to store the books
let MyLibrary = [
    {title: "HeHeHeHa", author: "BarbKing", pages: "69", read: "NO"},
    {title: "Tabarnak", author: "CartierDePomme", pages: "2093", read: "YES"}
];

//constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//takes argement and creates a new object and pushes it to myLibrary array.
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    MyLibrary.push(newBook)
    console.log(MyLibrary)
}

function displayBook() {
    const display = document.querySelector(".display");
    //clear container 
    display.innerHTML = "";

    MyLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>read: ${book.read}</p>
        <button class="rm" onclick="removeBook(${index})">Remove</button>`;

        display.appendChild(bookCard);
    });
}

//function to remove a book 
function removeBook(index) {
    MyLibrary.splice(index, 1);
    displayBook();
}

displayBook();

const addBtn = document.querySelector(".add");

addBtn.addEventListener("click", function() {
    const formContainer = document.querySelector(".formContainer");

    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else{
        formContainer.style.display = 'none';
    }
});

const form = document.querySelector("form");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author =  document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    addBookToLibrary(title, author, pages, read)
    displayBook();
    
})