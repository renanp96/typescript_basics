export function loginExecutionTime() {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value;
        descriptor.value = (...args: any[]) => {
            const temp1 = performance.now();
            const newReturn = originalMethod.apply(this, args);
            const temp2 = performance.now();

            console.log(`${propertyKey}, tempo de execução: ${(temp2 - temp1)/1000} segundos`);
            newReturn;
        }

        return descriptor;
    }
}