import { configureStore } from "@reduxjs/toolkit";
import ArticlesSlice from "./reducers/ArticlesSlice.";
import JobSlice from "./reducers/JobSlice.";
import CourseSlice from "./reducers/CourseSlice";
import userSlice from "./reducers/userSlice.";
import cvDataSlice from "./reducers/cvDataSlice";
import ApplicationSlice from "./reducers/ApplicationSlice";
import { CertificateSlice } from "./reducers/certificateSlice";

const Store = configureStore({
  reducer: {
    articles:ArticlesSlice,
    users:userSlice,
    jobs:JobSlice,
    courses:CourseSlice,
    cvData:cvDataSlice,
    applications : ApplicationSlice,
    certificates:CertificateSlice,
    },
});

export default Store;