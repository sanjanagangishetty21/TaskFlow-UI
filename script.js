// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let message =
            document.getElementById("message").value.trim();

        let formMessage =
            document.getElementById("formMessage");

        // Name Validation

        if (name === "") {

            formMessage.innerHTML =
                "Please enter your full name.";

            formMessage.style.background =
                "rgba(220,38,38,0.15)";

            formMessage.style.color =
                "#ffb4b4";

            return;
        }

        // Email Validation

        if (email === "") {

            formMessage.innerHTML =
                "Email address is required.";

            formMessage.style.background =
                "rgba(220,38,38,0.15)";

            formMessage.style.color =
                "#ffb4b4";

            return;
        }

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.innerHTML =
                "Please enter a valid email address.";

            formMessage.style.background =
                "rgba(220,38,38,0.15)";

            formMessage.style.color =
                "#ffb4b4";

            return;
        }

        // Message Validation

        if (message === "") {

            formMessage.innerHTML =
                "Message field cannot be empty.";

            formMessage.style.background =
                "rgba(220,38,38,0.15)";

            formMessage.style.color =
                "#ffb4b4";

            return;
        }

        // Success

        formMessage.innerHTML =
            "✓ Your message has been submitted successfully.";

        formMessage.style.background =
            "rgba(34,197,94,0.15)";

        formMessage.style.color =
            "#86efac";

        contactForm.reset();

    });

}


// =====================================
// ADD TASK
// =====================================

function addTask() {

    let taskInput =
        document.getElementById("taskInput");

    let taskMessage =
        document.getElementById("taskMessage");

    let taskText =
        taskInput.value.trim();

    if (taskText === "") {

        taskMessage.innerHTML =
            "Please enter a task before adding.";

        taskMessage.style.background =
            "rgba(220,38,38,0.15)";

        taskMessage.style.color =
            "#ffb4b4";

        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <button
            class="delete-btn"
            onclick="removeTask(this)">
            Remove
        </button>
    `;

    document
        .getElementById("taskList")
        .appendChild(li);

    taskMessage.innerHTML =
        "✓ Task added successfully.";

    taskMessage.style.background =
        "rgba(34,197,94,0.15)";

    taskMessage.style.color =
        "#86efac";

    taskInput.value = "";

}


// =====================================
// REMOVE TASK
// =====================================

function removeTask(button) {

    button.parentElement.remove();

    let taskMessage =
        document.getElementById("taskMessage");

    taskMessage.innerHTML =
        "✓ Task removed successfully.";

    taskMessage.style.background =
        "rgba(34,197,94,0.15)";

    taskMessage.style.color =
        "#86efac";

}