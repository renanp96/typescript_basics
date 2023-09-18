/**
 * Decorator for logging method calls, parameters, and return values.
 *
 * @param {any} target - The target class.
 * @param {string} propertyKey - The name of the decorated method.
 * @param {PropertyDescriptor} descriptor - The property descriptor of the decorated method.
 * @returns {PropertyDescriptor} - The modified property descriptor.
 */
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