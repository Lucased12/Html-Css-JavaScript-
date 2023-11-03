// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario por su ID
    const form = document.getElementById('contact-form');

    // Agregar un evento de escucha para el envío del formulario
    form.addEventListener('submit', (event) => {
        // Prevenir el comportamiento predeterminado de envío del formulario
        event.preventDefault();

        // Obtener los datos del formulario
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Mostrar los datos en la consola
        console.log(data);

        // Borrar el contenido del campo al enviar el formulario
        form.reset();

        // Mostrar una notificación
        const notificationOptions = {
            body: 'Mensaje enviado con éxito',
            icon: 'icono.png' // Ruta a tu icono personalizado
        };

        // Comprobar si la API de notificaciones está disponible en el navegador
        if ('Notification' in window) {
            // Solicitar permiso para mostrar notificaciones
            Notification.requestPermission().then((result) => {
                if (result === 'granted') {
                    // Crear y mostrar la notificación
                    new Notification('Enviado puedes revisar la consola!', notificationOptions);
                }
            });
        }
    });
});
