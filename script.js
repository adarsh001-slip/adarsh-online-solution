let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let message = document.getElementById("message");

        let registeredUsername =
            localStorage.getItem("registeredUsername");

        let registeredPassword =
            localStorage.getItem("registeredPassword");


        // Admin Login
        if (username === "admin" && password === "1234") {

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "dashboard.html";

        }

        // Registered User Login
        else if (
            username === registeredUsername &&
            password === registeredPassword
        ) {

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "dashboard.html";

        }

        else {

            message.style.color = "red";

            message.innerHTML =
                "Wrong User ID or Password ❌";

        }

    });

}
// ===============================
// SERVICES MANAGEMENT
// ===============================

let services =
    JSON.parse(localStorage.getItem("services")) || [];


function addService() {

    let name =
        document.getElementById("serviceName").value;

    let description =
        document.getElementById("serviceDescription").value;

    let price =
        document.getElementById("servicePrice").value;


    if (name === "" || description === "") {

        alert("Please enter service details.");

        return;
    }


    let service = {

        name: name,
        description: description,
        price: price

    };


    services.push(service);

    localStorage.setItem(
        "services",
        JSON.stringify(services)
    );


    document.getElementById("serviceName").value = "";
    document.getElementById("serviceDescription").value = "";
    document.getElementById("servicePrice").value = "";


    displayServices();

}


function displayServices() {

    let container =
        document.getElementById("servicesContainer");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    services.forEach(function(service, index) {

        container.innerHTML += `

            <div class="service-item">

                <div>

                    <h3>${service.name}</h3>

                    <p>${service.description}</p>

                    <strong>
                        ${service.price}
                    </strong>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteService(${index})">
                    Delete
                </button>

            </div>

        `;

    });

}


function deleteService(index) {

    services.splice(index, 1);

    localStorage.setItem(
        "services",
        JSON.stringify(services)
    );

    displayServices();

}


displayServices();
// ===============================
// SHOW SERVICES ON HOME PAGE
// ===============================

function displayHomeServices() {

    let container =
        document.getElementById("homeServices");

    if (!container) {
        return;
    }


    let homeServices =
        JSON.parse(
            localStorage.getItem("services")
        ) || [];


    container.innerHTML = "";


    if (homeServices.length === 0) {

        container.innerHTML = `
            <p>
                अभी कोई service available नहीं है।
            </p>
        `;

        return;
    }


    homeServices.forEach(function(service) {

        container.innerHTML += `

            <div class="service-card">

                <h3>
                    ${service.name}
                </h3>

                <p>
                    ${service.description}
                </p>

                <strong>
                    ${service.price}
                </strong>

                <br><br>

              // ===============================
// SHOW SERVICES ON HOME PAGE
// ===============================

function displayHomeServices() {

    let container =
        document.getElementById("homeServices");

    if (!container) {
        return;
    }


    let homeServices =
        JSON.parse(
            localStorage.getItem("services")
        ) || [];


    container.innerHTML = "";


    if (homeServices.length === 0) {

        container.innerHTML = `
            <p>
                अभी कोई service available नहीं है।
            </p>
        `;

        return;
    }


    homeServices.forEach(function(service) {

        container.innerHTML += `

            <div class="service-card">

                <h3>
                    ${service.name}
                </h3>

                <p>
                    ${service.description}
                </p>

                <strong>
                    ${service.price}
                </strong>

                <br><br>

                <button>
                    Apply Now
                </button>

            </div>

        `;

    });

}


displayHomeServices();

            </div>

        `;

    });

}


displayHomeServices();
// ===============================
// CUSTOMER ENQUIRY
// ===============================

function openEnquiry(serviceName) {

    document.getElementById("selectedService").value =
        serviceName;

    document.getElementById("enquiry").scrollIntoView({
        behavior: "smooth"
    });
}


let enquiryForm =
    document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let enquiry = {

            name:
                document.getElementById("customerName").value,

            mobile:
                document.getElementById("customerMobile").value,

            service:
                document.getElementById("selectedService").value,

            message:
                document.getElementById("customerMessage").value

        };


        let enquiries =
            JSON.parse(
                localStorage.getItem("enquiries")
            ) || [];


        enquiries.push(enquiry);


        localStorage.setItem(
            "enquiries",
            JSON.stringify(enquiries)
        );


        document.getElementById("enquiryMessage").innerHTML =
            "Enquiry Submitted Successfully ✅";

        enquiryForm.reset();

    });

}
// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    let nav =
        document.getElementById("mainNav");

    nav.classList.toggle("active");

}
function toggleMenu() {

    let nav = document.getElementById("mainNav");

    nav.classList.toggle("active");

}