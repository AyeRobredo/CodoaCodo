function validarFormulario() {
  var usuario = document.getElementById('usuario').value;
  if(usuario.length == 0 || !(/\S+@\S+\.\S+/.test(usuario)) ) {
    alert('Ingresar un usuario valido');
    return;
 }
  var clave = document.getElementById('clave').value;
  if (clave.length == 0) {
    alert('Ingrese una clave');
    return;
  }
  this.submit();
}
