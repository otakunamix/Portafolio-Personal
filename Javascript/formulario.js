function enviarwhatsapp(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const numero = document.getElementById("numero").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !numero || !asunto || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const texto = `Hola, soy ${nombre}\nCorreo: ${correo}\nTeléfono: ${numero}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;

    const textoCodificado = encodeURIComponent(texto);

    const url = `https://wa.me/51926953539?text=${textoCodificado}`;

    console.log("Formulario enviado: ", texto);

    window.open(url, "_blank");
}
