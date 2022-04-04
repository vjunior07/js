let codigo = 'GWZ-JJ-12';

function validaCodigo(codigo) {

    if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
          alert('Código válido!');
      } else {
          alert('Código inválido');
      }

}

validaCodigo('GWZ-JJ-12'); // válido
validaCodigo('1X1-JJ-12'); // inválido


//TRANSFORMANDO EM CLASSE


// class Codigo {
// 	constructor(codigo) {
// 		this._padrao = /\D{3}-\D{2}-\d{2}/;
// 		this._codigo = codigo;
// 	}

// 	valida() {
// 	if (this._padrao.test(this._codigo)) {
// 		return console.log('Código válido');
// 	}
// 	return console.log('Código Inválido');
// }

// }

// a = new Codigo('GWZ-JJ-12');
// a.valida()
// // Código válido


// b = new Codigo('1X1-JJ-12');
// b.valida()
// //Código Inválido