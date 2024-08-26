import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL =
  "https://psp-management-tool-v2-2.onrender.com/api/v1/psp-management-tool";
//https://psp-management-tool-v2-2.onrender.com/api/v1/psp-management-tool/project/add/1

export const adminLogin = createAsyncThunk("admin/login", async (login) => {
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
    if (data.roles == "DEVELOPER") {
      localStorage.setItem("devToken", data.token);
    } else {
      localStorage.setItem("adminToken", data.token);
    }

    return data;
  } catch (error) {
    // return custom error message from API if any
    const message = error.response
      ? error.response.data.message
      : "Something went wrong";
    //   toast.error(message, { position: "top-right" })
    return message;
  }
});

export const registerAdmin = createAsyncThunk(
  "admin/register",
  async (user) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendURL}/user/register-admin`,
        user,
        config
      );

      localStorage.setItem("adminToken", data.token);

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

export const adminCreateDeveloper = createAsyncThunk(
  "admin/createDev",
  async (user) => {
    const token = localStorage.getItem("adminToken");
    // console.log(token)
    // console.log(user)
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${backendURL}/user/register-developer`,
        user,
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

export const getDevelopers = createAsyncThunk("admin/getDevs", async () => {
  const token = localStorage.getItem("adminToken");
  // console.log(token)
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `${backendURL}/user/get-all-developers`,
      config
    );
    console.log(data);
    return data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Something went wrong";
    //   toast.error(message, { position: "top-right" })
    return message;
  }
});

export const adminCreateProject = createAsyncThunk(
  "admin/createProjects",
  async ({
    projectName,
    projectDescription,
    projectDeveloper,
    programmingLanguage,
  }) => {
    // console.log("projectName", projectName)
    // console.log("projectDescription", projectDescription)
    // console.log("projectDeveloper", projectDeveloper)
    // console.log("programmingLangauge", programmingLanguage)
    // console.log("adminAction", id)
    const token = localStorage.getItem("adminToken");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${backendURL}/project/add`,
        {
          projectName,
          projectDescription,
          projectDeveloper,
          programmingLanguage,
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

export const adminGetProjects = createAsyncThunk(
  "admin/getprojects",
  async () => {
    try {
      const token = localStorage.getItem("adminToken");
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

export const adminChangeStatus = createAsyncThunk(
  "admin/change-status",
  async ({defectStatus, id}) => {
    console.log("develepoerStatusId", id)
    console.log(defectStatus)
    try {
      const token = localStorage.getItem("adminToken");
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
