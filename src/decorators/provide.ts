import { createDecorator } from 'vue-class-component'
export function Provide(value:string):any;
export function Provide(target: any, propertyKey: string):void;
export function Provide(target: any, propertyKey: string,descriptor: PropertyDescriptor):void;
export function Provide(target: any = "", propertyKey?: string,descriptor?: PropertyDescriptor):void | any {
    const arg1Type = typeof target
    if(arg1Type === 'string'){
        const value = target as string;
        return function (target: any, propertyKey: string,descriptor: PropertyDescriptor) {
            createDecorator(function (options, key) {
                if(!options.__provideData){
                    const data = {}
                    options.__provideData = data
                    options.provide = function(){
                        return data
                    }
                }
                const provideData = options.__provideData
                const name = value || key;
                provideData[name] = descriptor.value
            })(target, propertyKey);
        };
    }else{
        createDecorator(function (options, key) {
            if(!options.__provideData){
                const data = {}
                options.__provideData = data
                options.provide = function(){
                    return data
                }
            }
            const provideData = options.__provideData
            const name = key;
            provideData[name] = descriptor?.value
        })(target, propertyKey as string);
    }
}