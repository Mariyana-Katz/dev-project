
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
            };
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
                alert("Order submitted successfully!");
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error submitting your order.");
            });
        });
    } else {
        console.error("Element not found");
    }
});
