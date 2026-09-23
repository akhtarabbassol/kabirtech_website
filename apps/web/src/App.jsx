import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import WorkPage from './pages/WorkPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
