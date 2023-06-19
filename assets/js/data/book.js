class Book{
    #title;
    #genre;
    #author;
    
    constructor(title, genre, author){
        this.#title = title;
        this.#genre = genre;
        this.#author = author;
    }
    
    get title(){
        return this.#title;
    }
    
    get genre(){
        return this.#genre;
    }
    
    get author(){
        return this.#author;
    }
    
    set title(title){
        this.#title = title;
    }
    
    set genre(genre){
        this.#genre = genre;
    }
    
    set author(author){
        this.#author = author;
    }
}

export { Book };