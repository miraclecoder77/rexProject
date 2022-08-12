import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'lib-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
    @ViewChild('loader', { static: true }) elm: ElementRef<HTMLDivElement>;

    displayValue: boolean = false;

    constructor() {}

    ngOnInit() {
        this.elm.nativeElement.style.display = 'none';
    }

    start() {
        this.elm.nativeElement.style.width = '75%';
        this.elm.nativeElement.style.display = 'block';
    }

    end() {
        this.elm.nativeElement.style.width = '100%';
    }
}
