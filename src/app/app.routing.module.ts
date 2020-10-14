import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlusherPageComponent } from './blusher-page/blusher-page.component';

const routes: Routes = [
    {
        path:'blusher',
        component:BlusherPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
