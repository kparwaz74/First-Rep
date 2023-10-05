import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './styles/global.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);