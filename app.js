const argv = require('./config/yargs').argv;

const colores = require('colors');

const toDo = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let hw = toDo.create(argv.descripcion);
        console.log(hw);
        break;
    case 'listar':
        let list = toDo.getList();
        for (let hw of list) {
            console.log('===========Por Hacer==========='.green);
            console.log(hw.descripcion);
            console.log('Estado:', hw.completado);
        }
        break;
    case 'actualizar':
        let updated = toDo.update(argv.descripcion, argv.completado);
        console.log(updated);
        break;
    case 'borrar':
        let deleted = toDo.deletee(argv.descripcion);
        console.log(deleted);
        break;
    default:
        console.log('Comando desconocido');
        break;
}