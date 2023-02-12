export interface IContacts {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    phone: number;
    createdAt: Date;

}

export interface IContactRequest {
    name: string;
    email: string;
    phone: number;
    createdAt?: Date;
    customerId: string
}

export interface IContactUpdate {
    name: string;
    email: string;
    phone: number;
}