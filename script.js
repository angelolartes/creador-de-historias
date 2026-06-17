```javascript
const fotoInput = document.getElementById("foto");

fotoInput.addEventListener("change", function(event){

    const archivo = event.target.files[0];

    if(!archivo) return;

    const lector = new FileReader();

    lector.onload = function(e){

        document.getElementById("imagenAuto").src =
        e.target.result;

    };

    lector.readAsDataURL(archivo);

});

function generarFlyer(){

    document.getElementById("tituloMarca").innerText =
        document.getElementById("marca").value || "TOYOTA";

    document.getElementById("tituloModelo").innerText =
        document.getElementById("modelo").value || "COROLLA";

    document.getElementById("datoAnio").innerText =
        "Año: " +
        (document.getElementById("anio").value || "-");

    document.getElementById("datoPrecio").innerText =
        "Precio: " +
        (document.getElementById("precio").value || "-");

    document.getElementById("datoAnticipo").innerText =
        "Anticipo: " +
        (document.getElementById("anticipo").value || "-");

    document.getElementById("datoCuota").innerText =
        "Cuota: " +
        (document.getElementById("cuota").value || "-");

    const flyer = document.getElementById("flyer");

    flyer.classList.remove(
        "deportivo",
        "financiacion",
        "premium"
    );

    flyer.classList.add(
        document.getElementById("tema").value
    );

}
```
