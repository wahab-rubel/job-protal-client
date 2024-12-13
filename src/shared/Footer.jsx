import React from 'react';
import jobPortal from "../assets/images/1.jpg"

const Footer = () => {
 return (
  <footer className="footer bg-gradient-to-r from-blue-900 to-blue-600 text-white p-10">
  <aside className="container mx-auto flex flex-col items-start">
    <img className='w-12' src={jobPortal} alt="" />
    <p className="font-bold text-lg">
      ACME Industries Ltd.
      <br />
      <span className="text-sm font-light">Providing reliable tech since 1992</span>
    </p>
    <div className="flex gap-3 mt-4">
      <a href="#" className="text-blue-300 hover:text-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.326 1.326h11.495v-9.294h-3.129v-3.622h3.129v-2.672c0-3.1 1.891-4.788 4.654-4.788 1.324 0 2.464.099 2.796.144v3.24l-1.918.001c-1.505 0-1.796.716-1.796 1.765v2.309h3.587l-.467 3.622h-3.12v9.293h6.11c.733 0 1.326-.593 1.326-1.326v-21.35c0-.733-.593-1.326-1.326-1.326z" />
        </svg>
      </a>
      <a href="#" className="text-blue-300 hover:text-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M19.633 3.585c-.63-.63-1.663-.585-2.258.066l-.92.918c-2.723-1.324-5.991-1.324-8.714 0l-.92-.918c-.595-.651-1.628-.696-2.258-.066-.63.63-.585 1.663.066 2.258l.918.92c-1.324 2.723-1.324 5.991 0 8.714l-.918.92c-.651.595-.696 1.628-.066 2.258.63.63 1.663.585 2.258-.066l.92-.918c2.723 1.324 5.991 1.324 8.714 0l.92.918c.595.651 1.628.696 2.258.066.63-.63.585-1.663-.066-2.258l-.918-.92c1.324-2.723 1.324-5.991 0-8.714l.918-.92c.651-.595.696-1.628.066-2.258zm-7.633 14.415c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6zm0 9c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3z" />
        </svg>
      </a>
    </div>
  </aside>
  <nav>
    <h6 className="footer-title text-lg font-semibold">Services</h6>
    <a className="link link-hover mt-2">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-lg font-semibold">Company</h6>
    <a className="link link-hover mt-2">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-lg font-semibold">Legal</h6>
    <a className="link link-hover mt-2">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

 );
};

export default Footer;