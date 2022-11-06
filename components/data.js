//Image Icons
import SolarIcon from "../public/images/solar-icon.png";
import SolarIconHarmless from "../public/images/solar-icon-harmless.png";
import SolarIconCost from "../public/images/solar-icon-cost.png";

//React Icons
import {GiSolarPower} from 'react-icons/gi';
import {MdOutlineBusiness} from 'react-icons/md';
import {CgCommunity} from 'react-icons/cg';
import {GiCctvCamera} from 'react-icons/gi';
import {GiFarmTractor} from 'react-icons/gi';

//Slide Show Images
import HowToUseSolar from "../public/images/how-to-use-solar.jpg";
import HowSolarWorks from "../public/images/solar-energy-storage.jpg";
import Whysolar from "../public/images/why-go-solar.jpg";
import Slider01 from "../public/images/slider01.jpg";
import Slider02 from "../public/images/slider02.jpg";
import Slider03 from "../public/images/solar-partnership.jpg";
import RemoteSensing from "../public/images/gis-rs-services.jpg";

//Forms Of Energy
import bioMass from "../public/images/biomass-energy.jpg";
import hydroPower from "../public/images/hydro-power.jpg";
import windEnergy from "../public/images/wind-energy.jpg";

export const data = [
    {
        id: 1,
        image: SolarIcon,
        title: "Reliable Energy",
        desc: "Delivering your own power through sun-oriented innovation safeguards you from the unstable power."
    },
    {
        id: 2,
        image: SolarIconCost,
        title: "Rising Energy Cost",
        desc: "Sunlight-based energy furnishes you with free power saving you immense power costs on a month-to-month budget expense."
    },
    {
        id: 3,
        image: SolarIconHarmless,
        title: "Harmless Power",
        desc: "By adopting sun-based energy systems, you are making an eco-friendly home with zero emissions."
    },
]

