import React from "react";
import { Phone, Mail, MapPin, Copy, ExternalLink } from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiBehance,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const Contacts = () => {
  return (
    <div className="w-screen max-w-[90%] mr-auto ml-auto pt-24 pb-24">
      <div>
        <p className="text-center text-2xl font-black mb-3">Fale comigo!</p>
        <div className="flex flex-col gap-5 border border-gray-950 rounded-xl p-9 w-fit mr-auto ml-auto">
          <div className="flex items-center">
            <Phone />
            <p className="ml-2">+351 938 626 826 </p>
            <Copy className="w-3 ml-2 cursor-pointer" />
          </div>
          <div className="flex items-center">
            <Mail />
            <p className="ml-2">lucasoriental@gmail.com</p>
            <Copy className="w-3 ml-2 cursor-pointer" />
          </div>
          <div className="flex items-center">
            <MapPin />
            <p className="ml-2">Figueira da Foz (Coimbra) - Portugal</p>
          </div>
          <div className="flex items-center">
            <SiInstagram />
            <p className="ml-2">@lucasorientaldev</p>
            <ExternalLink className="w-3 ml-2 cursor-pointer" />
          </div>
          <div className="flex items-center">
            <SiFacebook />
            <p className="ml-2">A criar</p>
          </div>
          <div className="flex items-center">
            <SiBehance />
            <p className="ml-2">@lucasoriental</p>
            <ExternalLink className="w-3 ml-2 cursor-pointer" />
          </div>
          <div className="flex items-center">
            <SiGithub />
            <p className="ml-2">@lucasoriental</p>
            <ExternalLink className="w-3 ml-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
