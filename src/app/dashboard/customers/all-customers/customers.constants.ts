

import { ColumnSetting, ButtonSettings } from '../../../../app/shared/dynamic-table/model';

export interface Customer {
    customerName: string;
    emailAddress: string;
    phoneNumber: string;
    status: string
}

export const customerTableSettings: ColumnSetting[] = [
    {
        header:"Customer Name",
        primaryKey: "Customer Name"
    },
    {
        header:"Email Address",
        primaryKey: "Phone Number"
    },
    {
        header: "Phone Number",
        primaryKey: "Active"
    },
    {
        header: "Status",
        primaryKey: ""
    },
    {
        header: "Action" ,
        primaryKey: ""
    }

]

export const customerButtonSettings: ButtonSettings[] = [
    {
        title: "Open",
        params: [],
        func: () => {
        }
    }
];

export const fakeData: Customer[] = [
    {customerName: "adex", emailAddress: "text@example.com", phoneNumber: " +2349871765352", status: "Active"}
]