console.log('Datos leídos del formulario:', generalInfo);

    // Validar que al menos el nombre del establecimiento esté lleno
    if (!generalInfo.nombreEstablecimiento) {
        alert('Por favor, complete al menos el nombre del establecimiento antes de generar el reporte.');
        return;
    } else {
        console.warn('Sección no reconocida:', sectionId);
        nombreEstablecimientoId = `nombre-establecimiento-${sectionId}`;
        direccionId = `direccion-${sectionId}`;
        funcionarioGradoId = `funcionario-grado-${sectionId}`;
    }// script.js

// Datos de los requisitos para cada sección
const requisitosData = {
    'plan-seguridad': [
        { id: 1, text: 'SOLICITUD SIMPLE DE LA ENTIDAD OBLIGADA.' },
        { id: 2, text: 'EL PLAN DE SEGURIDAD, CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 3, text: 'ENCARGADO DE SEGURIDAD: EL ENCARGADO DE SEGURIDAD DEBE ESTAR ACREDITADO (AUTORIZACIÓN RESOLUCIÓN) ASÍ COMO TAMBIÉN EL SUPLENTE. (APARTADO IV: CONFECCIÓN DE INSTRUMENTOS DE SEGURIDAD; N° 2 PLAN DE SEGURIDAD ; ENCARGADO DE SEGURIDAD)' },
        { id: 4, text: 'CAJERO AUTOMÁTICO: CUANTO CAJEROS SE MANTIENEN EN EL BANCO Y NÚMEROS ATM.' },
        { id: 5, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS)' },
        { id: 6, text: 'INFORMACIÓN PARA DECISIONES POLICIALES' },
        { id: 7, text: 'FOTOGRAFÍA Y LISTADO DE CREDENCIALES DE VIGILANTES PRIVADOS.' },
        { id: 8, text: 'Copia de la Autorización del Encargado de Seguridad Suplente (conforme a al Manual Operativo en Materias de Seguridad Privada, aprobado mediante Decreto Exento N° 32 del 31.01.2024, del Ministerio del Interior y Seguridad Publica).' },
        { id: 9, text: 'COMODATOS Y PADRONES O CERTIFICADO DE INSCRIPCIÓN DE TODOS LOS ARMAMENTOS Y CANTIDADES copia del reporte o despliegue del armamento de la empresa, otorgado por la Dirección General de Movilización Nacional (D.G.M.N.).' },
        { id: 10, text: 'Copia de los CERTIFICADOS DEL LABORATORIO DE RESISTENCIA BALÍSTICA de los chalecos antibalas, otorgado por el Instituto de Investigaciones y Control del Ejército de Chile (IDIC), respecto de cumplir con la normativa técnica de ensayo balístico NIJ 0101.04., cuyo nivel de amenaza no sea superior a 40 mm.' },
        { id: 11, text: 'Copia del SEGURO DE VIDA POR 30 UF o su equivalente en dólares americanos, esto para el caso que los CHALECOS ANTIBALAS no cumpla con la función, conforme a lo estipulado en el artículo noveno, numeral 1) del Decreto Supremo N° 867, del 13.06.2017 del Ministerio del Interior y Seguridad Pública, en concordancia con el Manual Operativo en materias de Seguridad Privada, aprobado a través del Decreto Exento N° 32 de fecha 31.01.2024, del mismo Ministerio.' },
        { id: 12, text: 'SEGURO DE VIDA DE LOS VIGILANTES PRIVADOS, la que debe considerar el término de "Vida" o "Seguro de Vida.' },
        { id: 13, text: 'OPERADORES CCTV QUE EMPRESA MONITOREA DESDE SANTIAGO ACREDITACIÓN DE LA EMPRESA Y OPERADORES.' },
        { id: 14, text: 'PLAN DE EMERGENCIA Y CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' },
        { id: 15, text: 'Adjunta los Anexos "A,B,C,D,E y F", conforme a lo establecido en el formato del Plan de Seguridad.' }
    ],
    'servicentros': [
        { id: 1, text: 'MEDIDAS DE SEGURIDAD CUMPLEN CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN. (página 108 Y 109 establecimiento de venta y combustible al público)' },
        { id: 2, text: 'CAJERO AUTOMÁTICO: CUAL ES EL NÚMERO ATM Y A QUE BANCO PERTENECE EL CAJERO AUTOMÁTICO. (FOTOGRAFÍAS- INCLUIR UBICACIÓN EN CROQUIS.)' },
        { id: 3, text: 'QUE EMPRESA DE TRANSPORTE DE TRANSPORTE DE VALORES ES LA ENCARGADA DE REALIZAR LA CARGA Y DESCARGA DEL CAJERO. (aislarse transitoriamente por parte de las entidades emisoras o receptoras o cualquier establecimiento que las contenga)' },
        { id: 4, text: 'MANTIENE ESTANCO PARA LA CARGA Y DESCARGA DEL CAJERO; SI NO TIENE ESTANCO DEBE APOYAR LA OPERACIÓN CON UNA CÁMARA DE SEGURIDAD.(Art. 8º inciso 1 del Decreto Nº 1.814 del 12.11.2014) (Agregar fotografías y croquis)' },
        { id: 5, text: 'OPERADOR CCTV: SI MANTIENE PROPIOS O DE LA CENTRAL SANTIAGO, DEBE GESTIONAR LAS AUTORIZACIONES DE LOS OPERADORES QUE REALIZAN ESTA LABOR. ADJUNTAR AUTORIZACIÓN DE LA EMPRESA Y DEL PERSONAL QUE REALIZA ESTE SERVICIO. (Decreto Supremo N° 867, de 2017- El Decreto Exento N° 32 del 31.01.2024)' },
        { id: 6, text: 'MÁXIMO DE DINERO QUE MANTIENE LOS ATENDEDORES O BOMBEROS.' },
        { id: 7, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO.' },
        { id: 8, text: 'CROQUIS DE CÁMARAS DE SEGURIDAD Y TECNOLOGÍA APLICADA (SENSORES DE HUMO, SENSORES DE MOVIMIENTO, ALARMAS, ETC.)' },
        { id: 9, text: 'ANÁLISIS DE VULNERABILIDADES Y MITIGACIÓN DE ELLAS.' },
        { id: 10, text: 'PLAN DE EMERGENCIA Y SUS ANEXOS.' },
        { id: 11, text: 'CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' },
        { id: 12, text: 'TODAS LAS FOTOGRAFÍAS DEBEN VENIR CON UNA DESCRIPCIÓN DE ELLAS.' }
    ],
    'sobre-500uf': [
        { id: 1, text: 'MEDIDAS DE SEGURIDAD CUMPLEN CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 2, text: 'CAJERO AUTOMÁTICO: CUAL ES EL NÚMERO ATM Y A QUE BANCO PERTENECE EL CAJERO AUTOMÁTICO. (FOTOGRAFÍAS- INCLUIR UBICACIÓN EN CROQUIS.)' },
        { id: 3, text: 'QUE EMPRESA DE TRANSPORTE DE TRANSPORTE DE VALORES ES LA ENCARGADA DE REALIZAR LA CARGA Y DESCARGA DEL CAJERO. (aislarse transitoriamente por parte de las entidades emisoras o receptoras o cualquier establecimiento que las contenga)' },
        { id: 4, text: 'MANTIENE ESTANCO PARA LA CARGA Y DESCARGA DEL CAJERO; SI NO TIENE ESTANCO DEBE APOYAR LA OPERACIÓN CON UNA CÁMARA DE SEGURIDAD. (Art. 8º inciso 1 del Decreto Nº 1.814 del 12.11.2014) (Agregar fotografías y croquis)' },
        { id: 5, text: 'OPERADOR CCTV: SI MANTIENE PROPIOS O DE LA CENTRAL SANTIAGO, DEBE GESTIONAR LAS AUTORIZACIONES DE LOS OPERADORES QUE REALIZAN ESTA LABOR. ADJUNTAR AUTORIZACIÓN DE LA EMPRESA Y DEL PERSONAL QUE REALIZA ESTE SERVICIO. (Decreto Supremo N° 867, de 2017- El Decreto Exento N° 32 del 31.01.2024)' },
        { id: 6, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS )' },
        { id: 7, text: 'CROQUIS DE CÁMARAS DE SEGURIDAD Y TECNOLOGÍA APLICADA (SENSORES DE HUMO, SENSORES DE MOVIMIENTO, ALARMAS, ETC.)' },
        { id: 8, text: 'ANÁLISIS DE VULNERABILIDADES Y MITIGACIÓN DE ELLAS.' },
        { id: 9, text: 'PLAN DE EMERGENCIA Y SUS ANEXOS.' },
        { id: 10, text: 'CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' }
    ],
    'directiva-funcionamiento': {
        'instalacion': [
            { id: 1, text: 'LISTADO DE LOS GG.SS.,(Que realizan servicios en la instalación).' },
            { id: 2, text: 'FOTOCOPIA DE CREDENCIAL O SOLICITUD DE CREDENCIAL (Art. 18 D/S 93), Que realizaran servicios en la instalación. (RESOL. 370 SUSPENDE CREDENCIALES HASTA AGOSTO 2024)' },
            { id: 3, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 numero | D/S 93) El rubro contratado debe decir Vida no fallecimiento ni muerte.' },
            { id: 4, text: 'SEGURO DE RESPONSABILIDAD CIVIL EMPRESA RR.HH. (Art. Undécimo numero 3 D/S 867)' },
            { id: 5, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS (Entre empresa de rr.hh. Y empleador Art. Séptimo D/S 867) No adjuntar orden de compra, correos de aceptación de servicios etc.' },
            { id: 6, text: 'UNIFORME (conforme el art octavo D/S N° 867)' },
            { id: 7, text: 'AUTORIZACIÓN EMPRESA RR.HH. VIGENTE (Art. 5 D/S 93 y Art. decimo del D/S 867).' },
            { id: 8, text: 'SERVICIOS DE 12 HORAS (F-35-B o RES. Acuerdo Marco Dirección del Trabajo).' },
            { id: 9, text: 'INFORME DEBILIDADES Y AMENAZAS DE LA INSTALACIÓN (Inciso segundo Nro. 4, del apartado IV, D/exento 261, del 21.02.2020, del Min. Interior y seg. Pública.)' },
            { id: 10, text: 'CHALECO ANTICORTE, Se debe adjuntar Certificación de la normativa técnica norteamericana NIJ 0115.00, Seguro de vida por 30 UF o su equivalente en dólares americanos ( viii. De los cargos de seguridad privada., 1.5.2 Chaleco anticorte, Decreto 32 Exento del 31.01.2024, modifica D 261.)' },
            { id: 11, text: 'CHALECO ANTIBALA, Se debe adjuntar Resolución de autorización de uso otorgado por la AA.FF. (Art. 9 N° 2 y 3 del D/S 867)' },
            { id: 12, text: 'BASTÓN, ESPOSAS DE SEGURIDAD, Se debe adjuntar resolución de autorización d uso otorgado por AA.FF. (Art 9 N° 3 del D/S 867)' }
        ],
        'evento-deportivo': [
            { id: 1, text: 'ANEXO CON DESCRIPCIÓN DE LA LABOR DEL GG.SS. EN SU FACCIÓN.' },
            { id: 2, text: 'LISTADO DE LOS GG.SS.' },
            { id: 3, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 número 1 D/S 93)' },
            { id: 4, text: 'SEGURO DE RESPONSABILIDAD CIVIL DE LA EMPRESA DE RR.HH. (Art. Undécimo numero 3 D/S. 867)' },
            { id: 5, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE LA EMPRESA DE RR.HH. Y EL EQUIPO DE FUTBOL ORGANIZADOR (Art. Séptimo D/S. 867).' },
            { id: 6, text: 'DESCRIPCIÓN Y FOTOGRAFÍA DEL UNIFORME (conforme el art octavo D/S. N° 867)' },
            { id: 7, text: 'AUTORIZACIÓN VIGENTE DE LA EMPRESA RR.HH. VIGENTE (Art. 5° D/S 93 y Art. decimo del D/S. 867).' },
            { id: 8, text: 'CONTRATO AMBULANCIA POR PARTE DEL EQUIPO ORGANIZADOR.' },
            { id: 9, text: 'AUTORIZACIÓN DE LA AMBULANCIA POR PARTE DE LA SEREMI DE SALUD.' },
            { id: 10, text: 'FOTOCOPIA DE LA CREDENCIAL O DE LA AUTORIZACIÓN VIGENTE DEL JEFE DE SEGURIDAD DEL CLUB ORGANIZADOR (Ley 19.327, inciso primero letra a)' },
            { id: 11, text: 'COPIA DEL CONTRATO DEL JEFE DE SEGURIDAD CON EL CLUB ORGANIZADOR (equipo)' },
            { id: 12, text: 'PROPUESTA DEL PARTIDO PRESENTADA POR EL EQUIPO ORGANIZADOR.' },
            { id: 13, text: 'PLAN DE EVACUACIÓN' }
        ],
        'evento-masivo': [
            { id: 1, text: 'DECLARACIÓN JURADA DEL EVENTO NOTARIADA' },
            { id: 2, text: 'LISTADO DE LOS GG.SS.' },
            { id: 3, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 número 1. D/S 93)' },
            { id: 4, text: 'SEGURO DE RESPONSABILIDAD CIVIL DE LA EMPRESA DE RR.HH. (Art. Undécimo numero 3 D/S. 867)' },
            { id: 5, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS (Art. Séptimo D/S. 867).' },
            { id: 6, text: 'DESCRIPCIÓN Y FOTOGRAFÍA DEL UNIFORME (conforme el art octavo D/S. N° 867)' },
            { id: 7, text: 'CONTRATO AMBULANCIA' },
            { id: 8, text: 'RES. AUTORIZ. AMBULANCIA DE LA SEREMI' },
            { id: 9, text: 'ACTA DESCRIPTIVA MAS DE 3.000 PERSONAS INT.' },
            { id: 10, text: 'AUTORIZACIÓN VIGENTE DE LA EMPRESA RR.HH. VIGENTE (Art. 5° D/S 93 y Art. decimo del D/S. 867.' },
            { id: 11, text: 'PLAN DE EVACUACIÓN Y EMERGENCIA firmado, por un prevencionista de riesgos.' },
            { id: 12, text: 'CARTA INFORMATIVA A: Carabineros del sector, bomberos, municipalidad del sector y servicio de salud del sector, la que debe venir con timbre de recepción.' }
        ]
    }
};

let currentSection = 'inicio'; // Variable para controlar la sección actual
let selectedDirectivaType = null; // Para la sección de Directiva de Funcionamiento
let sectionHistory = []; // Historial de navegación

// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(sectionId) {
    console.log(`Mostrando sección: ${sectionId}`);
    
    // Guardar sección actual en el historial si no es inicio
    if (currentSection !== 'inicio') {
        sectionHistory.push(currentSection);
    }

    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Mostrar/ocultar botón volver atrás
        const btnVolver = document.querySelector('.btn-volver');
        if (sectionId === 'inicio') {
            btnVolver.style.display = 'none';
            sectionHistory = []; // Limpiar historial
        } else {
            btnVolver.style.display = 'block';
        }
        
        // Cargar requisitos para todas las secciones excepto inicio
        if (sectionId !== 'inicio') {
            if (sectionId === 'directiva-funcionamiento') {
                // Para directiva solo cargar si ya hay un tipo seleccionado
                if (selectedDirectivaType) {
                    console.log(`Cargando directiva funcionamiento tipo: ${selectedDirectivaType}`);
                    cargarRequisitos(sectionId, selectedDirectivaType);
                } else {
                    console.log('Esperando selección de tipo de directiva');
                }
            } else {
                // Para todas las demás secciones, cargar inmediatamente
                console.log(`Cargando requisitos para: ${sectionId}`);
                cargarRequisitos(sectionId);
            }
        }
    } else {
        console.error(`No se encontró la sección: ${sectionId}-section`);
    }
}

// Función para volver atrás usando el historial
function volverAtras() {
    if (sectionHistory.length > 0) {
        const previousSection = sectionHistory.pop();
        // No guardar en historial cuando volvemos atrás
        const tempCurrent = currentSection;
        currentSection = previousSection;
        mostrarSeccionSinHistorial(previousSection);
        currentSection = tempCurrent; // Restaurar para la próxima navegación
    } else {
        mostrarSeccion('inicio');
    }
}

// Función auxiliar para mostrar sección sin agregar al historial
function mostrarSeccionSinHistorial(sectionId) {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Mostrar/ocultar botón volver atrás
        const btnVolver = document.querySelector('.btn-volver');
        if (sectionId === 'inicio') {
            btnVolver.style.display = 'none';
        } else {
            btnVolver.style.display = 'block';
        }
        
        // Cargar requisitos
        if (sectionId !== 'inicio' && sectionId !== 'directiva-funcionamiento') {
            cargarRequisitos(sectionId);
        } else if (sectionId === 'directiva-funcionamiento' && selectedDirectivaType) {
            cargarRequisitos(sectionId, selectedDirectivaType);
        }
    }
}

// Función para cargar los requisitos dinámicamente
function cargarRequisitos(sectionId, directivaType = null) {
    console.log(`Intentando cargar requisitos para: ${sectionId}`);
    
    const containerId = `requisitos-${sectionId}`;
    const requisitosContainer = document.getElementById(containerId);
    
    if (!requisitosContainer) {
        console.error(`Contenedor de requisitos no encontrado para: ${containerId}`);
        console.log('Contenedores disponibles:', 
            Array.from(document.querySelectorAll('[id*="requisitos"]')).map(el => el.id));
        return;
    }

    requisitosContainer.innerHTML = ''; // Limpiar requisitos anteriores

    let requisitos;
    if (sectionId === 'directiva-funcionamiento' && directivaType) {
        requisitos = requisitosData[sectionId][directivaType];
        console.log(`Cargando directiva tipo: ${directivaType}`);
    } else {
        requisitos = requisitosData[sectionId];
        console.log(`Cargando requisitos para sección: ${sectionId}`);
    }

    if (!requisitos) {
        console.error(`Datos de requisitos no encontrados para: ${sectionId}`);
        console.log('Secciones disponibles:', Object.keys(requisitosData));
        return;
    }

    console.log(`Cargando ${requisitos.length} requisitos`);

    requisitos.forEach((req, index) => {
        console.log(`Cargando requisito ${index + 1}: ${req.text.substring(0, 50)}...`);
        
        const requisitoItem = document.createElement('div');
        requisitoItem.classList.add('requisito-item');
        requisitoItem.setAttribute('data-numero', req.id);

        requisitoItem.innerHTML = `
            <div class="requisito-numero">${req.id}</div>
            <div class="requisito-titulo">${req.text}</div>
            <div class="estado-buttons">
                <button class="btn-estado btn-cumple" data-estado="cumple" onclick="marcarEstado(this, 'cumple')">Cumple</button>
                <button class="btn-estado btn-no-cumple" data-estado="no-cumple" onclick="marcarEstado(this, 'no-cumple')">No Cumple</button>
            </div>
            <textarea class="observacion-input" placeholder="Observaciones (opcional)"></textarea>
        `;
        requisitosContainer.appendChild(requisitoItem);
    });
    
    console.log(`Requisitos cargados exitosamente para: ${sectionId}`);
}

// Función para marcar el estado de un requisito
function marcarEstado(button, estado) {
    const requisitoItem = button.closest('.requisito-item');
    const cumpleButton = requisitoItem.querySelector('.btn-cumple');
    const noCumpleButton = requisitoItem.querySelector('.btn-no-cumple');

    // Remover clases 'active' y de estado
    cumpleButton.classList.remove('active');
    noCumpleButton.classList.remove('active');
    requisitoItem.classList.remove('cumple', 'no-cumple');

    // Añadir clase 'active' al botón clickeado
    button.classList.add('active');

    // Añadir clase de estado al requisito-item
    requisitoItem.classList.add(estado);
}

// Función para seleccionar el tipo de directiva
function seleccionarDirectiva(type) {
    selectedDirectivaType = type;
    const options = document.querySelectorAll('.directiva-option');
    options.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.type === type) {
            option.classList.add('active');
        }
    });
    cargarRequisitos('directiva-funcionamiento', type);
}

