import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diccionario'
})
export class DiccionarioPipe implements PipeTransform {

  transform(value: any, opc: boolean): any {
      opc = true;

      if(opc == true){
        value=value.replace(/CH39R/g,"'");
        value=value.replace(/CH34R/g,'"');
        value=value.replace(/CH35R/g,'#');
        value=value.replace(/CH44R/g,',');
        value=value.replace(/CH10R/g,' ');
        value=value.replace(/CH176R/g,'&deg;');	
        value=value.replace(/CH8226R/g,'•');
        value=value.replace(/CH9R/g,' ');	
        value=value.replace(/CH180R/g,'´');	
        value=value.replace(/CH58R/g,':');	
      
        value=value.replace(/&aacute;/g,'á');
        value=value.replace(/&eacute;/g,'é');
        value=value.replace(/&iacute;/g,'í');
        value=value.replace(/&oacute;/g,'ó');
        value=value.replace(/&uacute;/g,'ú');
        value=value.replace(/&Aacute;/g,'Á');
        value=value.replace(/&Eacute;/g,'É');
        value=value.replace(/&Iacute;/g,'Í');
        value=value.replace(/&Oacute;/g,'Ó');
        value=value.replace(/&Uacute;/g,'Ú');
        value=value.replace(/&ntilde;/g,'ñ');
        value=value.replace(/&Ntilde;/g,'Ñ');
      
        value=value.replace(/CH225R/g,'á');
        value=value.replace(/CH233R/g,'é');
        value=value.replace(/CH237R/g,'í');
        value=value.replace(/CH243R/g,'ó');
        value=value.replace(/CH250R/g,'ú');
        value=value.replace(/CH193R/g,'Á');
        value=value.replace(/CH201R/g,'É');
        value=value.replace(/CH205R/g,'Í');
        value=value.replace(/CH211R/g,'Ó');
        value=value.replace(/CH2018R/g,'Ú');
        value=value.replace(/CH241R/g,'ñ');
        value=value.replace(/CH209R/g,'Ñ');
        value=value.replace(/CH207R/g,'Ï');
        value=value.replace(/CH239R/g,'ï');
        value=value.replace(/CH252R/g,'ü');
        value=value.replace(/CH220R/g,'Ü');	
        value=value.replace(/CH92R/g,'&#92;');
        value=value.replace(/CH145R/g,'&lsquo;');
        value=value.replace(/CH146R/g,'&rsquo;');
      }

    return `${value}`;
  }

}
