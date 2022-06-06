// Selectors
var nameInput = document.querySelector('#inputName')
var emailInput = document.querySelector('#inputEmail')
var expertInput = document.querySelector('#inputExpert')
var dateInput = document.querySelector('#date-picker')
var timeInput = document.querySelector('#selectTime')
var serviceInput = document.querySelector('#inputService')
var additionalInput = document.querySelector('#additionalInfo')

var modalBody = document.querySelector('#modal_body')
var modalBody_Name = document.querySelector('#modal_body_name')
var modalBody_Date = document.querySelector('#modal_body_date')
var modalBody_Expert = document.querySelector('#modal_body_expert')
var modalBody_Service = document.querySelector('#modal_body_service')

var formButton = document.querySelector('#book_button')
var forms = document.querySelectorAll('.needs-validation')

// Variables
var list = [];
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Event Listeners
if(formButton){
    formButton.addEventListener('click', getAppointment)
}

// (() => {
//     Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//                 event.getAppointment()
//             }

//             form.classList.add('was-validated')        
//         }, false)
//     })

// })()

function getAppointment(event) {
    var values = [nameInput.value, emailInput.value, expertInput.value, serviceInput.value, dateInput.value, timeInput.value, additionalInput.value]

    list = values; 

    generateModal()
}

function generateModal() {
    if(modalBody.childNodes.length < modalBody.childNodes.length + 1) {
        modalBody_Name.innerText = "Scheduled orders for " + list[0]

        const date = new Date(list[4])

        modalBody_Date.innerText = date.toLocaleDateString("en-US", options) + " at " + list[5]

        modalBody_Expert.innerText = list[2]
        modalBody_Service.innerText = list[3]
    }
}