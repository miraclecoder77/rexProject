import { NgModule } from '@angular/core';
import {
    CommonModule,
    CurrencyPipe,
    DatePipe,
    PercentPipe,
} from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { FormatCellPipe } from './format-cell.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { FiltersComponent } from './filters/filters.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadCsvComponent } from './download-csv/download-csv.component';
import { UtilityModule } from '@ga/utility';
// import { CustomCurrencyPipe } from '../utility/pipes/custom-currency.pipe';
import { StyleCellDirective } from './style-cell.directive';

@NgModule({
    declarations: [
        DynamicTableComponent,
        FormatCellPipe,
        StyleCellDirective,
        PaginationComponent,
        FiltersComponent,
        DownloadCsvComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, UtilityModule],
    exports: [
        DynamicTableComponent,
        PaginationComponent,
        FiltersComponent,
        DownloadCsvComponent,
        StyleCellDirective,
    ],
    providers: [
        CurrencyPipe,
        DatePipe,
        PercentPipe,
        // CustomCurrencyPipe,
        StyleCellDirective,
    ],
})
export class DynamicTableModule {}
