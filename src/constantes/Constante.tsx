import type { ServiceProps } from "../type/Services";
import service1 from "../assets/iconServices/service1.png";
import service2 from "../assets/iconServices/service2.png";
import service3 from "../assets/iconServices/service3.png";
import service4 from "../assets/iconServices/service4.png";
import service5 from "../assets/iconServices/service5.png";
import service6 from "../assets/iconServices/service6.png";
import type { SkillsProps } from "../type/Skills";
import portfolio1 from "../assets/portfolio/portfolio1.png";
import portfolio2 from "../assets/portfolio/portfolio2.png";
import portfolio3 from "../assets/portfolio/portfolio3.png";
import portfolio4 from "../assets/portfolio/portfolio4.png";
import portfolio5 from "../assets/portfolio/portfolio5.png";
import portfolio6 from "../assets/portfolio/portfolio6.png";
import portfolio7 from "../assets/portfolio/portfolio7.png";
import portfolio8 from "../assets/portfolio/portfolio8.png";
import portfolio9 from "../assets/portfolio/portfolio9.png";
import type { portoServiceProps } from "../type/Portfolio";
import type { ResultProps } from "../type/Result";
import type { TeamProps } from "../type/Team";
import team1 from "../assets/teams/team1.jpg";
import team2 from "../assets/teams/team2.jpg";
import team3 from "../assets/teams/team3.jpg";
import team4 from "../assets/teams/team4.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaBasketballBall,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import type { checkListProps, priceItemsProps } from "../type/PriceItem";
import {
  ArrowDown,
  ArrowUp,
  Bell,
  CalendarDays,
  Check,
  CreditCard,
  DollarSign,
  Grid2x2,
  HandCoins,
  Handshake,
  Link,
  LogOut,
  Mail,
  Settings,
  Shield,
  ShoppingBasket,
  SquareCheck,
  User,
  Wallet,
  WalletMinimal,
  Zap,
} from "lucide-react";
import type { TestimonialsProps } from "../type/Testimonials";
import author1 from "../assets/testimonials/author1.jpg";
import author2 from "../assets/testimonials/author2.jpg";
import author3 from "../assets/testimonials/author3.jpg";
import type { ContactProps } from "../type/ContactInfo";
import { MapPin, Clock } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import type { navItem } from "../type/navItems";
import type { cardProps } from "../components/authAccount/card";
import type { cardUserProps } from "@/components/authAccount/userSubCard";
import { UserDiagrame } from "@/components/authAccount/userDiagrame";
import { SubscribeDiagrame } from "@/components/authAccount/subscribeDiagrame";
import type { paidFundProps } from "@/components/authAccount/paidFundCard";
import { ProgressPaidChart } from "@/components/authAccount/svgPaidDiagrame";
import { ProgressFundChart } from "@/components/authAccount/svgFundDiagrame";
import type { customProps } from "@/type/customerOrder";

