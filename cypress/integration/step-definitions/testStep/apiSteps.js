import ApiServices from "../../services/ApiServices";



const apiServices = new ApiServices()
Given('user Get Request',()=>{

   apiServices.getRequest()
 
 })

 Given('user Create Request',()=>{

    apiServices.postRequest()
  
  })

  Given('user Update Request',()=>{

    apiServices.putRequest
  
  })

 