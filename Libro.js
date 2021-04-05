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

    CurrentBook1(){
        let contador=true, posicion=0;
        //NO NOS VA CON EL OPERADOR OR NI TAMPOCO SE COMO FUNCIONA CON LA COMA
        for(let i=0; i<this.ArrayBooks.length && contador;i++){
            if(this.ArrayBooks[i].Read==false){
                 posicion=i;
                contador=false;
            }
        }
        this.CurrentBook=this.ArrayBooks[posicion];
        this.posicionCurrentBook=posicion;
         new Book(this.ArrayBooks[posicion].Title, this.ArrayBooks[posicion].Genre,
                                   this.ArrayBooks[posicion].Author, this.ArrayBooks[posicion].Read,
                                   this.ArrayBooks[posicion].ReadDate)
    }

    LastBook1(){
        let contador=false, posicion=0;
        //NO NOS VA CON EL OPERADOR OR NI TAMPOCO SE COMO FUNCIONA CON LA COMA
        for(let i=0; i<this.ArrayBooks.length, contador==true;i++){
            if(this.ArrayBooks[i].Read==true){
                 posicion=i;
                contador=true;
            }
        }
        this.LastBook= new Book(this.ArrayBooks[posicion].Title, this.ArrayBooks[posicion].Genre,
                                   this.ArrayBooks[posicion].Author, this.ArrayBooks[posicion].Read,
                                   this.ArrayBooks[posicion].ReadDate)
    }

    ponerNext(){
        this.NextBook= new Book("Capitan America", "Ciencia Ficcion", "Pepe", false, Date());
  
    }

    NextBook1(){
            //PREGUNTAR HACER PARA QUE TE LEA EL SEGUNDO FALSE

    }

    findNextBook(){
        let contador=false, posicion=0;
        //NO NOS VA CON EL OPERADOR OR NI TAMPOCO SE COMO FUNCIONA CON LA COMA
        for(let i=0; i<this.ArrayBooks.length, contador==true;i++){
            if(this.ArrayBooks[i].Read==false){
                 posicion=i;
                contador=true;
            }
        }
        this.NextBook= new Book(this.ArrayBooks[posicion].Title, this.ArrayBooks[posicion].Genre,
                                   this.ArrayBooks[posicion].Author, this.ArrayBooks[posicion].Read,
                                   this.ArrayBooks[posicion].ReadDate)
    }

    finishCurrentBook(){
        //this.CurrentBook1();
        //LastBook1();
        //NextBook1();

        this.CurrentBook.Read=true;
        this.CurrentBook.ReadDate=Date();
        this.LastBook=new Book(this.CurrentBook.Genre, this.CurrentBook.Author, this.CurrentBook.Read, this.CurrentBook.ReadDate);
        this.CurrentBook=this.NextBook;
        
        //PREGUNTAR COMO LLAMAR A UN METODO DENTRO DE OTRO METODO NO NOS FUNCIONA
        findNextBook();
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

ListaLibros.add("Piratas", "Accion", "David", true);
ListaLibros.add("Asesinos", "Miedo", "Francis", false);
ListaLibros.add("QUIJOTE", "Novela", "Antonio", false);

ListaLibros.ponerNext();

ListaLibros.CurrentBook1();
ListaLibros.LastBook1();
ListaLibros.NextBook1();


ListaLibros.finishCurrentBook();


ListaLibros.librosLeidos();
ListaLibros.librosnoLeidos();

