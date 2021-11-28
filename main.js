const btnToggle = document.querySelector(".toggle-btn") //Documento por favor, quiero seleccionar este elemento (boton en este caso)

btnToggle.addEventListener("click", function () { //Activamos el evento de escucha, pues son los metodos que suceden al realizar un acción
    document.getElementById("sidebar").classList.toggle("active"); //Documento selecciona un elemento por su "id"
    //Luego de eso, llama la clase del elemento para activarlos (active en css) y lo ejecuta la presionar el boton
});