import { Injectable } from '@angular/core';

@Injectable()

export class UsuarioService {

  constructor() { }

  getUsuario(): Array<any>{
    let array:Array<string>  = ['arthur','vini','felipe']
    console.log(array)
    return array 
  }
}
