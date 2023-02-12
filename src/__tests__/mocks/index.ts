import { ICustomer, ICustomerLogin, ICustomerRequest } from "../../interfaces/customer"

export const mockedCustomer: ICustomerRequest = {
  name: "Joana",
  email: "joana@mail.com",
  phone: 1199998888,
  isAdm: false,
  password: "123456"
}

export const mockedAdmin: ICustomerRequest = {
  name: "Felipe",
  email: "felipe@mail.com",
  phone: 1188889999,
  isAdm: true,
  password: "123456"
}

export const mockedCustomerLogin: ICustomerLogin = {
  email: "joana@mail.com",
  password: "123456"
}

export const mockedAdminLogin: ICustomerLogin = {
  email: "felipe@mail.com",
  password: "123456"
}