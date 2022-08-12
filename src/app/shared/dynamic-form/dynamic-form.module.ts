import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ngspot/ngx-errors';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SentenceCasePipe } from './sentence-case.pipe';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
    declarations: [
        SentenceCasePipe,
        DynamicFieldComponent,
        DynamicFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxErrorsModule,
        Ng2TelInputModule,
    ],
    exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
