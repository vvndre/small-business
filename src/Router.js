import React from 'react'
import { Routes, Route } from "react-router-dom";
import Listing from "./containers/Listings"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Listing />} />
    </Routes>
  )
}
