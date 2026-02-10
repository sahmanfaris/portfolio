export type Locale = "en" | "bs";

export const locales: Locale[] = ["en", "bs"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  bs: "Bosanski",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getTranslations(locale: string): Translations {
  if (isValidLocale(locale)) {
    return translations[locale];
  }
  return translations[defaultLocale];
}

export const translations = {
  bs: {
    // Navigation
    nav: {
      home: "Početna",
      projects: "Projekti",
      services: "Usluge",
      contact: "Kontakt",
      downloadCV: "Preuzmi CV",
    },
    // Hero
    hero: {
      greeting: "Otvoren za suradnju",
      title: "Fullstack Developer",
      description:
        "Fullstack developer specijaliziran za izradu modernih web aplikacija. Radim s Next.js, React, Node.js i drugim modernim tehnologijama.",
      contactMe: "Kontaktiraj me",
    },
    // About
    about: {
      title: "O meni",
      subtitle: "Upoznajte se s mojim iskustvom i vještinama",
      techTitle: "Tehnologije s kojima radim",
      p1: "Sa višegodišnjim iskustvom u fullstack developmentu, specijalizirao sam se za izradu modernih, skalabilnih web aplikacija. Moj pristup kombinuje tehničku izvrsnost s razumijevanjem poslovnih potreba.",
      p2: "Radim s klijentima od startupa do uspješnih kompanija, pomažući im da transformišu svoje ideje u funkcionalne digitalne proizvode. Svaki projekat tretiram kao priliku za isporuku kvalitetnog rješenja koje stvara vrijednost.",
      p3: "Kada ne kodiram, volim istraživati nove tehnologije, čitati o software arhitekturi i dijeliti znanje s developer zajednicom.",
      stats: {
        years: "Godina iskustva",
        projects: "Projekata",
        clients: "Klijenata",
      },
    },
    // Projects
    projects: {
      title: "Istaknuti projekti",
      subtitle: "Neki od projekata na kojima sam radio",
      viewAll: "Vidi sve projekte",
      allProjectsTitle: "Svi projekti",
      allProjectsSubtitle: "Kompletan pregled projekata na kojima sam radio",
      backToProjects: "Nazad na projekte",
      technologies: "Tehnologije",
      viewLive: "Pogledaj uživo",
      sourceCode: "Izvorni kod",
      aboutProject: "O projektu",
      interestedText: "Zainteresirani za saradnju?",
    },
    // Services
    services: {
      title: "Usluge",
      subtitle: "Kako vam mogu pomoći",
      viewMore: "Detaljnije o uslugama",
      pageSubtitle: "Kompletna ponuda usluga za vaše digitalne potrebe",
      needSpecific: "Trebate nešto specifično?",
      needSpecificDesc:
        "Kontaktirajte me s detaljima vašeg projekta i razgovarajmo o tome kako vam mogu pomoći.",
    },
    // Testimonials
    testimonials: {
      title: "Šta klijenti kažu",
      subtitle: "Povratne informacije od ljudi s kojima sam radio",
      list: {
        emir: {
          name: "Emir Hadžić",
          role: "CEO",
          company: "Digitalna Agencija Sarajevo",
          content:
            "Faris je izuzetno profesionalan developer. Projekat je završen prije roka, a kvaliteta koda je na zavidnom nivou. Definitivno ćemo ponovo sarađivati.",
        },
        nikola: {
          name: "Nikola Jovanović",
          role: "CTO",
          company: "TechBridge Beograd",
          content:
            "Odlična komunikacija tokom cijelog projekta. Faris razumije poslovne potrebe i pretvara ih u tehnička rješenja koja rade besprijekorno. Preporučujem svima.",
        },
        james: {
          name: "James Mitchell",
          role: "Product Manager",
          company: "Nordic Digital",
          content:
            "Rad sa Farisom je bio odlično iskustvo. Isporučio je visokokvalitetan kod na vrijeme i uvijek je bio dostupan za pitanja. Toplo preporučujem za bilo koji web projekat.",
        },
      },
    },
    // CTA
    cta: {
      title: "Imate projekat na umu?",
      description:
        "Kontaktirajte me i razgovarajmo o tome kako mogu pomoći u realizaciji vaše ideje. Uvijek sam otvoren za nove izazove i zanimljive projekte.",
      contactMe: "Kontaktiraj me",
      viewProjects: "Pogledaj projekte",
    },
    // Contact
    contact: {
      title: "Kontakt",
      subtitle: "Imate pitanje ili želite započeti projekat? Javite mi se!",
      info: "Kontakt informacije",
      email: "Email",
      location: "Lokacija",
      locationValue: "Bosna i Hercegovina",
      followMe: "Pratite me",
      availability: "Dostupnost",
      availabilityText:
        "Trenutno sam dostupan za freelance projekte i dugoročnu saradnju. Obično odgovaram unutar 24-48 sati.",
      remoteText: "Radim s klijentima širom svijeta",
      sendMessage: "Pošaljite poruku",
      form: {
        name: "Ime i prezime",
        namePlaceholder: "Vaše ime",
        email: "Email",
        emailPlaceholder: "vas@email.com",
        subject: "Naslov",
        subjectPlaceholder: "O čemu se radi?",
        message: "Poruka",
        messagePlaceholder: "Opišite vaš projekat ili pitanje...",
        send: "Pošalji poruku",
        sending: "Slanje...",
        successTitle: "Poruka poslana!",
        successMessage: "Hvala na poruci. Javit ću vam se uskoro.",
        errors: {
          nameRequired: "Ime je obavezno",
          emailRequired: "Email je obavezan",
          emailInvalid: "Unesite validan email",
          subjectRequired: "Naslov je obavezan",
          messageRequired: "Poruka je obavezna",
          messageMinLength: "Poruka mora imati najmanje 10 karaktera",
        },
      },
    },
    // Footer
    footer: {
      rights: "Sva prava zadržana.",
    },
    // Services list
    servicesList: {
      webDev: {
        title: "Web Development",
        description:
          "Izrada modernih, brzih i responzivnih web aplikacija koristeći najnovije tehnologije.",
        features: [
          "Single Page Applications (SPA)",
          "Server-Side Rendering (SSR)",
          "Progressive Web Apps (PWA)",
          "SEO optimizacija",
        ],
      },
      backend: {
        title: "Backend Development",
        description:
          "Razvoj skalabilnih backend rješenja, API-ja i serverske infrastrukture.",
        features: [
          "RESTful & GraphQL API",
          "Mikroservisna arhitektura",
          "Autentifikacija i autorizacija",
          "Real-time komunikacija",
        ],
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Cross-platform mobilne aplikacije koje rade na iOS i Android uređajima.",
        features: [
          "React Native aplikacije",
          "Push notifikacije",
          "Offline podrška",
          "App Store deployment",
        ],
      },
      database: {
        title: "Database Design",
        description:
          "Dizajn i optimizacija baza podataka za maksimalnu performansu i skalabilnost.",
        features: [
          "Relacione baze (PostgreSQL, MySQL)",
          "NoSQL rješenja (MongoDB, Redis)",
          "Migracije i backup strategije",
          "Query optimizacija",
        ],
      },
      devops: {
        title: "DevOps & Deployment",
        description:
          "CI/CD pipeline setup, containerizacija i cloud deployment rješenja.",
        features: [
          "Docker & Kubernetes",
          "AWS / Vercel / DigitalOcean",
          "Automatizacija deploya",
          "Monitoring i logging",
        ],
      },
      consulting: {
        title: "Tehnički Consulting",
        description:
          "Savjetovanje oko arhitekture, tehnološkog stacka i best practices.",
        features: [
          "Code review",
          "Arhitekturalno savjetovanje",
          "Performance audit",
          "Tehnički mentoring",
        ],
      },
    },
    // Projects list
    projectsList: {
      zoox: {
        title: "Zoox",
        description:
          "Web platforma za upravljanje autonomnim vozilima i fleet management.",
        longDescription:
          "Razvijena web aplikacija za Zoox, kompaniju specijaliziranu za autonomna vozila. Platforma omogućava praćenje flote, upravljanje vozilima i analitiku u realnom vremenu. Korištene tehnologije: React za frontend, Koa.js za backend API i MySQL baza podataka.",
      },
      clothingShop: {
        title: "Clothing & Equipment Shop",
        description:
          "E-commerce platforma za odjeću i opremu sa mobilnom aplikacijom.",
        longDescription:
          "Kompletna e-commerce platforma za prodaju odjeće i opreme. Uključuje web shop izrađen u React-u s Node.js backendom i MongoDB bazom, te pratećom mobilnom aplikacijom u React Native-u. Funkcionalnosti uključuju katalog proizvoda, košaricu, checkout proces i admin panel.",
      },
      erp: {
        title: "Custom ERP System",
        description:
          "Prilagođeni ERP sistem za upravljanje poslovnim procesima.",
        longDescription:
          "Custom ERP web aplikacija razvijena za Kalpit. Sistem omogućava upravljanje svim poslovnim procesima na jednom mjestu. Izrađen koristeći React sa Formik-om za forme i React Table za prikaz podataka, Node.js backend i MySQL bazu podataka.",
      },
      pickleball: {
        title: "Pickleball Platform",
        description:
          "Sportska platforma za pickleball zajednicu sa više aplikacija.",
        longDescription:
          "Rad na višestrukim monorepo projektima za Pickleball platformu. Korištene najmodernije tehnologije: Next.js 15, React, Tailwind CSS, shadcn/ui komponente, React Query za server state, Zustand za client state, nuqs za URL state management i React Hook Form za forme.",
      },
      vognplan: {
        title: "Vognplan",
        description:
          "Bundle od 4 aplikacije za dispatching i upravljanje voznim parkom.",
        longDescription:
          "Sveobuhvatni sistem za dispatching servise koji se sastoji od četiri povezane aplikacije: admin panel, haulier aplikacija, driver aplikacija i car aplikacija. Razvijeno koristeći React i React Native za mobilne verzije, Node.js backend sa MongoDB bazom.",
      },
      ebus: {
        title: "Ebus",
        description:
          "Web aplikacija za olakšano putovanje unutar Bosne i Hercegovine.",
        longDescription:
          "Doprinos razvoju Ebus platforme tokom internshipa u ADEDA. Aplikacija omogućava korisnicima jednostavno pretraživanje i kupovinu autobusnih karata za putovanja unutar BiH. Frontend razvijen u React-u sa Spring backend-om.",
      },
      odemshop: {
        title: "Odemshop",
        description: "Višejezična e-commerce platforma za Covid-19 proizvode.",
        longDescription:
          "Multilingual e-commerce platforma specijalizirana za prodaju Covid-19 maski i testova. Razvijena koristeći WordPress i WooCommerce, s podrškom za više jezika i valuta. Uključuje integracije za plaćanje i dostavu.",
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    // Hero
    hero: {
      greeting: "Open to work",
      title: "Fullstack Developer",
      description:
        "Fullstack developer specialized in building modern web applications. I work with Next.js, React, Node.js and other modern technologies.",
      contactMe: "Contact me",
    },
    // About
    about: {
      title: "About me",
      subtitle: "Learn about my experience and skills",
      techTitle: "Technologies I work with",
      p1: "With years of experience in fullstack development, I specialize in building modern, scalable web applications. My approach combines technical excellence with understanding business needs.",
      p2: "I work with clients from startups to established companies, helping them transform their ideas into functional digital products. I treat every project as an opportunity to deliver quality solutions that create value.",
      p3: "When I'm not coding, I enjoy exploring new technologies, reading about software architecture, and sharing knowledge with the developer community.",
      stats: {
        years: "Years of experience",
        projects: "Projects",
        clients: "Clients",
      },
    },
    // Projects
    projects: {
      title: "Featured projects",
      subtitle: "Some of the projects I've worked on",
      viewAll: "View all projects",
      allProjectsTitle: "All projects",
      allProjectsSubtitle: "Complete overview of projects I've worked on",
      backToProjects: "Back to projects",
      technologies: "Technologies",
      viewLive: "View live",
      sourceCode: "Source code",
      aboutProject: "About the project",
      interestedText: "Interested in working together?",
    },
    // Services
    services: {
      title: "Services",
      subtitle: "How I can help you",
      viewMore: "More about services",
      pageSubtitle: "Complete range of services for your digital needs",
      needSpecific: "Need something specific?",
      needSpecificDesc:
        "Contact me with your project details and let's discuss how I can help.",
    },
    // Testimonials
    testimonials: {
      title: "What clients say",
      subtitle: "Feedback from people I've worked with",
      list: {
        emir: {
          name: "Emir Hadžić",
          role: "CEO",
          company: "Digitalna Agencija Sarajevo",
          content:
            "Faris is an extremely professional developer. The project was completed ahead of schedule, and the code quality is outstanding. We will definitely work together again.",
        },
        nikola: {
          name: "Nikola Jovanović",
          role: "CTO",
          company: "TechBridge Belgrade",
          content:
            "Excellent communication throughout the entire project. Faris understands business needs and turns them into technical solutions that work flawlessly. Highly recommended.",
        },
        james: {
          name: "James Mitchell",
          role: "Product Manager",
          company: "Nordic Digital",
          content:
            "Working with Faris was a great experience. He delivered high-quality code on time and was always available for questions. Highly recommended for any web project.",
        },
      },
    },
    // CTA
    cta: {
      title: "Have a project in mind?",
      description:
        "Contact me and let's discuss how I can help bring your idea to life. I'm always open to new challenges and interesting projects.",
      contactMe: "Contact me",
      viewProjects: "View projects",
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Have a question or want to start a project? Get in touch!",
      info: "Contact information",
      email: "Email",
      location: "Location",
      locationValue: "Bosnia and Herzegovina",
      followMe: "Follow me",
      availability: "Availability",
      availabilityText:
        "I'm currently available for freelance projects and long-term collaboration. I usually respond within 24-48 hours.",
      remoteText: "Working with clients worldwide",
      sendMessage: "Send a message",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        subject: "Subject",
        subjectPlaceholder: "What's this about?",
        message: "Message",
        messagePlaceholder: "Describe your project or question...",
        send: "Send message",
        sending: "Sending...",
        successTitle: "Message sent!",
        successMessage:
          "Thank you for your message. I'll get back to you soon.",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          subjectRequired: "Subject is required",
          messageRequired: "Message is required",
          messageMinLength: "Message must be at least 10 characters",
        },
      },
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
    },
    // Services list
    servicesList: {
      webDev: {
        title: "Web Development",
        description:
          "Building modern, fast, and responsive web applications using the latest technologies.",
        features: [
          "Single Page Applications (SPA)",
          "Server-Side Rendering (SSR)",
          "Progressive Web Apps (PWA)",
          "SEO optimization",
        ],
      },
      backend: {
        title: "Backend Development",
        description:
          "Developing scalable backend solutions, APIs, and server infrastructure.",
        features: [
          "RESTful & GraphQL API",
          "Microservices architecture",
          "Authentication and authorization",
          "Real-time communication",
        ],
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Cross-platform mobile applications that work on iOS and Android devices.",
        features: [
          "React Native apps",
          "Push notifications",
          "Offline support",
          "App Store deployment",
        ],
      },
      database: {
        title: "Database Design",
        description:
          "Database design and optimization for maximum performance and scalability.",
        features: [
          "Relational databases (PostgreSQL, MySQL)",
          "NoSQL solutions (MongoDB, Redis)",
          "Migrations and backup strategies",
          "Query optimization",
        ],
      },
      devops: {
        title: "DevOps & Deployment",
        description:
          "CI/CD pipeline setup, containerization, and cloud deployment solutions.",
        features: [
          "Docker & Kubernetes",
          "AWS / Vercel / DigitalOcean",
          "Deployment automation",
          "Monitoring and logging",
        ],
      },
      consulting: {
        title: "Technical Consulting",
        description:
          "Consulting on architecture, technology stack, and best practices.",
        features: [
          "Code review",
          "Architecture consulting",
          "Performance audit",
          "Technical mentoring",
        ],
      },
    },
    // Projects list
    projectsList: {
      zoox: {
        title: "Zoox",
        description:
          "Web platform for autonomous vehicle management and fleet operations.",
        longDescription:
          "Developed a web application for Zoox, a company specializing in autonomous vehicles. The platform enables fleet tracking, vehicle management, and real-time analytics. Technologies used: React for frontend, Koa.js for backend API, and MySQL database.",
      },
      clothingShop: {
        title: "Clothing & Equipment Shop",
        description:
          "E-commerce platform for clothing and equipment with mobile app.",
        longDescription:
          "Complete e-commerce platform for selling clothing and equipment. Includes a web shop built with React, Node.js backend and MongoDB database, plus an accompanying React Native mobile app. Features include product catalog, shopping cart, checkout process, and admin panel.",
      },
      erp: {
        title: "Custom ERP System",
        description: "Custom ERP system for business process management.",
        longDescription:
          "Custom ERP web application developed for Kalpit. The system enables management of all business processes in one place. Built using React with Formik for forms and React Table for data display, Node.js backend, and MySQL database.",
      },
      pickleball: {
        title: "Pickleball Platform",
        description:
          "Sports platform for the pickleball community with multiple applications.",
        longDescription:
          "Working on multiple monorepo projects for the Pickleball platform. Using cutting-edge technologies: Next.js 15, React, Tailwind CSS, shadcn/ui components, React Query for server state, Zustand for client state, nuqs for URL state management, and React Hook Form for forms.",
      },
      vognplan: {
        title: "Vognplan",
        description:
          "Bundle of 4 applications for dispatching and fleet management.",
        longDescription:
          "Comprehensive dispatching services system consisting of four connected applications: admin panel, haulier app, driver app, and car app. Developed using React and React Native for mobile versions, Node.js backend with MongoDB database.",
      },
      ebus: {
        title: "Ebus",
        description:
          "Web application for streamlined travel within Bosnia and Herzegovina.",
        longDescription:
          "Contributed to the development of the Ebus platform during internship at ADEDA. The application enables users to easily search and purchase bus tickets for travel within Bosnia and Herzegovina. Frontend developed in React with Spring backend.",
      },
      odemshop: {
        title: "Odemshop",
        description: "Multilingual e-commerce platform for Covid-19 products.",
        longDescription:
          "Multilingual e-commerce platform specializing in Covid-19 masks and tests. Developed using WordPress and WooCommerce, with support for multiple languages and currencies. Includes payment and shipping integrations.",
      },
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
