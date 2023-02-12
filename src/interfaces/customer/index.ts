export interface ICustomer {
    id: number;
    name: string;
    email: string;
    password: string
    isAdm: boolean,
    phone: number;
    createdAt: Date;
}

export interface ICustomerRequest{
    name: string
    email: string
    password: string
    isAdm: boolean,
    phone: number
}

export interface ICustomerUpdate{
    name: string;
    email: string;
    phone: number;
}
export interface ICustomerLogin {
    email: string
    password: string

}