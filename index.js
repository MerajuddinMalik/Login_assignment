function login() {
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    if (username === 'MerajUddin' && password === 'md12345') {
        sessionStorage.setItem('LoggedIn', 'true');
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'Login Successfull',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'resume.html';
            }
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password. Please try again.',
        })
    }
}
