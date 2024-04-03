// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let employees = document.getElementById('employees')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0
let empcount = document.getElementById("empCount")
currentCount = innerHTML =`(${count})`
empCount.innerHTML =`(${count})`

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let newID = document.getElementById('id').value
    let newName = document.getElementById('name').value
    let newExtension = document.getElementById('extension').value
    let newEmail = document.getElementById('email').value
    let newDepartment = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let selectedTable = document.getElementById('employees')
    let row = selectedTable.insertRow(1)
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExtension = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDepartment = row.insertCell()
    let cellDelete = row.insertCell()
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let id = document.createTextNode(newID)
    cellID.appendChild(id)
    let name = document.createTextNode(newName)
    cellName.appendChild(name)
    let extension = document.createTextNode(newExtension)
    cellExtension.appendChild(extension)
    let email = document.createTextNode(newEmail)
    cellEmail.appendChild(email)
    let department = document.createTextNode(newDepartment)
    cellDepartment.appendChild(department)
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    let focus = document.getElementById('id')
    focus.focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    ++count
    empCount.innerHTML =`(${count})`
})

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
             employees.deleteRow(e.target.closest('tr').rowIndex)
             --count
             empCount.innerHTML =`(${count})`
        }
    }
})