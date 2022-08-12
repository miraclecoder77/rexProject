import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
    Input,
} from '@angular/core';
import { FileUploadMetadata } from '../../model';
import { AlertService } from '@ga/utility';

@Component({
    selector: 'lib-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent implements OnInit {
    @Input() uploadMetadata: FileUploadMetadata;
    @Output() fileSelected = new EventEmitter<File>();
    file: File;

    el: HTMLInputElement;

    constructor(private alertService: AlertService) {}

    createInputElement() {
        this.el = document.createElement('input') as HTMLInputElement;
        this.el.setAttribute('type', 'file');

        this.el.addEventListener('change', (evt) => {
            const file = (<HTMLInputElement>evt.target).files[0];
            if (!this.uploadMetadata.supportedFileTypes.includes(file.type)) {
                this.alertService.warn(
                    'Looks like you are uploading a file with the wrong format'
                );
                return;
            } else {
                this.file = file;
                this.fileSelected.emit(this.file);
            }
        });
    }

    selectFile() {
        this.el.click();
    }

    ngOnInit() {
        this.createInputElement();
    }
}
