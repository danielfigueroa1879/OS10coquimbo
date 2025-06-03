// script.js

// Datos de los requisitos para cada sección
const requisitosData = {
    'plan-seguridad': [
        { id: 1, text: 'Plan de seguridad actualizado y aprobado por la autoridad competente (OS10).' },
        { id: 2, text: 'Certificado de vigencia del plan de seguridad.' },
        { id: 3, text: 'Identificación clara de las áreas de riesgo y vulnerabilidades.' },
        { id: 4, text: 'Medidas de seguridad física implementadas (cercos, puertas, ventanas, iluminación).' },
        { id: 5, text: 'Sistemas de alarma y detección de intrusos operativos y monitoreados.' },
        { id: 6, text: 'Sistemas de videovigilancia (CCTV) con cobertura adecuada y grabación.' },
        { id: 7, text: 'Controles de acceso para personal y visitantes.' },
        { id: 8, text: 'Procedimientos de seguridad para apertura y cierre del establecimiento.' },
        { id: 9, text: 'Capacitación del personal en materia de seguridad y emergencias.' },
        { id: 10, text: 'Plan de emergencia y evacuación actualizado y difundido.' },
        { id: 11, text: 'Simulacros de emergencia realizados periódicamente.' },
        { id: 12, text: 'Personal de seguridad privada con credencial al día y uniforme reglamentario.' },
        { id: 13, text: 'Registro de rondas y novedades del personal de seguridad.' },
        { id: 14, text: 'Comunicación fluida con Carabineros de Chile.' },
        { id: 15, text: 'Existencia de un libro de novedades o bitácora de seguridad.' },
        { id: 16, text: 'Sistema de protección contra incendios (extintores, detectores) con mantención al día.' },
        { id: 17, text: 'Señalización de seguridad y vías de evacuación claras.' },
        { id: 18, text: 'Existencia de un responsable de seguridad en el establecimiento.' },
        { id: 19, text: 'Cumplimiento de la normativa vigente en materia de seguridad privada.' },
        { id: 20, text: 'Disposición de un sistema de respaldo de energía para los sistemas de seguridad.' },
        { id: 21, text: 'Medidas de seguridad para el manejo y transporte de valores (si aplica).' },
        { id: 22, text: 'Análisis de riesgos actualizado.' },
        { id: 23, text: 'Coordinación con empresas de seguridad externa (si aplica).' },
        { id: 24, text: 'Plan de contingencia ante situaciones de crisis.' },
        { id: 25, text: 'Implementación de medidas de seguridad para la información y datos sensibles.' },
        { id: 26, text: 'Existencia de un protocolo de respuesta ante robos o asaltos.' },
        { id: 27, text: 'Dispositivos de seguridad para la prevención de delitos (ej. botones de pánico).' },
        { id: 28, text: 'Control de inventario de equipos y bienes de valor.' },
        { id: 29, text: 'Programa de mantenimiento preventivo de los sistemas de seguridad.' },
        { id: 30, text: 'Auditorías internas de seguridad realizadas periódicamente.' }
    ],
    'servicentros': [
        { id: 1, text: 'Sistema de cámaras de televigilancia (CCTV) operativo y con grabación.' },
        { id: 2, text: 'Iluminación adecuada en todas las áreas del servicentro, incluyendo surtidores y accesos.' },
        { id: 3, text: 'Botón de pánico o sistema de alerta conectado a central de monitoreo o Carabineros.' },
        { id: 4, text: 'Cajas de seguridad o buzones de depósito para el manejo de efectivo.' },
        { id: 5, text: 'Procedimientos de retiro de valores y arqueo de caja seguros.' },
        { id: 6, text: 'Personal capacitado en seguridad y manejo de situaciones de riesgo.' },
        { id: 7, text: 'Existencia de un plan de emergencia y evacuación.' },
        { id: 8, text: 'Extintores y sistemas contra incendios en buen estado y accesibles.' },
        { id: 9, text: 'Señalización clara de zonas de seguridad y vías de escape.' },
        { id: 10, text: 'Control de acceso a áreas restringidas (oficinas, bodegas).' },
        { id: 11, text: 'Protección perimetral (cercos, muros) en buen estado.' },
        { id: 12, text: 'Sistema de alarma de intrusión operativo.' },
        { id: 13, text: 'Protocolos de actuación ante robos o asaltos.' },
        { id: 14, text: 'Comunicación directa y expedita con Carabineros de Chile.' },
        { id: 15, text: 'Disposición de un sistema de respaldo de energía para los sistemas de seguridad.' }
    ],
    'sobre-500uf': [
        { id: 1, text: 'Sistema de cámaras de televigilancia (CCTV) de alta resolución, con cobertura total y grabación.' },
        { id: 2, text: 'Bóveda o caja fuerte de seguridad certificada para el resguardo de valores.' },
        { id: 3, text: 'Sistema de alarma de intrusión con monitoreo 24/7 y respuesta armada.' },
        { id: 4, text: 'Botón de pánico silencioso conectado a central de monitoreo y Carabineros.' },
        { id: 5, text: 'Control de acceso biométrico o con tarjeta para áreas de manejo de valores.' },
        { id: 6, text: 'Personal de seguridad privada armado y capacitado (si aplica).' },
        { id: 7, text: 'Procedimientos estrictos para el manejo, conteo y transporte de valores.' },
        { id: 8, text: 'Puertas y ventanas blindadas o reforzadas en áreas críticas.' },
        { id: 9, text: 'Sensores de movimiento y vibración en muros y techos.' },
        { id: 10, text: 'Sistema de nebulización o humo de seguridad para disuasión.' },
        { id: 11, text: 'Iluminación de emergencia y de seguridad en todo el establecimiento.' },
        { id: 12, text: 'Plan de contingencia ante robos, asaltos y secuestros.' },
        { id: 13, text: 'Coordinación permanente con Carabineros de Chile.' },
        { id: 14, text: 'Auditorías de seguridad periódicas realizadas por expertos externos.' },
        { id: 15, text: 'Sistema de respaldo de energía para todos los sistemas de seguridad.' }
    ],
    'directiva-funcionamiento': {
        'instalacion': [
            { id: 1, text: 'Directiva de funcionamiento aprobada por la autoridad competente.' },
            { id: 2, text: 'Plano de la instalación con identificación de zonas de seguridad, vías de evacuación y puntos de control.' },
            { id: 3, text: 'Descripción de los sistemas de seguridad implementados (CCTV, alarmas, controles de acceso).' },
            { id: 4, text: 'Detalle del personal de seguridad (cantidad, funciones, equipamiento).' },
            { id: 5, text: 'Plan de emergencia y evacuación específico para la instalación.' },
            { id: 6, text: 'Procedimientos de control de acceso para vehículos y personas.' },
            { id: 7, text: 'Medidas de seguridad para el manejo de objetos prohibidos.' },
            { id: 8, text: 'Coordinación con servicios de emergencia (bomberos, ambulancias).' },
            { id: 9, text: 'Sistema de comunicación interna y externa operativo.' },
            { id: 10, text: 'Registro de incidentes y novedades de seguridad.' }
        ],
        'evento-deportivo': [
            { id: 1, text: 'Directiva de funcionamiento aprobada por la autoridad competente (Intendencia, Gobernación, Estadio Seguro).' },
            { id: 2, text: 'Plan de seguridad específico para el evento deportivo.' },
            { id: 3, text: 'Coordinación con Carabineros de Chile y otras fuerzas de seguridad.' },
            { id: 4, text: 'Control de acceso y registro de asistentes.' },
            { id: 5, text: 'Separación de hinchadas y zonas de amortiguación.' },
            { id: 6, text: 'Medidas de seguridad para la prevención de violencia y desórdenes.' },
            { id: 7, text: 'Sistemas de videovigilancia y monitoreo en tiempo real.' },
            { id: 8, text: 'Personal de seguridad privada adecuado al aforo y riesgo del evento.' },
            { id: 9, text: 'Plan de emergencia y evacuación con señalización clara.' },
            { id: 10, text: 'Puntos de primeros auxilios y atención médica.' },
            { id: 11, text: 'Control de venta y consumo de alcohol.' },
            { id: 12, text: 'Medidas para evitar el ingreso de elementos prohibidos (armas, fuegos artificiales).' }
        ],
        'evento-masivo': [
            { id: 1, text: 'Directiva de funcionamiento aprobada por la autoridad competente.' },
            { id: 2, text: 'Plan de seguridad detallado para el evento masivo (concierto, feria, etc.).' },
            { id: 3, text: 'Estudio de carga de público y capacidad del recinto.' },
            { id: 4, text: 'Coordinación con Carabineros de Chile y otras instituciones.' },
            { id: 5, text: 'Control de acceso y registro de asistentes.' },
            { id: 6, text: 'Vías de evacuación y salidas de emergencia claras y despejadas.' },
            { id: 7, text: 'Sistemas de sonido y megafonía para comunicaciones de emergencia.' },
            { id: 8, text: 'Personal de seguridad privada suficiente y capacitado.' },
            { id: 9, text: 'Puntos de primeros auxilios y atención médica.' },
            { id: 10, text: 'Medidas para el control de aglomeraciones y estampidas.' },
            { id: 11, text: 'Gestión de residuos y limpieza durante y después del evento.' },
            { id: 12, text: 'Protocolos para el manejo de objetos perdidos y encontrados.' }
        ]
    }
};

