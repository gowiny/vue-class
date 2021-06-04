import { createDecorator } from 'vue-class-component'
export function State(value?:string):any;
export function State(target: any, propertyKey: string):void;
export function State(target: any="", propertyKey?: string):void | any {
    if(typeof target === 'string'){
        const value = target as string;
        const arr = value ?  value.split("/") : undefined;
        return function (target: any, propertyKey: string) {
            createDecorator(function (options, key) {
                options.computed[key] = function() {
                    let data:any = this.$store.state
                    if(!arr){
                        return data[key];
                    }else{
                        arr.forEach((item)=>{
                            data = data[item]
                        })
                        return data;
                    }
                }
            })(target, propertyKey);
        };
    }else{
        createDecorator(function (options, key) {
            options.computed[key] = function() {
                const data:any = this.$store.state
                return data[key]
            }
        })(target, propertyKey as string);
    }
}