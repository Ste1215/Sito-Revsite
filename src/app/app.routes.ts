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

export const routes: Routes = [
    { path: 'homepage', component: HomeComponent },
    {
        path: '', component: DashboardComponent,canActivate: [AuthGuard],
        children:[
        {path:'',redirectTo: '/categorie',pathMatch:'full'},
        {path:'categorie',component:CategorieComponent},
        {path:'recensioni',component:RecensioniComponent},
        {path:'pagina3',component:Pagina3Component},
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo:'/404'},
    
];
