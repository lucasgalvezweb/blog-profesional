import { getAge } from "./helpful";

interface GlobalData {
    companyName: string;
    siteSlogan: string;
    wpMessage: string;
    siteURL: string;
    mail: string;
    phone: string;
    logoRoute: string;
    birthdate: string;
    workingSince: number;
    workingYears: number;
    birthyear: number;
    age: number;
  }

export const global:GlobalData = {
    companyName: "Lucas Galvez Desarrollador Web",
    siteSlogan: "Lucas Galvez Desarrollador Web",
    wpMessage: "Hola Lucas, quiero cotizar un proyecto web",
    siteURL: "lucasgalvez.com",
    mail: "lucasgalvez.consultas@gmail.com",
    phone: "+51930937875",
    logoRoute: "",
    birthdate: "05-06-1995",
    workingSince: 2013,
    workingYears: getAge(2014),
    birthyear: 1995,
    age: getAge(1995)
}