export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertyKey} invocado ---`);
        console.log(`--- Parâmetros passados: ${JSON.stringify(args)} ---`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- Retorno do método: ${JSON.stringify(retorno)} ---`);
        return retorno;
    };
    return descriptor;
}
