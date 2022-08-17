

import { ColumnSetting, ButtonSettings } from './../../shared/dynamic-table/model';

export interface Store {
    shopName: string;
    storeID: string;
    createdOn: string;
    updatedOn: string;
    status: string
}

export const storeTableSettings: ColumnSetting[] = [
    {
        header:"Shop Name",
        primaryKey: "Shop Name"
    },
    {
        header:"Store ID",
        primaryKey: "store ID"
    },
    {
        header: "Created On",
        primaryKey: ""
    },
    {
        header: "Updated On",
        primaryKey: ""
    },
    {
        header: "Status" ,
        primaryKey: ""
    }

]

export const storeButtonSettings: ButtonSettings[] = [
    {
        title: "Disable",
        params: [],
        func: () => {
        }
    },
    {
        title: "Enable",
        params: [],
        func: () => {
        }
    }
];

export const fakeData: Store[] = [
    {shopName: "adex", storeID: "T6-6305_263", createdOn: "Aug 11, 2022, 2.39:32PM", updatedOn: "Jul 31, 2022, 5:41:04 Pm", status: "Active"}
]