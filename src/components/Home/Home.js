import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// استيراد المكونات المخصصة
import Header from '../Header/Header';
import HeroSection from '../Hero/Hero';
import Culture from '../Culture/Culture';
import Top from '../Top/Top';
import Whyvisitiraq from '../Whyvisitiraq/Whyvisitraq';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';  // استيراد مكون Login

// استيراد التنسيق
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLoginVisible, setIsLoginVisible] = useState(false);  // حالة التحكم في عرض نموذج تسجيل الدخول

  // دالة للتنقل إلى صفحة المكونات
  const handleNavigate = () => {
    navigate('/components');
  };

  return (
    <div>
      <button onClick={handleNavigate}>Go to Components Page</button>
      
      <Header onLoginClick={() => {
        console.log("Login button clicked, setting isLoginVisible to true");
        setIsLoginVisible(true);  // تحديث الحالة
      }} />

      {isLoginVisible && (
        <div className="login-modal">
          <Login onClose={() => {
            console.log("Closing login modal");
            setIsLoginVisible(false);  // تحديث الحالة لإغلاق النموذج
          }} />
        </div>
      )}
      
      <HeroSection />
      <Whyvisitiraq />
      <Culture />
      <Top />
      <About />
      <Footer />
    </div>
  );
}

export default Home;