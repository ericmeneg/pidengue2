'use client'
import React, { useState } from 'react';
import Link from "next/link"
import './Login.css'; 

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      window.location.reload();
    };
  
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>🐝 Xô Dengue!</h2>
          <p>Entre para ajudar no combate!</p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          <div className="additional-options">
            <a href='/login' className="forgot-password-link">Esqueci minha senha</a>
            <Link href="/atualmente" className="home-link">Voltar para o site</Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;