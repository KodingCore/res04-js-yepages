import { Library } from "./data/library.js";
import { bookList } from "./data/data-books.js";

window.addEventListener("DOMContentLoaded", function(){
    const lib = document.getElementById("lib");
    
    let newShelf = new Library();
    
    newShelf.load(bookList);
    
    for (let book of newShelf.shelf) {
        
        let newArticle = document.createElement("article");
        lib.appendChild(newArticle);
        
        console.log(book.image);
        
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", book.image);
        newArticle.appendChild(imageElement);
        
        let titreElement = document.createElement("h4");
        let titreText = document.createTextNode(book.title);
        newArticle.appendChild(titreElement);
        titreElement.appendChild(titreText);
        
        let genreElement = document.createElement("p");
        let genreText = document.createTextNode(book.genre);
        newArticle.appendChild(genreElement);
        genreElement.appendChild(genreText);
        
        let authorElement = document.createElement("p");
        let authorText = document.createTextNode("par " + book.author);
        newArticle.appendChild(authorElement);
        authorElement.appendChild(authorText);
        
        let btn = document.createElement("button");
        let btnText = document.createTextNode("DECOUVRIR LE LIVRE");
        newArticle.appendChild(btn);
        btn.appendChild(btnText);

    }
    const tabCateg = document.getElementById("tabCateg");
    for(let categorie of newShelf.getCategories()){
        let newCategElement = document.createElement("li");
        let newCategTextNode = document.createTextNode(categorie);
        
        tabCateg.appendChild(newCategElement);
        newCategElement.appendChild(newCategTextNode);
    }
})