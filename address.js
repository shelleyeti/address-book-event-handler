// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    // Collect the user put by selecting the input fields, one at a time, and accessing the `value` property
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM with some HTML
    
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
        
        `
})



// Some starter code
const itemContainer = document.querySelector("#getFullSentence")

document.querySelector("#getSentence").addEventListener("click", event => {
    // Collect the user put by selecting the input fields, one at a time, and accessing the `value` property
    const itemName = document.querySelector("#itemName").value;
    const itemLocation = document.querySelector("#inStockLocation").value

    //alerts user to input information
    if (itemName == "" || itemLocation == "") {
        alert("Please enter all your information")
        return;
    } else {
        // Once you have collected all the values, update the DOM with some HTML
        itemContainer.innerHTML += `
            <section>
                <div>I can purchase ${itemName} at ${itemLocation}</div>
            </section>
        `
        //clears out value of input fields after click
        document.querySelector("#itemName").value = "";
        document.querySelector("#inStockLocation").value = "";
    }
})


