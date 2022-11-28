const name = "Mariano"
const age = 35
const developer = true
const borndate = new Date(1987,10,22)

const day = borndate.getDate()
const month = borndate.getMonth() 
const year = borndate.getFullYear()

const formatteddate = day + "/" + month + "/" + year

let book = {
    title :"Eloquent Javascript", 
    author : "Marjin Haverbeke`", 
    release: 2018, 
    url: "https://eloquentjavascript.net/"
};

console.log("Hola mi nombre es", name,"tengo",age,"años", "mi fecha de nacimiento es",formatteddate,"cuando me preguntan si soy developer les respondo",developer)

console.log("Mi libro favorito es:", book.title, "el autor es", book.author, "el año de lanzamiento es", book.release, "y la url del libro es", book.url);


