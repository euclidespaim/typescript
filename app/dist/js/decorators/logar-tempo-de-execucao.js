export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'ms';
            if (emSegundos) {
                divisor = 1000;
                unidade = 's';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução do método ${propertyKey}: ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
