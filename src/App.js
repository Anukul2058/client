
import Main from "./components/main/Main"
import Login from "./components/Login"
import Register from "./components/Register";
import Layout from "./components/Layout";
import CreatePost from "./components/CreatePost";
import Postpage from "./components/Postpage";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/create" element={<CreatePost />} />


      </Route>
      <Route path="/postPage/:id" element={<Postpage/>}/>

    </Routes>


  );
}

export default App;
