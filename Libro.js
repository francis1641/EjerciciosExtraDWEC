class Book{
    constructor(Title, Genre, Author, Read, ReadDate){
        this.Title=Title;
        this.Genre=Genre;
        this.Author=Author;
        this.Read=Read;
        this.ReadDate=ReadDate;
    }
}

class BookList{
    constructor(BooksRead, BooksNoRead, NextBook, CurrentBook, LastBook, ArrayBooks){
        this.BooksRead=BooksRead;
        this.BooksNoRead=BooksNoRead;
        this.NextBook=NextBook;
        this.CurrentBook=CurrentBook;
        this.LastBook=LastBook;
        this.ArrayBooks=new Array();
    }

    librosLeidos(){
        let contadorLibros=0;
        for(let i=0; i<this.ArrayBooks.length; i++){
            if(this.ArrayBooks[i].Read==true) contadorLibros++;
        }
        this.BooksRead=contadorLibros;
    }

    librosnoLeidos(){
        let contadorLibrosnoleidos=0;
        for(let i=0;i<this.ArrayBooks.length;i++){
            if(this.ArrayBooks[i].Read==false) contadorLibrosnoleidos++;
        }
        this.BooksNoRead=contadorLibrosnoleidos;
    }

    CurrentBook(){
        
    }

    add(Title, Genre, Author, Read){
        let fecha=Date();
        let nBook= new Book(Title, Genre, Author, Read, fecha);
        this.ArrayBooks.push(nBook);
    }

    finishCurrentBook(){

    }
}

ListaLibros= new BookList;

ListaLibros.add("Piratas", "Accion", "David", false);
ListaLibros.add("Asesinos", "Miedo", "Francis", false);
ListaLibros.add("QUIJOTE", "Novela", "Antonio", false);

ListaLibros.librosLeidos();
ListaLibros.librosnoLeidos();

