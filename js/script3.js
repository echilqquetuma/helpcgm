document.getElementById('estadoAnterior').addEventListener('change', function() {
    verificarEstados();
});

document.getElementById('estadoActual').addEventListener('change', function() {
    verificarEstados();
});

function verificarEstados() {
    const estadoAnterior = document.getElementById('estadoAnterior').value;
    const estadoActual = document.getElementById('estadoActual').value;

    if (estadoAnterior === estadoActual) {
        alert('Los estados anterior y actual no pueden ser iguales. Por favor, selecciona estados diferentes.');
        return;
    }
}

function generarSimpleReporte() {
    const form = document.getElementById('simpleForm');
    const datos = new FormData(form);

    const color = datos.get('color');
    let fechaHora = datos.get('fechaHora');
    const estadoAnterior = datos.get('estadoAnterior');
    const estadoActual = datos.get('estadoActual');
    const ubigeo = datos.get('ubigeo');
    const carretera = datos.get('carretera');
    const kilometraje = datos.get('kilometraje');
    const localizacion = datos.get('localizacion');
    const motivo = datos.get('motivo');
    const evento = datos.get('evento');
    const fuente = datos.get('fuente');
    const detalle = datos.get('detalle');
    const operador = datos.get('operador');
    const cgm = datos.get('cgm');

    // Formatear la fecha y hora
    if (fechaHora) {
        const fechaObj = new Date(fechaHora);
        const dia = String(fechaObj.getDate()).padStart(2, '0');
        const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
        const año = fechaObj.getFullYear();
        const horas = String(fechaObj.getHours()).padStart(2, '0');
        const minutos = String(fechaObj.getMinutes()).padStart(2, '0');
        fechaHora = `${dia}/${mes}/${año} ${horas}:${minutos}`;
    }

    const reporte = `
*ALERTA DE ACTUALIZACION DE ESTADO DE VIA* ${color}🚦🚧
*FECHA Y HORA:* ${fechaHora}
*ESTADO ANTERIOR:* ${estadoAnterior}
*ESTADO ACTUAL:* ${estadoActual}
*UBIGEO:* ${ubigeo}
*CARRETERA:* ${carretera}
*KILOMETRAJE:* ${kilometraje}
*LOCALIZACION:* ${localizacion}
*MOTIVO:* ${motivo}
*EVENTO:* ${evento}
*FUENTE:* ${fuente}
*DETALLE:* ${detalle}

*Atte.*
*${operador}*
*Centro de Gestión y Monitoreo${cgm}*
*SUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA*
    `;
    document.getElementById('simpleResultado').textContent = reporte;
}

function limpiarSimpleFormulario() {
    const form = document.getElementById('simpleForm');
    form.reset();
}

function copiarSimpleContenido() {
    const resultado = document.getElementById('simpleResultado').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = resultado;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('El contenido ha sido copiado al portapapeles.');
}