// Función para generar el reporte PDF
async function generarReporte(sectionId) {
    console.log('=== INICIO GENERACIÓN PDF ===');
    console.log('Sección ID recibida:', sectionId);
    
    // Verificar si jsPDF está disponible
    if (typeof window.jspdf === 'undefined') {
        alert('Generador PDF no disponible. Use el botón "Imprimir" en su lugar.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // Recopilar datos del formulario - CORREGIDO
    const getInputValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value.trim() : '';
    };

    // Mapear correctamente los IDs según la sección
    let nombreEstablecimientoId, direccionId, funcionarioGradoId;
    
    if (sectionId === 'plan-seguridad') {
        nombreEstablecimientoId = 'nombre-establecimiento-plan';
        direccionId = 'direccion-plan';
        funcionarioGradoId = 'funcionario-grado-plan';
    } else if (sectionId === 'servicentros') {
        nombreEstablecimientoId = 'nombre-establecimiento-servicentros';
        direccionId = 'direccion-servicentros';
        funcionarioGradoId = 'funcionario-grado-servicentros';
    } else if (sectionId === 'sobre-500uf') {
        nombreEstablecimientoId = 'nombre-establecimiento-500uf';
        direccionId = 'direccion-500uf';
        funcionarioGradoId = 'funcionario-grado-500uf';
    } else if (sectionId === 'directiva-funcionamiento') {
        nombreEstablecimientoId = 'nombre-establecimiento-directiva';
        direccionId = 'direccion-directiva';
        funcionarioGradoId = 'funcionario-grado-directiva';
    }
    
    console.log('IDs a buscar:', {
        nombreEstablecimientoId,
        direccionId, 
        funcionarioGradoId
    });

    const generalInfo = {
        nombreEstablecimiento: getInputValue(nombreEstablecimientoId),
        direccion: getInputValue(direccionId),
        funcionarioGrado: getInputValue(funcionarioGradoId)
    };

    console.log('Datos leídos del formulario:', generalInfo);

    let sectionTitle = '';
    let sectionSubtitle = '';
    if (sectionId === 'plan-seguridad') {
        sectionTitle = 'PLAN DE SEGURIDAD';
        sectionSubtitle = 'Vigencia según estudio (2 años) - Decreto Exento N° 32 del 31.01.2024';
    } else if (sectionId === 'servicentros') {
        sectionTitle = 'MEDIDAS SERVICENTROS';
        sectionSubtitle = 'Vigencia 3 años - Ley 20.931';
    } else if (sectionId === 'sobre-500uf') {
        sectionTitle = 'MEDIDAS SOBRE 500 UF';
        sectionSubtitle = 'Vigencia 3 años - Supermercados, joyerías, bancos y establecimientos que manejan valores superiores a 500 UF';
    } else if (sectionId === 'directiva-funcionamiento') {
        sectionTitle = `DIRECTIVA DE FUNCIONAMIENTO - ${selectedDirectivaType ? selectedDirectivaType.toUpperCase() : ''}`;
        sectionSubtitle = 'Requisitos para directivas de instalaciones, eventos deportivos y otros eventos masivos';
    }

    // Añadir encabezado al PDF
    doc.setFontSize(18);
    doc.setTextColor(45, 80, 22); // Verde oscuro
    doc.text('Sistema de Requisitos de Seguridad Privada', 105, 20, null, null, 'center');
    doc.setFontSize(12);
    doc.setTextColor(74, 124, 34); // Verde más claro
    doc.text('OS10 Coquimbo - Carabineros de Chile', 105, 27, null, null, 'center');

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Negro
    doc.text(`Reporte de: ${sectionTitle}`, 105, 40, null, null, 'center');
    doc.setFontSize(10);
    doc.text(sectionSubtitle, 105, 47, null, null, 'center');

    let yOffset = 60;

    // Añadir información general
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('DATOS DEL ESTABLECIMIENTO FISCALIZADO:', 20, yOffset);
    yOffset += 7;
    doc.text(`Nombre del Establecimiento: ${generalInfo.nombreEstablecimiento}`, 20, yOffset);
    yOffset += 7;
    doc.text(`Dirección: ${generalInfo.direccion}`, 20, yOffset);
    yOffset += 12;

    doc.text('DATOS DEL FUNCIONARIO:', 20, yOffset);
    yOffset += 7;
    doc.text(`Grado y Nombre: ${generalInfo.funcionarioGrado}`, 20, yOffset);
    yOffset += 7;
    
    // Agregar fecha y hora del reporte
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString('es-CL');
    const horaFormateada = fechaActual.toLocaleTimeString('es-CL');
    doc.text(`Fecha del reporte: ${fechaFormateada} - ${horaFormateada}`, 20, yOffset);
    yOffset += 15;

    // Añadir tabla de requisitos
    doc.setFontSize(10);
    const headers = [['N°', 'Requisito', 'Estado', 'Observaciones']];
    const data = [];

    // Buscar el contenedor de requisitos correcto
    let requisitosSelector;
    if (sectionId === 'sobre-500uf') {
        requisitosSelector = '#requisitos-sobre-500uf .requisito-item';
    } else {
        requisitosSelector = `#requisitos-${sectionId} .requisito-item`;
    }
    
    console.log('Buscando requisitos con selector:', requisitosSelector);
    const requisitosItems = document.querySelectorAll(requisitosSelector);
    console.log('Requisitos encontrados:', requisitosItems.length);
    
    requisitosItems.forEach((item, index) => {
        const numero = item.querySelector('.requisito-numero').textContent;
        const titulo = item.querySelector('.requisito-titulo').textContent;
        const estado = item.classList.contains('cumple') ? 'Cumple' : (item.classList.contains('no-cumple') ? 'No Cumple' : 'Pendiente');
        const observacion = item.querySelector('.observacion-input').value || '';
        
        console.log(`Requisito ${index + 1}: ${numero} - ${estado}`);
        data.push([numero, titulo, estado, observacion]);
    });

    doc.autoTable({
        startY: yOffset,
        head: headers,
        body: data,
        theme: 'grid',
        headStyles: {
            fillColor: [45, 80, 22], // Verde oscuro
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            halign: 'center'
        },
        styles: {
            fontSize: 8,
            cellPadding: 2,
            valign: 'middle'
        },
        columnStyles: {
            0: { cellWidth: 10, halign: 'center' }, // N°
            1: { cellWidth: 80 }, // Requisito
            2: { cellWidth: 20, halign: 'center' }, // Estado
            3: { cellWidth: 70 } // Observaciones
        },
        didParseCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) { // Columna de Estado
                if (data.cell.text[0] === 'Cumple') {
                    data.cell.styles.fillColor = [40, 167, 69]; // Verde para Cumple
                    data.cell.styles.textColor = [255, 255, 255];
                } else if (data.cell.text[0] === 'No Cumple') {
                    data.cell.styles.fillColor = [243, 156, 18]; // Naranja para No Cumple
                    data.cell.styles.textColor = [255, 255, 255];
                }
            }
        }
    });

    // Generar fecha actual para el nombre del archivo
    const fecha = new Date().toISOString().split('T')[0];
    doc.save(`${sectionTitle.replace(/\s+/g, '_')}_${fecha}.pdf`);
}

