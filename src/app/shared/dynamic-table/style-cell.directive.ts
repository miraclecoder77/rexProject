import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

/*
 * Here we expect to inputs appStyleCell which represents the cell value and the * key which represents the cell's key. We also inject ElementRef and Renderer2
 * so we can update the view. Now that we have the inputs, we can set custom
 * views based on incoming values.
 *
 */

@Directive({
    selector: '[appStyleCell]',
})
export class StyleCellDirective implements OnInit {
    @Input() appStyleCell: any; // Represents the cells value
    @Input() key: string; // Represents the cells key

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        if (this.key === 'status') {
            // console.log(this.appStyleCell, this.key);
            if (
                this.appStyleCell === 'ACTIVE' ||
                this.appStyleCell === true ||
                this.appStyleCell === 'approved'
            ) {
                this.renderer.setStyle(
                    this.el.nativeElement,
                    'color',
                    '#13a500'
                );
                this.renderer.setStyle(
                    this.el.nativeElement,
                    'text-transform',
                    'uppercase'
                );
            }
            if (
                this.appStyleCell === 'INACTIVE' ||
                this.appStyleCell === false ||
                this.appStyleCell === 'declined'
            ) {
                this.renderer.setStyle(
                    this.el.nativeElement,
                    'color',
                    '#c9ae1c'
                );
                this.renderer.setStyle(
                    this.el.nativeElement,
                    'text-transform',
                    'uppercase'
                );
            }
        }

        if (this.appStyleCell === undefined) {
            // Empty cell formatting
        }

        if (typeof this.appStyleCell === 'number') {
            // Number formatting
        }

        if (this.key === 'loyaltyReward') {
            if (this.appStyleCell === true) {
                this.renderer.setStyle(
                    this.el.nativeElement,
                    'color',
                    '#13a500'
                );
                this.el.nativeElement.innerHTML = 'Yes';
            }

            if (this.appStyleCell === false) {
                this.renderer.setStyle(
                    this.el.nativeElement,
                    'color',
                    '#c9ae1c'
                );
                this.el.nativeElement.innerHTML = 'No';
            }
        }
        if (this.key === 'rank') {
            // console.log('eee', this.getLeaderboardClasses(this.appStyleCell));
            this.renderer.addClass(
                this.el.nativeElement,
                this.getLeaderboardClasses(this.appStyleCell)
            );
            this.renderer.addClass(this.el.nativeElement, 'position');
            this.renderer.addClass(this.el.nativeElement, 'leading');
        }
    }
    private getLeaderboardClasses(index: number) {
        switch (index) {
            case 1:
                return 'first';
                break;
            case 2:
                return 'second';

            case 3:
                return 'third';

            default:
                return;
        }
    }
}
