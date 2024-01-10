import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-green-50 dark:bg-bg1 dark:text-white pt-2">
      <div className="flex justify-around px-40 py-10 border-b border-black">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2 dark:text-primary ">
            Kategoriler
          </h1>
          <a href="#" className="text-sm">
            Klasik
          </a>
          <a href="#" className="text-sm">
            Basketbol
          </a>
          <a href="#" className="text-sm">
            Futbol
          </a>
          <a href="#" className="text-sm">
            Koşu
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2 dark:text-primary">
            Markalar
          </h1>
          <a href="#" className="text-sm">
            Nike
          </a>
          <a href="#" className="text-sm">
            Adidas
          </a>
          <a href="#" className="text-sm">
            Under Armour
          </a>
          <a href="#" className="text-sm">
            Puma
          </a>
          <a href="#" className="text-sm">
            Converse
          </a>
          <a href="#" className="text-sm">
            Reebok
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2 dark:text-primary">
            Kurumsal
          </h1>
          <a href="#" className="text-sm">
            Hakkımızda
          </a>
          <a href="#" className="text-sm">
            Franchise
          </a>
          <a href="#" className="text-sm">
            İletişim
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2 dark:text-primary">
            Sosyal Medya
          </h1>
          <a href="#" className="text-sm">
            İnstagram
          </a>
          <a href="#" className="text-sm">
            Twitter
          </a>
          <a href="#" className="text-sm">
            Tik Tok
          </a>
        </div>
      </div>
      <div className="flex p-1">
        <p className="text-sm font-light ml-4 dark:text-primary">
          ©2024 Copyright Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
