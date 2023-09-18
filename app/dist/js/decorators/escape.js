export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        descriptor.value = function (...args) {
            let newReturn = originalMethod.apply(this, args);
            if (typeof newReturn === 'string') {
                console.log(`@escape em ação na classe ${this.constructor.name} para o metodo ${propertyKey}`);
                newReturn = newReturn.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return newReturn;
        };
        return descriptor;
    };
}
