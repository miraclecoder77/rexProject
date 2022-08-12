import { AdminMetaData } from './model';

export type User = UserDetails | AdminMetaData;

// export class LoggedInUser {
//     createdAt: string;
//     email: string;
//     firstName: string;
//     id: number;
//     lastName: string;
//     permissions: string[];
//     country: string;
//     receiveTopDriverNotificationStatus: string;
//     role: string;
//     status: string;
//     token: string;
//     updatedAt: string;
//     userRole: string;
//     regions: string[];
//     branches: string[];
//     client: ClientDetails;
// }

type ClientDetails = {
    clientEmail: string;
    clientLocation: string;
    clientName: string;
    clientType: string;
    country: string;
    createdAt: string;
    id: string;
    phone: string;
    updatedAt: string;
    status: string;
};


export interface UserDetails {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    userRole: string;
    expiryAt: string;
    role?: any;
    enabled: boolean;
    authorities: any[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
}

export interface LoggedInUser {
    user: UserDetails;
    token: string;
}