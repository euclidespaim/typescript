export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertyKey} invocado ---`);
        console.log(`--- Parâmetros passados: ${JSON.stringify(args)} ---`);
        
        const retorno = metodoOriginal.apply(this, args)

        console.log(`--- Retorno do método: ${JSON.stringify(retorno)} ---`);
        return retorno
    }

    return descriptor;
}
