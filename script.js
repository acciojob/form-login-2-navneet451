//your JS code here. If required.
function showAlert() {
            // Get the values from the form fields
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var emailID = document.getElementById("emailID").value;

            // Format the alert message
            var alertMessage = "First Name: " + firstName + " " +
                               "Last Name: " + lastName + " " +
                               "Phone Number: " + phoneNumber + " " +
                               "Email ID: " + emailID;

            // Show the alert with the form information
            alert(alertMessage);
        }