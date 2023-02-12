import  request  from "supertest"
import { DataSource } from "typeorm"
import app from "../../app"
import AppDataSource from "../../data-source"
import { mockedAdmin, mockedAdminLogin, mockedCustomer, mockedCustomerLogin } from './../mocks/index';

describe("/customer", () => {
  let connection: DataSource

  beforeAll(async() => {
      await AppDataSource.initialize().then((res) => {
          connection = res
      }).catch((err) => {
          console.error("Error during Data Source initialization", err)
      })
  })

  afterAll(async() => {
      await connection.destroy()
  })

  test("POST /customer -  Must be able to create a customer",async () => {
      const response = await request(app).post('/customer').send(mockedCustomer)

      expect(response.body).toHaveProperty("id")
      expect(response.body).toHaveProperty("name")
      expect(response.body).toHaveProperty("email")
      expect(response.body).toHaveProperty("isAdm")
      expect(response.body).toHaveProperty("isActive")
      expect(response.body).toHaveProperty("createdAt")
      expect(response.body).not.toHaveProperty("password")
      expect(response.body.name).toEqual("Joana")
      expect(response.body.email).toEqual("joana@mail.com")
      expect(response.body.isAdm).toEqual(false)
      expect(response.body.isActive).toEqual(true)
      expect(response.status).toBe(201)        
  })

  test("POST /customer -  should not be able to create a customer that already exists",async () => {
    const response = await request(app).post('/customer').send(mockedCustomer)

    expect(response.body).toHaveProperty("message")
    expect(response.status).toBe(400)
         
})

test("GET /customer -  Must be able to list customers",async () => {
  await request(app).post('/customer').send(mockedAdmin)
  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const response = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

  expect(response.body).toHaveLength(2)

})

test("GET /customer -  should not be able to list customers without authentication",async () => {
  const response = await request(app).get('/customer')

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
       
})
test("DELETE /customer/:id -  should not be able to delete customer without authentication",async () => {
  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const UserTobeDeleted = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

  const response = await request(app).delete(`/customer/${UserTobeDeleted.body[0].id}`)

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
       
})
test("DELETE /customer/:id -  should not be able to delete customer not being admin",async () => {
  const userLoginResponse = await request(app).post("/login").send(mockedCustomerLogin);
  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const UserTobeDeleted = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

  const response = await request(app).delete(`/customer/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${userLoginResponse.body.token}`)

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(403)
       
})

test("DELETE /customer/:id -  Must be able to soft delete customer",async () => {
  await request(app).post('/customer').send(mockedAdmin)

  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const UserTobeDeleted = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

  const response = await request(app).delete(`/customer/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
  const findUser = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
  expect(response.status).toBe(204)
  expect(findUser.body[0].isActive).toBe(false)

})

test("DELETE /customer/:id -  shouldn't be able to delete user with isActive = false",async () => {
  await request(app).post('/customer').send(mockedAdmin)

  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const UserTobeDeleted = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

  const response = await request(app).delete(`/customer/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
  expect(response.status).toBe(400)
  expect(response.body).toHaveProperty("message")

})

test("DELETE /customer/:id-  should not be able to delete user with invalid id",async () => {
  await request(app).post('/customer').send(mockedAdmin)

  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  
  const response = await request(app).delete(`/customer/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
  expect(response.status).toBe(404)
  expect(response.body).toHaveProperty("message")

})

test("PATCH /customer/:id -  should not be able to update user without authentication",async () => {
  const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const userTobeUpdate = await request(app).get('/customer').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
  const response = await request(app).patch(`/customer/${userTobeUpdate.body[0].id}`)

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
       
})

test("PATCH /customer/:id - should not be able to update user with invalid id",async () => {
  const newValues = {name: "Joana Brito", email: "joanabrito@mail.com"}

  const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const token = `Bearer ${admingLoginResponse.body.token}`
  
  const userTobeUpdateRequest = await request(app).get("/customer").set("Authorization", token)
  const userTobeUpdateId = userTobeUpdateRequest.body[0].id

  const response = await request(app).patch(`/customer/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization",token).send(newValues)

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(404)
})

test("PATCH /customer/:id - should not be able to update isAdm field value",async () => {
  const newValues = {isAdm: false}

  const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const token = `Bearer ${admingLoginResponse.body.token}`
  
  const userTobeUpdateRequest = await request(app).get("/customer").set("Authorization", token)
  const userTobeUpdateId = userTobeUpdateRequest.body[0].id

  const response = await request(app).patch(`/customer/${userTobeUpdateId}`).set("Authorization",token).send(newValues)

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
})

test("PATCH /customer/:id - should not be able to update isActive field value",async () => {
  const newValues = {isActive: false}

  const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const token = `Bearer ${admingLoginResponse.body.token}`
  
  const userTobeUpdateRequest = await request(app).get("/customer").set("Authorization", token)
  const userTobeUpdateId = userTobeUpdateRequest.body[0].id

  const response = await request(app).patch(`/customer/${userTobeUpdateId}`).set("Authorization",token).send(newValues)
  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
})

test("PATCH /customer/:id - should not be able to update id field value",async () => {
  const newValues = {id: false}

  const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const token = `Bearer ${admingLoginResponse.body.token}`
  
  const userTobeUpdateRequest = await request(app).get("/customer").set("Authorization", token)
  const userTobeUpdateId = userTobeUpdateRequest.body[0].id

  const response = await request(app).patch(`/customer/${userTobeUpdateId}`).set("Authorization",token).send(newValues)
  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
})

test("PATCH /customer/:id - should not be able to update another user without adm permission",async () => {
  const newValues = {isActive: false}

  const userLoginResponse = await request(app).post("/login").send(mockedCustomer);
  const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const userToken = `Bearer ${userLoginResponse.body.token}`
  const adminToken = `Bearer ${admingLoginResponse.body.token}`
  
  const userTobeUpdateRequest = await request(app).get("/customer").set("Authorization", adminToken)
  const userTobeUpdateId = userTobeUpdateRequest.body[1].id

  const response = await request(app).patch(`/customer/${userTobeUpdateId}`).set("Authorization",userToken).send(newValues)

  expect(response.body).toHaveProperty("message")
  expect(response.status).toBe(401)
})

test("PATCH /customer/:id -  should be able to update user",async () => {
  const newValues = {name: "Joana Brito", email: "joanabrito@mail.com"}

  const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
  const token = `Bearer ${admingLoginResponse.body.token}`
  
  const userTobeUpdateRequest = await request(app).get("/customer").set("Authorization", token)
  const userTobeUpdateId = userTobeUpdateRequest.body[0].id

  const response = await request(app).patch(`/customer/${userTobeUpdateId}`).set("Authorization",token).send(newValues)

  const userUpdated = await request(app).get("/customer").set("Authorization", token)

  expect(response.status).toBe(200)
  expect(userUpdated.body[0].name).toEqual("Joana Brito")
  expect(userUpdated.body[0]).not.toHaveProperty("password")
}) 


});
