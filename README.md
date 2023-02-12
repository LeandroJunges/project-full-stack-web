<h1 align = 'center'> API Documentação <h1>


## **Sumário**

- [1. Detalhes](#1-detalhes)
- [2. DER relacionamentos](#2-der-relacionamentos)
- [3. Endpoints](#3-endpoints)
- [4. Autenticação]()
<br>

---

## **1. Detalhes**

A MY SCHEDULE é uma api para usuário final que gosta de manter usa agenda organizada e não perder nenhum contato. Criada para um desafio do Módulo 6 na Kenzie Academy Brasil.

Principais tecnologias utilizada no desafio:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Jest](https://jestjs.io/)

**Base URL: http://localhost:3000**

### **Iniciando**

Após fazer o clone do repositorio no github e abrir o projeto com sua IDE favorita deverá fazer o seguinte comando para instalar a dependencias necessarias para rodar o projeto:
> - yarn install 
ou npm install
<br>


Após instalar todas as dependecias para iniciar o servidor, deverá abrir um terminal e utilizar o seguinte comando :

> - yarn dev ou npm run dev
<br>


## **2. DER relacionamentos**

[ Voltar ao topo ](#sumário)

![Diagram](der_my_schedule.png)

<br>


## **3. Endpoints**

[ voltar ao topo ](#sumário)

  ### Rotas

  - [Customer]()
  - [Contacts]()

  <br>


## **4. Autenticação**

[ Voltar ao topo ](#sumário)

As rotas que precisam de autenticação deve-se ser usado o **Bearer Token**.
O token é gerado automaticamente quando o **Customer** fizer o login.

Além disso, algumas rotas exigem que o **Customer** seja um administrador ou proprietário da conta.

Por favor, leia a documentação de cada rota para entender quais autenticações são necessárias.

---
#

<br>


## **1.** **CUSTOMER**

[ Voltar ao topo ](#sumário)

O Customer objeto é definido :

| Campo      | Tipo     | Descrição                                         |
| ---------- | -------- | ------------------------------------------------- |
| id         | string   | Identicador unico                                 |
| name       | string   | Customer nome \*                                  |
| email      | string   | Customer email \*                                 |
| isAdm      | boolean  | Define se é ou não um administrador               |
| phone      | number   | Cria o telefone do Customer                       |
| isActive   | boolean  | Define se o Customer está com a conta ativa       |
| createdAt  | Date     | Data de criação do Customer                       |
| password   | string   | Customer password/senha \*                        |


<br>


<br>


### **Enpoints**

<br>

| Metodo | Rotas         | Descrição                                    |
| ------ | -----------   | ----------------------------------------     |
| POST   | /customer     | Create customer                              |
| POST   | /login        | Login customer                               |
| GET    | /customer     | List all customers                           |
| GET    | /customer/:id | Lists a customer using its ID as a parameter |
| PATCH  | /customer/:id | Update custoerm                              |
| DELETE | /customer/:id | Soft delete customer                         |

---


<br>

## **1.1 User Creation**

[Voltar para Endpoints](#3-endpoints)

<br>

## POST `/customer`

<br>

### **Request**:

- POST /customer
- Host: http://localhost:3000
- Authorization: None
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "name": "Leandro Junges",
  "email": "leandro@mail.com",
  "isAdm": true,
  "phone": "xx 9xxxx xxxx",
  "password": "1234"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{

  {
    "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
    "name": "Leandro Junges",
    "isAdm": true,
    "contact" : "99988866677",
    "email": "leandro@mail.com",
    "isActive": true,
    "createdAt": "2022-10-29T00:41:28.717Z",
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `400 - BAD REQUEST`** - Missing required field

```json
{
  "message": "(any object key) is a required field"
}
```

<br>

#### **Status `409 - CONFLICTS`** - Email already exists

```json
{
  "message": "This email already exists"
}
```

#

## **1.2 Login**

[Voltar para Endpoints](#3-endpoints)

<br>

## LOGIN `/login`

<br>

### **Request**

- login /login
- Host: http://localhost:3000
- Authorization: None
- Content-type: application/json
- customer deverá estar criado 

<br>

### **Request body**:

```json
{
  "email": "leandro@mail.com",
  "password": "1234"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaXNFbXBsb3llZSI6dHJ1ZSwiaWF0IjoxNjY3OTY0MDY2LCJleHAiOjE2NjgwNTA0NjYsInN1YiI6ImE4M2MxMjVjLWNjZjctNDA4NC04NTg1LWFhZDYyMWZiMjY5MSJ9.LHflvucPDWutAUSUa-O9NY516Y1s5bNVnVtdKPsu89k"
}
```

### **Error Response**:

<br>

#### **Status `403 - FORBIDDEN`** - "Invalid user or password"

```json
{
  "message": "Invalid user or password"
}
```

#

## **1.3 List Customers**

[Voltar para Endpoints](#3-endpoints)

<br>

## GET `/customer`

<br>

### **Request**:

- GET /customer
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json


<br>



<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{

   [
    {
      "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
      "name": "Leandro Junges",
      "isAdm": true,
      "contact" : "99988866677",
      "email": "thiago@mail.com",
      "isActive": true,
      "createdAt": "2022-10-29T00:41:28.717Z",
    }
    ...
  ]
}
```

<br>

#

## **1.4 List customer by Id**

[Voltar para Endpoints](#3-endpoints)

<br>

## GET `/customer/:id`

<br>

### **Request**:

- GET /customer/:id
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- O customer precisa der um Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{

   [
    {
      "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
      "name": "Leandro unges",
      "email": "leandro@mail.com",
      "isAdm": true,
      "isActive": true,
      "createdAt": "",
    }
    ...
  ]
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "customer is not an admin and employee"

```json
{
  "message": "customer is not an admin"
}

```

#

## **1.5 Update Customer by Id**

[Voltar para Endpoints](#3-endpoints)

<br>

## PATCH `/customer/:id`

<br>

### **Request**:

- PATCH /customer/:id
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- O customer precisa der um Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{

  {
    "name": "Leandro",
    "phone": "99988866677",
    "email": "leandro@mail.com",
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "customer is not an admin and employee"

```json
{
  "message": "customer is not an admin"
}

```

#

## **1.6 Delete customer by Id**

[Voltar para Endpoints](#3-endpoints)

<br>

## DELETE `/customer/:id`

<br>

### **Request**:

- DELETE /customer/:id
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- O customer precisa der um Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `204 - No Content`**

```json
No body returned for response
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "customer is not an admin and employee"

```json
{
  "message": "customer is not an admin"
}

```

### **Status `400 - Bad Request`** - "custome already deleted"

```json
{
  "message": "customer already deleted"
}
```

### **Status `404 - Not Found`** - "customer not found id invalid"

```json
{
  "message": "customer not found"
}
```

#


## **2.** **Contacts**

[Voltar para Endpoints](#3-endpoints)

<br>

The Payments object is defined as:

| Campo      | Tipo   | Descrição                                     |
| -------    | ------ | --------------------------------------------- |
| id         | string | Identificador unico                           |
| name       | string | nome do Contact                               |
| isActive   | boolean| Contact está ativo                            |
| email      | string | email do Contact                              |
| phone      | number | Telefone do Contact                           |
| createdAt  | Date   | Define a data de criação do Contact           |
| customerId | string | referencia o ID do Customer no Contact        |

<br>

### **Endpoints**

<br>

| Metood | Rotas        | Descrição                                               |
| ------ | -------------| ------------------------------------------------------- |
| POST   | /contact     | Para criar um novo contato                              |
| GET    | /contact     | Para listar todos os contatos do customer               |
| PATCH  | /contact/:id | Para editar campos dos contatos                         |
| DELETE | /contact/:id | Para deletar o contato do customer                      |

---

<br>

## **1.1 Contact Creation**

[Voltar para Endpoints](#3-endpoints)

<br>

## POST `/contact`

<br>

### **Request**:

- POST /contact
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- O customer precisa der um Adm

<br>

### **Request body**:

```json
{
  "name": "Leandro Junges",
  "email": "leandro@mail.com",
  "phone": "xx 9xxxx xxxx",
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{

  {
    "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
    "name": "Leandro Junges",
    "contact" : "99988866677",
    "email": "leandro@mail.com",
    "isActive": true,
    "createdAt": "2022-10-29T00:41:28.717Z",
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `400 - BAD REQUEST`** - Missing required field

```json
{
  "message": "(any object key) is a required field"
}
```

<br>



#


#

## **1.2 List Contact**

[Voltar para Endpoints](#3-endpoints)

<br>

## GET `/contact`

<br>

### **Request**:

- GET /contact
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json


<br>



<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{

   [
    {
      "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
      "name": "Leandro Junges",
      "phone" : "99988866677",
      "email": "thiago@mail.com",
      "isActive": true,
      "createdAt": "2022-10-29T00:41:28.717Z",
      "customer": [{...}]
    }
    ...
  ]
}
```

<br>

#



### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "customer is not an admin and employee"

```json
{
  "message": "Customer is not an admin"
}

```

#

## **1.3 Update Contact by Id**

[Voltar para Endpoints](#3-endpoints)

<br>

## PATCH `/contact/:id`

<br>

### **Request**:

- PATCH /contact/:id
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- O customer precisa der um Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{

  {
    "name": "Leandro",
    "phone": "99988866677",
    "email": "leandro@mail.com",
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "Customer is not an admin and employee"

```json
{
  "message": "Customer is not an admin"
}

```

#

## **1.4 Delete contact by Id**

[Voltar para Endpoints](#3-endpoints)

<br>

## DELETE `/customer/:id`

<br>

### **Request**:

- DELETE /contact/:id
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- O customer precisa der um Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `204 - No Content`**

```json
No body returned for response
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "customer is not an admin and employee"

```json
{
  "message": "customer is not an admin"
}

```

### **Status `400 - Bad Request`** - "customer already deleted"

```json
{
  "message": "customer already deleted"
}
```

### **Status `404 - Not Found`** - "customer not found id invalid"

```json
{
  "message": "customer not found"
}
```