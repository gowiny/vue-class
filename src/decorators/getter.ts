import { createDecorator } from 'vue-class-component'
export function Getter(value:string):any;
export function Getter(target: any, propertyKey: string):void;
export function Getter(target: any = "", propertyKey?: string):void | any {
    const arg1Type = typeof target
    if(arg1Type === 'string'){
        const value = target as string;
        return function (target: any, propertyKey: string) {
            createDecorator(function (options, key) {
                const name = value || key;
                options.computed[key] = function() {
                    const getter = this.$store.getters[name];
                    return getter
                }
                
            })(target, propertyKey);
        };
    }else{
        createDecorator(function (options, key) {
            const name = key;
            options.computed[name] = function() {
                const getter = this.$store.getters[name];
                return getter
            }
        })(target, propertyKey as string);
    }
}