export const ServiceCard: ServiceProps[] = [
  {
    id: 1,
    icon: service1,
    title: "Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 2,
    icon: service2,
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 3,
    icon: service3,
    title: "Concept & Idea",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 4,
    icon: service4,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 5,
    icon: service5,
    title: "Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 6,
    icon: service6,
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 7,
    icon: <Zap size={35} />,
    title: "Fast product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 8,
    icon: <Handshake size={35} />,
    title: "Negociation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 9,
    icon: <Link size={35} />,
    title: "Social Link",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 10,
    icon: <Bell size={35} />,
    title: "Notification",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 11,
    icon: <CalendarDays size={35} />,
    title: "Planing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    id: 12,
    icon: <Shield size={35} />,
    title: "Confidentiality",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
];

export const skillsCard: SkillsProps[] = [
  {
    percentage: 100,
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    percentage: 90,
    title: "Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    percentage: 80,
    title: "Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    percentage: 50,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
];

export const navLinks: navItem[] = [
  { title: "Home", url: "/" },
  { title: "About us", url: "#About us" },
  { title: "Services", url: "/services" },
  { title: "Portfolio", url: "#Portfolio" },
  { title: "Team", url: "#Team" },
  { title: "Pricing", url: "#Pricing" },
  { title: "Contact", url: "/contact" },
  { title: "Login", url: "/auth/login" },
  { title: "Sign Up", url: "/auth/sign-up" },
];

export const navAuth: navItem[] = [
  { title: "Analytics", url: "/dashboard/analytics", icon: <Grid2x2 /> },
  { title: "Products", url: "/dashboard/products", icon: <ShoppingBasket /> },
  { title: "Messages", url: "/dashboard/messages", icon: <Mail /> },
  { title: "Customers", url: "/dashboard/customers", icon: <User /> },
  { title: "Settings", url: "/dashboard/settings", icon: <Settings /> },
  { title: "Sign Out", url: "/auth/login", icon: <LogOut /> },
];

export const portfolioOptions = [
  "All",
  "Development",
  "Optimization",
  "Integration",
];

export const servicePortfolio: portoServiceProps = {
  all: [
    {
      img: portfolio1,
      nom: "porto1",
      category: "marketing",
    },
    {
      img: portfolio2,
      nom: "porto2",
      category: "marketing",
    },
    {
      img: portfolio3,
      nom: "porto3",
      category: "development",
    },
    {
      img: portfolio4,
      nom: "porto4",
      category: "development",
    },
    {
      img: portfolio5,
      nom: "porto5",
      category: "optimization",
    },
    {
      img: portfolio6,
      nom: "porto6",
      category: "optimization",
    },
    {
      img: portfolio7,
      nom: "porto7",
      category: "integration",
    },
    {
      img: portfolio8,
      nom: "porto8",
      category: "integration",
    },
    {
      img: portfolio9,
      nom: "porto9",
      category: "integration",
    },
  ],
};

export const results: ResultProps[] = [
  {
    chiffre: "375+",
    title: "Projects",
  },
  {
    chiffre: "247+",
    title: "Clients",
  },
  {
    chiffre: "13+",
    title: "Countries",
  },
  {
    chiffre: "18+",
    title: "Teams",
  },
];

export const teams: TeamProps[] = [
  {
    image: team1,
    nom: "Jeremy White",
    poste: "Consultant",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elite. Atque dicta.",
    socialMedia: {
      facebook: FaFacebookF,
      twitter: BsTwitterX,
      insta: FaInstagram,
      basket: FaBasketballBall,
    },
  },
  {
    image: team2,
    nom: "Sofia Mayer",
    poste: "Consultant",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elite. Atque dicta.",
    socialMedia: {
      facebook: FaFacebookF,
      twitter: BsTwitterX,
      insta: FaInstagram,
      basket: FaBasketballBall,
    },
  },
  {
    image: team3,
    nom: "Charlie Addissn",
    poste: "Manager",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elite. Atque dicta.",
    socialMedia: {
      facebook: FaFacebookF,
      twitter: BsTwitterX,
      insta: FaInstagram,
      basket: FaBasketballBall,
    },
  },
  {
    image: team4,
    nom: "Richard Nautz",
    poste: "Founder",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elite. Atque dicta.",
    socialMedia: {
      facebook: FaFacebookF,
      twitter: BsTwitterX,
      insta: FaInstagram,
      basket: FaBasketballBall,
    },
  },
];

export const priceItems: priceItemsProps[] = [
  {
    title: "Regulars Package",
    price: "$289",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint?",
  },
  {
    title: "Standard Package",
    price: "$541",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae.",
  },
  {
    title: "Premium Package",
    price: "$756",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic!",
  },
];

export const checkList: checkListProps[] = [
  {
    icon: Check,
    definition: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: Check,
    definition: "Lorem ipsum.",
  },
  {
    icon: Check,
    definition: "Lorem ipsum dolor amet.",
  },
  {
    icon: Check,
    definition: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: Check,
    definition: "Lorem ipsum dolor sit.",
  },
];

export const Testimonial: TestimonialsProps[] = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!",
    photo: author1,
    nom: "Carlie Addison",
    poste: "Manager",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!",
    photo: author2,
    nom: "Olivia Grosh",
    poste: "Manager",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!",
    photo: author3,
    nom: "Richard Nautz",
    poste: "Manager",
  },
];

