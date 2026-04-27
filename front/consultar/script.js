document.addEventListener('DOMContentLoaded', () => {
    // GET: getUser
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
        const id_request = document.getElementById('PorId_id').value.trim();

        if (id_request === "") {
            document.getElementById('resultado_jsonContent').value = "No se ha ingresado un usuario";
            return;
        }

        let data = await obtenerUsuario(id_request);
        document.getElementById('resultado_jsonContent').value = JSON.stringify(data, null, 2);
    });

    // GET: getUsers
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
