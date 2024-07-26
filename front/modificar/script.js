// script.js

// Función para simular la adición de un usuario
async function addUser(firstName, lastName, email) {
    const response = await fetch('http://localhost:4000/api/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email })
    });
    const data = await response.json();
    console.log(data);
}

document.getElementById('addUserButton').addEventListener('click', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('Add_firstName').value;
    const lastName = document.getElementById('Add_lastName').value;
    const email = document.getElementById('Add_email').value;
    addUser(firstName, lastName, email);
});

// PUT: modifyUser

async function modifyUser(id_request, firstName, lastName, email) {
    const response = await fetch(`http://localhost:4000/api/modifyUser/${id_request}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email })
    });
    const data = await response.json();
    console.log(data);
}

document.getElementById('modifyUserButton').addEventListener('click', () => {
    const id_request = document.getElementById('id_request').value;
    const firstName = document.getElementById('Modify_firstName').value;
    const lastName = document.getElementById('Modify_lastName').value;
    const email = document.getElementById('Modify_email').value;
    modifyUser(id_request, firstName, lastName, email);
});

// DELETE: deleteUser

async function deleteUser(id) {
    const response = await fetch(`http://localhost:4000/api/deleteUser/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

document.getElementById('deleteUserButton').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('Delete_id').value;
    deleteUser(id);
});
