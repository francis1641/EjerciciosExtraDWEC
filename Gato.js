var Gato={
    cansancio: 1,
    hambre: 2,
    soledad: 0,
    felicidad: 1
}

function random() {
    return Math.floor(Math.random()*(2));
  }


function darComida(){
    let resultado= random();
    //SI TOMA 0 ES QUE LE HA GUSTADO LA COMIDA SI TOMA 1 NO LE HA GUSTADO
    if(resultado==0){
        Gato.hambre--;
        Gato.felicidad++;
        console.log("Al gato le ha gustado la comida");
    }
    else{
        Gato.hambre--;
        Gato.felicidad--;
        console.log("Al gato no le ha gustado la comida");
    }
}

function dormir(){
    Gato.cansancio--;
}

function salirCalle(){
    let resultado=random();
    //SI TOMA 0 ES QUE HA SALIDO A LA CALLE SI TOMA 1 SIGNIFICA QUE SE HA PELEADO CON OTROS GATOS
    if(resultado==0){
        Gato.soledad--;
        Gato.cansancio++;
    }
    else{
        Gato.soledad--;
        Gato.felicidad--;
        Gato.cansancio++;
        console.log("Ha salido a la calle pero se ha peleado");
    }
}

function acariciar(){
    let resultado=random();
    //SI TOMA 0 ES QUE QUERIA QUE LO ACARICIARAS Y SI TOMA 1 ES QUE NO QUERIA
    if(resultado==0){
        Gato.felicidad++;
    }
    else{
        console.log("El gato no quiere que lo acaricies")
    }
}

function jugar(){
    let resultado=random();
    if(resultado==0){
        Gato.cansancio++;
        Gato.felicidad++;
        Gato.soledad--;
    }
    else{
        Gato.soledad++;
        console.log("El gato no quiere jugar");
    }
}

function estadoGato(){
    switch(Gato.cansancio){
        case 1:
            console.log("El gato esta poco cansado");
            break;
        case 2:
            console.log("El gato esta cansado");
            break;
        case 3:
            console.log("El gato esta bastante cansado");
            break;
        default:
            if(Gato.cansancio<=0) console.log("El gato no esta nada cansado");
            else console.log("El gato esta extremadente cansado");
    }

    switch(Gato.hambre){
        case 1:
            console.log("El gato tiene un poco de hambre");
            break;
        case 2:
            console.log("El gato tiene hambre");
            break;
        case 3:
            console.log("El gato tiene bastante hambre");
            break;
        default:
            if(Gato.hambre<=0) console.log("El gato no tiene hambre");
            else console.log("El gato esta desnutrido");
    }

    switch(Gato.soledad){
        case 1:
            console.log("El gato esta un poco solo");
            break;
        case 2:
            console.log("El gato esta solo");
            break;
        case 3:
            console.log("El gato esta bastante solo");
            break;
        default:
            if(Gato.soledad<=0) console.log("El gato es muy sociable");
            else console.log("El gato esta buscando la soledad iluminadora");
    }

    switch(Gato.felicidad){
        case 1:
            console.log("El gato esta animado");
            break;
        case 2:
            console.log("El gato esta bastante contento");
            break;
        case 3:
            console.log("El gato esta muy feliz");
            break;
        default:
            if(Gato.felicidad<=0) console.log("El gato esta triste y azul");
            else console.log("El gato esta euforico");
    }
}
