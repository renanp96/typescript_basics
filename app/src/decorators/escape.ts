/**
 * Decorator that removes any content between <script> tags in a return string.
 *
 * @param {any} target - The target class.
 * @param {string} propertyKey - The name of the decorated method.
 * @param {PropertyDescriptor} descriptor - The property descriptor of the decorated method.
 * @returns {PropertyDescriptor} - The modified descriptor.
 */
export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let newReturn = originalMethod.apply(this, args);

        if (typeof newReturn === 'string') {
            newReturn = newReturn.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        return newReturn;
    }

    return descriptor;
}