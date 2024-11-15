// Glossary data
const glossaryItems = [
    {
        title: 'Lluvia Artificial',
        description: 'Tecnología que busca la aglomeración de nubes para crear precipitaciones controladas mediante drones o aviones equipados con sistemas específicos.',
        image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&q=80'
    },
    {
        title: 'Drones de Precipitación',
        description: 'Dispositivos aéreos no tripulados equipados con sistemas de descarga eléctrica para modificar las propiedades físicas de las nubes.',
        image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&q=80'
    },
    {
        title: 'Yoduro de Plata',
        description: 'Compuesto químico utilizado en la siembra de nubes para estimular la precipitación.',
        image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&q=80'
    },
    // Añade más términos según sea necesario
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.glossary-grid');
    
    glossaryItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'glossary-item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <div class="glossary-content">
                <img src="${item.image}" alt="${item.title}" class="glossary-image">
                <p>${item.description}</p>
            </div>
        `;

        itemElement.addEventListener('click', function() {
            const wasExpanded = this.classList.contains('expanded');
            
            // Cerrar todos los items expandidos
            document.querySelectorAll('.glossary-item.expanded')
                .forEach(item => item.classList.remove('expanded'));
            
            // Si el item no estaba expandido, expandirlo
            if (!wasExpanded) {
                this.classList.add('expanded');
            }
        });

        grid.appendChild(itemElement);
    });

    // Cerrar item al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.glossary-item')) {
            document.querySelectorAll('.glossary-item.expanded')
                .forEach(item => item.classList.remove('expanded'));
        }
    });
});