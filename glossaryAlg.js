const glossaryItems = [
    {
        title: 'Interfaz',
        description: 'Es el medio a través del cual un usuario o un programa interactúa con un sistema, dispositivo o software.',
        image: 'interface.png'
    },
    {
        title: 'Seudocódigo',
        description: 'Una representación informal y simplificada de un algoritmo que utiliza un lenguaje entendible tanto para humanos como para programadores, sin las estrictas reglas de la sintaxis de un lenguaje de programación.',
        image: 'seudocodigo.png'
    },
    {
        title: 'Nemotécnico',
        description: 'Un símbolo o palabra corta utilizada como abreviatura en programación, que ayuda a recordar instrucciones.',
        image: 'nemotecnico.png'
    },
    {
        title: 'Variable',
        description: 'Un espacio en memoria al que se le asigna un nombre y que almacena un valor que puede cambiar durante la ejecución de un programa.',
        image: 'variable.png'
    },
    {
        title: 'Identificadores',
        description: 'Nombres únicos que se asignan a variables, funciones o elementos en un programa para identificarlos y referenciarlos.',
        image: 'identificador.png'
    },
    {
        title: 'Concatenar',
        description: 'Operación que une dos o más cadenas de texto o datos en una sola.',
        image: 'concatenar.png'
    },
    {
        title: 'Compilar',
        description: 'Proceso de traducir un código fuente escrito en un lenguaje de programación de alto nivel a un lenguaje de máquina entendible por un ordenador.',
        image: 'compilar.png'
    },
    {
        title: 'Header',
        description: 'En programación, es un archivo que contiene definiciones, declaraciones o bibliotecas compartidas que pueden ser incluidas en otros archivos. En diseño web, es la parte superior de una página.',
        image: 'header.png'
    },
    {
        title: 'Main',
        description: 'Nombre común para la función principal o punto de entrada de un programa, especialmente en lenguajes como C, C++ o Java.',
        image: 'Main.jpg'
    },
    {
        title: 'Footer',
        description: 'Parte inferior de una página web o documento que contiene información adicional, como créditos o enlaces.',
        image: 'footer.jpg'
    },
    {
        title: 'Codificar',
        description: 'El acto de escribir instrucciones en un lenguaje de programación para crear software, aplicaciones o sistemas.',
        image: 'codificar.jpg'
    },
    {
        title: 'Repositorio',
        description: 'Almacén digital donde se guardan archivos, proyectos y su historial de cambios, como en sistemas de control de versiones así como GitHub.',
        image: 'repositorio.png'
    },
    {
        title: 'Algoritmo',
        description: 'Conjunto finito de pasos ordenados y definidos que resuelven un problema o realizan una tarea específica.',
        image: 'algoritmo.png'
    },
    {
        title: 'Constante',
        description: 'Valor fijo que no cambia durante la ejecución de un programa, como PI = 3.1416.',
        image: 'constante.png'
    },
    {
        title: 'Entrada',
        description: 'Información o datos proporcionados a un programa o sistema, ya sea desde el teclado, un archivo o sensores.',
        image: 'entrada.png'
    },
    {
        title: 'Salida',
        description: 'Información generada o producida por un programa o sistema, como resultados en pantalla, archivos o señales.',
        image: 'salida.png'
    },
    {
        title: 'Programación',
        description: 'Proceso de diseñar, escribir y mantener código para crear aplicaciones, sistemas o software.',
        image: 'programacion.jpg'
    },
    {
        title: 'Implantación',
        description: 'Proceso de poner un sistema, aplicación o software en funcionamiento en un entorno real de uso.',
        image: 'implantacion.png'
    },
    {
        title: 'Expresiones lógicas',
        description: 'Combinaciones de valores y operadores lógicos (AND, OR, NOT) que devuelven un resultado verdadero o falso.',
        image: 'exprecioneslogicas.jpg'
    },
    {
        title: 'Estructuras',
        description: 'En programación, son formas organizadas de almacenar y manipular datos, como listas, pilas, colas, árboles o grafos. También se refiere a bloques de control como bucles y condicionales.',
        image: 'estructuras.jpg'
    }
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
  