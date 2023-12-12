import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import ServiceTerms from "./pages/Register/ServiceTerms";
import Register from "./pages/Register/Register";
import SuccessRegister from "./pages/Register/SuccessRegister";
import MyShoppingMall from "./pages/MyPage/MyShoppingMall";
import ChangePassword from "./pages/MyPage/ChangePassword";
import RemoveAccount from "./pages/MyPage/RemoveAccount";
import PostMain from "./pages/PostMain/PostMain";
import PostMenu from "./pages/PostMenu/PostMenu";
import PostMenuDetail from "./pages/PostMenuDetail/PostMenuDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service-terms" element={<ServiceTerms />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<SuccessRegister />} />
        <Route path="/mypage/my-shoppingmall" element={<MyShoppingMall />} />
        <Route path="/mypage/change-password" element={<ChangePassword />} />
        <Route path="/mypage/remove-account" element={<RemoveAccount />} />
        <Route path="/post/main" element={<PostMain />} />
        <Route path="/post/main" element={<PostMain />} />
        <Route path="/post/main" element={<PostMain />} />
        <Route path="/post/menu" element={<PostMenu />} />
        <Route path="/post/menu/detail" element={<PostMenuDetail />} />
      </Routes>
    </>
  );
}

export default App;
