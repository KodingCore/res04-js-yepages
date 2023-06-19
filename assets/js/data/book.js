class Book{
    #title;
    #genre;
    #author;
    #resume;
    #image;
    
    constructor(title, genre, author, resume, image){
        this.#title = title;
        this.#genre = genre;
        this.#author = author;
        this.#resume = resume;
        this.#image = image;
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
    
    get resume(){
        return this.#resume;
    }
    
    get image(){
        return this.#image;
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
    
    set resume(resume){
        this.#resume = resume;
    }
    
    set image(image){
        this.#image = image;
    }
}

export { Book };