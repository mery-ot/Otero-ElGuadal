
const nombres = []
const telefono = []
const listadoNombres = []

const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTel")
const inputMail = document.querySelector("#inputMail")

const btnCargar = document.getElementById("btnCargar")
const btnCancelar = document.getElementById("btnCancelar")
const btnVer = document.getElementById("btnVer")




btnCargar.addEventListener("click", ()=> {
//    nombres.push(inputNombre.value)
//     console.log("Se agregó un nombre nuevo")
    // btnCancelar.click()
    // inputNombre.focus()
    // localStorage.setItem("nombres", JSON.stringify(nombres))



    const obj = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        mail: inputMail.value
    }

    listadoNombres.push(obj)
    console.log("Se agregó un nombre nuevo")
    btnCancelar.click()
    inputNombre.focus()
    localStorage.setItem("ListadoNombres", JSON.stringify(listadoNombres))
})


btnCancelar.addEventListener("click", ()=> {
   console.log("Boton cancelar clickeado")
   inputNombre.value=""
   inputTel.value=""
   inputMail.value=""

    //    swal("Are you sure?", {
    //     dangerMode: true,
    //     buttons: true,
    //   });
})

btnVer.addEventListener("click", () => {
   console.log("Boton ver listado clickeado")
   location.href = "lista.html"
})

//Se agrega libreria Toastify

const toastNotification = text => {
    Toastify ({
    text:text,
    duration:2000
    }).showToast();
}

btnCargar.addEventListener("click", () => {

    if (inputNombre.value !=="") {
    //    toastNotification("Necesitas ingresar algo!")
//    }else{
       toastNotification("Se agregó un nuevo nombre")
       nombres.push(inputNombre.value )
      
   }
})
