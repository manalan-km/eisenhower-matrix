import { Routes } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskPanelComponent } from './task-panel/task-panel.component';

export const routes: Routes = [
    {
        path:'',pathMatch:'full', component:TaskPanelComponent
    },
    {
        path:'edit/:id', component:TaskEditComponent
    }
];
