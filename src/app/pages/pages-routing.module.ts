import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MonitorearComponent } from './monitorear/monitorear.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chatbot',
    component: ChatbotComponent
  },
  {
    path: 'temperaturas',
    component: MonitorearComponent
  },
  {
    path: 'registrarDoctor',
    component: FormulariosComponent
  },
  {
    path: 'registrarClinica',
    component: RegisterClinicComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