// Eventos para mejorar la impresión
window.addEventListener('beforeprint', function() {
    // Mostrar headers de desktop para impresión
    document.querySelectorAll('.header-requisitos-desktop').forEach(header => {
        header.style.display = 'grid';
    });
    // Ocultar headers mobile para impresión
    document.querySelectorAll('.header-requisitos-mobile').forEach(header => {
        header.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    // Restaurar headers después de imprimir
    document.querySelectorAll('.header-requisitos-desktop').forEach(header => {
        header.style.display = 'none';
    });
    // Restaurar headers mobile si es necesario (en mobile)
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.header-requisitos-mobile').forEach(header => {
            header.style.display = 'block';
        });
    }
});

// Cargar los requisitos iniciales cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    // Al cargar la página, se muestra la sección de inicio por defecto
    mostrarSeccion('inicio');
    
    // Manejar error de carga del logo
    const logoImg = document.querySelector('.logo-imagen');
    if (logoImg) {
        logoImg.onerror = function() {
            console.log('No se pudo cargar logo.png, usando fallback');
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.innerHTML = '🏛️';
            fallback.style.fontSize = '30px';
            fallback.style.color = 'white';
            this.parentNode.appendChild(fallback);
        };
        
        logoImg.onload = function() {
            console.log('Logo cargado exitosamente');
        };
    }
    
    // Configurar eventos de teclado para navegación
    document.addEventListener('keydown', function(event) {
        // ESC para volver atrás
        if (event.key === 'Escape' && currentSection !== 'inicio') {
            volverAtras();
        }
        // Ctrl+P para imprimir
        if (event.ctrlKey && event.key === 'p' && currentSection !== 'inicio') {
            event.preventDefault();
            window.print();
        }
    });
    
    // Agregar smooth scroll a los elementos que lo necesiten
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
