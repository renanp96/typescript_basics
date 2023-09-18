export function loginExecutionTime() {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            const temp1 = performance.now();
            const newReturn = originalMethod.apply(this, args);
            const temp2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(temp2 - temp1) / 1000} segundos`);
            newReturn;
        };
        return descriptor;
    };
}
