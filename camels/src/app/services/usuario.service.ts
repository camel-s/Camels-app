import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  public usuario:Usuario

  constructor() {}

 // getUsuario(): Array<any>{
   //return this.usuario
  //}
}
