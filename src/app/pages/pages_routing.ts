import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaguesComponent } from './pagues.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
    {path:'dashboard',
    component:PaguesComponent,
    children:[
        {path: '', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'grafica', component: Grafica1Component},  
    ]
  },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
