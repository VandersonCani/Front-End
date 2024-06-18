function validaFaleConosco() {
    if (document.frmfaleconosco.txtnome.value == "") {
        alert("Preencha o campo Nome.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    if (document.frmfaleconosco.txtfone.value == "") {
        alert("Preencha o campo Telefone.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha o campo Email.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    return true;
}
function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");
    if (motivo == "PR") {
        var select = document.createElement("select");
        select.setAttribute("name", "selproduto");
        var option = document.createElement("option");
        option.setAttribute("value", "");
        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "FR");
        var texto = document.createTextNode("Freezer");
        option.appendChild(texto);
        select.appendChild(option);
        var option = document.createElement("option");
        option.setAttribute("value", "GE");
        var texto = document.createTextNode("Geladeira");

        option.appendChild(texto);

        select.appendChild(option);

        elemento.appendChild(select);
    }else{
        if(elemento.firstChild)
            elemento.removeChild(elemento.firstChild);
    
    }
}