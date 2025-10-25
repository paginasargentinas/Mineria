document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mining-form');
    const amountInput = document.getElementById('amount-usd');
    const networkSelect = document.getElementById('network-select');
    const paymentInfoSection = document.getElementById('payment-info');
    const qrCodeContainer = document.getElementById('qrcode');
    const paymentLinkInput = document.getElementById('payment-link');

    const toWalletAddress = '0x4B2059AaF52274286e53148214d5A1135Caefceb';

    // Tasas de conversión de USD a cripto (FIJAS, SOLO PARA DEMOSTRACIÓN)
    const conversionRates = {
        bsc: 300,       // 1 BNB = 300 USD
        ethereum: 2000, // 1 ETH = 2000 USD
        polygon: 0.7,   // 1 MATIC = 0.7 USD
        avalanche: 30,    // 1 AVAX = 30 USD
        'bitcoin-bep20': 35000 // 1 BTC (BEP20) = 35000 USD
    };

    const networkChainIds = {
        bsc: '56',
        ethereum: '1',
        polygon: '137',
        avalanche: '43114',
        'bitcoin-bep20': '56' // BTC en BEP20 usa el chain ID de BSC
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío real del formulario

        const amountUSD = parseFloat(amountInput.value);
        const minAmount = parseFloat(amountInput.min);
        const maxAmount = parseFloat(amountInput.max);
        const selectedNetwork = networkSelect.value;

        if (isNaN(amountUSD) || amountUSD < minAmount || amountUSD > maxAmount) {
            alert(`Por favor, introduce una cantidad entre ${minAmount} y ${maxAmount} USD.`);
            return;
        }

        // 1. Calcular la cantidad en cripto (simulado)
        const cryptoAmount = amountUSD / conversionRates[selectedNetwork];

        // 2. Construir el link de pago (URI EIP-681)
        // Formato: ethereum:<address>@<chain_id>?value=<amount_in_wei>
        // Nota: Para BSC y otras EVM, el prefijo suele ser 'ethereum:'
        const chainId = networkChainIds[selectedNetwork];
        const amountInWei = (cryptoAmount * Math.pow(10, 18)).toString(); // Convertir a la unidad más pequeña (Wei para ETH/BNB)
        const paymentURI = `ethereum:${toWalletAddress}@${chainId}?value=${amountInWei}`;

        // 3. Mostrar la sección de pago
        paymentLinkInput.value = paymentURI;
        paymentInfoSection.style.display = 'block';

        // 4. Generar el código QR
        qrCodeContainer.innerHTML = ''; // Limpiar QR anterior
        try {
            const typeNumber = 4;
            const errorCorrectionLevel = 'L';
            const qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(paymentURI);
            qr.make();
            qrCodeContainer.innerHTML = qr.createImgTag(6, 8); // (tamaño celda, margen)
        } catch (err) {
            qrCodeContainer.innerHTML = "Error al generar el código QR.";
            console.error(err);
        }

        // Mover la vista a la sección de pago
        paymentInfoSection.scrollIntoView({ behavior: 'smooth' });
    });
});
