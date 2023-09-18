export function domInjector(selector: string) {
    return function (target: any, propertyKey: string) {

        const getter = function () {
            const element = document.querySelector(selector);
            console.log(`bucando elemento do DOM com o selector ${selector} para injetar em ${propertyKey}`)
            return element;
        }

        Object.defineProperty(target, propertyKey, { get: getter });
    }
}
