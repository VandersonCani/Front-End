function teste() {
	
  	var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome Corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    
    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("[(]?\d{2}[)]?[ ]?\d{4,5}[-]?\d{4}");

    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha o campo Email.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    if (document.frmfaleconosco.selmotivo.value == "") {
        alert("Selecione um Motivo");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }
    if (document.frmfaleconosco.txacomentario.value == "") {
        alert("Escreva Sua Dúvida");
        document.frmfaleconosco.txacomentario.focus();
        return false;
    }
    if (document.frmfaleconosco.selproduto.value == "") {
        alert("Selecione um Produto");
        document.frmfaleconosco.selproduto.focus();
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

    } else {
        if (elemento.firstChild)
            elemento.removeChild(elemento.firstChild);
    }
}

 jQuery(document).ready(function($){
	$("header").load("/ProjetoTrilhaWeb/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/site/general/rodape.html");
});