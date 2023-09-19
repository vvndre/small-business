import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import BusinessDetails from "./containers/BusinessDetails";
import Login from "./containers/Login";
import Listings from "./containers/Listings";
import AddListing from "./containers/AddListing";

export const CheckAuth = () => {
  const cookies = cookies.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

export const ProtectedRoutes = () => {
  return CheckAuth() ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/addListing" element={<AddListing/>}></Route>
      </Route>
      <Route exact path="/" element={<Listings />} />
      <Route path="/business/:id" element={<BusinessDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
