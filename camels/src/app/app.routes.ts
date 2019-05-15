import { Routes } from '@angular/router'
import { SideComponent } from './side/side.component';
import { SideUsuarioComponent } from './side/side-usuario/side-usuario.component';
import { SideOfertaComponent } from './side/side-oferta/side-oferta.component';
import { SideServicoComponent } from './side/side-servico/side-servico.component';
import { SideEspecializacaoComponent } from './side/side-especializacao/side-especializacao.component';
import { ContentContrateComponent } from './content/content-contrate/content-contrate.component';
import { ContentPerfilComponent } from './content/content-perfil/content-perfil.component';
import { ContentOferecaComponent } from './content/content-ofereca/content-ofereca.component';

export const ROUTES: Routes = [
    { path: 'perfil', component: ContentPerfilComponent},
    { path: 'ofereca', component: ContentOferecaComponent},
    { path: 'contrate', component: ContentContrateComponent},
    { path: 'side', component: SideComponent, 
        children: [
            { path: 'usuario', component: SideUsuarioComponent},
            { path: 'oferta', component: SideOfertaComponent},
            { path: 'servico', component: SideServicoComponent},
            { path: 'especializacao', component: SideEspecializacaoComponent}
        ]
    }
]