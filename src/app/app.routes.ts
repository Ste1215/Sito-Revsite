import { Routes } from '@angular/router';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';
import { CategorieComponent } from './componenti/categorie/categorie.component';
import { RecensioniComponent } from './componenti/recensioni/recensioni.component';
import { Pagina3Component } from './componenti/pagina3/pagina3.component';
import { AuthGuard } from './auth/auth.guard';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { HomeComponent } from './componenti/home/home.component';
import { ElettronicaComponent } from './componenti/elettronica/elettronica.component';
import { StreamingComponent } from './componenti/streaming/streaming.component';
import { ValutazioniComponent } from './componenti/valutazioni/valutazioni.component';

export const routes: Routes = [
    { path: 'homepage', component: HomeComponent },
    {
        path: '', component: DashboardComponent,canActivate: [AuthGuard],
        children:[
        {path:'',redirectTo: '/categorie',pathMatch:'full'},
        {path:'categorie',component:CategorieComponent},
        {path:'recensioni',component:RecensioniComponent},
        {path:'pagina3',component:Pagina3Component},
        {path: 'elettronica',component: ElettronicaComponent},
        {path: 'streaming',component: StreamingComponent},
        {path: 'shopOnline',component: StreamingComponent},
        {path: 'valutazioni',component: ValutazioniComponent},
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '404', component: NotfoundComponent},

    {path: '**', redirectTo:'/404'},
];
