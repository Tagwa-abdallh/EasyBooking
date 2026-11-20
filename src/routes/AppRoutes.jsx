
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return <h1>Welcome to EasyBooking</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

function Register() {
  return <h1>Register Page</h1>;
}

function CustomerDashboard() {
  return <h1>Customer Dashboard</h1>;
}

function ProviderDashboard() {
  return <h1>Provider Dashboard</h1>;
}

function AdminDashboard() {
  return <h1>Admin Dashboard</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/provider/dashboard" element={<ProviderDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;
