import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/Homepage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import NotePage from "../pages/NotesPage";
import SignupPage from '../pages/SignupPage';
import PrivateRoute from './PrivateRoute';
export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/signup" element={<SignupPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/notes" element={<PrivateRoute><NotePage/></PrivateRoute>}></Route>
        </Routes>
    </>
  )
}
