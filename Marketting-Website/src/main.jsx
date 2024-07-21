import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  Layout,
  Home,
  About,
  Pricing,
  Blog,
  Services,
  Blog1,
  Blog2,
} from "./index.js";
import TodoApp from "./components/Pages/NotesApp/TodoApp.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="pricing" element={<Pricing />} />
      <Route path="blog" element={<Blog />}>
        <Route path="blog1" element={<Blog1 />} />
        <Route path="blog2" element={<Blog2 />} />
      </Route>
      <Route path="notes" element={<TodoApp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />

    {/* <TodoApp/> */}
  </Provider>
);
