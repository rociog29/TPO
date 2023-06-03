const form = document.getElementById('form')
const button = document.getElementById('enviar')

const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const cantidad = document.getElementById('cantidad')
const evento = document.getElementById('evento')
const terminos = document.getElementById('terminos')

const formIsValid = {
    nombre: false,
    email: false,
    telefono: false,
    cantidad: false,
    evento: false,
    terminos: false,
}

form.addEventListener('enviar', (e) => {
    e.preventDefault() 
    validateForm()   
})

nombre.addEventListener('change', (e) => {
    e.preventDefault()
    if(e.target.value.trim().lenght > 0) formIsValid.nombre = true
})

email.addEventListener('change', (e) => {
    e.preventDefault()
    if(e.target.value.trim().length > 0) formIsValid.email = true
})

telefono.addEventListener('change', (e) => {
    e.preventDefault()
    if(e.target.value.trim().length > 0) formIsValid.telefono = true
})

cantidad.addEventListener('change', (e) => {
    e.preventDefault()
    if(e.target.checked == true) formIsValid.cantidad = true
})

evento.addEventListener('change', (e) => {
    e.preventDefault()
    if(e.target.checked == true) formIsValid.evento = true
})


terminos.addEventListener('change', (e) => {
    formIsValid.terminos = e.target.checked
    e.target.checked ? button.removeAttribute('disabled') :
    button.setAttribute('disabled', true)
})

 const validateForm = () => {
    const formValues = object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Por favor, complete el formulario correctamente.')
 }