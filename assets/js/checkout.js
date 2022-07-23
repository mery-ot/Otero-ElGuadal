
const nombres = []
const telefono = []

const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTel")

const btnCargar =document.getElementById("btnCargar")
const btnCancelar =document.getElementById("btnCancelar")
const btnVer =document.getElementById("btnVer")


btnCargar.addEventListener("click", ()=> {
   nombres.push(inputNombre.value)
    console.log("Se agregó un nombre nuevo")
    // btnCancelar.click()
    inputNombre.focus()
})


btnCancelar.addEventListener("click", ()=> {
   console.log("Boton cancelar clickeado")
   inputNombre.value=""
   inputTelefono.value=""
})

btnVer.addEventListener("click", () => {
   console.log("Boton ver listado clickeado")
})

//Se agrega libreria Toastify

const toastNotification = text => {
    Toastify ({
    text:text,
    duration:2000
    }).showToast();
}

btnCargar.addEventListener("click", () => {
    if (inputNombre.value =="") {
        toastNotification("Necesitas ingresar algo!")
    }else{
        nombres.push(inputNombre.value )
        toastNotification("Se agregó un nuevo nombre")
    }
})
