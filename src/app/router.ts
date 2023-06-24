import { Routes } from "@angular/router";


export const routes: Routes= [
    {
        path:"",
        loadComponent: ()=> import("./components/layouts/layouts.component").then(c => c.LayoutsComponent),
        children:[
            {
                path:"",
                loadComponent: () => import("./components/home/home.component").then(c => c.HomeComponent)
            }
        ]
    }
]