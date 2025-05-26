// js/form-asistencia.js
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del formulario
    const asistenciaForm = document.getElementById('asistenciaForm');
    const turnoSelect = document.getElementById('turno');
    const modalidadSelect = document.getElementById('modalidad');
    const fullnameInput = document.getElementById('fullname');
    const cgmSelect = document.getElementById('cgm');
    const formatoAsistenciaInput = document.getElementById('formatoAsistencia');
    const copiarBtn = document.getElementById('copiarBtn');
    const btnInicioTurno = document.getElementById('btnInicioTurno');
    const btnFinTurno = document.getElementById('btnFinTurno');

    // Verificar que todos los elementos existen
    if (asistenciaForm && turnoSelect && modalidadSelect && fullnameInput && cgmSelect && formatoAsistenciaInput && copiarBtn && btnInicioTurno && btnFinTurno) {
        
        function generarStringFormato(tipoEvento) {
            const turno = turnoSelect.value; // Ahora será "Mañana" o "Amanecida"
            const modalidad = modalidadSelect.value; 
            const operatorName = fullnameInput.value.trim();
            const cgm = cgmSelect.value;

            if (!operatorName) {
                alert('Por favor, ingrese el nombre del operador.');
                fullnameInput.focus();
                return null; 
            }

            const ahora = new Date();
            const dia = String(ahora.getDate()).padStart(2, '0');
            const mes = String(ahora.getMonth() + 1).padStart(2, '0');
            const anio = ahora.getFullYear();
            const fechaFormateada = `${dia}/${mes}/${anio}`;

            let generatedString = "";

            if (tipoEvento === "Inicio Turno") {
                // CAMBIOS AQUÍ: "Diurno" -> "Mañana", "Nocturno" -> "Amanecida"
                if (turno === "Mañana") { 
                    generatedString = `*INICIO DE TURNO ${turno.toUpperCase()} ${modalidad.toUpperCase()}*
Buenos dias, se informa inicio del Turno Mañana del día ${fechaFormateada} desde las 07:00 horas hasta las 19:00 horas.
Atte.
*${operatorName}*
*Centro de Gestión y Monitoreo${cgm}*
*SUBGERENCIA DE SUPERVISION ELECTRONICA*`;
                } else if (turno === "Amanecida") { 
                    const manana = new Date(ahora);
                    manana.setDate(ahora.getDate() + 1);
                    const diaManana = String(manana.getDate()).padStart(2, '0');
                    const mesManana = String(manana.getMonth() + 1).padStart(2, '0');
                    const anioManana = manana.getFullYear();
                    const fechaMananaFormateada = `${diaManana}/${mesManana}/${anioManana}`;

                    generatedString = `*INICIO DEL TURNO ${turno.toUpperCase()} ${modalidad.toUpperCase()}*
Buenas tardes, se da inicio al turno amanecida desde las 19:00 horas del ${fechaFormateada} hasta las 07:00 horas del ${fechaMananaFormateada}.
Atte.
*${operatorName}*
*Centro de Gestión y Monitoreo${cgm}*
*SUBGERENCIA DE SUPERVISION ELECTRONICA*`;
                }
            } else if (tipoEvento === "Fin Turno") {
                // CAMBIOS AQUÍ: "Diurno" -> "Mañana", "Nocturno" -> "Amanecida"
                if (turno === "Mañana") { 
                    generatedString = `*FIN DE TURNO ${turno.toUpperCase()} ${modalidad.toUpperCase()}*
Buenas noches, se informa fin del Turno Mañana del día ${fechaFormateada} desde las 07:00 horas hasta las 19:00 horas.
Atte.
*${operatorName}*
*Centro de Gestión y Monitoreo${cgm}*
*SUBGERENCIA DE SUPERVISION ELECTRONICA*`;
                } else if (turno === "Amanecida") { 
                    const ayer = new Date(ahora);
                    ayer.setDate(ahora.getDate() - 1);
                    const diaAyer = String(ayer.getDate()).padStart(2, '0');
                    const mesAyer = String(ayer.getMonth() + 1).padStart(2, '0');
                    const anioAyer = ayer.getFullYear();
                    const fechaAyerFormateada = `${diaAyer}/${mesAyer}/${anioAyer}`;

                    generatedString = `*FIN DEL TURNO ${turno.toUpperCase()} ${modalidad.toUpperCase()}*
Buenos dias, se da fin al turno amanecida desde las 19:00 horas del ${fechaAyerFormateada} hasta las 07:00 horas del ${fechaFormateada}.
Atte.
*${operatorName}*
*Centro de Gestión y Monitoreo${cgm}*
*SUBGERENCIA DE SUPERVISION ELECTRONICA*`;
                }
            }
            
            return generatedString;
        }

        // ... (el resto de los listeners de los botones y la función de copiado no necesitan cambiar)
        // Event listener para el botón INICIO TURNO
        btnInicioTurno.addEventListener('click', function() {
            const generatedString = generarStringFormato("Inicio Turno");
            if (generatedString) {
                formatoAsistenciaInput.value = generatedString;
            }
        });

        // Event listener para el botón FIN TURNO
        btnFinTurno.addEventListener('click', function() {
            const generatedString = generarStringFormato("Fin Turno");
            if (generatedString) {
                 formatoAsistenciaInput.value = generatedString;
            }
        });

        asistenciaForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const stringACopiar = formatoAsistenciaInput.value;

            if (!stringACopiar) {
                alert('No hay formato generado para copiar. Presione "Inicio Turno" o "Fin Turno" primero.');
                return;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(stringACopiar)
                    .then(() => {
                        alert('¡Formato copiado pegalo en los grupos!');
                        const originalButtonText = copiarBtn.value;
                        copiarBtn.value = '¡Copiado!';
                        copiarBtn.disabled = true;
                        setTimeout(() => {
                            copiarBtn.value = originalButtonText;
                            copiarBtn.disabled = false;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Error al copiar al portapapeles usando navigator.clipboard: ', err);
                        copiarManualmenteFallback(stringACopiar);
                    });
            } else {
                console.warn('navigator.clipboard no disponible, usando fallback.');
                copiarManualmenteFallback(stringACopiar);
            }
        });
    } else {
        console.error("Error: No se encontraron todos los elementos del formulario. Revisa los IDs en tu HTML y en el script form-asistencia.js.");
        if (!modalidadSelect) console.error("Elemento con ID 'modalidad' no encontrado.");
    }

    function copiarManualmenteFallback(textToCopy) {
        if (!textToCopy) return; 
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";  
        textArea.style.top = "-9999px";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('¡Formato copiado al portapapeles! (método alternativo)');
            } else {
                alert('No se pudo copiar automáticamente. Por favor, copie el texto manualmente.');
            }
        } catch (err) {
            console.error('Fallback: Error al intentar copiar con document.execCommand: ', err);
            alert('Error al copiar. Por favor, copie el texto manualmente desde el campo.');
        }
        document.body.removeChild(textArea);
    }
});