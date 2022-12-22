import React from "react";
import WireframeTwo from "pages/WireframeTwo";
import WireframeOne from "pages/WireframeOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WireframeOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/wireframetwo" element={<WireframeTwo />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
