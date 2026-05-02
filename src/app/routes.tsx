import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import RouteError from "./pages/RouteError";
import { contactSubmissionAction } from "./routes/contactSubmission";

const Products = lazy(() => import("./pages/Products").then((module) => ({ default: module.Products })));
const ProductDetail = lazy(() => import("./pages/ProductDetail").then((module) => ({ default: module.ProductDetail })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Videos = lazy(() => import("./pages/Videos").then((module) => ({ default: module.Videos })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
const ContactSubmitted = lazy(() => import("./pages/ContactSubmitted").then((module) => ({ default: module.ContactSubmitted })));
const NotFound = lazy(() => import("./pages/NotFound").then((module) => ({ default: module.NotFound })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <RouteError />,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
      { path: "about", Component: About },
      { path: "videos", Component: Videos },
      { path: "contact", Component: Contact },
      { path: "contact/submit", action: contactSubmissionAction },
      { path: "contact/submitted", Component: ContactSubmitted },
      { path: "*", Component: NotFound },
    ],
  },
]);
