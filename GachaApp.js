class Item
{
    constructor(name,ratio)
    {
        this.name =name;
        this.ratio = ratio
    }
    displayProduct()
    {
        console.log("Has obtenido: "+this.name + " with ratio: "+this.ratio);
    }
}
const listaItems = [new Item("Espada del hada llameante",0.1),new Item("Espada del Caballero maligno",0.3),new Item("Chocolate",50)];
//listaItems.forEach(e => console.log(e.displayProduct()));
//luego al apretar un boton obtener un item de forma aleatoria 
function GetRandomItems() {
    // Acceder al iframe
    var iframe = document.getElementById('nombre_del_iframe');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    const randomIndex = Math.floor(Math.random() * listaItems.length);
    const ratioRandomValue = Math.random() * 100;
    listaItems[randomIndex].displayProduct();

    for (let i = 0; i < listaItems.length; i++) {
        if (listaItems.ratio <= ratioRandomValue) {
            console.log("item seleccionado " + listaItems[i].name);
            
            // Crear elemento h3 dentro del iframe
            var txt = iframeDoc.createElement("h3");
            txt.innerHTML = listaItems[i].name; // Asumiendo que name es el texto que quieres mostrar
            var div = iframeDoc.getElementById('panel');
            div.appendChild(txt);
            
            return;
        }
    }
}

