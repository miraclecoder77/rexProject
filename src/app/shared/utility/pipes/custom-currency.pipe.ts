// import { Pipe, PipeTransform } from '@angular/core';
// // import { CurrencyService } from '@ga/core';

// @Pipe({
//     name: 'customCurrency',
// })
// export class CustomCurrencyPipe implements PipeTransform {
//     constructor(
//         // private currencyService: CurrencyService
//         ) {}
//     transform(value: number | string): any {
//         const currency = this.currencyService.currency;

//         const amount = String(value).replace(/\d(?=(\d{3})+\.)/g, '$&,');

//         return currency + amount;
//     }
// }
