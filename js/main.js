document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mining-form');
    const amountInput = document.getElementById('amount-usd');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe de verdad

        const amount = parseFloat(amountInput.value);
        const minAmount = parseFloat(amountInput.min);
        const maxAmount = parseFloat(amountInput.max);

        if (isNaN(amount) || amount < minAmount || amount > maxAmount) {
            alert(`Por favor, introduce una cantidad entre ${minAmount} y ${maxAmount} USD.`);
            return;
        }

        // Si la validación es correcta, muestra un mensaje de éxito
        alert('¡Simulación iniciada!\nSe ha iniciado una transacción simulada por ' + amount + ' USD. Revisa tu wallet en unos minutos (esto es solo una simulación).');
        
        // Opcional: resetear el formulario después del envío
        form.reset();
    });
});
