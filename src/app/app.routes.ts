import { Routes } from '@angular/router';
import { Liste } from './liste/liste';
import { Listeopen } from './listeopen/listeopen';
import { Listedone} from './listedone/listedone';

export const routes: Routes = [
    { path: '', component: Liste },
    {path: 'tasks/todo', component: Listeopen },
    {path: 'tasks/done', component: Listedone },
];
