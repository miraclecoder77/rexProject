import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Field, FieldType } from '../model';

@Component({
    selector: 'app-dynamic-field',
    templateUrl: './dynamic-field.component.html',
    styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent implements OnInit {
    @Input() field: Field;

    @ViewChild('password')
    password: ElementRef<HTMLInputElement>;

    public control: FormControl;
    public FieldType = FieldType;
    subscriptions: Subscription[] = [];
    constructor(private formGroupDir: FormGroupDirective) {}

    ngOnInit() {
        /**
         * @angular/forms -> FormGroupDirective! 🎉
         *
         * https://angular.io/api/forms/FormGroupDirective
         * "Binds an existing FormGroup to a DOM element."
         *
         * We can easily access Reactive Forms functionality from this component in our
         * parent component without the need to pass our own inputs or event emitters.
         */

        this.control = this.formGroupDir.control.get(
            this.field.name
        ) as FormControl;

        //trigger valueChanges
        if (this.field.type === 7) {
            this.control.setValue('+234');
        }
    }

    togglePassword(fieldToToggle: string) {
        if (this.password.nativeElement.id === fieldToToggle) {
            document
                .getElementById(`${fieldToToggle + 'eye'}`)!
                .classList.toggle('slash');
            if (this.password.nativeElement.type === 'password') {
                this.password.nativeElement.setAttribute('type', 'text');
            } else {
                this.password.nativeElement.setAttribute('type', 'password');
            }
        }
    }

    hasError(event: any) {
        this.control.markAsTouched();
        if (event) {
            this.control.setErrors(null);
        } else {
            this.control.setErrors({ incorrect: true });
        }
    }
    telInputObject(event: any) {
        this.subscriptions.push(
            this.control.valueChanges.subscribe(
                (e) => {
                    if (e.length > 0 && e.includes('+')) {
                        event.setNumber(e);
                    } else {
                        event.setNumber('+234' + e.slice(1));
                    }
                },
                (error) => {
                    console.log(error);
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }
}