let currentSection = 'inicio'; // Variable para controlar la sección actual
let selectedDirectivaType = null; // Para la sección de Directiva de Funcionamiento

// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(sectionId) {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        // Cargar requisitos solo si es una sección de requisitos
        if (sectionId !== 'inicio' && sectionId !== 'directiva-funcionamiento') {
            cargarRequisitos(sectionId);
        } else if (sectionId === 'directiva-funcionamiento' && selectedDirectivaType) {
            cargarRequisitos(sectionId, selectedDirectivaType);
        }
    }
}

// Función para cargar los requisitos dinámicamente
function cargarRequisitos(sectionId, directivaType = null) {
    const containerId = `requisitos-${sectionId}`;
    const requisitosContainer = document.getElementById(containerId);
    if (!requisitosContainer) {
        console.error(`Contenedor de requisitos no encontrado para: ${containerId}`);
        return;
    }

    requisitosContainer.innerHTML = ''; // Limpiar requisitos anteriores

    let requisitos;
    if (sectionId === 'directiva-funcionamiento' && directivaType) {
        requisitos = requisitosData[sectionId][directivaType];
    } else if (requisitosData[sectionId]) {
        requisitos = requisitosData[sectionId];
    } else {
        console.error(`Datos de requisitos no encontrados para: ${sectionId}`);
        return;
    }

    requisitos.forEach(req => {
        const requisitoItem = document.createElement('div');
        requisitoItem.classList.add('requisito-item');
        requisitoItem.setAttribute('data-numero', req.id); // Para CSS responsive

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
    // Asegurarse de que jsPDF y html2canvas estén cargados
    if (typeof window.jspdf === 'undefined' || typeof window.html2canvas === 'undefined') {
        console.error('jsPDF o html2canvas no están cargados.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4'); // 'p' for portrait, 'mm' for millimeters, 'a4' size

    // Deshabilitar botones de estado y ocultar botones de acción para la impresión
    const buttonsToHide = document.querySelectorAll('.btn-estado, .action-buttons');
    buttonsToHide.forEach(btn => btn.style.display = 'none');

    // Mostrar los headers de tabla para impresión
    const desktopHeaders = document.querySelectorAll('.header-requisitos-desktop');
    desktopHeaders.forEach(header => header.style.display = 'grid');
    const mobileHeaders = document.querySelectorAll('.header-requisitos-mobile');
    mobileHeaders.forEach(header => header.style.display = 'none');

    // Recopilar datos del formulario
    const getInputValue = (id) => document.getElementById(id) ? document.getElementById(id).value : 'N/A';

    const generalInfo = {
        razonSocial: getInputValue(`razon-social-${sectionId}`),
        rutEstablecimiento: getInputValue(`rut-establecimiento-${sectionId}`),
        direccion: getInputValue(`direccion-${sectionId}`),
        comuna: getInputValue(`comuna-${sectionId}`),
        nombrePresenta: getInputValue(`nombre-presenta-${sectionId}`),
        rutPresenta: getInputValue(`rut-presenta-${sectionId}`),
        telefonoPresenta: getInputValue(`telefono-presenta-${sectionId}`),
        cargoPresenta: getInputValue(`cargo-presenta-${sectionId}`),
        inspectorNombre: getInputValue(`inspector-nombre-${sectionId}`),
        inspectorRut: getInputValue(`inspector-rut-${sectionId}`)
    };

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
    doc.text('Datos del Establecimiento Fiscalizado:', 20, yOffset);
    yOffset += 7;
    doc.text(`Razón Social: ${generalInfo.razonSocial}`, 20, yOffset);
    doc.text(`RUT Establecimiento: ${generalInfo.rutEstablecimiento}`, 110, yOffset);
    yOffset += 7;
    doc.text(`Dirección: ${generalInfo.direccion}`, 20, yOffset);
    doc.text(`Comuna: ${generalInfo.comuna}`, 110, yOffset);
    yOffset += 10;

    doc.text('Datos de Quien Presenta el Documento:', 20, yOffset);
    yOffset += 7;
    doc.text(`Nombre Completo: ${generalInfo.nombrePresenta}`, 20, yOffset);
    doc.text(`RUT: ${generalInfo.rutPresenta}`, 110, yOffset);
    yOffset += 7;
    doc.text(`Teléfono: ${generalInfo.telefonoPresenta}`, 20, yOffset);
    doc.text(`Cargo: ${generalInfo.cargoPresenta}`, 110, yOffset);
    yOffset += 10;

    doc.text('Datos del Inspector:', 20, yOffset);
    yOffset += 7;
    doc.text(`Nombre del Inspector: ${generalInfo.inspectorNombre}`, 20, yOffset);
    doc.text(`RUT del Inspector: ${generalInfo.inspectorRut}`, 110, yOffset);
    yOffset += 15;

    // Añadir tabla de requisitos
    doc.setFontSize(10);
    const headers = [['N°', 'Requisito', 'Estado', 'Observaciones']];
    const data = [];

    const requisitosItems = document.querySelectorAll(`#requisitos-${sectionId} .requisito-item`);
    requisitosItems.forEach(item => {
        const numero = item.querySelector('.requisito-numero').textContent;
        const titulo = item.querySelector('.requisito-titulo').textContent;
        const estado = item.classList.contains('cumple') ? 'Cumple' : (item.classList.contains('no-cumple') ? 'No Cumple' : 'Pendiente');
        const observacion = item.querySelector('.observacion-input').value || '';
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
                    data.cell.styles.fillColor = [220, 53, 69]; // Rojo para No Cumple
                    data.cell.styles.textColor = [255, 255, 255];
                }
            }
        }
    });

    // Restaurar la visibilidad de los botones después de generar el PDF
    buttonsToHide.forEach(btn => btn.style.display = ''); // Restaurar display original
    desktopHeaders.forEach(header => header.style.display = 'none'); // Ocultar de nuevo
    mobileHeaders.forEach(header => header.style.display = 'block'); // Mostrar de nuevo si aplica

    doc.save(`${sectionId}-reporte.pdf`);
}

// Cargar los requisitos iniciales cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    // Al cargar la página, se muestra la sección de inicio por defecto
    mostrarSeccion('inicio');
});
