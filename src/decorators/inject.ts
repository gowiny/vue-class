import { createDecorator } from 'vue-class-component'
export function Inject(value:string):any;
export function Inject(target: any, propertyKey: string):void;
export function Inject(target: any, propertyKey: string,descriptor: PropertyDescriptor):void;
export function Inject(target: any = "", propertyKey?: string,descriptor?: PropertyDescriptor):void | any {
    const arg1Type = typeof target
    if(arg1Type === 'string'){
        const value = target as string;
        return function (target: any, propertyKey: string) {
            createDecorator(function (options, key) {
                const name = value || key;
                const inject:any = options.inject
                if(descriptor){
                    inject[name] = {
                        default:descriptor.value
                    }
                }else{
                    inject[name] = name
                }
                
            })(target, propertyKey);
        };
    }else{
        createDecorator(function (options, key) {
            const name = key;
            const inject:any = options.inject
            if(descriptor){
                inject[name] = {
                    default:descriptor.value
                }
            }else{
                inject[name] = name
            }
        })(target, propertyKey as string);
    }
}