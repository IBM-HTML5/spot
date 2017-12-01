import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoCorto'
})
export class TextoCortoPipe implements PipeTransform {

  transform(value: any, start: number, end?: number): any {

    if (value == null) 
      return value;   
        
    if (!this.supports(value)) {
      console.log("error tipo dato pipe textoCorto");
    }
    
    let texto =  value.split("");
    
    if (texto.length >= 190){
      return value.slice(start, end) + " ...";
    } else {
      return value.slice(start, end);
      }
    }

  private supports(obj: any): boolean { return typeof obj === 'string' || Array.isArray(obj); }
}
