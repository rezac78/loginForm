function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm)
            }
            else {
                parent.style.animation = "shake .5s ease"
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })

        })
    })
}

function validateEmail(email) {
    const validation = /^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/;
    if (validation.test(email.value)) {
        error("rgb(87,189,130)");
        return true;
    } else {
        error("rgb(189,87,87)")
        return false;
    }
}

function validateUser(user) {
    if (user.value.length < 6) {
        error("rgb(189,87,87)")
        return false;
    } else {
        error("rgb(87,189,130)");
        return true;
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.background = color
}


animatedForm();