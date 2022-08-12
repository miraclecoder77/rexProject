export class NewMerchantModel {
    clientName: string;
    clientEmail: string;
    clientLocation: string;
    phone: string;
    identifiers: string[];
    clientAdminFirstName: string;
    clientAdminLastName: string;
    clientAdminEmail: string;

    constructor(newMerchant: any) {
        this.clientName = newMerchant.clientName;
        this.clientEmail = newMerchant.clientEmail;
        this.clientLocation = newMerchant.clientLocation;
        this.phone = newMerchant.phone;
        this.clientAdminFirstName = newMerchant.clientAdminFirstName;
        this.clientAdminLastName = newMerchant.clientAdminLastName;
        this.clientAdminEmail = newMerchant.clientAdminEmail;
        this.identifiers = newMerchant.identifiers.split(',');
    }
}
