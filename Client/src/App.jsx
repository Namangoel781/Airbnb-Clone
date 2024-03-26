import { useStates } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./Pages/index.jsx";
import Login from "./Pages/Login.jsx";
import Layout from "./Layout.jsx";
import Register from "./Pages/Register.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import ProfilePage from "./ProfilePage.jsx";
import PlacesPage from "./Pages/PlacesPage.jsx";
import PlacesFormPage from "./Pages/PlacesFormPage.jsx";



axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<ProfilePage/>} />
          <Route path="/account/places" element={<PlacesPage/>} />
          <Route path="/account/places/new" element={<PlacesFormPage/>} />
          <Route path="/account/places/:id" element={<PlacesFormPage/>} />
          
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
