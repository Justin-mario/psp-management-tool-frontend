import { createSlice } from "@reduxjs/toolkit";
import {
  adminLogin,
  registerAdmin,
  adminCreateDeveloper,
  getDevelopers,
  adminCreateProject,
  adminGetProjects,
  adminChangeStatus
} from "./adminActions";
import { toast } from "react-hot-toast";

const adminToken = localStorage.getItem("adminToken")
  ? localStorage.getItem("adminToken")
  : null;

const initialState = {
  loading: false,
  adminInfo: null,
  devInfo: null,
  devs: [],
  adminToken,
  error: null,
  success: false,
  createProject: false,
  projects: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminlogout: (state) => {
      localStorage.removeItem("adminToken");
      state.loading = false;
      state.adminInfo = null;
      state.adminToken = null;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.adminInfo = payload;
    },
  },
  extraReducers: (builder) => {
    // Admin Register
    builder.addCase(registerAdmin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerAdmin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.adminInfo = payload;
      state.adminToken = payload.adminToken;
    });
    builder.addCase(registerAdmin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Admin Login
    builder.addCase(adminLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(adminLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.adminInfo = payload;
      state.adminToken = payload.adminToken;
    });
    builder.addCase(adminLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Admin Creating Developers
    builder.addCase(adminCreateDeveloper.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(adminCreateDeveloper.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.devInfo = payload;
      toast.success("Developer created successfully");
    });
    builder.addCase(adminCreateDeveloper.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Admin getting developers
    builder.addCase(getDevelopers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getDevelopers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.devs = payload;
    });
    builder.addCase(getDevelopers.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Admin creating projects
    builder.addCase(adminCreateProject.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(adminCreateProject.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.createProject = true;
      toast.success("Project Created Successfully");
    });
    builder.addCase(adminCreateProject.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      toast.error("Project cannot be created");
    });

    //Admin getting projects
    builder.addCase(adminGetProjects.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(adminGetProjects.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.projects = payload;
    });
    builder.addCase(adminGetProjects.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Admin updating defect status
    builder.addCase(adminChangeStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(adminChangeStatus.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Defect updated successfully");
    });
    builder.addCase(adminChangeStatus.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { adminlogout, setCredentials } = adminSlice.actions;

export default adminSlice.reducer;
