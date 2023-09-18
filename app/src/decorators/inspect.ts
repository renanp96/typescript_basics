export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`--- metodo: ${propertyKey} ---`);
        console.log(`------ parametros: ${JSON.stringify(args)} ------`);

        const newReturn = originalMethod.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(newReturn)} ------`);
        return newReturn;
    }

    return descriptor;
}