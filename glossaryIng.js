const glossaryItems = [
  {
    title: 'Ingeniería',
    description: 'Disciplina que aplica principios científicos y matemáticos para diseñar, construir y optimizar sistemas, estructuras y dispositivos para resolver problemas prácticos.',
    image: 'Ingeniería.jpg'
  },
  {
    title: 'Sistema',
    description: 'Conjunto de elementos interrelacionados que trabajan juntos para cumplir un propósito específico, como un motor o una computadora.',
    image: 'sistema.jpg'
  },
  {
    title: 'Prototipo',
    description: 'Modelo preliminar o versión inicial de un producto que se utiliza para probar y validar ideas antes de la producción final.',
    image: 'prototipo.jpg'
  },
  {
    title: 'Automatización',
    description: 'Uso de tecnologías y sistemas para realizar tareas con poca o ninguna intervención humana, aumentando la eficiencia y precisión.',
    image: 'automatizacion.jpg'
  },
  {
    title: 'Sensores',
    description: 'Dispositivos que detectan cambios físicos o químicos en el entorno y los convierten en señales para ser procesadas.',
    image: 'Sensores.jpg'
  },
  {
    title: 'Actuadores',
    description: 'Componentes mecánicos que convierten señales eléctricas en movimiento físico, como motores o pistones.',
    image: 'actuadores.png'
  },
  {
    title: 'Control',
    description: 'Proceso de regulación de un sistema para mantener un comportamiento deseado, como mantener la velocidad de un robot.',
    image: 'control.jpg'
  },
  {
    title: 'Diseño',
    description: 'Proceso creativo para idear soluciones innovadoras, que incluye la planificación, bocetación y modelado de productos o sistemas.',
    image: 'diseño.jpg'
  },
  {
    title: 'Cinemática',
    description: 'Rama de la mecánica que estudia el movimiento de los cuerpos sin considerar las fuerzas que lo producen.',
    image: 'cinematica.jpg'
  },
  {
    title: 'Dinámica',
    description: 'Estudio de las fuerzas y su efecto en el movimiento de los objetos.',
    image: 'dinamica.png'
  },
  {
    title: 'CAD (Diseño Asistido por Computadora)',
    description: 'Herramientas de software utilizadas para diseñar y modelar componentes y sistemas en 2D o 3D.',
    image: 'CAD.jpg'
  },
  {
    title: 'Electromecánica',
    description: 'Integración de componentes eléctricos y mecánicos para crear sistemas híbridos, como robots.',
    image: 'electromecanica.png'
  },
  {
    title: 'Robótica',
    description: 'Rama de la ingeniería que se ocupa del diseño, construcción y operación de robots.',
    image: 'Robotica.png'
  },
  {
    title: 'Microcontrolador',
    description: 'Pequeño dispositivo computacional programable que actúa como el cerebro de sistemas embebidos.',
    image: 'microcontrolador.png'
  },
  {
    title: 'Mecatrónica',
    description: 'Disciplina multidisciplinaria que combina mecánica, electrónica, informática y control para diseñar sistemas inteligentes.',
    image: 'mecatronica.jpg'
  },
  {
    title: 'Ciclo de vida del producto',
    description: 'Serie de etapas por las que pasa un producto, desde su concepción y desarrollo hasta su uso y eventual eliminación.',
    image: 'ciclodevida.png'
  },
  {
    title: 'Energía',
    description: 'Capacidad para realizar trabajo; en ingeniería, se estudian diversas formas como mecánica, eléctrica o térmica.',
    image: 'energia.png'
  },
  {
    title: 'Retroalimentación (Feedback)',
    description: 'Proceso mediante el cual un sistema ajusta su comportamiento en función de los resultados obtenidos.',
    image: 'retroalimentacion.png'
  },
  {
    title: 'Modelado',
    description: 'Representación matemática o física de un sistema para analizar y predecir su comportamiento.',
    image: 'modelado.jpg'
  },
  {
    title: 'Sostenibilidad',
    description: 'Principio de diseñar sistemas y productos que minimicen el impacto ambiental y promuevan un uso eficiente de los recursos.',
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