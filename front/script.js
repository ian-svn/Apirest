let aniadirUsuario = async() => {
    let campos = {}

    campos.fristName = document.getElementById("firstName").value;
    campos.lastName = document.getElementById("lastName").value;
    campos.email = document.getElementById("email").value;

    const peticion = await fetch ("http://localhost:4000/api/addUser",
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(campos)
        }
    );

    console.log("bien");
    
}