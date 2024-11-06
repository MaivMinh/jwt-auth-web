import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {/* Khi đặt flex-1 như này thì Footer chiếm độ dài cố định bao nhiêu thì phần còn lại sẽ thuộc về main. */}
      <main className="flex-1"> 
        {/* Vị trí này sẽ render ra các thành phần tương ứng. */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
