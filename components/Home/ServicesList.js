/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Service from "./Service";

const ServicesList = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Frontend Development",
      description:
        "With Laravel 8.* ,The construction of an advanced personal website website application that I have developed.",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "With Laravel 8.* ,The construction of an advanced quiz website application that I have developed.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Using React.js and Tailwindcss the repo where I developed the 'brandcolors.net' page.",
    },
  ]);
  return (
    <div className="flex py-4 flex-wrap items-center justify-end">
      <p className="w-[600px] mr-auto">
        7 Şubat 1998'de Ankara'nın Altındağ ilçesinde doğdum. İlköğretim
        dönemimi burada tamamlamamın ardından İMKB Mesleki ve Teknik Anadolu
        lisesini kazanarak lise hayatıma başladım. Lisede bulunduğum sayısal
        bölümünde derslerin yanısıra başlangıç seviyesi C# ve Sql programlama
        öğrenmeye başladım. Lise dönemi ardından Karadeniz Teknik Üniversitesi
        Yazılım Mühendisliği bölümünü kazandım ve halen eğitim hayatıma burada
        devam ediyorum. Özel olarak web ve grafik tasarımı, mobil uygulama
        geliştirme ile ilgileniyorum. İlgili konular üzerine freelancer olarak
        hizmet veriyorum.
      </p>
      <div className="flex-1 flex flex-wrap justify-center h-96">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
