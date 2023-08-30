
const currentUser = JSON.parse(localStorage.getItem("allUserData"))
const usersArray = JSON.parse(localStorage.getItem("users"))

usersArray.forEach(values => {
    if (+currentUser.id === +values.id) {
        document.getElementById("name").innerText = values.Name;
    }
})

function addExpenseData() {
    
    const usersArr = JSON.parse(localStorage.getItem("users"))
    document.getElementById("table").innerHTML = ""
    const trHeading = document.createElement("tr")
    const thId = document.createElement("th")
    const thCategory = document.createElement("th")
    const thDescription = document.createElement("th")
    const thAmount = document.createElement("th")
    const thActions = document.createElement("th")
    thId.innerText = "Ex.id"
    thCategory.innerText = "Category"
    thDescription.innerText = "Description"
    thAmount.innerText = "Amount"
    thActions.innerText = "Edit/Delete"
    trHeading.append(thId)
    trHeading.append(thCategory)
    trHeading.append(thDescription)
    trHeading.append(thAmount)
    trHeading.append(thActions)
    document.getElementById("table").appendChild(trHeading)

    usersArr.forEach(values => {
        if (+currentUser.id === +values.id) {
            values.categories.forEach(category => {
                const optionCategory = document.createElement("option");
                optionCategory.innerText = category;
                document.getElementById('category').appendChild(optionCategory)
            })
            values.allExpenses.forEach(expense => {
   const tr = document.createElement("tr")
const tdId = document.createElement("td")
const tdCategory = document.createElement("td")
const tdDescription = document.createElement("td")
const tdAmount = document.createElement("td")
const tdActions = document.createElement("td")
const tdBtnEdit = document.createElement("button")

const tdBtnDelete = document.createElement("button")
tdBtnDelete.setAttribute('onclick',`removeExpense()`)
tdBtnEdit.setAttribute('onclick',`edit()`)
tdBtnEdit.innerText = "Edit"
tdBtnDelete.innerText = "Remove"
tdId.append(expense.id)
tdCategory.append(expense.category)
tdAmount.append(expense.amount)
tdDescription.append(expense.description)
tdActions.append(tdBtnEdit, tdBtnDelete)
 tr.append(tdId)
tr.append(tdCategory)
tr.append(tdDescription)
    tr.append(tdAmount)
                tr.append(tdActions)
                tdBtnEdit.style.width = "85px";
                tdBtnDelete.style.width = "85px";
                document.getElementById("table").appendChild(tr)
                
            })

        }
    })
   
}
addExpenseData()




//dashboard
let inputs = document.getElementById("inp");



function addExpense() {
    inputs.style.display = "block";
}
function done() {
    inputs.style.display = "none";
}
function removeExpense(stud){
   
    let s=stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
    

}

function edit(){
    const description = document.getElementById("description");
    const category = document.getElementById("category");
    const amount = document.getElementById("amount");
    const expense = {
        description: description.value,
        category: category.value,
        amount: amount.value,
        id: Math.floor(Math.random() * 1000)
    }

    if (!(description === "") && !(category === "") && !(amount === "")) {
        let newData;
        usersArray.map(values => {
            if (+currentUser.id === +values.id) {
                newData = [...values.allExpenses, expense]
                return values.allExpenses = newData
            }
        })
        localStorage.setItem("users", JSON.stringify(usersArray))
    addExpenseData();
}
}





function add() {
    const description = document.getElementById("description");
    const category = document.getElementById("category");
    const amount = document.getElementById("amount");
    const expense = {
        description: description.value,
        category: category.value,
        amount: amount.value,
        id: Math.floor(Math.random() * 1000)
    }

    if (!(description === "") && !(category === "") && !(amount === "")) {
        let newData;
        usersArray.map(values => {
            if (+currentUser.id === +values.id) {
                newData = [...values.allExpenses, expense]
                return values.allExpenses = newData
            }
        })
        localStorage.setItem("users", JSON.stringify(usersArray))
        addExpenseData()
        description.value = ""
        amount.value = ""
    } else {
        console.log("href")
    }
}
let categoryPopUp = document.getElementById('categoryPopup')
function openCategoryPopUp() {
    console.log("open")
    categoryPopUp.classList.add("categoryPopup");
}

function closeCategoryPopup() {
    categoryPopUp.classList.remove("categoryPopup")
    const category = document.getElementById('popupInput').value
    if (!(category === "")) {
        let newData;
        usersArray.map(values => {
            if (+currentUser.id === +values.id) {
                newData = [...values.categories, category]
                return values.categories = newData
            }
        })
        localStorage.setItem("users", JSON.stringify(usersArray))
        addExpenseData()        
    }
}
function searchFunction(){
    let searchInput = document.getElementById("search");
    let search = searchInput.value.toUpperCase();
    let tr = document.getElementsByTagName("tr");
    for(i=0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td")[1]
        if(td){
            text = td.textContent || td.innerText
            if(text.toUpperCase().indexOf(search) > -1){
                tr[i].style.display = ""
            }
            else{
                tr[i].style.display = "none"

            }
        }
    }
}





