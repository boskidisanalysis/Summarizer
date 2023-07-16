import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto text-center text-gray-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BoskidisAnalysis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
