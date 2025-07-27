document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const cpasswordError = document.getElementById('cpasswordError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        clearErrors();
        let isValid = true;

        // Username validation
        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            isValid = false;
        } else if (username.value.trim().length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            isValid = false;
        }

        // Email validation
        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            emailError.textContent = 'Enter a valid email';
            isValid = false;
        }

        // Phone validation
        if (phone.value.trim() === '') {
            phoneError.textContent = 'Mobile number is required';
            isValid = false;
        } else if (!/^\+?\d{10,15}$/.test(phone.value.trim())) {
            phoneError.textContent = 'Enter a valid mobile number (10-15 digits, optional +)';
            isValid = false;
        }

        // Password validation
        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (!validatePassword(password.value.trim())) {
            passwordError.textContent = 'Password must be at least 6 characters, include uppercase, lowercase, and only @ or _ as special characters';
            isValid = false;
        }

        // Confirm Password validation
        if (cpassword.value.trim() === '') {
            cpasswordError.textContent = 'Please confirm your password';
            isValid = false;
        } else if (password.value.trim() !== cpassword.value.trim()) {
            cpasswordError.textContent = 'Passwords do not match';
            isValid = false;
        }

        if (isValid) {
        // Show loading or success animation
            showLoadingAnimation();

        // Redirect after 1.5 seconds
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 1500);
        }
    });

    function showLoadingAnimation() {
        const formContainer = document.querySelector('.form');
        formContainer.innerHTML = `
            <div class="loader"></div>
            <p>Processing your registration...</p>
        `;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        // Minimum 6 characters
        if (password.length < 6) return false;

        // Must contain at least one uppercase
        if (!/[A-Z]/.test(password)) return false;

        // Must contain at least one lowercase
        if (!/[a-z]/.test(password)) return false;

        // Allowed characters: uppercase, lowercase, digits, @, _
        if (!/^[A-Za-z0-9@_]+$/.test(password)) return false;

        return true;
    }

    function clearErrors() {
        usernameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        passwordError.textContent = '';
        cpasswordError.textContent = '';
    }
});
