
//method for handeling form submission. First line is for waiting until html page is fully loaded before running the javaScript
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("form-request");
    if (element) {
       element.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const form = event.target;
            
            const isFondantCovered = form.querySelector('input[name="is-fondant-covered"]:checked')?.value === 'yes';
//create the json that will be send
            const order = {
                email: form.querySelector('#email').value,
                phone: form.querySelector('#phone').value,
                eventDate: form.querySelector('#event-date').value,
                cakeSize: form.querySelector('#size').value,
                spongeType: form.querySelector('#sponge-type').value,
                cakeFilling: form.querySelector('#cake-filling').value,
                isFondantCovered: isFondantCovered,
                cakeDetails: form.querySelector('#extra').value,
                specialInstructions: form.querySelector('#instructions').value || ""
               }
//this make ajax call
            fetch('http://localhost:8080/orderRequest', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(response => {
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);

                //show a success message
                const message = document.getElementById('successMessage');
                message.classList.remove('d-none');// remove the d-none class to show the
                // Delay form reset for a little for the message to appears
                setTimeout(() => {
                    form.reset(); // reset the form
                }, 200);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error submitting your order.");
        });
    })
} else {
        console.error("Form element with ID 'form-request' not found.");
    }
getCakeSize();
});

// This script handles the selection of cake size and updates the description accordingly.
// It also makes an AJAX call to send the selected size and servings to the server.
function getCakeSize() {
    // Make AJAX call sending both size and servings
    fetch(`http://localhost:8080/cakeSize/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
              const select = document.getElementById("size");
//populate the select element with options from the database.
                data.forEach(item => {
                    const option = document.createElement("option");
                    option.value = `${item.size}`;
                    option.textContent = `${item.size} (${item.numberOfServings} servings)`;
                    select.appendChild(option);
                });
                        // alert("Size selected successfully!");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error selecting the size.");
        });
}
//  document.addEventListener("DOMContentLoaded", function () {
//     const selectSize = document.getElementById("size");
//     const descriptionElement = document.getElementById("sizeDescription");

//     selectSize.addEventListener("change", function (event) {
//         const selectedValue = event.target.value; // e.g. "6-inch|8-12"

//         // Split the value into size and servings
//         const [size, servings] = selectedValue.split('|');

//         // Update description text
//         if (descriptionElement) {
//             descriptionElement.textContent = `Size: ${size}, Servings: ${servings}`;
//         }

        
//     });

//  }
// );