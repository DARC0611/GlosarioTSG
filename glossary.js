// Glossary data
const glossaryItems = [
    {
        title: 'Sistema',
        description: 'Conjunto de partes coordinadas y en interacción para alcanzar un conjunto de objetivos.',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sistema Abierto',
        description: 'Un sistema que intercambia materia, energía e información con su entorno (El ecosistema de una selva tropical).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sistema Cerrado',
        description: 'No intercambia la energía con su medio (Ya sea importación como exportación) ejemplo: Reloj de cuerda',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sistema Natural',
        description: 'Es un sistema interconectado de elementos y procesos que interactúan de manera dinámica con la naturaleza. Ejemplo (El cuerpo Humano).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sistema Artificial',
        description: 'Este sistema fue creado por el ser humano y sirve a lo contrario del sistema natural ya que se originan de la acción humana. Ejemplo (Una computadora).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sistema Determinístico',
        description: 'En este sistema el azar no está involucrado en el desarrollo de los futuros estados del sistema. Ejemplo (Máquina Turing).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sistema Probabilístico',
        description: 'Se basa en la teoría de la probabilidad o en la aleatoriedad para predecir eventos futuros. Ejemplo (Lotería).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'GESTALT',
        description: 'Una forma de organización donde el todo es más que la suma de sus partes. Como los rostros humanos, que tendemos a ver como un todo, aunque estén compuestos de partes distintas, como ojos, nariz, boca, etc.',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Equifinalidad',
        description: 'Es un concepto que sostiene que, en sistemas dinámicos y complejos, múltiples trayectorias o condiciones iniciales pueden converger en un mismo estado o resultado final. Ejemplo (Formación de un bosque).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Sinergia',
        description: 'Acción de dos o más causas cuyo efecto es superior a la suma de los efectos individuales. Ejemplo (El conjunto del gusto y el olfato para saborear alimentos).',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Recursividad',
        description: 'Podemos entender por recursividad el hecho de que un objeto sinergético, un sistema, esté compuesto de partes con características tales que son a su vez objetos sinergéticos (Sistemas). Ejemplo la factorial de un número.',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Morfogénesis',
        description: 'El proceso o desarrollo de una forma o Estructura. Ejemplo (Copo de nieve)',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Organicidad',
        description: 'Es un sistema constituido por partes que forman un conjunto coherente. Un ejemplo puede ser los sistemas vivos ya que en general poseen una característica que los lleva no solo a permanecer (o sobrevivir) sino a crecer y expandirse. Ejemplo (Naturaleza)',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Isomorfismo',
        description: 'La relación entre dos sistemas que tienen una misma estructura.',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Homeomorfismo',
        description: 'Una relación de similitud estructural entre dos sistemas, aunque no necesariamente idéntica.',
        image: '/placeholder.svg?height=200&width=300'
    },
    {
        title: 'Homeostasis',
        description: 'Sirve para referirse a la capacidad de ciertos programas o sistemas cibernéticos para autorregular algunas de sus funciones y mantener el equilibrio entre las interrelaciones de sus diversos componentes. Ejemplo (Temperatura del cuerpo Humano)',
        image: '/placeholder.svg?height=200&width=300'
    },
];

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
