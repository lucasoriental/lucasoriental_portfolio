import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        cookieMessage: {
          message:
            "This website uses cookies to enhance your browsing experience. By accepting, you consent to our use of cookies in accordance with our privacy policy.",
          button: "I accept it",
        },
        header: {
          freelance: {
            services: "My Services",
            projects: "My Projects",
            testimonials: "Client Testimonials",
            skills: "Skills & Expertise",
            about: "About Me",
            contact: "Contact Me",
            faq: "FAQ",
            hireMe: "Hire Me",
          },
          hiring: {
            home: "Home",
            projects: "My Projects",
            education: "Education & Skills",
            jobs: "Job Experiences",
            about: "About Me",
            contact: "Contact Me",
          },
        },
        errorMessages: "The data is loading, please hold a moment...",
        sections: {
          homePage: {
            text1: "Hey there!",
            text2: "This is <span>Lucas Oriental!</span>",
            text3:
              "A <span>Full-Stack Developer</span> & <span>UX/UI Designer</span>",
            textButton: "Who Am I?",
            textMobile:
              "Hey there, this is <span>Lucas Oriental dos Santos!</span>",
            toolTipTexts: {
              instagram: "@lucasorientaldev",
              gitHub: "@lucasoriental",
              linkedIn: "Lucas Oriental dos Santos",
              behance: "@lucasoriental",
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
              itSec: "Development",
              desSec: "Design",
              modal_cert: {
                header: "Course Information",
                input1: "Credential Code",
                input2: "Website to validate the certificate",
                button: "Click here to validate it!",
              },
            },
          },
          jobExperiencesPage: {
            title: "Job Experiences",
            buttonText: "more details",
            headerModalText: "Job Details",
            bodyModalText: "My responsabilities on this experience:",
          },
          aboutMePage: { title: "About Me" },
          contactMePage: { title: "Contact Me", text1: "Get in Touch!" },
        },
      },
    },
    pt: {
      translation: {
        cookieMessage: {
          message:
            "Este site utiliza cookies para melhorar a sua experiência de navegação. Ao aceitar, você concorda com o uso de cookies de acordo com nossa política de privacidade.",
          button: "Eu aceito",
        },
        header: {
          freelance: {
            services: "Meus Serviços",
            projects: "Meus Projetos",
            testimonials: "Depoimentos",
            skills: "Habilidades",
            about: "Sobre Mim",
            contact: "Contatos",
            faq: "Perguntas Frequentes",
            hireMe: "Me Contrate",
          },
          hiring: {
            home: "Home",
            projects: "Meus Projetos",
            education: "Educação & Habilidades",
            jobs: "Experiências Profissionais",
            about: "Sobre mim",
            contact: "Meus Contatos",
          },
        },
        errorMessages:
          "As informações estão sendo carregadas, só um instante...",
        sections: {
          homePage: {
            text1: "Seja Bem-Vindo!",
            text2: "Meu nome é <span>Lucas Oriental!</span>",
            text3:
              "Sou <span>Desenvolvedor Full-Stack</span> & <span>Designer UX/UI</span>",
            textButton: "Quem sou eu?",
            textMobile:
              "Bem-vindo ao meu Portfólio, meu nome é <span>Lucas Oriental dos Santos!</span>",
            toolTipTexts: {
              instagram: "@lucasorientaldev",
              gitHub: "@lucasoriental",
              linkedIn: "Lucas Oriental dos Santos",
              behance: "@lucasoriental",
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
              itSec: "Desenvolvimento",
              desSec: "Design",
              modal_cert: {
                header: "Informações do Curso",
                input1: "Código da Credencial",
                input2: "Website para validar a o certificado",
                button: "Clique aqui para validar!",
              },
            },
          },
          jobExperiencesPage: {
            title: "Experiências Profissionais",
            buttonText: "mais detalhes",
            headerModalText: "Detalhes da Experiência",
            bodyModalText: "Minhas Responsabilidades:",
          },
          aboutMePage: { title: "Sobre mim" },
          contactMePage: { title: "Meus Contatos", text1: "Entre em contato!" },
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
