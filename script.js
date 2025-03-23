// Função para mostrar a imagem de corte de cabelo ao clicar na imagem do barbeiro
function showHaircutImage() {
    document.getElementById('haircutImageSection').style.display = 'block';
}

// Função para mostrar o mapa ao clicar no endereço
function showMap() {
    document.getElementById('mapSection').style.display = 'block';
    initMap(); // Inicializa o mapa
}

// Função para inicializar o mapa com a localização da barbearia
function initMap() {
    const location = { lat: -23.55052, lng: -46.633308 }; // Localização de exemplo (São Paulo)

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Barbearia do Gabriel",
    });
}
