import * as clientHelpers from '../helpers/clientHelpers'


describe('testing auth', function () {

   //Post
   it('Create a new client', function () {
      clientHelpers.createClientRequest(cy)
   })

   //Get
   it('Get all clients', function () {
      clientHelpers.getAllClientsRequest(cy)
   })
   //Delete
   it('Create a new client and delete', function () {
      clientHelpers.createClientRequestAndDelete(cy)
   })
   //Put
   it('Create a new client and edit', function () {
      clientHelpers.createClientRequestAndEdit(cy)
   })

})