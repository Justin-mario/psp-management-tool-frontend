import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL =
  "https://psp-management-tool-v2-2.onrender.com/api/v1/psp-management-tool";

export const developerLogin = createAsyncThunk(
  "developer/login",
  async (login) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendURL}/user/login`,
        login,
        config
      );

      // store user's token in local storage
      localStorage.setItem("devToken", data.token);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const developerChangePassword = createAsyncThunk(
  "developer/changepassword",
  async ({ newPassword, id }) => {
    console.log(newPassword);
    console.log(id);
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/user/change-password/${id}`;

      const { data } = await axios.put(link, newPassword, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const developerGetProjects = createAsyncThunk(
  "developer/getprojects",
  async () => {
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/project/get-all-projects-by-company`;

      const { data } = await axios.get(link, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const completeProject = createAsyncThunk(
  "developer/completeprojects",
  async (id) => {
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/project/complete/${id}`;

      const { data } = await axios.patch(link, null, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const archiveProject = createAsyncThunk(
  "developer/archiveprojects",
  async (id) => {
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/project/archive/${id}`;

      const { data } = await axios.patch(link, {}, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const startProject = createAsyncThunk(
  "developer/startprojects",
  async (id) => {
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/project-time-log/start/${id}`;

      const { data } = await axios.post(link, {}, config);

      return data
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const stopProject = createAsyncThunk(
  "developer/stopprojects",
  async (id) => {
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/project-time-log/end/${id}`;

      const { data } = await axios.patch(link, null, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const developerCreateDefect = createAsyncThunk(
  "developer/createDefect",
  async ({
    description, defectStatus, defectType, injectedPhase, removedPhase, id
  }) => {
    console.log("description", description)
    console.log("defectStatus", defectStatus)
    console.log("defectType", defectType)
    console.log("injectedPhase", injectedPhase)
    console.log("removedPhase", removedPhase)
    console.log("projectAction", id)
    const token = localStorage.getItem("devToken").trim();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${backendURL}/defect/create/${id}`,
        {
          description, defectStatus, defectType, injectedPhase, removedPhase
        },
        config
      );

      return data;
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);

export const developerChangeStatus = createAsyncThunk(
  "developer/change-status",
  async ({defectStatus, id}) => {
    console.log("develepoerStatusId", id)
    console.log(defectStatus)
    try {
      const token = localStorage.getItem("devToken");
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let link = `${backendURL}/defect/change-status/${id}`;

      const { data } = await axios.patch(link, {defectStatus}, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      //   toast.error(message, { position: "top-right" })
      return message;
    }
  }
);