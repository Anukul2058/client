import axios from 'axios'
const url = 'http://localhost:4000/register'
const url2 =  'http://localhost:4000/login'
const url3 =  'http://localhost:4000/createpost'
const url4 = 'http://localhost:4000/getpost'





export const createdata=(formdata)=>{
    console.log(formdata)
    axios.post(url,formdata)
    .then((response)=>{
        console.log(response)
        alert("Your account is created")
    })
    .catch((error)=>{
        alert("Invalid username or password")
    })
    console.log("hello")
}

export const submitLogin= (formData,Navigate,setUserInfo)=>{
    axios.post(url2,formData)
    .then((response)=>{
        
        if(response.status===200){
            setUserInfo({username:response.data.username,userid:response.data._id})
            Navigate('/')
            
        }
    })
    .catch((error)=>{
        console.log(error)
        alert("Invalid username or password")
    })
}

export const createPost =(postData,navigate)=>{
   
    axios.post(url3,postData)
    .then((res)=>{
        console.log(res.data)
        navigate('/')

    })
    .catch(error=>console.log(error))

}

export const  getPost = (setPosts)=>{
    axios.get(url4)
    .then((res)=>{
        setPosts(res.data)
    })
    .catch(err=>console.log(err))
}

export const getPostPage = (param,setPostContent)=>{
    axios.get(`http://localhost:4000/getPostPage/${param}`)
    .then((res)=>{
        setPostContent(res.data)

    })
    .catch(err=>console.log(err))
}