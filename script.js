// script.js - Versión Completa Final con PDF corregido y texto justificado
// MODIFICADO: Cambio de colores naranjas por rojos para "No Cumple"
// MODIFICADO: Muestra imágenes en el PDF para "Cumple" y "No Cumple"
// MODIFICADO: Datos en mayúsculas y letra más grande en PDF
// CORREGIDO: PDF completo sin cortes y texto justificado

// Datos de los requisitos para cada sección
const requisitosData = {
    'plan-seguridad': [
        { id: 1, text: 'SOLICITUD SIMPLE DE LA ENTIDAD OBLIGADA.' },
        { id: 2, text: 'EL PLAN DE SEGURIDAD, CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 3, text: 'ENCARGADO DE SEGURIDAD: EL ENCARGADO DE SEGURIDAD DEBE ESTAR ACREDITADO (AUTORIZACIÓN RESOLUCIÓN) ASÍ COMO TAMBIÉN EL SUPLENTE. (APARTADO IV: CONFECCIÓN DE INSTRUMENTOS DE SEGURIDAD; N° 2 PLAN DE SEGURIDAD ; ENCARGADO DE SEGURIDAD)' },
        { id: 4, text: 'CAJERO AUTOMÁTICO: CUANTO CAJEROS SE MANTIENEN EN EL BANCO Y NÚMEROS ATM.' },
        { id: 5, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZación DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS)' },
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
        { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
        { id: 2, text: 'MEDIDAS DE SEGURIDAD CUMPLEN CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN. (página 108 Y 109 establecimiento de venta y combustible al público)' },
        { id: 3, text: 'CAJERO AUTOMÁTICO: CUAL ES EL NÚMERO ATM Y A QUE BANCO PERTENECE EL CAJERO AUTOMÁTICO. (FOTOGRAFÍAS- INCLUIR UBICACIÓN EN CROQUIS.)' },
        { id: 4, text: 'QUE EMPRESA DE TRANSPORTE DE TRANSPORTE DE VALORES ES LA ENCARGADA DE REALIZAR LA CARGA Y DESCARGA DEL CAJERO. (aislarse transitoriamente por parte de las entidades emisoras o receptoras o cualquier establecimiento que las contenga)' },
        { id: 5, text: 'MANTIENE ESTANCO PARA LA CARGA Y DESCARGA DEL CAJERO; SI NO TIENE ESTANCO DEBE APOYAR LA OPERACIÓN CON UNA CÁMARA DE SEGURIDAD.(Art. 8º inciso 1 del Decreto Nº 1.814 del 12.11.2014) (Agregar fotografías y croquis)' },
        { id: 6, text: 'OPERADOR CCTV: SI MANTIENE PROPIOS O DE LA CENTRAL SANTIAGO, DEBE GESTIONAR LAS AUTORIZACIONES DE LOS OPERADORES QUE REALIZAN ESTA LABOR. ADJUNTAR AUTORIZACIÓN DE LA EMPRESA Y DEL PERSONAL QUE REALIZA ESTE SERVICIO. (Decreto Supremo N° 867, de 2017- El Decreto Exento N° 32 del 31.01.2024)' },
        { id: 7, text: 'MÁXIMO DE DINERO QUE MANTIENE LOS ATENDEDORES O BOMBEROS.' },
        { id: 8, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZación DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO.' },
        { id: 9, text: 'CROQUIS DE CÁMARAS DE SEGURIDAD Y TECNOLOGÍA APLICADA (SENSORES DE HUMO, SENSORES DE MOVIMIENTO, ALARMAS, ETC.)' },
        { id: 10, text: 'ANÁLISIS DE VULNERABILIDADES Y MITIGACIÓN DE ELLAS.' },
        { id: 11, text: 'PLAN DE EMERGENCIA Y SUS ANEXOS.' },
        { id: 12, text: 'CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' },
        { id: 13, text: 'TODAS LAS FOTOGRAFÍAS DEBEN VENIR CON UNA DESCRIPCIÓN DE ELLAS.' }
    ],
    'sobre-500uf': [
        { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
        { id: 2, text: 'MEDIDAS DE SEGURIDAD CUMPLEN CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 3, text: 'CAJERO AUTOMÁTICO: CUAL ES EL NÚMERO ATM Y A QUE BANCO PERTENECE EL CAJERO AUTOMÁTICO. (FOTOGRAFÍAS- INCLUIR UBICACIÓN EN CROQUIS.)' },
        { id: 4, text: 'QUE EMPRESA DE TRANSPORTE DE TRANSPORTE DE VALORES ES LA ENCARGADA DE REALIZAR LA CARGA Y DESCARGA DEL CAJERO. (aislarse transitoriamente por parte de las entidades emisoras o receptoras o cualquier establecimiento que las contenga)' },
        { id: 5, text: 'MANTIENE ESTANCO PARA LA CARGA Y DESCARGA DEL CAJERO; SI NO TIENE ESTANCO DEBE APOYAR LA OPERACIÓN CON UNA CÁMARA DE SEGURIDAD.(Art. 8º inciso 1 del Decreto Nº 1.814 del 12.11.2014) (Agregar fotografías y croquis)' },
        { id: 6, text: 'OPERADOR CCTV: SI MANTIENE PROPIOS O DE LA CENTRAL SANTIAGO, DEBE GESTIONAR LAS AUTORIZACIONES DE LOS OPERADORES QUE REALIZAN ESTA LABOR. ADJUNTAR AUTORIZACIÓN DE LA EMPRESA Y DEL PERSONAL QUE REALIZA ESTE SERVICIO. (Decreto Supremo N° 867, de 2017- El Decreto Exento N° 32 del 31.01.2024)' },
        { id: 7, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS )' },
        { id: 8, text: 'CROQUIS DE CÁMARAS DE SEGURIDAD Y TECNOLOGÍA APLICADA (SENSORES DE HUMO, SENSORES DE MOVIMIENTO, ALARMAS, ETC.)' },
        { id: 9, text: 'ANÁLISIS DE VULNERABILIDADES Y MITIGACIÓN DE ELLAS.' },
        { id: 10, text: 'PLAN DE EMERGENCIA Y SUS ANEXOS.' },
        { id: 11, text: 'CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' }
    ],
    'directiva-funcionamiento': {
        'instalacion': [
            { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
            { id: 2, text: 'CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
            { id: 3, text: 'LISTADO DE LOS GG.SS.,(Que realizan servicios en la instalación).' },
            { id: 4, text: 'FOTOCOPIA DE CREDENCIAL O SOLICITUD DE CREDENCIAL (Art. 18 D/S 93), Que realizaran servicios en la instalación. (RESOL. 370 SUSPENDE CREDENCIALES HASTA AGOSTO 2024)' },
            { id: 5, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 numero | D/S 93) El rubro contratado debe decir Vida no fallecimiento ni muerte.' },
            { id: 6, text: 'SEGURO DE RESPONSABILIDAD CIVIL EMPRESA RR.HH. (Art. Undécimo numero 3 D/S 867)' },
            { id: 7, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS (Entre empresa de rr.hh. Y empleador Art. Séptimo D/S 867) No adjuntar orden de compra, correos de aceptación de servicios etc.' },
            { id: 8, text: 'UNIFORME (conforme el art octavo D/S N° 867)' },
            { id: 9, text: 'AUTORIZACIÓN EMPRESA RR.HH. VIGENTE (Art. 5 D/S 93 y Art. decimo del D/S 867).' },
            { id: 10, text: 'SERVICIOS DE 12 HORAS (F-35-B o RES. Acuerdo Marco Dirección del Trabajo).' },
            { id: 11, text: 'INFORME DEBILIDADES Y AMENAZAS DE LA INSTALACIÓN (Inciso segundo Nro. 4, del apartado IV, D/exento 261, del 21.02.2020, del Min. Interior y seg. Pública.)' },
            { id: 12, text: 'CHALECO ANTICORTE, Se debe adjuntar Certificación de la normativa técnica norteamericana NIJ 0115.00, Seguro de vida por 30 UF o su equivalente en dólares americanos ( viii. De los cargos de seguridad privada., 1.5.2 Chaleco anticorte, Decreto 32 Exento del 31.01.2024, modifica D 261.)' },
            { id: 13, text: 'CHALECO ANTIBALA, Se debe adjuntar Resolución de autorización de uso otorgado por la AA.FF. (Art. 9 N° 2 y 3 del D/S 867)' },
            { id: 14, text: 'BASTÓN, ESPOSAS DE SEGURIDAD, Se debe adjuntar resolución de autorización d uso otorgado por AA.FF. (Art 9 N° 3 del D/S 867)' }
        ],
        'evento-deportivo': [
            { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
            { id: 2, text: 'CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
            { id: 3, text: 'ANEXO CON DESCRIPCIÓN DE LA LABOR DEL GG.SS. EN SU FACCIÓN.' },
            { id: 4, text: 'LISTADO DE LOS GG.SS.' },
            { id: 5, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 número 1 D/S 93)' },
            { id: 6, text: 'SEGURO DE RESPONSABILIDAD CIVIL DE LA EMPRESA DE RR.HH. (Art. Undécimo numero 3 D/S. 867)' },
            { id: 7, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE LA EMPRESA DE RR.HH. Y EL EQUIPO DE FUTBOL ORGANIZADOR (Art. Séptimo D/S. 867).' },
            { id: 8, text: 'DESCRIPCIÓN Y FOTOGRAFÍA DEL UNIFORME (conforme el art octavo D/S. N° 867)' },
            { id: 9, text: 'AUTORIZACIÓN VIGENTE DE LA EMPRESA RR.HH. VIGENTE (Art. 5° D/S 93 y Art. decimo del D/S. 867).' },
            { id: 10, text: 'CONTRATO AMBULANCIA POR PARTE DEL EQUIPO ORGANIZADOR.' },
            { id: 11, text: 'AUTORIZACIÓN DE LA AMBULANCIA POR PARTE DE LA SEREMI DE SALUD.' },
            { id: 12, text: 'FOTOCOPIA DE LA CREDENCIAL O DE LA AUTORIZACIÓN VIGENTE DEL JEFE DE SEGURIDAD DEL CLUB ORGANIZADOR (Ley 19.327, inciso primero letra a)' },
            { id: 13, text: 'COPIA DEL CONTRATO DEL JEFE DE SEGURIDAD CON EL CLUB ORGANIZADOR (equipo)' },
            { id: 14, text: 'PROPUESTA DEL PARTIDO PRESENTADA POR EL EQUIPO ORGANIZADOR.' },
            { id: 15, text: 'PLAN DE EVACUACIÓN' }
        ],
        'evento-masivo': [
            { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
            { id: 2, text: 'CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
            { id: 3, text: 'DECLARACIÓN JURADA DEL EVENTO NOTARIADA' },
            { id: 4, text: 'LISTADO DE LOS GG.SS.' },
            { id: 5, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 número 1. D/S 93)' },
            { id: 6, text: 'SEGURO DE RESPONSABILIDAD CIVIL DE LA EMPRESA DE RR.HH. (Art. Undécimo numero 3 D/S. 867)' },
            { id: 7, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS (Art. Séptimo D/S. 867).' },
            { id: 8, text: 'DESCRIPCIÓN Y FOTOGRAFÍA DEL UNIFORME (conforme el art octavo D/S. N° 867)' },
            { id: 9, text: 'CONTRATO AMBULANCIA' },
            { id: 10, text: 'RES. AUTORIZ. AMBULANCIA DE LA SEREMI' },
            { id: 11, text: 'ACTA DESCRIPTIVA MAS DE 3.000 PERSONAS INT.' },
            { id: 12, text: 'AUTORIZACIÓN VIGENTE DE LA EMPRESA RR.HH. VIGENTE (Art. 5° D/S 93 y Art. decimo del D/S. 867.' },
            { id: 13, text: 'PLAN DE EVACUACIÓN Y EMERGENCIA firmado, por un prevencionista de riesgos.' },
            { id: 14, text: 'CARTA INFORMATIVA A: Carabineros del sector, bomberos, municipalidad del sector y servicio de salud del sector, la que debe venir con timbre de recepción.' }
        ]
    }
};

let currentSection = 'inicio'; // Variable para controlar la sección actual
let selectedDirectivaType = null; // Para la sección de Directiva de Funcionamiento
let sectionHistory = []; // Historial de navegación

// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(sectionId) {
    console.log(`Mostrando sección: ${sectionId}`);

    // Cambiar clase del body para el fondo
    document.body.className = sectionId;
    
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
            if (btnVolver) btnVolver.style.display = 'none';
            sectionHistory = []; // Limpiar historial
        } else {
            if (btnVolver) btnVolver.style.display = 'block';
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
        mostrarSeccion(previousSection);
    } else {
        mostrarSeccion('inicio');
    }
    // Actualizar clase del body
    document.body.className = currentSection;
}

// Función para cargar los requisitos dinámicamente
function cargarRequisitos(sectionId, directivaType = null) {
    console.log(`Intentando cargar requisitos para: ${sectionId}`);
    
    // CORREGIDO: Manejar el ID especial para sobre-500uf
    let containerId;
    if (sectionId === 'sobre-500uf') {
        containerId = 'requisitos-sobre-500uf';
    } else {
        containerId = `requisitos-${sectionId}`;
    }
    
    const requisitosContainer = document.getElementById(containerId);
    
    // Agregar clase de sección al contenedor para los colores de números
    if (requisitosContainer && !requisitosContainer.classList.contains(sectionId)) {
    requisitosContainer.className = `requisitos-container ${sectionId}`;
    }
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
        const requisitoItem = document.createElement('div');
        requisitoItem.classList.add('requisito-item');
        requisitoItem.setAttribute('data-numero', req.id);

        requisitoItem.innerHTML = `
            <div class="requisito-numero">${req.id}</div>
            <div class="requisito-titulo">${req.text}</div>
            <div class="estado-buttons">
                <button class="btn-estado btn-cumple" data-estado="CUMPLE" onclick="marcarEstado(this, 'cumple')">CUMPLE</button>
                <button class="btn-estado btn-no-cumple" data-estado="no-cumple" onclick="marcarEstado(this, 'no-cumple')">NO CUMPLE</button>
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

// Función para generar el reporte PDF - VERSIÓN COMPLETA CORREGIDA
async function generarReporte(sectionId) {
    // Verificar si jsPDF está disponible
    if (typeof window.jspdf === 'undefined') {
        alert('Generador PDF no disponible. Use el botón "Imprimir" en su lugar.');
        return;
    }

    const { jsPDF } = window.jspdf;
    // CORREGIDO: Usar tamaño A4 estándar para mejor compatibilidad
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Dimensiones de página A4
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // ** Función para cargar imágenes y convertirlas a Base64 **
    const getImageBase64 = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                console.log(`Imagen cargada con éxito: ${url}`);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = (error) => {
                console.error(`Error al cargar la imagen ${url}:`, error);
                resolve(null); // Resolver con null en lugar de rechazar
            };
            img.src = url;
        });
    };

    let cumpleImageBase64 = '';
    let noCumpleImageBase64 = '';
    let logoImageBase64 = '';

    try {
        cumpleImageBase64 = await getImageBase64('cumple.png');
        noCumpleImageBase64 = await getImageBase64('nocumple.png');
        logoImageBase64 = await getImageBase64('foto/logo.png');
    } catch (error) {
        console.error('Error al cargar imágenes:', error);
    }

    // Recopilar datos del formulario con IDs correctos
    const getInputValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value.trim() : '';
    };

    // Mapear correctamente los IDs según la sección
    let nombreEmpresaId, rutEmpresaId, nombreEstablecimientoId, direccionId, funcionarioGradoId;
    
    if (sectionId === 'plan-seguridad') {
        nombreEmpresaId = 'nombre-empresa-plan';
        rutEmpresaId = 'rut-empresa-plan';
        nombreEstablecimientoId = 'nombre-establecimiento-plan';
        direccionId = 'direccion-plan';
        funcionarioGradoId = 'funcionario-grado-plan';
    } else if (sectionId === 'servicentros') {
        nombreEmpresaId = 'nombre-empresa-servicentros';
        rutEmpresaId = 'rut-empresa-servicentros';
        nombreEstablecimientoId = 'nombre-establecimiento-servicentros';
        direccionId = 'direccion-servicentros';
        funcionarioGradoId = 'funcionario-grado-servicentros';
    } else if (sectionId === 'sobre-500uf') {
        nombreEmpresaId = 'nombre-empresa-500uf';
        rutEmpresaId = 'rut-empresa-500uf';
        nombreEstablecimientoId = 'nombre-establecimiento-500uf';
        direccionId = 'direccion-500uf';
        funcionarioGradoId = 'funcionario-grado-500uf';
    } else if (sectionId === 'directiva-funcionamiento') {
        nombreEmpresaId = 'nombre-empresa-directiva';
        rutEmpresaId = 'rut-empresa-directiva';
        nombreEstablecimientoId = 'nombre-establecimiento-directiva';
        direccionId = 'direccion-directiva';
        funcionarioGradoId = 'funcionario-grado-directiva';
    }

    const generalInfo = {
        nombreEmpresa: getInputValue(nombreEmpresaId),
        rutEmpresa: getInputValue(rutEmpresaId),
        nombreEstablecimiento: getInputValue(nombreEstablecimientoId),
        direccion: getInputValue(direccionId),
        funcionarioGrado: getInputValue(funcionarioGradoId)
    };

    // Validar que al menos el nombre de la empresa esté lleno
    if (!generalInfo.nombreEmpresa) {
        alert('Por favor, complete al menos el nombre de la empresa antes de generar el reporte.');
        return;
    }

    let sectionTitle = '';
    let sectionSubtitle = '';
    let tipoDirectiva = '';
    
    if (sectionId === 'plan-seguridad') {
        sectionTitle = 'PLAN DE SEGURIDAD';
        sectionSubtitle = 'Vigencia según estudio (2 años) - Decreto Exento N° 32 del 31.01.2024';
    } else if (sectionId === 'servicentros') {
        sectionTitle = 'MEDIDAS DE SEG. SERVICENTROS';
        sectionSubtitle = 'Vigencia 3 años - Ley 19.303 - Decreto Exento N° 32 Exento del 31.01.2024.';
    } else if (sectionId === 'sobre-500uf') {
        sectionTitle = 'MEDIDAS SOBRE 500 UF';
        sectionSubtitle = 'Vigencia 3 años - Supermercados, joyerías, bancos y establecimientos que manejan valores superiores a 500 UF';
    } else if (sectionId === 'directiva-funcionamiento') {
        sectionTitle = 'DIRECTIVA DE FUNCIONAMIENTO';
        
        if (selectedDirectivaType === 'instalacion') {
            tipoDirectiva = 'INSTALACIÓN';
        } else if (selectedDirectivaType === 'evento-deportivo') {
            tipoDirectiva = 'EVENTO DEPORTIVO';
        } else if (selectedDirectivaType === 'evento-masivo') {
            tipoDirectiva = 'EVENTO MASIVO';
        }
        
        sectionSubtitle = 'Requisitos para directivas de instalaciones, eventos deportivos y otros eventos masivos';
    }

    // Función para agregar el logo al PDF
    const agregarLogoPDF = (logoBase64) => {
        if (logoBase64) {
            try {
                const logoWidth = 20;
                const logoHeight = 20;
                doc.addImage(logoBase64, 'PNG', 15, 8, logoWidth, logoHeight);
                doc.addImage(logoBase64, 'PNG', pageWidth - 35, 8, logoWidth, logoHeight);
                console.log('Logos agregados al PDF exitosamente');
            } catch (error) {
                console.log('Error al agregar logo:', error);
            }
        }
    };

    agregarLogoPDF(logoImageBase64);

    // Añadir encabezado al PDF
    doc.setFontSize(18);
    doc.setTextColor(45, 80, 22);
    doc.text(sectionTitle, pageWidth/2, 25, { align: 'center' });
    
    let yOffsetHeader = 32;
    
    if (sectionId === 'directiva-funcionamiento' && tipoDirectiva) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(tipoDirectiva, pageWidth/2, yOffsetHeader, { align: 'center' });
        yOffsetHeader += 7;
    }
    
    doc.setFontSize(11);
    doc.setTextColor(74, 124, 34);
    doc.text('OS10 Coquimbo - Carabineros de Chile', pageWidth/2, yOffsetHeader, { align: 'center' });
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(sectionSubtitle, pageWidth/2, yOffsetHeader + 6, { align: 'center' });

    // Agregar línea separadora decorativa
    const lineY = yOffsetHeader + 12;
    doc.setDrawColor(45, 80, 22);
    doc.setLineWidth(0.5);
    doc.line(20, lineY, pageWidth - 20, lineY);

    let yOffset = lineY + 10;

    // Función auxiliar para convertir a mayúsculas de forma segura
    const toSafeUpperCase = (text) => {
        return text ? text.toUpperCase() : '';
    };

    // Añadir información general
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.text('DATOS DE LA EMPRESA O ENTIDAD Y DATOS DEL ESTABLECIMIENTO:', 20, yOffset);
    yOffset += 6;
    
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.text(`NOMBRE DE LA EMPRESA: ${toSafeUpperCase(generalInfo.nombreEmpresa)}`, 20, yOffset);
    yOffset += 5;
    doc.text(`RUT DE LA EMPRESA: ${toSafeUpperCase(generalInfo.rutEmpresa)}`, 20, yOffset);
    yOffset += 5;
    doc.text(`NOMBRE DEL ESTABLECIMIENTO: ${toSafeUpperCase(generalInfo.nombreEstablecimiento)}`, 20, yOffset);
    yOffset += 5;
    doc.text(`DIRECCIÓN DEL ESTABLECIMIENTO: ${toSafeUpperCase(generalInfo.direccion)}`, 20, yOffset);
    yOffset += 8;

    doc.setFont(undefined, 'bold');
    doc.setFontSize(10);
    doc.text('DATOS DEL FUNCIONARIO:', 20, yOffset);
    yOffset += 6;
    
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.text(`GRADO Y NOMBRE: ${toSafeUpperCase(generalInfo.funcionarioGrado)}`, 20, yOffset);
    yOffset += 5;
    
    // Agregar fecha y hora del reporte
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString('es-CL');
    const horaFormateada = fechaActual.toLocaleTimeString('es-CL');
    doc.setFontSize(7);
    doc.setTextColor(100, 100, 100);
    doc.text(`Fecha del reporte: ${fechaFormateada} - ${horaFormateada}`, 20, yOffset);
    yOffset += 10;

    // Preparar datos para la tabla
    const headers = [['N°', 'Requisito', 'Estado', 'Observaciones']];
    const data = [];

    let requisitosSelector;
    if (sectionId === 'sobre-500uf') {
        requisitosSelector = '#requisitos-sobre-500uf .requisito-item';
    } else {
        requisitosSelector = `#requisitos-${sectionId} .requisito-item`;
    }

    const requisitosItems = document.querySelectorAll(requisitosSelector);
    requisitosItems.forEach(item => {
        const numero = item.querySelector('.requisito-numero').textContent;
        const titulo = item.querySelector('.requisito-titulo').textContent;
        const estado = item.classList.contains('cumple') ? 'CUMPLE' : (item.classList.contains('no-cumple') ? 'NO CUMPLE' : 'PENDIENTE');
        const observacion = item.querySelector('.observacion-input').value || '';
        
        data.push([numero, titulo, estado, observacion]);
    });

    // CORREGIDO: Configuración mejorada de autoTable
    doc.autoTable({
        startY: yOffset,
        margin: { left: 20, right: 20, top: 20, bottom: 20 },
        head: headers,
        body: data,
        theme: 'grid',
        pageBreak: 'auto', // IMPORTANTE: Permitir salto de página automático
        showHead: 'everyPage', // Mostrar encabezado en cada página
        headStyles: {
            fillColor: [45, 80, 22],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            halign: 'center',
            fontSize: 9
        },
        styles: {
            fontSize: 8,
            cellPadding: 2,
            valign: 'middle',
            textColor: [0, 0, 0],
            fontStyle: 'normal',
            lineColor: [200, 200, 200],
            lineWidth: 0.1,
            overflow: 'linebreak' // IMPORTANTE: Permitir salto de línea
        },
        columnStyles: {
            0: { cellWidth: 15, halign: 'center' }, // N°
            1: { cellWidth: 85, halign: 'justify' }, // Requisito - JUSTIFICADO
            2: { cellWidth: 25, halign: 'center' }, // Estado
            3: { cellWidth: 45, halign: 'justify' } // Observaciones - JUSTIFICADO
        },
        // CORREGIDO: Hooks mejorados
        didParseCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) {
                const estadoOriginal = data.row.raw[2];
                if (estadoOriginal === 'CUMPLE') {
                    data.cell.styles.fillColor = [194, 255, 202];
                    data.cell.styles.textColor = [0, 140, 44];
                } else if (estadoOriginal === 'NO CUMPLE') {
                    data.cell.styles.fillColor = [247, 202, 209];
                    data.cell.styles.textColor = [247, 49, 9];
                }
                data.cell.text = '';
            }
            if (data.section === 'body' && data.column.index !== 2) {
                data.cell.styles.textColor = [0, 0, 0];
                data.cell.styles.fontStyle = 'normal';
            }
        },
        didDrawCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) {
                const estadoOriginal = data.row.raw[2];
                let imgWidth, imgHeight, imageToDraw = null;

                if (estadoOriginal === 'CUMPLE' && cumpleImageBase64) {
                    imgWidth = 4;
                    imgHeight = 4;
                    imageToDraw = cumpleImageBase64;
                } else if (estadoOriginal === 'NO CUMPLE' && noCumpleImageBase64) {
                    imgWidth = 5;
                    imgHeight = 5;
                    imageToDraw = noCumpleImageBase64;
                }

                if (imageToDraw) {
                    const x = data.cell.x + (data.cell.width / 2) - (imgWidth / 2);
                    const y = data.cell.y + (data.cell.height / 2) - (imgHeight / 2);
                    try {
                        doc.addImage(imageToDraw, 'PNG', x, y, imgWidth, imgHeight);
                    } catch (error) {
                        console.log('Error al agregar imagen de estado:', error);
                    }
                }
            }
        },
        didDrawPage: function (data) {
            // Footer en cada página
            doc.setFontSize(9);
            doc.setTextColor(100, 100, 100);
            doc.setFont(undefined, 'normal');
            
            const footerText = 'Seguridad Privada - OS10 Coquimbo.';
            doc.text(footerText, pageWidth/2, pageHeight - 15, { align: 'center' });
            
            // Numeración de páginas
            doc.setFontSize(8);
            doc.setTextColor(80, 80, 80);
            const currentPage = data.pageNumber;
            const pageText = `Página ${currentPage}`;
            doc.text(pageText, pageWidth - 30, pageHeight - 15, { align: 'right' });
        }
    });

    // CORREGIDO: Asegurar numeración correcta después de la generación
    const totalPages = doc.internal.getNumberOfPages();
    
    // Actualizar numeración en todas las páginas
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        
        // Limpiar área del footer
        doc.setFillColor(255, 255, 255);
        doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');
        
        // Footer centrado
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.setFont(undefined, 'normal');
        const footerText = 'Seguridad Privada - OS10 Coquimbo.';
        doc.text(footerText, pageWidth/2, pageHeight - 15, { align: 'center' });
        
        // Numeración actualizada
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        const pageText = `Página ${i} de ${totalPages}`;
        doc.text(pageText, pageWidth - 30, pageHeight - 15, { align: 'right' });
    }

    // CORREGIDO: Asegurar que el documento esté completo antes de guardar
    try {
        const fecha = new Date().toISOString().split('T')[0];
        const fileName = `${sectionTitle.replace(/\s+/g, '_')}_${fecha}.pdf`;
        
        // Usar output para obtener el blob y luego guardarlo
        const pdfBlob = doc.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log(`PDF generado exitosamente: ${fileName}`);
        console.log(`Total de páginas: ${totalPages}`);
        
    } catch (error) {
        console.error('Error al guardar el PDF:', error);
        alert('Error al generar el PDF. Por favor, intente de nuevo.');
    }
}

// Eventos para mejorar la impresión
window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.header-requisitos-desktop').forEach(header => {
        header.style.display = 'grid';
    });
    document.querySelectorAll('.header-requisitos-mobile').forEach(header => {
        header.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    document.querySelectorAll('.header-requisitos-desktop').forEach(header => {
        header.style.display = 'none';
    });
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.header-requisitos-mobile').forEach(header => {
            header.style.display = 'block';
        });
    }
});

// Cargar los requisitos iniciales cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    // Establecer clase inicial del body
    document.body.className = 'inicio';
    mostrarSeccion('inicio');
    
    const logoImg = document.querySelector('.logo-imagen');
    if (logoImg) {
        logoImg.onerror = function() {
            console.log('No se pudo cargar foto/logo.png, usando fallback');
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.innerHTML = '🏛️';
            fallback.style.fontSize = '45px';
            fallback.style.color = '#2d5016';
            this.parentNode.appendChild(fallback);
        };
        
        logoImg.onload = function() {
            console.log('Logo cargado exitosamente');
        };
    }
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && currentSection !== 'inicio') {
            volverAtras();
        }
        if (event.ctrlKey && event.key === 'p' && currentSection !== 'inicio') {
            event.preventDefault();
            window.print();
        }
    });
});
