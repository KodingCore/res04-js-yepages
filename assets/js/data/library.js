import { Book } from "./book.js";

class Library{
    #shelf;
    
    constructor(shelf){
        this.#shelf = [];
    }
    
    get shelf(){
        return this.#shelf;
    }
    
    set shelf(shelf){
        this.#shelf = shelf;
    }
    
    load(bookList){
        for(let book of bookList){
            let newBook = new Book(book.title, book.genre, book.author, book.resume, book.image);
            this.#shelf.push(newBook);
        }
    }
    
    addBook(book){
        this.#shelf.push(book);
    }
    
    removeBook(book){ //Notre méthode removeBook prend un Book en paramètre. 
        let i = 0;
        for(let bookCompare of this.#shelf){
            if(bookCompare.title === book.title && bookCompare.autor === book.autor){ //Si un Book avec le même titre et le même auteur était présent dans le tableau de l'attribut shelf
                delete this.#shelf[i]; // Elle le supprime
            }
            i++;
        }
    }
    
    findBookByTitle(title){ //Notre méthode findBookByTitle prend un titre en paramètres.
        for(let bookCompare of this.#shelf){
            if(title === bookCompare.title){ //Si un Book avec ce même titre existe dans le tableau de l'attribut shelf
                return bookCompare; // Elle le renvoie.
            }
        }
    }
    
    findBooksByAuthor(author){ //Notre méthode findBooksByAuthor prend un auteur en paramètres.
         for(let bookCompare of this.#shelf){
            if(author === bookCompare.author){ //Si un Book avec ce même auteur existe dans le tableau de l'attribut shelf
                return bookCompare; // Elle le renvoie.
            }
         }
    }
    
    findBooksByCategory(category){ //Notre méthode findBooksByCategory prend une catégorie en paramètres. 
        for(let bookCompare of this.#shelf){
            if(category === bookCompare.genre){ //Si un Book avec ce même catégorie existe dans le tableau de l'attribut shelf
                return bookCompare; // Elle le renvoie.
            }
        }
    }
    
    getCategories(){
        let tabCategories = [];
        for(let book of this.#shelf){
            if(!tabCategories.includes(book.genre)){
                tabCategories.push(book.genre);
            }
        }
        return tabCategories;
    }
    
}

export { Library }