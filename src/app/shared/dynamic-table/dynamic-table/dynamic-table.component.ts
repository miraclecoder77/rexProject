import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {
    ButtonDisplayCondition,
    ButtonSettings,
    ColumnSetting,
} from '../model';

@Component({
    selector: 'lib-dynamic-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: ['./dynamic-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTableComponent implements OnInit {
    /* Here we are expecting 4 inputs:
   * title: which represents the tables title
   * records: which represents the table data
   * settings: which represents configuration of each cell // Optional
   * buttons: which represents button configurations  // Optional
   *
   * The interface for the ColumnSetting and ButtonSettings are shown in the
   * model.ts file.

   * In the ngOnInit method we check if a buttons input is passed and then
   * initialize it as an empty array if undefined. We perform the same check on
   * the settings input, if its undefined we generate a default settings
   * configuration.
   *
   */

    @Input() title: any[]; // Table Title
    @Input() records: any[]; // Table Data
    @Input() settings: ColumnSetting[]; // Table Configuration Settings
    @Input() buttons: ButtonSettings[]; // Button Settings - Optional

    columnMaps: ColumnSetting[]; // Placeholder for storing table configuraion settings

    constructor() {}

    ngOnInit(): void {
        //console.log(this.records, this.settings);

        //console.log(this.buttons);
        if (!this.buttons) this.buttons = [];

        if (this.settings) {
            // If settings are provided

            this.columnMaps = this.settings;
        } else {
            // If settings are not provided, format headers

            this.columnMaps = Object.keys(this.records[0]).map((key) => {
                return {
                    primaryKey: key,
                    header:
                        key.slice(0, 1).toUpperCase() +
                        key.replace(/_/g, ' ').slice(1),
                    format: 0,
                };
            });
        }
    }

    // Action button click method
    bC(record, func, values) {
        func(...values.map((val) => record[val]));
    }
}
