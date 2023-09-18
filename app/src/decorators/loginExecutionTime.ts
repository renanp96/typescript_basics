/**
 * Decorator for measuring the execution time of a method.
 *
 * @param {boolean} seconds - Indicates whether to display the time in seconds (default is milliseconds).
 * @returns {Function} - A decorator function.
 */
export function loginExecutionTime(seconds: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let divider = 1;
            let unity = 'milisegundos';

            if(seconds){
                divider = 1000;
                unity = 'segundos';
            }

            const temp1 = performance.now();
            const newReturn = originalMethod.apply(this, args);
            const temp2 = performance.now();

            console.log(`Propriedade ${propertyKey}, tempo de execução: ${(temp2 - temp1)/divider} ${unity}`);
            newReturn;
        }

        return descriptor;
    }
}