import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          home: "Home",
          projects: "My Projects",
          education: "Education & Skills",
          jobs: "Job Experiences",
          about: "About Me",
          contact: "Contact Me",
        },
        errorMessages: "The data is loading, please hold a moment...",
        sections: {
          homePage: {
            text1: "Hey there!",
            text2: "This is <span>Lucas Oriental!</span>",
            text3:
              "A <span>WEB Developer</span> And <span>UX/UI Designer</span>",
            textButton: "Who Am I?",
            textMobile: "Hey there, this is <span>Lucas Oriental!</span>",
            toolTipTexts: {
              instagram: "My Instagram",
              gitHub: "My GitHub",
              linkedIn: "My LinkedIn",
              behance: "My Behance",
            },
          },
          myProjectsPage: {
            title: "My Projects",
            buttonText: "more details",
            headerModalText: "Check the Project",
          },
          educationAndSkillsPage: {
            title: "Education & Skills",
            section1: { title: "College", buttonText: "University Website" },
            section2and3: {
              titleSkills: "Skills",
              toolTipSkill: "Obtained by through professional experience",
              titleCert: "Certificates",
              toolTipCert: "Click to see the credential",
              itSec: "Information Technology (IT)",
              desSec: "Design",
              modal_cert: {header: "Course Information", input1: "Credential Code", input2: "Website to validate the certificate", button: "Click here to validate it!"}
            },
          },
          jobExperiencesPage: {
            title: "Job Experiences",
            buttonText: "more details",
            headerModalText: "Job Details",
            bodyModalText: "My responsabilities on this experience:",
          },
          aboutMePage: { title: "About Me" },
          contactMePage: { title: "Contact Me", text1: "Get in Touch!"},
        },
      },
    },
    pt: {
      translation: {
        header: {
          home: "Home",
          projects: "Meus Projetos",
          education: "Educação & Habilidades",
          jobs: "Experiências Profissionais",
          about: "Sobre mim",
          contact: "Meus Contatos",
        },
        errorMessages: "As informações estão sendo carregadas, só um instante...",
        sections: {
          homePage: {
            text1: "Seja Bem-Vindo!",
            text2: "Meu nome é <span>Lucas Oriental!</span>",
            text3:
              "Sou <span>Desenvolvedor Web</span> e <span>Designer UX/UI</span>",
            textButton: "Quem sou eu?",
            textMobile:
              "Bem-vindo ao meu Portfólio, meu nome é <span>Lucas Oriental!</span>",
            toolTipTexts: {
              instagram: "Meu Instagram",
              gitHub: "Meu GitHub",
              linkedIn: "Meu LinkedIn",
              behance: "Meu Behance",
            },
          },
          myProjectsPage: {
            title: "Meus Projetos",
            buttonText: "mais detalhes",
            headerModalText: "Confira o Projeto",
          },
          educationAndSkillsPage: {
            title: "Educação & Habilidades",
            section1: {
              title: "Ensino Superior",
              buttonText: "Website da Universidade",
            },
            section2and3: {
              titleSkills: "Habilidades",
              toolTipSkill: "Obtido através da Experiência Profissional",
              titleCert: "Certificados",
              toolTipCert: "Clique para ver a credencial",
              itSec: "Tecnologia da Informação (TI)",
              desSec: "Design",
              modal_cert: {header: "Informações do Curso", input1: "Código da Credencial", input2: "Website para validar a o certificado", button: "Clique aqui para validar!"}
            },
          },
          jobExperiencesPage: {
            title: "Experiências Profissionais",
            buttonText: "mais detalhes",
            headerModalText: "Detalhes da Experiência",
            bodyModalText: "Minhas Responsabilidades:",
          },
          aboutMePage: { title: "Sobre mim" },
          contactMePage: { title: "Meus Contatos", text1: "Entre em contato!"},
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
