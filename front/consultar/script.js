// GET: getUser
document.addEventListener('DOMContentLoaded', () => {
    async function obtenerUsuario(id_request){
        const query = await fetch("http://localhost:4000/api/getUser/" + id_request, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await query.json();
        console.log(data);
        return data;
    }

    document.getElementById('getUserButton').addEventListener('click', async () => {
        const id_request = document.getElementById('PorId_id').value;
        let data = await obtenerUsuario(id_request);
        if(document.getElementById('PorId_id').value === ""){
            document.getElementById('resultado_jsonContent').value = "Ingrese algun ID para obtener un resultado";
        } else {
            document.getElementById('resultado_jsonContent').value = JSON.stringify(data, null, 2);
            if(document.getElementById('resultado_jsonContent').value == "null"){
            document.getElementById('resultado_jsonContent').value = "No se encontró ningún usuario con ese ID";
            }
        }
    });
});

//GET: getUsers
document.addEventListener('DOMContentLoaded', () => {
    async function obtenerUsuarios(){
        const query = await fetch("http://localhost:4000/api/getUsers", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await query.json();
        console.log(data);
        return data;
    }

    document.getElementById('todosLosUsuarios').addEventListener('click', async () => {
        let data = await obtenerUsuarios();
        document.getElementById('resultado_jsonContent').value = JSON.stringify(data, null, 2);
    });
});