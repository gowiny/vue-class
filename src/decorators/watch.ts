import { createDecorator } from 'vue-class-component'
export function Watch(value:string):any;
export function Watch(target: any, propertyKey: string,descriptor: PropertyDescriptor):void;
export function Watch(arg1: any, arg2?: string,arg3?: PropertyDescriptor):void | any{
    if(typeof arg1 === 'string'){
        return function (target: any, propertyKey: string,descriptor: PropertyDescriptor) {
            createDecorator(function (options, key) {
              const name = arg1 as string || key;
              const watch:any = options.watch
              watch[name] =  descriptor.value;
            })(target, propertyKey);
        };
    }else{
        createDecorator(function (options, key) {
            const name = key;
            const watch:any = options.watch
            watch[name] =  arg3?.value;
          })(arg1, arg2 as string);
    }
}
