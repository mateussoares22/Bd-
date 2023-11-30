function displayEditoras(editoras) {
    const tbody = document.getElementById("listaEditoras");
    tbody.innerHTML = ""; // Limpar a tabela

    editoras.forEach(editor => {
        const row = tbody.insertRow();

        const editorCell = row.insertCell(0);
        editorCell.textContent = editora.editor;

        const enderecoCell = row.insertCell(1);
        enderecoCell.textContent = editora.endereco;

        const telCell = row.insertCell(2);
        telCell.textContent = (editora.telefone);

        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button class="icon-btn" onclick='editarEditor(${JSON.stringify(editor)})'>
        <i class="fas fa-edit"></i> Editar
    </button>
    <button class="icon-btn" onclick="deleteEditor(${editor.id})">
    <i class="fas fa-trash"></i> Excluir
    </button>`;
    });
}

function fetchEditors() {
    fetch("/api/editoras")
        .then(res => res.json())
        .then(data => {
            displayEditoras(data);
        })
        .catch(error => {
            console.error("Erro ao buscar Editoras:", error);
        });
}

function deleteEditora(id) {
    fetch(`/api/editoras/${id}`, {
        method: "DELETE"
    })
    .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        fetchEditoras();
    })
    .catch(error => {
        console.error("Erro ao deletar editora:", error);
    });
}

function editarEditora(editora) {
    const addBookBtn = document.getElementById("addBookBtn");
    const editora = document.getElementById("editora");
    const endereco = document.getElementById("endereco");
    const telefone = document.getElementById("telefone");
    const editoraId= document.getElementById("id_editora");
    editora.value = editora.editor;
    endereco.value = editora.endereco;
    telefone.value = editora.telefone;
    editoraId.value = editora.id;
    addBookBtn.click();
/**/
}

function limparFormulario(){
    const editora = document.getElementById("editora");
    const endereco = document.getElementById("endereco");
    const telefone = document.getElementById("telefone");
    const editoraId= document.getElementById("id_editora");

    editora.value = "";
    endereco.value = "";
    telefone.value = "";
    editoraId.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "/api/editoras";
    const bookForm = document.getElementById("bookForm");
    const bookPopup = document.getElementById("bookPopup");
    const addBookBtn = document.getElementById("addBookBtn");
    const closePopupBtn = document.getElementById("closePopupBtn");

    // Carregar editoras ao carregar a página
    fetchEditoras()

    // Mostrar popup ao clicar no botão "Adicionar Editora"
    addBookBtn.addEventListener("click", function() {
        bookPopup.classList.add("show");
        bookPopup.classList.remove("hidden");
    });

    // Fechar popup
    closePopupBtn.addEventListener("click", function() {
        bookPopup.classList.add("hidden");
        bookPopup.classList.remove("show");
        limparFormulario();
    });

    // Adicionar novo editora ou atualizar um existente
    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const editora = document.getElementById("editora").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const editoraId= document.getElementById("id_editora").value;

        let methodSalvar = "POST";
        let apiUrlSalvar = apiUrl;
        if(editoraId != "" && editoraId > 0){
            methodSalvar = "PUT";
            apiUrlSalvar += "/" + editoraId;
        }
    
        fetch(apiUrlSalvar, {
            method: methodSalvar,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ editora, endereco, telefone })
        })
        .then(res => {
            if (res.ok && res.status == "201") return res.json();
            else if (res.ok && res.status == "204") return;
            throw new Error(res.statusText);
        })
        .then(data => {
            fetchEditoras();
            limparFormulario();
            closePopupBtn.click();
        })
        .catch(error => {
            console.error("Erro ao adicionar/atualizar editora:", error);
        });
    
    });
});
