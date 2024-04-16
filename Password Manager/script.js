document.getElementById('generate-password').addEventListener('click', function() {
    var password = generatePassword(12); // Generate a random password with 12 characters
    document.getElementById('password').value = password;
});

document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var website = document.getElementById('website').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Encrypt the password before storing it
    encryptPassword(password).then(function(encryptedPassword) {
        // Create a new password item
        var passwordItem = document.createElement('div');
        passwordItem.classList.add('password-item');
        passwordItem.innerHTML = `
            <strong>Website:</strong> ${website}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Password:</strong> ${encryptedPassword}
            <button class="delete-button">Delete</button>
        `;

        // Append the new password item to the list
        document.getElementById('passwords-list').appendChild(passwordItem);

        // Save the encrypted password to local storage
        savePassword(website, username, encryptedPassword);
    });

    // Clear the form inputs
    document.getElementById('website').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Delete password item when delete button is clicked
document.getElementById('passwords-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        var passwordItem = event.target.parentNode;
        var website = passwordItem.querySelector('strong:first-child').textContent.split(':')[1].trim();
        deletePassword(website);
        passwordItem.remove();
    }
});

// Function to generate a random password
function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Function to encrypt the password
function encryptPassword(password) {
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(password)).then(function(buffer) {
        return Array.prototype.map.call(new Uint8Array(buffer), function(byte) {
            return ('0' + byte.toString(16)).slice(-2);
        }).join('');
    });
}

// Function to save password to local storage
function savePassword(website, username, password) {
    var passwords = JSON.parse(localStorage.getItem('passwords')) || {};
    passwords[website] = { username: username, password: password };
    localStorage.setItem('passwords', JSON.stringify(passwords));
}

// Function to delete password from local storage
function deletePassword(website) {
    var passwords = JSON.parse(localStorage.getItem('passwords')) || {};
    delete passwords[website];
    localStorage.setItem('passwords', JSON.stringify(passwords));
}

// Load passwords from local storage when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var passwords = JSON.parse(localStorage.getItem('passwords')) || {};
    Object.keys(passwords).forEach(function(website) {
        var username = passwords[website].username;
        var encryptedPassword = passwords[website].password;
        var passwordItem = document.createElement('div');
        passwordItem.classList.add('password-item');
        passwordItem.innerHTML = `
            <strong>Website:</strong> ${website}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Password:</strong> ${encryptedPassword}
            <button class="delete-button">Delete</button>
        `;
        document.getElementById('passwords-list').appendChild(passwordItem);
    });
});