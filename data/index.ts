export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an online dialer for cold calls.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 10,
    title: "Сметки",
    des: "Апликација за лесно следење и управување со месечни сметки.",
    img: "/smetkiipicture.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "https://smetkii.vercel.app",
  },
  {
    id: 9,
    title: "Loop – Social Platform with Podcast Features",
    des: "Loop lets users connect with friends, chat in real time, record podcasts, all in one user-friendly platform.",
    img: "loop.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.loop.it.com",
  },
  {
    id: 2,
    title: "Marcello Auto",
    des: "Marcello Auto, located in Seewen, Switzerland, specializes in the purchase and sale of vehicles across all brands, including luxury cars, family vehicles, and sports cars. They offer services such as trade-ins, cash purchases, and exports, ensuring customer satisfaction through professional service and partnerships with leading Swiss providers for credit, leasing, and vehicle warranties.",
    img: "marchello.jpg",
    iconLists: [
      "/ts.svg",
      "/c.svg",
      "/deploy.png",
      "/wordpress.png",
      "/sales.jpg",
    ],
    link: "https://marcello-auto.ch/?fbclid=IwY2xjawJQ4hJleHRuA2FlbQIxMAABHaYant9Yhjkovr7F0LIZy2YpLho0IfeN2UfpYoxTA_TsxNnQLALqnhDpuQ_aem_GDEjk8NuO-hDxhVR4ufWiw",
  },
  {
    id: 4,
    title: "Textil Ambiente ",
    des: "Textil Ambiente , located in Brunnen, Switzerland, specializes in custom-made curtains and various sewing services. They offer a wide selection of high-quality fabrics, colors, and designs, providing personalized solutions for both residential and commercial spaces.",
    img: "textill.webp",
    iconLists: [
      "/ts.svg",
      "/c.svg",
      "/deploy.png",
      "/wordpress.png",
      "/sales.jpg",
    ],
    link: "https://textilambiente.ch/?fbclid=IwY2xjawJQ4ClleHRuA2FlbQIxMAABHU_kf29kCFCnJh18Ez3G2f08gktxIgtv5aR1sud2967LbcXNIo-3sm6dXw_aem_nGYkLh9Zb--TirXjj4fLXQ",
  },
  {
    id: 1,
    title: "Doctor Booking Appointment",
    des: "Patients can effortlessly choose their preferred doctor, select an available time slot, and provide necessary details—all through a simple, intuitive interface",
    img: "/p2replaced.svg.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://doctor-booking-appointment-orcin.vercel.app/",
  },
  {
    id: 8,
    title: "Ecommerce App",
    des: "Fully responsive e-commerce app with product listings, shopping cart, and checkout, built using modern web technologies.",
    img: "/ecommerce.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ecommerce-app-rho-fawn.vercel.app/",
  },
  {
    id: 7,
    title: "Online Call - Dialer",
    des: "It automates dialing, tracks call outcomes, and boosts productivity with real-time analytics. Designed for sales teams, it includes features like contact management, call scripting, and seamless CRM integration to streamline cold calling and improve customer engagement.",
    img: "/callD.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.echo-o.com",
  },

  {
    id: 3,
    title: "Macedonian Stock Exchange Data Scraper - Github",
    des: "A powerful web scraper that collects and analyzes historical data from the Macedonian Stock Exchange, enabling real-time insights and comprehensive financial analysis.",
    img: "stock-exchange.jpg",
    iconLists: ["/python.png", "/selenium.png", "/pandas.png", "/docker.png"],
    link: "https://github.com/Filip1010/Macedonian-Stock-Exchange/tree/master",
  },
  {
    id: 5,
    title: "Your Ultimate Car Buying Companion",
    des: "Enjoy a seamless, pleasant, and efficient car buying process with our top-notch service and innovative solutions.",
    img: "/carbuy.webp",
    iconLists: [
      "/ts.svg",
      "/c.svg",
      "/deploy.png",
      "/wordpress.png",
      "/sales.jpg",
    ],
    link: "https://steinegger-automobile.ch/?fbclid=IwY2xjawJP2GxleHRuA2FlbQIxMAABHTNUV3lMcYK-qlNIN0ic2GuCWxE3WiszzsKqeXr8k8r7IS16amBAeDSAsQ_aem_NaxDKCB0-jO-f01oVUydeQ",
  },
  {
    id: 11,
    title: "SaaS Analytics Dashboard",
    des: "A comprehensive real-time analytics platform built for SaaS businesses — featuring interactive charts, user activity heatmaps, revenue tracking, and role-based access control across teams. Built to handle millions of events per day with sub-second query response times using optimized data pipelines.",
    img: "/ui.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "",
  },
  {
    id: 12,
    title: "AutoFind – Car Marketplace",
    des: "A full-featured vehicle marketplace where users can browse thousands of listings, compare models side-by-side, filter by price, brand, fuel type, and year, and contact dealers directly through an integrated inquiry system. Includes a dealer CMS, automated listing sync, and AI-powered price estimation.",
    img: "/shopCar.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "",
  },
  {
    id: 13,
    title: "Echo – Music Streaming App",
    des: "A Spotify-inspired music streaming platform with playlist creation, artist discovery pages, a real-time audio visualizer, and collaborative listening rooms. Supports adaptive bitrate streaming, offline downloads, and personalized recommendation engine powered by listening history.",
    img: "/musicstr.jpg",
    iconLists: ["/next.svg", "/stream.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "",
  },
  {
    id: 14,
    title: "DriveEasy – Premium Car Rental",
    des: "A sleek car rental platform with real-time fleet availability, GPS-based pickup location selection, instant booking confirmation, and a payment gateway supporting multiple currencies. Features admin tools for fleet management, damage tracking, and automated invoice generation.",
    img: "/car.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "",
  },
  {
    id: 15,
    title: "SalesPro – CRM & Pipeline Manager",
    des: "An end-to-end CRM platform for sales teams featuring drag-and-drop pipeline boards, automated email follow-up sequences, deal forecasting with AI-powered win-rate scoring, and native integrations with Slack, Google Workspace, and HubSpot. Reduced average sales cycle by 28% in internal testing.",
    img: "/javascr.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/python.png", "/c.svg"],
    link: "",
  },
  {
    id: 16,
    title: "Rent a Car Website",
    des: "A user-friendly car rental website that allows customers to easily browse available vehicles, select their preferred model, and book a rental with just a few clicks.",
    img: "/car.avif",
    iconLists: [
      "/ts.svg",
      "/c.svg",
      "/deploy.png",
      "/wordpress.png",
      "/sales.jpg",
    ],
    link: "https://carrentalskopje.com/?fbclid=IwY2xjawJP1wdleHRuA2FlbQIxMAABHWfHn_QH3STp1sPXzmnqww-OwaDs6-ujEp3SnGJ7B9dDL1Eb5Yg5d7oGyA_aem_WCvWQ64HUeVoi5v1DduV1g",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Filip was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Filip's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Filip is the ideal partner.",
    name: "Emily",
    title: "5 stars",
    img: "/emily.jpg",
  },
  {
    quote:
      "Highly recommend his expertise for anyone looking to elevate their digital presence!",
    name: "Bhatt",
    title: "5 stars",
    img: "/bhatt.jpg",
  },
  {
    quote:
      "Working with Filip is a game-changer. He’s reliable, highly skilled, and always focused on delivering results. His commitment to ensuring client satisfaction makes him an exceptional partner for any project.",
    name: "Sophia",
    title: "5 stars",
    img: "/sophia.jpg",
  },
  {
    quote:
      "Filip is a true professional. He delivered exceptional results for our web development project and provided invaluable insights throughout the process. It’s been a pleasure working with him!",
    name: "Michael",
    title: "5 stars",
    img: "/michael.jpg",
  },
  {
    quote:
      "Working with Filip Kuzmanoski is seamless—his expertise, dedication, and problem-solving skills make collaboration effortless and highly productive.",
    name: "James",
    title: "5 stars",
    img: "/james.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack React Developer – Intern",
    desc: "Contributed to a production-grade web platform using React.js and Node.js, delivering reusable component architecture that reduced development time by 30% and significantly improved perceived performance via code splitting and lazy loading.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer – JSM Tech",
    desc: "Architected and shipped a high-performance full-stack application from scratch, owning the entire lifecycle — React/Next.js frontend, REST API design, database modeling, CI/CD pipeline, and Vercel deployment — resulting in a 95+ Lighthouse score.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior Freelance Full-Stack Developer",
    desc: "Delivered end-to-end web applications for international clients across Switzerland and North Macedonia — leading technical discovery, system architecture, and deployment. Specialised in Next.js, TypeScript, WordPress, and scalable REST/GraphQL APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Full-Stack Developer",
    desc: "Leading frontend and backend architecture decisions for complex SaaS products, mentoring junior developers, enforcing code quality via TypeScript strict mode and automated testing, and driving performance optimisation across server-rendered and client-side React applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Filip1010",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/filip-kuzmanoski-ba6594254/",
  },
];
