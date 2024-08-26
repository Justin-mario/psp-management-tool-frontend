import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {
  developerLogin,
  developerChangePassword,
  developerGetProjects,
  completeProject,
  archiveProject,
  startProject,
  stopProject,
  developerCreateDefect,
  developerChangeStatus,
} from "./developerAction";

const devToken = localStorage.getItem("devToken")
  ? localStorage.getItem("devToken")
  : null;

const initialState = {
  loading: false,
  devInfo: null,
  devToken,
  error: null,
  success: false,
  projects: [],
};

const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    developerlogout: (state) => {
      localStorage.removeItem("devToken");
      state.loading = false;
      state.devInfo = null;
      state.devToken = null;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.devInfo = payload;
    },
  },
  extraReducers: (builder) => {
    //Developer Login
    builder.addCase(developerLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(developerLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.devInfo = payload;
      state.devToken = payload.devToken;
    });
    builder.addCase(developerLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Developer changing password
    builder.addCase(developerChangePassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(developerChangePassword.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(developerChangePassword.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Developer getting projects
    builder.addCase(developerGetProjects.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(developerGetProjects.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.projects = payload;
    });
    builder.addCase(developerGetProjects.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Developer completing projects
    builder.addCase(completeProject.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(completeProject.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Project completed successfully");
    });
    builder.addCase(completeProject.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Developer archive projects
    builder.addCase(archiveProject.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(archiveProject.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Project archived successfully");
    });
    builder.addCase(archiveProject.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Developer start projects
    builder.addCase(startProject.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(startProject.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Project started successfully");
    });
    builder.addCase(startProject.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      toast.error("Can't start project successfully");
    });

    //Developer stop projects
    builder.addCase(stopProject.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(stopProject.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Project stopped successfully");
    });
    builder.addCase(stopProject.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Developer register defect
    builder.addCase(developerCreateDefect.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(developerCreateDefect.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Defect registered successfully");
    });
    builder.addCase(developerCreateDefect.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //Developer updating defect status
    builder.addCase(developerChangeStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(developerChangeStatus.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      toast.success("Defect updated successfully");
    });
    builder.addCase(developerChangeStatus.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { developerlogout, setCredentials } = developerSlice.actions;

export default developerSlice.reducer;
