import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import AdminDashboard from "./Pages/AdminDashboard";
import DeveloperSignUp from "./Pages/DeveloperSignUp";
import DeveloperSignin from "./Pages/DeveloperSigin";
import DevPassword from "./Pages/DevPassword";
import CreateProject from "./Pages/CreateProject";
import ProjectsPage from "./Pages/ProjectsPage";
import AdminProjects from "./Pages/AdminProjects";
import CreateDefect from "./Pages/CreateDefect";
import DeveloperDefectPage from "./Pages/DeveloperDefectPage";
import AdminDefectsPage from "./Pages/AdminDefectsPage";
import DashboardLayout from "./Components/DashboardLayout";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/developer-signin" element={<DeveloperSignin />} />
          <Route element={<DashboardLayout/>} children={
            <>
              <Route path="/dashboard" element={<AdminDashboard />} exact />
              <Route path="/admin/create-developer" element={<DeveloperSignUp />} />
              <Route path="/change-password" element={<DevPassword />} />
              <Route path="/admin/create-project" element={<CreateProject />} />
              <Route path="/dev/allprojects" element={<ProjectsPage />} />
              <Route path="/admin/allprojects" element={<AdminProjects />} />
              <Route path="/dev/alldefects" element={<DeveloperDefectPage />} />
              <Route path="/admin/alldefects" element={<AdminDefectsPage />} />
              <Route path="/project/create-defect/:id" element={<CreateDefect />} />
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
