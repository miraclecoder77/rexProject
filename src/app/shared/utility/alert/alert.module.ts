import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule],
    declarations: [AlertComponent],
    exports: [AlertComponent],
})
export class AlertModule {}
