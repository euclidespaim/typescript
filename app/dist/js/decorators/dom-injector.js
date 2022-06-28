export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype: ${target.constructor.name}`);
        console.log(`Adcinonando getter para a propriedade: ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