export const slides = [
    {
      id: 1,
      image: Whysolar,
      header: "Why You Must Go Green",
      paragraph:
        "Safeguard your home from the unstable power supply from the grid.",
      fBtnText: "Go Solar",
      fBtnLinK: "asd-renewables/quote",
      sBtnText: "See Products",
      sBtnLink: "/products",
    },
    {
      id: 2,
      image: HowSolarWorks,
      header: "Solar Energy Storage",
      paragraph:
        "Learn how the solar energy system works to generate, store and supply you power 24/7.",
      fBtnText: "Read More",
      fBtnLinK: "/how-solar-energy-works",
      sBtnText: "Get Solution",
      sBtnLink: "/asd-renewables/solutions",
    },
    {
      id: 3,
      image: HowToUseSolar,
      header: "How You Can Use",
      paragraph:
        "3 Ways to keep away from blackouts, drive your home and consume energy from your own storage.",
      fBtnText: "Find Out",
      fBtnLinK: "/how-to-use",
      sBtnText: "Buy Product",
      sBtnLink: "/products",
    },
    {
      id: 4,
      image: RemoteSensing,
      header: "GIS and RS Services",
      paragraph:
        "ASD Renewables undertakes and executes GIS and RS Geospatial Projects for clients of any size.",
      fBtnText: "Our Services",
      fBtnLinK: "/asd-renewables/services",
      sBtnText: "Contact Us",
      sBtnLink: "/asd-renewables/contact",
    },
    {
      id: 5,
      image: Slider01,
      header: "Global Solutions Provider",
      paragraph:
        "ASD leverages the opportunity presented in Nigeria's shortages to deliver sustainable energy.",
      fBtnText: "Our Solutions",
      fBtnLinK: "/asd-renewables/solutions",
      sBtnText: "Let's Partner",
      sBtnLink: "/asd-renewables/contact",
    },
    {
      id: 6,
      image: Slider03,
      header: "Partnership",
      paragraph:
        "We work together with the best brands in solar equipment manufacturing around the world.",
      fBtnText: "Let's Partner",
      fBtnLinK: "/asd-renewables/contact",
      sBtnText: "About Us",
      sBtnLink: "asd-renewables/about",
    },
    {
      id: 7,
      image: Slider02,
      header: "Bridging Power Gaps",
      paragraph:
        "We harness hydro-power, wind energy, solar energy and biomass to fill Nigeria's energy gaps.",
      fBtnText: "Our Solutions",
      fBtnLinK: "/asd-renewables/solutions",
      sBtnText: "Get Solution",
      sBtnLink: "/asd-renewables/quote",
    },
  ];

  export const energyForms = [
    {
      id: 1,
      image: hydroPower,
      header: "Hydro Power",
      shorDesc: "With an installed generation capacity of 16,384MW and the ability to generate about 12,522MW of lectricity from existing power plants, Nigeria is...",
      page: "/forms-of-energy/hydro-power-in-nigeria"
    },
    {
      id: 2,
      image: windEnergy,
      header: "Wind Energy",
      shorDesc: "One of the fastest growing renewable energy technologies is wind energy. Globally, wind energy installed capacity increased from 74GW to...",
      page: "/forms-of-energy/wind-energy-in-nigeria"
    },
    {
      id: 3,
      image: bioMass,
      header: "Biomass Energy",
      shorDesc: 'Biomass energy, or "bioenergy," is energy from plants and plant-derived materials. Emerging technologies exist that help transform food crops...',
      page: "/forms-of-energy/biomass-in-nigeria"
    }
  ];

  export const solutions = [
    {
      id: 1,
      identifier: "residentialSolution",
      icon: GiSolarPower,
      title: "Residential/Home Energy",
      desc: "Our home energy solution is fashioned to keep your home lights on through any power outage so that you can increase self-consumption, grid independence and reduce your electricity bill."
    },
    {
      id: 2,
      identifier: "commercialSolution",
      icon: MdOutlineBusiness,
      title: "Commercial and Industrial Energy",
      desc: "Businesses require constant energy to ensure continuity and high productivity. We have developed a flexible business model energy solution to make it easier for you to transition to solar energy systems without breaking your bank account."
    },
    {
      id: 3,
      identifier: "communitySolution",
      icon: CgCommunity,
      title: "Community Mini Grid",
      desc: "Rural communities that are out of grid connections owing to their geographical locations do not need to worry going forward. We partner with communities to help design, implement and generate local power to sustain their community and ease their communal life with flexible payment plans."
    },
    {
      id: 4,
      identifier: "farmSolution",
      icon: GiFarmTractor,
      title: "Farm Zone Energy – Solar pump, Lighting",
      desc: "In order to guarantee food security and sufficiency farms need constant power supply to run efficiently at an affordable rate. Our Farm zone energy solutions provide easy entry and flexible plans to allow farmers make the best ROI in renewable energy."
    },
    {
      id: 5,
      identifier: "securitySolution",
      icon: GiCctvCamera,
      title: "Security: Solar-Powered Surveillance Camera",
      desc: "For effective surveillance and monitoring, powering CCTV has become imperative in today’s crime-prone world. Security agencies and experts greatly depend on video recordings for effective monitoring and crime prevention. Our secure power guarantees proper and adequate power supply to camera installations regardless of their location. "
    },
  ]


  export const faqContent = [
    {
      id: 1,
      question: "What are the benefits of solar energy?",
      answer: "Installing solar energy system on your property is a smart investment regardless of where you live. It makes you free from erratic power supply, save money on your electricity bills and protect you against future increase in electricity rates."
    },
    {
      id: 2,
      question: "How do solar photovoltaic (PV) panels work?",
      answer: "We get alternating current (AC) from grid supply while solar panels absorb the sun's energy throughout the day and convert it into direct current (DC) electricity which converted to AC through an inverter that can be used to power your house."
    },
    {
      id: 3,
      question: "How much will solar panel maintenance cost?",
      answer: "Solar panel systems are made of durable tempered glass and require little to no maintenance for 25 to 35 years that they will generate power. In most cases, you don’t even need to clean your solar panels regularly."
    },
    {
      id: 4,
      question: "What size solar energy system should I get?",
      answer: "The size of your solar energy system will depend on how much electrical equipment you intend to power within your house. Take advantage of our free assessment to determine the best system size for your needs."
    },
    {
      id: 5,
      question: "How long will my solar power system last?",
      answer: "In general, solar panels are very durable and capable of withstanding harsh environmental conditions. The various components of your solar power system will need to be replaced at different times, but your system should continue to generate electricity for up to 25 - 35 years."
    },
  ];