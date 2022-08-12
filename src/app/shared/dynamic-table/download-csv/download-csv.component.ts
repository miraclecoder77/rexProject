import {
    Component,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'lib-download-csv',
    templateUrl: './download-csv.component.html',
    styleUrls: ['./download-csv.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadCsvComponent {
    @Output() downloadCsv = new EventEmitter();
}
