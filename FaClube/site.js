
function validaInscrevase() {

    var nome = document.frmInscrevase.txtnome.value;
    var expRegNome = new RegExp("^[A-Z][a-zà-ü]* ([A-z]{1}[a-zà-ü]* ){1,}");
  
    if (!expRegNome.test(nome)) {
        alert("Digite o Nome Corretamente");
        document.frmInscrevase.txtnome.focus();
        return false;
    }
   /*  var email = document.frmInscrevase.txtemail.value;
    var expRegEmail = new RegExp("^[a-z]{2,}+[@]+[a-z]{1,}+[.]+[c][o][m]$");
  
    if (!expRegEmail.test(email)) {
        alert("Digite o email corretamente");
        document.frmInscrevase.txtemail.focus();
        return false;
    }
    var senha = document.frmInscrevase.txtsenha.value;
    var expRegSenha = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])){8,}$");
  
    if (!expRegSenha.test(senha)){
        alert("Digite a Senha corretamente");
        document.frmInscrevase.txtsenha.focus();
        return false;
    } */
    return true;
}