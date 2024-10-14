//task#3
//bcz 2s delay, done this task in separate file for reduce complexity
const userData={
    name:'alice',
    age:30,
    city:'New York'
  }
  const orderData={
    orderId:'5678',
    amount:1500,
    product:'smartphone'
  }
  const fetchUserData=(callback)=>{
  setTimeout(()=>{
    // console.log(userData);
    return callback(userData)
  },2000)
  }
  const fetchOrderData=(callback)=>{
    // console.log(orderData)
    setTimeout(()=>{
      return callback(orderData)
    },2000)
  }
  const main=()=>{
    fetchUserData((userData)=>{
      console.log("fetch User Data",userData);
  fetchOrderData((orderData)=>{
  console.log("fetch order Data",orderData)
  })
    })
  }
  main();
  