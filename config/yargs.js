const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o Pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un Elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Genera un archivo con la tabla de muliplicar', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar cualquier Tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}