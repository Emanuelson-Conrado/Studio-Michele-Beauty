// Inicialização do mapa do Google Maps
function initMap() {
    const studioLocation = { lat: -25.552962183668413, lng: -49.3963690656539 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: studioLocation,
    });
    const marker = new google.maps.Marker({
        position: studioLocation,
        map: map,
    });
}

// Envio de formulário via WhatsApp
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;

    const message = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AServiço Desejado: ${service}`;
    const whatsappURL = `https://wa.me/5541997486280?text=${message}`;

    window.open(whatsappURL, '_blank');
});
