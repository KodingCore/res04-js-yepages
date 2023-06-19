import { Book } from "./book.js";
import { Library } from "./library.js";

window.addEventListener("DOMContentLoaded", function(){
    
    const booksTab = [
        
        {
            title : "Harry Potter à l'école des sorciers",
            genre : "Fantasy jeunesse",
            author : "J.K. Rowling"
        },
        {
            title : "Cartographie des nuages",
            genre : "Science fiction adulte",
            author : "David Mitchell"
        },
        {
            title : "La communauté de l'anneau",
            genre : "Fantasy adulte",
            author : "J.R.R Tolkien"
        },
        {
            title : "Truth of the divine",
            genre : "Science fiction adulte",
            author : "Lindsay Ellis"
        },
        {
            title : "La guerre des mondes",
            genre : "Science fiction adulte",
            author : "H.G.Wells"
        }
    ];
    
    Library.load(booksTab);
    
})






/*
    Harry Potter à l'école des sorciers - Fantasy jeunesse - J.K. Rowling
    Cartographie des nuages - Science fiction adulte - David Mitchell
    La communauté de l'anneau - Fantasy adulte - J.R.R Tolkien
    Truth of the divine - Science fiction adulte - Lindsay Ellis
    La guerre des mondes - Science fiction adulte - H.G.Wells
*/