import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlusherPageComponent } from './blusher-page/blusher-page.component';
import { BrushesPageComponent } from './brushes-page/brushes-page.component';

const routes: Routes = [
    {
        path:'blusher',
        component:BlusherPageComponent
    },
    {
        path:'brushes',
        component:BrushesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
