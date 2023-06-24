import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations:[],
    imports:[
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports:[
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FormsModule
    ]
})

export class SharedModule{}