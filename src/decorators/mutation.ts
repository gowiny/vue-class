import { createDecorator } from 'vue-class-component'

export function Mutation(value?:string):any;
export function Mutation(target: any, propertyKey: string):void;
export function Mutation(target: any = "", propertyKey?: string):void | any {
    if(typeof target === 'string'){
        const value = target as string;
        return function (target: any, propertyKey: string) {
            createDecorator(function (options, key) {
                const name = value || key;
                options.methods[key] = function(...args:any[]) {
                    return this.$store.dispatch(name,...args)
                }
            })(target, propertyKey);
        };
    }else{
        createDecorator(function (options, key) {
            const name = key;
            options.methods[key] = function(...args:any[]) {
                return this.$store.commit(name,...args)
            }
        })(target, propertyKey as string);
    }
}