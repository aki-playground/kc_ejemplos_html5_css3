function cuentaAtras (desde) {
    postMessage(desde)

    if (desde > 0) {
        desde -= 1
        setTimeout(function () {
            cuentaAtras(desde)
        }, 1000)
    }
}

cuentaAtras(10)