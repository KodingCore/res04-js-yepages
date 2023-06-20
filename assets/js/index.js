import { Library } from "./data/library.js";
import { bookList } from "./data/data-books.js";

window.addEventListener("DOMContentLoaded", function(){
    const library = document.getElementById("library");
    const discover = document.getElementById("discover");
    const titrePage = document.getElementById("titrePage");
    const tabCateg = document.getElementById("tabCateg");
    const newShelf = new Library();
    const subtitle = document.getElementById("subtitle");

    function DisplayShelf(nbrBooks){
        let i = 0;

        newShelf.load(bookList);

        for (let book of newShelf.shelf) {

            let newArticle = document.createElement("article");
            library.appendChild(newArticle);

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

            btn.addEventListener("click", SelectBook.bind(null, book));

            if(i === nbrBooks-1){
                break;
            }
            i++;
        }
    }

    function SelectBook(book){
        window.sessionStorage.setItem("title", book.title);

        discover.removeChild(discover.firstChild);

        titrePage.textContent = book.title;
        subtitle.textContent = book.title;

        let newDiscovering = document.createElement("article");
        discover.appendChild(newDiscovering);

        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", book.image);
        newDiscovering.appendChild(imageElement);

        let titreElement = document.createElement("h4");
        let titreText = document.createTextNode(book.title);
        newDiscovering.appendChild(titreElement);
        titreElement.appendChild(titreText);

        let genreElement = document.createElement("p");
        let genreText = document.createTextNode(book.genre);
        newDiscovering.appendChild(genreElement);
        genreElement.appendChild(genreText);

        let authorElement = document.createElement("p");
        let authorText = document.createTextNode("par " + book.author);
        newDiscovering.appendChild(authorElement);
        authorElement.appendChild(authorText);

        let resumeElement = document.createElement("p");
        let resumeText = document.createTextNode(book.resume);
        newDiscovering.appendChild(resumeElement);
        authorElement.appendChild(resumeText);

        console.log(book.title);
    }

    function DisplayFilters(){
        for(let categorie of newShelf.getCategories()){
            let newCategElement = document.createElement("li");
            let newCategTextNode = document.createTextNode(categorie);
            
            tabCateg.appendChild(newCategElement);
            newCategElement.appendChild(newCategTextNode);
        }
    }

    DisplayShelf(50);
    DisplayFilters();
    
})