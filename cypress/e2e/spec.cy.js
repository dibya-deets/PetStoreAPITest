/// <reference  types ="Cypress" />

describe('Api Validation', function() {
  before(()=>{
cy.fixture('testdata').then((data)=>{
  this.data=data
})
  })
  it('Create new user', () => {
    cy.request({
      method:'POST',
      url:'https://petstore.swagger.io/v2/user',
      headers:{
       'Content-Type': 'application/json'
      },
      body:
        {
          "id": this.data.id,
          "username": this.data.username,
          "firstName": this.data.username,
          "lastName": this.data.lastName,
          "email": this.data.email,
          "password": this.data.password,
          "phone": this.data.phone,
          "userStatus": this.data.userStatus
        }
      
    }).then((res)=>{
     expect(res.status).to.eq(200)
    })
})
it('Get new user details',()=>{
  cy.request({
    method:'GET',
    url:'https://petstore.swagger.io/v2/user/'+this.data.username,
    headers:{
     // 'Content-Length': 'application/json'
     },

  }).then((res)=>{
expect(res.body.username).to.eq(this.data.username)
  })

})
it('Delete user details',()=>{
  cy.request({
    method:'DELETE',
    url:'https://petstore.swagger.io/v2/user/'+this.data.username,
    headers:{
     // 'Content-Length': 'application/json'
     },

  }).then((res)=>{
expect(res.status).to.eq(200)
  })
})

 })

