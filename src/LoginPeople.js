import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { jwtDecode } from 'jwt-decode';

export default function LoginPeople({theme, logged, setLogged}) {
  const [loginData, setLoginData] = useState({ userName: '', password: '' });
  const [registerData, setRegisterData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
	birthDate: '',
	phoneNumber: ''
  });
  const [message, setMessage] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirm, setShowRegisterConfirm] = useState(false);

  const loginRef = useRef();
  const registerRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if(logged){
      navigate("/");
    }
  }, [logged, navigate])

  const handleLoginChange = (e) => {
	const {name, value} = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
	const {name, value} = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/api/Bejelentkezes`, loginData);
	  console.log(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', jwtDecode(response.data.token).sub);
      setMessage('Sikeres bejelentkezés! Átirányítás...');
      setTimeout(() => {
		setLogged(true);
		  navigate('/');
	  }, 2000);
    } catch (error) {
		console.error("Hiba: ", error);
      	setMessage('Hibás bejelentkezési adatok.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    if (registerData.password !== registerData.confirmPassword) {
      return setMessage('A jelszavak nem egyeznek.');
    }
    try {
		const response = await axios.post(`${process.env.REACT_APP_URL}/api/Regisztracio`, {
		userName: registerData.userName,
		email: registerData.email,
		password: registerData.password,
		birthDate: registerData.birthDate,
		phoneNumber: registerData.phoneNumber
	  });
	  console.log(response);
      setMessage('Sikeres regisztráció! Jelentkezz be.');
      registerRef.current.removeAttribute('open');
      loginRef.current.setAttribute('open', 'true');
    } catch (error) {
		console.error("Hiba: ", error);
      	setMessage('Regisztrációs hiba.');
    }
  };

  return (
    <div id="webcrumbs" className={`mt-5 ${theme === "dark" ? 'bg-dark text-white' : 'bg-white text-black'}`}> 
      <div className="w-full flex justify-center">
        <div className="w-[400px] rounded-lg shadow-xl p-8">

          <div className="flex justify-center">
            <details className="w-full" ref={loginRef}>
              <summary className="flex items-center justify-center text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined mr-2">login</span>
                Belépés
              </summary>
              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Felhasználónév</label>
                  <input type="text" name="userName" value={loginData.userName} onChange={handleLoginChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none`} required />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Jelszó</label>
                  <input type={showLoginPassword ? 'text' : 'password'} name="password" value={loginData.password} onChange={handleLoginChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none`} required />
                  <span onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3 top-9 text-sm text-blue-400 cursor-pointer select-none">
                    {showLoginPassword ? 'Elrejt' : 'Mutat'}
                  </span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200">
                  Belépés
                </button>
              </form>
            </details>

            <details className="w-full" ref={registerRef}>
              <summary className="flex items-center justify-center text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined mr-2">person_add</span>
                Regisztráció
              </summary>
              <form onSubmit={handleRegister} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Felhasználónév</label>
                  <input type="text" name="userName" value={registerData.userName} onChange={handleRegisterChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300`} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300`} required />
                </div>
				<div>
                  <label className="block text-sm font-medium mb-1">Születési idő</label>
                  <input type="date" name="birthDate" value={registerData.birthDate} onChange={handleRegisterChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300`} required />
                </div>
				<div>
                  <label className="block text-sm font-medium mb-1">Telefonszám</label>
                  <input type="text" name="phoneNumber" value={registerData.phoneNumber} onChange={handleRegisterChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300`} required />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Jelszó</label>
                  <input type={showRegisterPassword ? 'text' : 'password'} name="password" value={registerData.password} onChange={handleRegisterChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300`} required />
                  <span onClick={() => setShowRegisterPassword(!showRegisterPassword)} className="absolute right-3 top-9 text-sm text-blue-400 cursor-pointer select-none">
                    {showRegisterPassword ? 'Elrejt' : 'Mutat'}
                  </span>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Jelszó megerősítése</label>
                  <input type={showRegisterConfirm ? 'text' : 'password'} name="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} className={`${theme === 'dark' ? 'bg-secondary text-light' : ''} w-full px-4 py-2 rounded-lg border border-gray-300`} required />
                  <span onClick={() => setShowRegisterConfirm(!showRegisterConfirm)} className="absolute right-3 top-9 text-sm text-blue-400 cursor-pointer select-none">
                    {showRegisterConfirm ? 'Elrejt' : 'Mutat'}
                  </span>
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transform hover:scale-[1.02] transition-all duration-200">
                  Regisztráció
                </button>
              </form>
            </details>
          </div>

          {message && (
            <div className="mt-6 text-center bg-gray-800 rounded p-2">
              {message}
            </div>
          )}

          <div className="mt-6 flex justify-center space-x-4">
            <button className="p-2 rounded-full bg-black-100 hover:bg-gray-200 transition-all duration-200">
              <i className="fa-brands fa-facebook text-xl"></i>
            </button>
            <button className="p-2 rounded-full bg-black-100 hover:bg-gray-200 transition-all duration-200">
              <i className="fa-brands fa-google text-xl"></i>
            </button>
            <button className="p-2 rounded-full bg-black-100 hover:bg-gray-200 transition-all duration-200">
              <i className="fa-brands fa-apple text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
