export function loginExecutionTime(seconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unity = 'milisegundos';
            if (seconds) {
                divider = 1000;
                unity = 'segundos';
            }
            const temp1 = performance.now();
            const newReturn = originalMethod.apply(this, args);
            const temp2 = performance.now();
            console.log(`Propriedade ${propertyKey}, tempo de execução: ${(temp2 - temp1) / divider} ${unity}`);
            newReturn;
        };
        return descriptor;
    };
}
