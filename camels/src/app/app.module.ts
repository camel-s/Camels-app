import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { InitialComponent } from './menu/initial/initial.component';
import { MainComponent } from './menu/main/main.component';
import { PerfilComponent } from './content/perfil/perfil.component';
import { OferecaComponent } from './content/ofereca/ofereca.component';
import { ContrateComponent } from './content/contrate/contrate.component';
import { LoginComponent } from './side/login/login.component';
import { CadastroComponent } from './side/cadastro/cadastro.component';
import { SobreComponent } from './side/sobre/sobre.component';
import { UsuarioComponent } from './side/usuario/usuario.component';
import { OfertaComponent } from './side/oferta/oferta.component';
import { ServicoComponent } from './side/servico/servico.component';
import { EspecializacaoComponent } from './side/especializacao/especializacao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SideComponent,
    InitialComponent,
    MainComponent,
    PerfilComponent,
    OferecaComponent,
    ContrateComponent,
    LoginComponent,
    CadastroComponent,
    SobreComponent,
    UsuarioComponent,
    OfertaComponent,
    ServicoComponent,
    EspecializacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
