import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LabelledDropdownComponent } from './labelled-dropdown/labelled-dropdown.component';
// import { PermissionDirective } from '@ga/core';
import { CapitalizePipe } from './pipes/capitalize.pipe';
// import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { SanitizeOperationTypePipe } from './pipes/sanitize-operation-type.pipe';

@NgModule({
    declarations: [
        SanitizeOperationTypePipe,
        LoaderComponent,
        LabelledDropdownComponent,
        CapitalizePipe,
        FormatNumberPipe,
        //PermissionDirective,
        // CustomCurrencyPipe,
    ],
    imports: [CommonModule],
    exports: [
        SanitizeOperationTypePipe,
        LoaderComponent,
        LabelledDropdownComponent,
        CapitalizePipe,
        FormatNumberPipe,
        //PermissionDirective,
        // CustomCurrencyPipe,
    ],
})
export class UtilityModule {}
