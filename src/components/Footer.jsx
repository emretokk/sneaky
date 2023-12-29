import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-slate-400 pt-2">
      <div className="flex justify-around px-40 py-10 border-b border-black">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">Categories</h1>
          <a href="#" className="text-sm">
            Casual
          </a>
          <a href="#" className="text-sm">
            Basketball
          </a>
          <a href="#" className="text-sm">
            Football
          </a>
          <a href="#" className="text-sm">
            Running
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">Brands</h1>
          <a href="#" className="text-sm">
            Casual
          </a>
          <a href="#" className="text-sm">
            Basketball
          </a>
          <a href="#" className="text-sm">
            Football
          </a>
          <a href="#" className="text-sm">
            Running
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">Company</h1>
          <a href="#" className="text-sm">
            Casual
          </a>
          <a href="#" className="text-sm">
            Basketball
          </a>
          <a href="#" className="text-sm">
            Football
          </a>
          <a href="#" className="text-sm">
            Running
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">Social</h1>
          <a href="#" className="text-sm">
            Casual
          </a>
          <a href="#" className="text-sm">
            Basketball
          </a>
          <a href="#" className="text-sm">
            Football
          </a>
          <a href="#" className="text-sm">
            Running
          </a>
        </div>
      </div>
      <div>copyright 2023</div>
    </footer>
  );
}

export default Footer;
