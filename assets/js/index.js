import { Library } from "./data/library.js";
import { bookList } from "./data/data-books.js";

window.addEventListener("DOMContentLoaded", function(){
    const library = document.getElementById("library");
    const discover = document.getElementById("discover");
    const relations = document.getElementById("relations");
    const filter = document.getElementById("filter");
    const titrePage = document.getElementById("titrePage");
    const subtitleMain = document.getElementById("subtitleMain");
    const filterTitle = document.getElementById("filterTitle");
    const filterTitleSpan = document.getElementById("filterTitleSpan");
    const tabCateg = document.getElementById("tabCateg");
    const newShelf = new Library();
    const subtitle = document.getElementById("subtitle");
    const relationtitle = document.getElementById("relationtitle");
    const relationtitleSpan = document.getElementById("relationtitleSpan");
    const lastBtn = document.getElementById("lastBtn");
    relationtitle.style.display = "none";
    lastBtn.style.display = "none";
    filterTitle.style.display = "none";

    function DisplayShelf(nbrBooks){
        let i = 0;

        newShelf.load(bookList);

        for (let book of newShelf.shelf) {

            let newArticle = document.createElement("article");
            library.appendChild(newArticle);

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
        discover.style.display = "unset";
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

        let genreElement = document.createElement("h5");
        let genreText = document.createTextNode(book.genre);
        newDiscovering.appendChild(genreElement);
        genreElement.appendChild(genreText);

        let authorElement = document.createElement("h6");
        let authorText = document.createTextNode("par " + book.author);
        newDiscovering.appendChild(authorElement);
        authorElement.appendChild(authorText);

        let resumeElement = document.createElement("p");
        let resumeText = document.createTextNode(book.resume);
        newDiscovering.appendChild(resumeElement);
        resumeElement.appendChild(resumeText);

        GenreRelation(book);
    }

    function DisplayFilters(){
        for(let categorie of newShelf.getCategories()){
            let newCategElement = document.createElement("li");
            let newCategTextNode = document.createTextNode(categorie);
            
            tabCateg.appendChild(newCategElement);
            newCategElement.appendChild(newCategTextNode);
            
            newCategElement.addEventListener("click", function(){
                while (filter.firstChild) {
                    filter.removeChild(filter.firstChild);
                }

                lastBtn.style.display = "unset";
                filter.style.display = "flex";
                filterTitle.style.display = "unset";
                discover.style.display = "none";
                relations.style.display = "none";
                library.style.display = "none";
                relationtitle.style.display = "none";
                subtitleMain.style.display = "none";
                filterTitleSpan.textContent = newCategElement.textContent;
                for(let book of newShelf.shelf){
                    if(book.genre === newCategElement.textContent){
                        console.log(newCategElement.textContent);
                        let newArticle = document.createElement("article");
                        filter.appendChild(newArticle);

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
                    }
                }
            })
        }

        lastBtn.addEventListener("click", function(){
            lastBtn.style.display = "none";
            library.style.display = "flex";
            relationtitle.style.display = "none";
            discover.style.display = "none";
            relations.style.display = "none";
            filter.style.display = "none";
            filterTitle.style.display = "none";
        })
    }

    DisplayShelf(50);
    DisplayFilters();
    
    function GenreRelation(book){
        relations.style.display = "flex";
        while (relations.firstChild) {
            relations.removeChild(relations.firstChild);
        }
                filter.style.display = "none";
                filterTitle.style.display = "none";
                lastBtn.style.display = "unset";
                library.style.display = "none";
                relationtitle.style.display = "unset";
        relationtitleSpan.textContent = book.genre;

        let i = 0;

        for(let oneBook of newShelf.shelf){
            if(oneBook.genre === book.genre && oneBook.title != book.title){
                let newArticle = document.createElement("article");
                relations.appendChild(newArticle);

                let imageElement = document.createElement("img");
                imageElement.setAttribute("src", oneBook.image);
                newArticle.appendChild(imageElement);

                let titreElement = document.createElement("h4");
                let titreText = document.createTextNode(oneBook.title);
                newArticle.appendChild(titreElement);
                titreElement.appendChild(titreText);

                let genreElement = document.createElement("p");
                let genreText = document.createTextNode(oneBook.genre);
                newArticle.appendChild(genreElement);
                genreElement.appendChild(genreText);

                let authorElement = document.createElement("p");
                let authorText = document.createTextNode("par " + oneBook.author);
                newArticle.appendChild(authorElement);
                authorElement.appendChild(authorText);

                let btn = document.createElement("button");
                let btnText = document.createTextNode("DECOUVRIR LE LIVRE");
                newArticle.appendChild(btn);
                btn.appendChild(btnText);

                btn.addEventListener("click", SelectBook.bind(null, oneBook));
                i++;
            }
            if(i === 3){
                break;
            }
        }

        lastBtn.addEventListener("click", function(){
            lastBtn.style.display = "none";
            library.style.display = "flex";
            relationtitle.style.display = "none";
            discover.style.display = "none";
            relations.style.display = "none";
        })
    }
})