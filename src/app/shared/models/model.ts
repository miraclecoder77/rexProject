export interface UsersTable {
    createdAt: Date;
    email: string;
    firstName: string;
    country?: string;
    id: number;
    lastName: string;
    permissions: string[];
    role: string;
    status: 'ACTIVE' | 'INACTIVE';
    updatedAt: Date;
    userRole: string;
    roleName?: string;
    userRoleId: number;
    roleId?: number;
    scope?: string;
    regions?: Region[] | number[];
    branches?: Branch[] | number[];
    receiveTopDriverNotificationStatus?: boolean;
}

export interface DecodedJWT {
    email: string;
    isSuperAdmin: string;
    iat: string;
    exp: string;
}
export interface TokenLifeTime {
    validTill: string;
    duration: string;
}
export interface Role {
    id: number;
    permissions: string[];
    roleName: string;
    roleDescription: string;
}

export interface Permission {
    name: string;
    desc: string;
}

export class TransactionReciept {
    de1: string = '';
    de2: string = '';
    de3: string = '';
    de4: string = '';
    de7: string = '';
    de11: string = '';
    de14: string = '';
    de37: string = '';
    de38: string = '';
    de39: string = '';
    de41: string = '';
    de42: string = '';
    de43: string = '';
    cardholder: string = '';
}

export interface Merchant {
    clientEmail: string;
    clientStreet: string;
    clientState: string;
    clientRegion: string;
    clientLocation: string;
    clientName: string;
    clientType: string;
    createdAt: Date;
    id: number;
    phone: string;
    status: 'ACTIVE' | 'INACTIVE';
    updatedAt: Date;
    clientAdminFirstName: string;
    clientAdminLastName: string;
    clientAdminEmail: string;
    identifiers: MerchantIdentifier[];
}

export interface MerchantIdentifier {
    createdAt: string;
    id: number;
    identifier: string;
    isDeleted: boolean;
    updatedAt: string;
}

export interface ClientMetaData {
    branches: Branch[];
    createdAt: Date;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    role: string;
    permissions: string[];
    regions: Region[];
    country: string;
    scope: string;
    status: 'ACTIVE' | 'INACTIVE';
    token: string;
    updatedAt: Date;
}

export interface AdminMetaData {
    createdAt: Date;
    email: string;
    firstName: string;
    country: string;
    id: number;
    lastName: string;
    permissions: string[];
    role: string;
    status: 'ACTIVE' | 'INACTIVE';
    token: string;
    updatedAt: Date;
    userRole: string;
    userRoleId: number;
    clientMetaData: Client;
}
export interface Client {
    id: number;
    clientName: string;
    clientEmail: string;
    phone: string;
    clientLocation: string;
    clientType: string;
    status: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Branch {
    branchName: string;
    id: number;

    branchLocation: string;
    createdAt: Date;
    regionId: number;
    regionName: string;
    updatedAt: Date;
}

export interface Region {
    regionName: string;
    id: number;

    clientId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface TopDrivers {
    bankName: string;
    merchantId: string;
    merchantName: string;
    terminalId: string;
    txnValue: string;
    txnVolume: string;
    rank: number;
}

export interface AuditLogs {
    action: {};
    appReference: string;
    created_at: string;
    description: string;
    desc: string;
    feedback: {};
    id: string;
    identity: string;
    owner: string;
    signature: string;
    what: string;
    when: string;
    by: string;
}

export interface Transactions {
    pan: string;
    rrn: string;
    stan: string;
    amount: string;
    cardHolder: string;
    additionalInfo: string;
    de1: string;
    de2: string;
    de3: string;
    de4: string;
    de7: string;
    de11: string;
    de12: string;
    de13: string;
    de14: string;
    de15: string;
    de18: string;
    de22: string;
    de25: string;
    de28: string;
    de30: string;
    de32: string;
    de33: string;
    de35: string;
    de37: string;
    de38: string;
    de39: string;
    de40: string;
    de41: string;
    de42: string;
    de43: string;
    de49: string;
    de54: string;
    de59: string;
    de60: string;
    de90: string;
    de95: string;
    de102: string;
    extra_info: string;
    id: string;
    ins_ts: string;
    merchantId: string;
    merchantName: string;
    refCode: string;
    transRef: string;
    requestDate: string;
    responseCode: string;
    responseDate: string;
    reversal_reason: string;
    reversed: string;
    rid: string;
    status: string;
    terminalId: string;
    trans_id: string;
    transactionId: string;
    transactionType: string;
    transDate: string;
    tx_option: string;
    upd_ts: string;
    updated: string;
    hostIp: string;
    hostPort: string;
    payment_type?: string;
    phone_number?: string;
    mobile_operator?: string;
    authCode: string;
}

export interface StatusRequest {
    createdAt: string;
    id: number;
    jobStatus: string;
    numberOfRecords: number;
    operationType: string;
    outputUrl: string;
    updatedAt: string;
}

export interface IResponseWrapper<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface DownloadStatusRequest {
    encoded: string;
    fileName: string;
    type: string;
}
