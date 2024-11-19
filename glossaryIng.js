const glossaryItems = [
  {
    title: 'Ingeniería',
    description: 'Disciplina que aplica principios científicos y matemáticos para diseñar, construir y optimizar sistemas, estructuras y dispositivos para resolver problemas prácticos. Ejemplo: Diseñar un puente para resistir terremotos.',
    image: 'Ingeniería.jpg'
},
{
    title: 'Sistema',
    description: 'Conjunto de elementos interrelacionados que trabajan juntos para cumplir un propósito específico. Ejemplo: Un motor de combustión interna que convierte energía química en movimiento.',
    image: 'sistema.jpg'
},
{
    title: 'Prototipo',
    description: 'Modelo preliminar o versión inicial de un producto que se utiliza para probar y validar ideas antes de la producción final. Ejemplo: Un prototipo de un dron para pruebas de vuelo.',
    image: 'prototipo.jpg'
},
{
    title: 'Automatización',
    description: 'Uso de tecnologías y sistemas para realizar tareas con poca o ninguna intervención humana, aumentando la eficiencia y precisión. Ejemplo: Una línea de ensamblaje robotizada en una fábrica de automóviles.',
    image: 'automatizacion.jpg'
},
{
    title: 'Sensores',
    description: 'Dispositivos que detectan cambios físicos o químicos en el entorno y los convierten en señales para ser procesadas. Ejemplo: Un sensor de temperatura que mide el calor en un horno.',
    image: 'Sensores.jpg'
},
{
    title: 'Actuadores',
    description: 'Componentes mecánicos que convierten señales eléctricas en movimiento físico. Ejemplo: Un servomotor utilizado para mover el brazo de un robot.',
    image: 'actuadores.png'
},
{
    title: 'Control',
    description: 'Proceso de regulación de un sistema para mantener un comportamiento deseado. Ejemplo: Usar un controlador PID para mantener la velocidad constante de un motor.',
    image: 'control.jpg'
},
{
    title: 'Diseño',
    description: 'Proceso creativo para idear soluciones innovadoras, que incluye la planificación, bocetación y modelado de productos o sistemas. Ejemplo: Diseñar el chasis de un automóvil deportivo.',
    image: 'diseño.jpg'
},
{
    title: 'Cinemática',
    description: 'Rama de la mecánica que estudia el movimiento de los cuerpos sin considerar las fuerzas que lo producen. Ejemplo: Analizar el movimiento de una pelota lanzada al aire.',
    image: 'cinematica.jpg'
},
{
    title: 'Dinámica',
    description: 'Estudio de las fuerzas y su efecto en el movimiento de los objetos. Ejemplo: Calcular la fuerza necesaria para acelerar un vehículo de 0 a 100 km/h.',
    image: 'dinamica.png'
},
{
    title: 'CAD (Diseño Asistido por Computadora)',
    description: 'Herramientas de software utilizadas para diseñar y modelar componentes y sistemas en 2D o 3D. Ejemplo: Crear un diseño de un engranaje usando AutoCAD.',
    image: 'CAD.jpg'
},
{
    title: 'Electromecánica',
    description: 'Integración de componentes eléctricos y mecánicos para crear sistemas híbridos. Ejemplo: Un robot que combina motores eléctricos con engranajes mecánicos.',
    image: 'electromecanica.png'
},
{
    title: 'Robótica',
    description: 'Rama de la ingeniería que se ocupa del diseño, construcción y operación de robots. Ejemplo: Diseñar un robot autónomo para entregar paquetes.',
    image: 'Robotica.png'
},
{
    title: 'Microcontrolador',
    description: 'Pequeño dispositivo computacional programable que actúa como el cerebro de sistemas embebidos. Ejemplo: Un Arduino que controla la iluminación de una casa inteligente.',
    image: 'microcontrolador.png'
},
{
    title: 'Mecatrónica',
    description: 'Disciplina multidisciplinaria que combina mecánica, electrónica, informática y control para diseñar sistemas inteligentes. Ejemplo: Un brazo robótico usado en cirugía asistida.',
    image: 'mecatronica.jpg'
},
{
    title: 'Ciclo de vida del producto',
    description: 'Serie de etapas por las que pasa un producto, desde su concepción y desarrollo hasta su uso y eventual eliminación. Ejemplo: Desarrollo de un teléfono móvil desde su diseño hasta su reciclaje.',
    image: 'ciclodevida.png'
},
{
    title: 'Energía',
    description: 'Capacidad para realizar trabajo; en ingeniería, se estudian diversas formas como mecánica, eléctrica o térmica. Ejemplo: Energía solar captada para alimentar un sistema de riego.',
    image: 'energia.png'
},
{
    title: 'Retroalimentación (Feedback)',
    description: 'Proceso mediante el cual un sistema ajusta su comportamiento en función de los resultados obtenidos. Ejemplo: Un termostato ajustando la temperatura de una habitación.',
    image: 'retroalimentacion.png'
},
{
    title: 'Modelado',
    description: 'Representación matemática o física de un sistema para analizar y predecir su comportamiento. Ejemplo: Modelar el flujo de aire en el diseño de un ala de avión.',
    image: 'modelado.jpg'
},
{
    title: 'Sostenibilidad',
    description: 'Principio de diseñar sistemas y productos que minimicen el impacto ambiental y promuevan un uso eficiente de los recursos. Ejemplo: Diseño de edificios con paneles solares y sistemas de reciclaje de agua.',
    image: 'sostenibilidad.jpg'
}

]

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.glossary-grid');
    
    glossaryItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'glossary-item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <div class="glossary-content" style="display: none;">
                <img src="${item.image}" alt="${item.title}" class="glossary-image">
                <p>${item.description}</p>
            </div>
        `;

        itemElement.addEventListener('click', function(e) {
            e.stopPropagation();
            const content = this.querySelector('.glossary-content');
            const wasExpanded = content.style.display === 'block';
            
            // Cerrar todos los items expandidos
            document.querySelectorAll('.glossary-item .glossary-content').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.glossary-item').forEach(item => {
                item.classList.remove('expanded');
            });
            
            // Si el item no estaba expandido, expandirlo
            if (!wasExpanded) {
                content.style.display = 'block';
                this.classList.add('expanded');
            }
        });

        grid.appendChild(itemElement);
    });

    // Cerrar item al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.glossary-item')) {
            document.querySelectorAll('.glossary-item .glossary-content').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.glossary-item').forEach(item => {
                item.classList.remove('expanded');
            });
        }
    });
});
