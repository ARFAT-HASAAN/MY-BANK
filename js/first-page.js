// add page link and take value from input element 
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    const email = document.getElementById('email');
    const emailfield = email.value;
    const password = document.getElementById('password');
    const passfield = password.value;

    if (emailfield == "arfat@gmail.com" && passfield == "secret") {
        window.location.href = "http://127.0.0.1:5500/banking.html";
    } else {
        console.log("your email/pass id wrong");
    }

})

// add evnt lester