export const ContactElement: ContactProps = {
  localisation: (
    <div className="flex items-center gap-2">
      <p>
        <MapPin />
      </p>{" "}
      <p>4239 Lapeer Rd, Port Hurons, MI 48060</p>
    </div>
  ),
  telephone1: (
    <div className="flex items-center gap-2">
      <p>
        <FaPhone className="rotate-y-180" />
      </p>{" "}
      <p>+1 (800) 478-42-51</p>
    </div>
  ),
  telephone2: (
    <div className="flex items-center gap-2">
      <p>
        <FaPhone className="rotate-y-180" />
      </p>{" "}
      <p> +1 (800) 479-43-52</p>
    </div>
  ),
  temps: (
    <div className="flex items-center gap-2">
      <p>
        <Clock />
      </p>{" "}
      <p>We are open Mn-Fr: 10am - 8pm</p>
    </div>
  ),
  reseaux: {
    facebook: FaFacebookF,
    twitter: BsTwitterX,
    insta: FaInstagram,
    youtube: FaYoutube,
  },
};

// localStorage

export const storedAccountValue = localStorage.getItem("Sign-In-Form");

// Card items analytics
export const cardItem: cardProps[] = [
  {
    title: "Order",
    total: 201,
    chevron: <ArrowUp size={12} />,
    chevronColor: "text-green-500 text-xs",
    icon: <WalletMinimal size={28}/>,
    percentage: "8.2%",
  },
  {
    title: "Approved",
    total: 36,
    chevron: <ArrowUp size={12} />,
    chevronColor: "text-green-500 text-xs",
    icon: <SquareCheck size={28} />,
    percentage: "3.4%",
  },
  {
    title: "Month total",
    total: 25410,
    chevron: <ArrowDown size={12} />,
    chevronColor: "text-red-500 text-xs",
    icon: <DollarSign size={28}/>,
    percentage: "0.2%",
  },
  {
    title: "Revenue",
    total: 1352,
    chevron: <ArrowDown size={12} />,
    chevronColor: "text-red-500 text-xs",
    icon: <CreditCard size={28}/>,
    percentage: "1.2%",
  }
];

// User & Subscribe Diagramme

export const userSubcribe:cardUserProps[] = [
  {
    title:'Users',
    total: "4.890",
    description:'since last month',
    percentag1: '62% New',
    percentag1Color:'#f59e0b',
    percentag2:'26% Returning',
    percentag2Color:"#fde68a",
    percentag3:'12% Inactive',
    percentag3Color:'#fef3c7',
    diagram:<UserDiagrame/>
  },
  {
    title:'Subscriptions',
    total: "1.201",
    description:'since last month',
    percentag1: '70% Paid',
    percentag1Color:'#4175FA',
    percentag2:'30% Trial',
    percentag2Color:"#81A4FE",
    diagram:<SubscribeDiagrame/>
  }

]

// paid & fund diagram\

export const paidFund : paidFundProps[] = [
  {
    icon:<Wallet size={30}/>,
    description:"Current Financial Year",
    diagram:<ProgressPaidChart/>,
    title:"Paid Invoices",
    total:"$30256.23"
  },
  {
    icon:<HandCoins size={30}/>,
    description:"Current Financial Year",
    diagram:<ProgressFundChart/>,
    title:"Fund received",
    total:"$150256.23"
  }
]

// table customer order
export const customerTable: customProps[] = [
  {
    img:team1,
    address:'London',
    name:"Press",
    date:'22.08.2022',
    price:'$920',
    status:'Delivered',
    bgColor:'bg-[#FEFBEC]'
  },
  {
    img:team2,
    address:'Man City',
    name:"Marina",
    date:'24.08.2022',
    price:'$452',
    status:'Processed',
    bgColor:'bg-[#EDF7EC]'
  },
  {
    img:team3,
    address:'Unknown',
    name:"Alex",
    date:'16.08.2022',
    price:'$1200',
    status:'Cancelled',
    bgColor:'bg-[#FDEEF1]'
  },
  {
    img:team4,
    address:'New York',
    name:"Robert",
    date:'03.08.2022',
    price:'$1235',
    status:'Delivered',
    bgColor:'bg-[#FEFBEC]'
  }

]