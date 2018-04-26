import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatCardModule
    ]
})
export class SharedModule { }
