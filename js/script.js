// Archivo: js/script.js

$(document).ready(function () {
    // Inicializar el carrusel de imágenes
    let currentIndex = 0;

    // Función para mover el carrusel
    function moveSlide(productIndex, direction) {
        const slides = $(`.product-card:eq(${productIndex}) .product-image`);
        const totalSlides = slides.length;

        // Remover la clase 'active' de la imagen actual
        slides.eq(currentIndex).removeClass('active');

        // Calcular el nuevo índice
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

        // Agregar la clase 'active' a la nueva imagen
        slides.eq(currentIndex).addClass('active');
    }

    // Evento de los botones de flecha del carrusel
    $('.prev').click(function () {
        const productIndex = $(this).closest('.product-card').index();
        moveSlide(productIndex, -1);
    });

    $('.next').click(function () {
        const productIndex = $(this).closest('.product-card').index();
        moveSlide(productIndex, 1);
    });

    // Mostrar productos con animación al hacer scroll
    $(window).scroll(function () {
        $('.product-card').each(function () {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop + 100) {
                $(this).addClass('visible');
            }
        });
    });

    // Función para manejar el formulario de comentarios
    $('#comentarioForm').submit(function (e) {
        e.preventDefault();
        
        const nombre = $('#nombre').val().trim();
        const comentarioText = $('#comentario').val().trim();

        // Validación
        if (nombre === "" || comentarioText === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const newComment = `<div class="comentario"><p><strong>${nombre}:</strong> ${comentarioText}</p></div>`;
        $('#comentariosList').append(newComment);

        // Limpiar campos
        $('#nombre').val('');
        $('#comentario').val('');
    });
});
