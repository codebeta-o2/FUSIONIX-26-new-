import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  Cpu, 
  Flame, 
  Sparkles, 
  Lock, 
  Users, 
  Coins, 
  Activity, 
  Compass, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  Gamepad2,
  ExternalLink,
  User, 
  Globe, 
  Check, 
  FileText, 
  Mail, 
  Linkedin,
  Twitter, 
  Instagram,
  ShieldCheck, 
  HelpCircle, 
  Info,
  Menu,
  X,
  AlertTriangle,
  Award,
  Calendar,
  MapPin,
  FlameKindling,
  Phone,
  CheckCircle2,
  AlertOctagon,
  Share2,
  BookOpen,
  GraduationCap,
  Search,
  ChevronRight,
  Volume2,
  VolumeX
} from 'lucide-react';

import shadowXImg from './assets/images/about_section_robot.png';
import bg from './assets/images/roboninja_hero_1781580759799.jpg';
import hologramEarthImg from './assets/images/hologram_earth_1783313760796.jpg';
import animes from './assets/images/Animes Pharikal (1).png';
import logoImg from './assets/images/logo.png';
import madam from './assets/images/madam.png';
import sudip from './assets/images/sudip.jpg';
import hod from './assets/images/HOD.png';
import abhiraj from './assets/images/abhiraj.png';
import debdip from './assets/images/debdip.png';
import shibangi from './assets/images/shibangi.png';
import subhankar from './assets/images/subhankar.png';
import rohitaswa from './assets/images/rohitaswa.png';
import rajdeb from './assets/images/rajdeb.png';
import maupriya from './assets/images/maupriya.png';
import raunak from './assets/images/raunak.png';
import dalia from './assets/images/dalia.png';
import shivam from './assets/images/shivam.png';
import iem from './assets/images/iem-blac.png';
import uem from './assets/images/UEM-BALCK.png';
import ankan from './assets/images/souhardya.png';
import roboninjaHeroImg from './assets/images/Bg.png';

import prizesBannerImg from './assets/images/30k.jpg';
import timerBackgroun from './assets/images/timerBackgroun.jpeg';
import foterLogo from './assets/images/foter-logo.jpeg';
import brochurePdf from './assets/images/borocer.pdf';
import themeImg from './assets/images/THEME.png';

import introVideo from './assets/images/intro.mp4';
import mobileIntroVideo from './assets/images/intro_mobil.mp4';

const stealth07Img = roboninjaHeroImg;
const nighthawkImg = hologramEarthImg;
const cyberVImg = bg;
const targetRobotImg = shadowXImg;

const footerLogoImg = foterLogo;
const timerBgImg = timerBackgroun;
// Type definitions for Innovation Tracks
interface InnovationTrack {
  id: string;
  name: string;
  tag: string;
  rarity: 'rare' | 'epic' | 'legendary';
  score: string;
  img: string;
  statArmor: number; // Hardware complexity
  statSpeed: number; // Cloud integration speed
  statCore: string;  // Microcontroller core
  statWeapon: string;// Prominent sensor node
  price: string;     // Registration sub-cost
  description: string;
}

// Resilient fallback image components
interface SmartAvatarProps {
  src: string;
  alt: string;
  initials: string;
  accentColor?: string;
  style?: React.CSSProperties;
}

function SmartAvatar({ src, alt, initials, accentColor = 'var(--accent-green)', style }: SmartAvatarProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.65)',
          color: accentColor,
          fontFamily: 'var(--font-display)',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          textShadow: `0 0 8px ${accentColor}`,
          userSelect: 'none',
          borderRadius: '50%',
          ...style
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}

interface SmartLogoProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  style?: React.CSSProperties;
}

function SmartLogo({ src, alt, fallbackText, className, style }: SmartLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={className}
        style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-green)',
          border: '1px dashed rgba(0, 255, 102, 0.45)',
          padding: '4px 8px',
          borderRadius: '4px',
          background: 'rgba(0, 255, 102, 0.04)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 0 8px rgba(0, 255, 102, 0.1)',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          ...style
        }}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={{ height: '38px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(0, 255, 102, 0.45))', ...style }}
      onError={() => setHasError(true)}
    />
  );
}

const subordinateTeams: Record<string, Array<{ name: string; role: string; email: string; initials: string }>> = {
  "Subhankar Das Adhikary": [
  { name: "Sandip Jana", role: "Web Developer", email: "", initials: "SJ" },
  { name: "Vivek Kumar Shaw", role: "Web Developer", email: "", initials: "VKS" },
  { name: "Harsh Gaurav", role: "Web Developer", email: "", initials: "HG" }
],
  "Rohitaswa Singha": [
  { name: "Jiya Sarkar", role: "Graphics Team", email: "", initials: "JS" },
  { name: "Souhardya Majumdar", role: "Graphics Team", email: "", initials: "SM" },
  { name: "Soumi Deb Singha", role: "Graphics Team", email: "", initials: "SDS" },
  { name: "Sandipan Saha", role: "Graphics Team", email: "", initials: "SS" },
  { name: "Debojeet Banerjee", role: "Graphics Team", email: "", initials: "DB" }

],
  "Rajdeb Pal": [
  { name: "Debarshi Kar", role: "Student Volunteer", email: "", initials: "DK" },
  { name: "Subhodeep Nandy", role: "Student Volunteer", email: "", initials: "SN" },
  { name: "Preyashi Dutta", role: "Student Volunteer", email: "", initials: "PD" },
  { name: "Sagnik Saha", role: "Student Volunteer", email: "", initials: "SS" },
  { name: "Kaustav Sarkar", role: "Student Volunteer", email: "", initials: "KS" },
  { name: "Ishita Singh", role: "Student Volunteer", email: "", initials: "IS" }
],
  "Raunak Dasgupta": [
  { name: "Rongon Das", role: "Social Media & Content", email: "", initials: "RD" },
  { name: "Purbasha Mallik", role: "Social Media & Content", email: "", initials: "PM" },
  { name: "Aritra Saha", role: "Social Media & Content", email: "", initials: "AS" },
  { name: "Rohitaswa Singha", role: "Social Media & Content", email: "", initials: "RS" },
  { name: "Arpit Mandal", role: "Social Media & Content", email: "", initials: "AM" },
  { name: "Ankush Sarkar", role: "Social Media & Content", email: "", initials: "AS" },
  { name: "Mahi Singh", role: "Social Media & Content", email: "", initials: "MS" },
  { name: "Srijon Iqbal", role: "Social Media & Content", email: "", initials: "SI" },
  { name: "Ritam Das", role: "Social Media & Content", email: "", initials: "RD" }
],

  "Shivam Singh":  [
  { name: "Ishan Ghosh", role: "Decoration Team", email: "", initials: "IG" },
  { name: "Bidipta Manna", role: "Decoration Team", email: "", initials: "BM" },
  { name: "Anik Nath", role: "Decoration Team", email: "", initials: "AN" },
  { name: "Anusua Ray", role: "Decoration Team", email: "", initials: "AR" },
  { name: "Archisman Parua", role: "Decoration Team", email: "", initials: "AP" },
  { name: "Srijita Roy", role: "Decoration Team", email: "", initials: "SR" },
  { name: "Saptaparna Banerjee", role: "Decoration Team", email: "", initials: "SB" },
  { name: "Debayan Chowdhury", role: "Decoration Team", email: "", initials: "DC" },
  { name: "Debojyoti Poddar", role: "Decoration Team", email: "", initials: "DP" },
  { name: "Maupiya Pramanik", role: "Decoration Team", email: "", initials: "MP" },
  { name: "Bidisha Dutta", role: "Decoration Team", email: "", initials: "BD" },
  { name: "Roky Ghosh", role: "Decoration Team", email: "", initials: "RG" }
]
  
};

function playSfx(type: 'snap' | 'destroy' | 'click') {
  // Sound effects removed as requested
}

export default function App() {
  // Background sound state
  const [isPlayingSound, setIsPlayingSound] = useState<boolean>(false);
  const [bgAudio] = useState<HTMLAudioElement>(() => {
    const audioObj = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
    audioObj.loop = true;
    audioObj.volume = 0.35; // Comfortable volume
    return audioObj;
  });

  const toggleSound = () => {
    if (isPlayingSound) {
      bgAudio.pause();
      setIsPlayingSound(false);
    } else {
      bgAudio.play().catch((err) => {
        console.warn("Autoplay was prevented by browser. Click to retry.", err);
      });
      setIsPlayingSound(true);
    }
  };

  // Auto clean up audio on unmount
  useEffect(() => {
    return () => {
      bgAudio.pause();
    };
  }, [bgAudio]);

  // Autoplay music on mount with fallback user interaction listeners to satisfy browser policies
  useEffect(() => {
    const startAudio = () => {
      bgAudio.play()
        .then(() => {
          setIsPlayingSound(true);
          // Clean up the fallback listeners once playback starts successfully
          document.removeEventListener('click', startAudio);
          document.removeEventListener('touchstart', startAudio);
          document.removeEventListener('keydown', startAudio);
        })
        .catch((err) => {
          console.warn("Autoplay blocked by browser. Music will start on next user interaction.", err);
        });
    };

    // Attempt standard autoplay immediately on component mount
    startAudio();

    // Register interaction-driven audio trigger listeners
    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);
    document.addEventListener('keydown', startAudio);

    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('keydown', startAudio);
    };
  }, [bgAudio]);

  // Loading Screen & Mini-Game State
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dismissIntro = () => {
    setIsLoading(false);
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isMobileVideo, setIsMobileVideo] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (isLoading && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay prevented or failed:", err);
      });
    }
  }, [isLoading, isMobileVideo]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileVideo(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [bypassCountdown, setBypassCountdown] = useState<number>(7);
  const [isAutoCloseActive, setIsAutoCloseActive] = useState<boolean>(true);
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [tttWinner, setTttWinner] = useState<string | null>(null);
  const [tttMessage, setTttMessage] = useState<string>('Match 3 nodes in a row (X) to bypass the ingress firewall & decrypt');
  const [hackerScore, setHackerScore] = useState<number>(0);
  const [systemScore, setSystemScore] = useState<number>(0);

  // Auto-bypass countdown timer
  useEffect(() => {
    if (!isLoading || !isAutoCloseActive) return;
    const interval = setInterval(() => {
      setBypassCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          dismissIntro();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading, isAutoCloseActive]);

  // Navigation State
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [viewingSponsorsPage, setViewingSponsorsPage] = useState<boolean>(false);
  const [viewingFacultyPage, setViewingFacultyPage] = useState<boolean>(false);
  const [viewingSubordinateTeam, setViewingSubordinateTeam] = useState<{
    coordinatorName: string;
    coordinatorRole: string;
    coordinatorAvatar: string;
    members: Array<{ name: string; role: string; email: string; initials: string }>;
  } | null>(null);

  const handleNavClick = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    setActiveMenu(sectionId);
    setMobileMenuOpen(false);
    setViewingSponsorsPage(false);
    setViewingFacultyPage(false);
    setViewingSubordinateTeam(null);
    
    setTimeout(() => {
      let targetId = sectionId;
      if (sectionId === 'teams') targetId = 'team';
      if (sectionId === 'contact' || sectionId === 'rules-contact-link') targetId = 'contact';
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (sectionId === 'tracks') {
        const scholar = document.getElementById('scholar-validation');
        if (scholar) {
          scholar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 150);
  };

  // Filter state for innovation tracks
  const [activeFilter, setActiveFilter] = useState<'all' | 'rare' | 'epic' | 'legendary'>('all');

  // Registration simulator state
  const [registrationModalOpen, setRegistrationModalOpen] = useState<boolean>(false);
  const [registrationSubmitted, setRegistrationSubmitted] = useState<boolean>(false);
  const [registrationForm, setRegistrationForm] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    member2: '',
    member3: '',
    member4: '',
    selectedTrackId: 'track-01',
    paymentMethod: 'UPI (QR Code)'
  });

  // Track Details Modal state
  const [selectedTrack, setSelectedTrack] = useState<InnovationTrack | null>(null);

  // Suggestion warning modal state for checking on Google Scholar
  const [showScholarSuggestionModal, setShowScholarSuggestionModal] = useState<boolean>(false);

  // Google Scholar custom research search state
  const [scholarQuery, setScholarQuery] = useState<string>('');

  // Required parameters for hidden components
  const [multiAgentIdea, setMultiAgentIdea] = useState<string>('');
  const [quickKeyIdea, setQuickKeyIdea] = useState<string>('');
  const [showCopiedToast, setShowCopiedToast] = useState<boolean>(false);
  const [activeAgentTab, setActiveAgentTab] = useState<'gemini' | 'chatgpt' | 'claude' | 'deepseek' | 'perplexity'>('gemini');
  const [isCrossAnalyzing, setIsCrossAnalyzing] = useState<boolean>(false);
  const [showAgentResults, setShowAgentResults] = useState<boolean>(false);
  const [crossAnalysisLogs, setCrossAnalysisLogs] = useState<string[]>([]);

  // Pollution Gauntlet state
  const [gauntletExpanded, setGauntletExpanded] = useState<boolean>(false);
  const [pollutionActive, setPollutionActive] = useState<boolean>(false);
  const [pollutionLevel, setPollutionLevel] = useState<number>(0);
  const [pollutionSnapping, setPollutionSnapping] = useState<boolean>(false);

  // Pollution Gauntlet destruction progression timer
  useEffect(() => {
    let interval: any = null;
    if (pollutionActive) {
      interval = setInterval(() => {
        setPollutionLevel(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 300);
    } else {
      setPollutionLevel(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pollutionActive]);

  // Sound triggering effect for biosystem collapse
  useEffect(() => {
    if (pollutionActive && pollutionLevel >= 100) {
      playSfx('destroy');
    }
  }, [pollutionLevel, pollutionActive]);

  // Interactive AI Copilot / Idea Generator State
  const [ideaKeyword, setIdeaKeyword] = useState<string>('');
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [aiTerminalLogs, setAiTerminalLogs] = useState<string[]>([
    'System standby. Enter keywords to synthesize sustainable IoT designs...',
    '>> Use words like: agriculture, solar, waste, safety, health'
  ]);

  // Collapsible FAQ state
  const [faqActiveIndex, setFaqActiveIndex] = useState<number | null>(null);

  // Newsletter email state
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  // Real-time dynamic countdown to FusioniX 2026 (Sep 11, 2026)
  const [nowTime, setNowTime] = useState<Date>(new Date());
  const [pdfTimeLeft, setPdfTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date for main FusioniX Hardware Phase (Offline): Sep 11, 2026 09:00:00
    const targetDate = new Date('2026-09-11T09:00:00').getTime();
    
    const calculateTime = () => {
      const now = new Date();
      setNowTime(now);
      const diff = targetDate - now.getTime();
      
      if (diff <= 0) {
        setPdfTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setPdfTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer for Registration Close (legacy)
  const [timeLeft, setTimeLeft] = useState({
    hours: 71,
    minutes: 34,
    seconds: 15,
    ms: 99
  });

  // Ticking countdown effect (legacy)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds, ms } = prev;
        if (ms > 0) {
          ms -= 3;
        } else {
          ms = 99;
          if (seconds > 0) {
            seconds--;
          } else {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                hours = 72; // reset loop for persistent UI beauty
              }
            }
          }
        }
        return { hours, minutes, seconds, ms };
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Modals for Redesign 2 layout integration
  const [sponsorsModalOpen, setSponsorsModalOpen] = useState<boolean>(false);
  const [teamsModalOpen, setTeamsModalOpen] = useState<boolean>(false);
  const [rulesModalOpen, setRulesModalOpen] = useState<boolean>(false);
  const [faqModalOpen, setFaqModalOpen] = useState<boolean>(false);
  const [gameModalOpen, setGameModalOpen] = useState<boolean>(false);



  // FusioniX Specific Innovation Domains mapped perfectly to the visually exquisite Robot Assets
  const innovationTracks: InnovationTrack[] = [
    {
      id: 'track-01',
      name: 'IoTECH SENSING',
      tag: '#TRACK-01',
      rarity: 'rare',
      score: '8.7/10',
      img: shadowXImg,
      statArmor: 84, // Hardware complexity
      statSpeed: 92, // Software flexibility
      statCore: 'ESP32 / NodeMCU',
      statWeapon: 'Telemetry Sens-Suite',
      price: '400 INR',
      description: 'Design low-power wireless sensor networks delivering deep analytics. Covers smart agricultural telemetry, weather forecasting probes, and micro-climate indicators.'
    },
    {
      id: 'track-02',
      name: 'ECOENERGY SYSTEMS',
      tag: '#TRACK-02',
      rarity: 'epic',
      score: '9.3/10',
      img: stealth07Img,
      statArmor: 89,
      statSpeed: 96,
      statCore: 'ARM Cortex / Solar Node',
      statWeapon: 'Integrated Energy-H',
      price: '400 INR',
      description: 'Implement smart microgrids, alternative-power harvesting hardware, solar cell performance monitors, and predictive carbon tracking devices styled for zero grid emissions.'
    },
    {
      id: 'track-03',
      name: 'SAFETY & BOTICS',
      tag: '#TRACK-03',
      rarity: 'legendary',
      score: '9.8/10',
      img: nighthawkImg,
      statArmor: 97,
      statSpeed: 88,
      statCore: 'Raspberry Pi / Jetson Nano',
      statWeapon: 'Real-time Override Unit',
      price: '400 INR',
      description: 'Build industrial automation units mapping workplace safety hazards. Embed gas sensor arrays, intelligent fire containment systems, or visual edge-AI analytics cams.'
    },
    {
      id: 'track-04',
      name: 'HEALTH TECH & FREE',
      tag: '#TRACK-04',
      rarity: 'rare',
      score: '8.9/10',
      img: cyberVImg,
      statArmor: 79,
      statSpeed: 95,
      statCore: 'Arduino Nano BLE SENSE',
      statWeapon: 'Multiparameter Monitor',
      price: '400 INR',
      description: 'Create wearable health metrics monitors or explore your custom creative domains, blending blockchain authentication, smart utilities, or secure WebSockets integrations.'
    }
  ];

  // FAQ Data structured exactly based on index(1).html
  const faqData = [
    {
      q: 'Why should I join FusioniX?',
      a: 'FusioniX is an epic 24-hour hackathon to show your skills, network with fellow engineers, and construct physical solutions for a smarter, greener, and more connected tomorrow. Participation earns elite certificates, professional mentoring, and access to a ₹30,000 cash prize pool!'
    },
    {
      q: 'Who can participate in the hackathon?',
      a: 'Currently, registration is open to pre-final and final year B.Tech students from the sister campuses of Institute of Engineering & Management (IEM Newtown Campus and IEM Saltlake Campus) Kolkata.'
    },
    {
      q: 'What is the maximum and minimum team size?',
      a: 'A valid team must consist of exactly 3 to 4 participants. Solo participation is strictly not permitted to ensure rich collaborative engineering.'
    },
    {
      q: 'Are cross-institutional teams allowed?',
      a: 'Yes, teams can include members enrolled in different streams or campuses of the IEM group. Cross-institutional and cross-campus compositions are highly encouraged!'
    },
    {
      q: 'What is the registration fee for each team?',
      a: 'The registration fee is 400 INR per team. This fee contributes directly toward providing participants with proper food (lunch, evening snacks, dinner, late-night snacks, breakfast), Wi-Fi, and access to essential workspace supplies.'
    },
    {
      q: 'Are we allowed to leave the campus before the conclusion?',
      a: 'No, for safety as well as evaluation continuity, participants must remain inside the secure university campus bounds throughout the complete 24-hour sprint.'
    },
    {
      q: 'What is the overarching theme of this Hackathon?',
      a: 'Sustainability. All submissions must present hardware-integrated or software-grounded solutions that focus on environmental balance, waste control, medical convenience, energy conservation, or public safety.'
    }
  ];

  // Filter logic for tracks
  const filteredTracks = activeFilter === 'all' 
    ? innovationTracks 
    : innovationTracks.filter(track => track.rarity === activeFilter);

  // Simulated Custom Sustainable Idea generator mapping
  const runIdeaGenerator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaKeyword.trim() || aiGenerating) return;

    setAiGenerating(true);
    setAiTerminalLogs([
      `Initializing neural mapping for key: "${ideaKeyword.toUpperCase()}"`,
      '>> Validating hardware sensor dependencies...',
      '>> Fetching optimal sustainable API protocols...'
    ]);

    setTimeout(() => {
      setAiTerminalLogs(prev => [
        ...prev,
        '>> Compiling ESP32 deepsleep variables...',
        '>> Core: Integrated solar telemetry module synced.',
        '>> Database: Local buffer mapped safely to SQLite.'
      ]);
    }, 900);

    setTimeout(() => {
      const keyword = ideaKeyword.toLowerCase();
      let ideaDesc = "";
      if (keyword.includes('agri') || keyword.includes('farm')) {
        ideaDesc = "VoltAgro: Automated Soil Health monitor utilizing NPK sensors + solar harvesting ESP32. Transmits deep diagnostics using LoRaWAN.";
      } else if (keyword.includes('solar') || keyword.includes('energy') || keyword.includes('power')) {
        ideaDesc = "HeliosGrid: A blockchain-verified peer-to-peer solar power sharing microgrid utilizing split relays and current sensors.";
      } else if (keyword.includes('waste') || keyword.includes('trash') || keyword.includes('bin')) {
        ideaDesc = "BinIntel: Smart separation vault utilizing photoelectric sorters + real-time level sensing with ultrasonic arrays.";
      } else if (keyword.includes('health') || keyword.includes('medical') || keyword.includes('heart')) {
        ideaDesc = "PulseLink: Dynamic emergency biometric bands transmitting low-latency coordinates over ESP-NOW mesh connections.";
      } else {
        ideaDesc = `Sustech-${ideaKeyword.replace(/\s+/g, '')}: Real-time telemetry station monitoring sustainable ${ideaKeyword} parameters. Integrates dual-core processors and custom cloud dashboard links.`;
      }

      setAiTerminalLogs(prev => [
        ...prev,
        `💡 SUSTECH IDEA: ${ideaDesc}`,
        '>> Target Domain Score: 9.2/10'
      ]);
      setAiGenerating(false);
    }, 1800);
  };

  // --- Tic Tac Toe Interactive Game Logic ---
  const checkTttWinner = (tempBoard: (string | null)[]) => {
    const winLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (const line of winLines) {
      const [a, b, c] = line;
      if (tempBoard[a] && tempBoard[a] === tempBoard[b] && tempBoard[a] === tempBoard[c]) {
        return tempBoard[a];
      }
    }
    return null;
  };

  const getCpuMoveIndex = (currentBoard: (string | null)[]) => {
    const winLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    // Priority 1: Can CPU (O) win in this turn?
    for (const line of winLines) {
      const [a, b, c] = line;
      const vals = [currentBoard[a], currentBoard[b], currentBoard[c]];
      const oCount = vals.filter(v => v === 'O').length;
      const nullIndex = vals.indexOf(null);
      if (oCount === 2 && nullIndex !== -1) {
        return [a, b, c][nullIndex];
      }
    }

    // Priority 2: Block Player (X) from winning
    for (const line of winLines) {
      const [a, b, c] = line;
      const vals = [currentBoard[a], currentBoard[b], currentBoard[c]];
      const xCount = vals.filter(v => v === 'X').length;
      const nullIndex = vals.indexOf(null);
      if (xCount === 2 && nullIndex !== -1) {
        return [a, b, c][nullIndex];
      }
    }

    // Priority 3: Take center index 4
    if (currentBoard[4] === null) return 4;

    // Priority 4: Pick a corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(c => currentBoard[c] === null);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    // Priority 5: Pick random remaining index
    const empties = currentBoard.map((val, i) => val === null ? i : null).filter((v): v is number => v !== null);
    if (empties.length > 0) {
      return empties[Math.floor(Math.random() * empties.length)];
    }
    return -1;
  };

  const handleCellClick = (index: number) => {
    if (board[index] !== null || !isPlayerTurn || tttWinner) return;

    // Disable auto-close when they interact/play the game
    setIsAutoCloseActive(false);

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const winner = checkTttWinner(newBoard);
    const isFull = newBoard.every(cell => cell !== null);

    if (winner === 'X') {
      setTttWinner('X');
      setHackerScore(p => p + 1);
      setTttMessage('✓ ACCESS GRANTED! System security compromised backfire channels decrypted.');
      setTimeout(() => {
        dismissIntro();
      }, 1400);
      return;
    } else if (isFull) {
      setTttWinner('Draw');
      setTttMessage('✓ NODE INTEGRATION ACHIEVED! Symmetrically aligned grid rebooting...');
      setTimeout(() => handleResetTtt(), 1800);
      return;
    }

    // Handover context to security computer
    setIsPlayerTurn(false);
    setTttMessage('UEM MAIN SYSTEM is scanning firewall threat...');

    setTimeout(() => {
      const cpuIndex = getCpuMoveIndex(newBoard);
      if (cpuIndex !== -1) {
        newBoard[cpuIndex] = 'O';
        setBoard(newBoard);

        const cpuWinner = checkTttWinner(newBoard);
        const cpuIsFull = newBoard.every(cell => cell !== null);

        if (cpuWinner === 'O') {
          setTttWinner('O');
          setSystemScore(c => c + 1);
          setTttMessage('✗ INTRUSION BLOCK! Firewall retaliated. Click reset board at once!');
        } else if (cpuIsFull) {
          setTttWinner('Draw');
          setTttMessage('✓ NODE INTEGRATION DRAW! Rebooting terminals...');
          setTimeout(() => handleResetTtt(), 1800);
        } else {
          setIsPlayerTurn(true);
          setTttMessage('Secure the grid node (X) before the mainframe (O) takes over!');
        }
      }
    }, 550);
  };

  const handleResetTtt = () => {
    setBoard(Array(9).fill(null));
    setTttWinner(null);
    setIsPlayerTurn(true);
    setTttMessage('Terminals and sensors reset. Lock three items in a line (X) to win.');
    setIsAutoCloseActive(false);
  };

  // Submit Registration form
  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationSubmitted(true);
  };

  if (isLoading) {
    return (
      <div 
        id="intro-video-container" 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#000000',
          zIndex: 99999,
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={dismissIntro}
      >
        {/* Full-Screen background video */}
        <video
          ref={videoRef}
          key={isMobileVideo ? 'mobile' : 'desktop'}
          src={isMobileVideo ? mobileIntroVideo : introVideo}
          autoPlay
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 1
          }}
          onEnded={dismissIntro}
        />
      </div>
    );
  }

  return (
    <div 
      style={{
        filter: pollutionActive ? `grayscale(${pollutionLevel * 0.8}%) sepia(${pollutionLevel * 0.5}%) contrast(${100 - pollutionLevel * 0.2}%) brightness(${100 - pollutionLevel * 0.45}%)` : 'none',
        transform: pollutionActive && pollutionLevel > 0 && pollutionLevel < 100 ? `translate(${(Math.random() - 0.5) * (pollutionLevel / 10)}px, ${(Math.random() - 0.5) * (pollutionLevel / 10)}px)` : 'none',
        transition: pollutionActive ? 'transform 0.1s ease-out, filter 1s ease, padding-top 0.3s ease' : 'none',
        minHeight: '100vh',
        background: '#040a06',
        paddingTop: pollutionActive && pollutionLevel < 100 ? '42px' : '0'
      }}
    >
      {/* Matrix background code styles */}
      <div className="matrix-canvas" id="matrixEffect"></div>

      {/* ENVIRONMENTAL COLLAPSE OVERLAY */}
      {pollutionActive && pollutionLevel >= 100 && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(circle, #100603 30%, #000000 100%)',
          zIndex: 100000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ff3300',
          fontFamily: 'var(--font-mono)',
          padding: '25px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '650px',
            border: '2px solid #ff3300',
            borderRadius: '12px',
            background: 'rgba(2, 1, 0, 0.95)',
            padding: '40px',
            boxShadow: '0 0 50px rgba(255, 51, 0, 0.5)',
            boxSizing: 'border-box'
          }}>
            <div style={{ animation: 'toxicPulse 1.5s infinite', display: 'inline-block', marginBottom: '20px', borderRadius: '50%' }}>
              <Flame size={72} style={{ color: '#ff3300', filter: 'drop-shadow(0 0 15px rgba(255,51,0,0.8))' }} />
            </div>
            
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 15px 0', letterSpacing: '1px', color: '#ff3300' }}>
              BIOSPHERE COLLAPSE DETECTED
            </h1>
            
            <p style={{ fontSize: '1rem', color: '#ff9980', lineHeight: '1.6', marginBottom: '25px', fontFamily: 'var(--font-sans)' }}>
              Corporate carbon discharge, massive microplastics overhead, and hardware battery chemical leakages have completely choked the digital codebase. The website structure has melted and suffered utter structural degradation under cumulative electronic pollution damage.
            </p>

            <div style={{ background: '#090302', border: '1px solid #3a1005', padding: '15px', borderRadius: '6px', fontSize: '0.8rem', textAlign: 'left', color: '#ff5533', marginBottom: '30px' }}>
              <div style={{ borderBottom: '1px solid #3a1005', paddingBottom: '6px', marginBottom: '6px', fontWeight: 'bold' }}>HAZARD SENSORY INDEX REPORT:</div>
              <div>• CO2 Carbon Saturation: 999.9 PPM [CRITICAL OVERLOAD]</div>
              <div>• Microplastics Concentration: 14,832 mg/L [EXTREME CHOKE]</div>
              <div>• Soil Acidity pH Level: 1.82 pH [ACID DISSOLVED]</div>
            </div>

            <button
              onClick={() => {
                setPollutionSnapping(true);
                setTimeout(() => {
                  setPollutionActive(false);
                  setPollutionLevel(0);
                  setPollutionSnapping(false);
                }, 500);
              }}
              style={{
                background: 'var(--accent-green)',
                color: '#020603',
                border: 'none',
                padding: '16px 30px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(0, 255, 102, 0.6)'
              }}
            >
              RESTORE DIGITAL BIOSPHERE (REVERSE SNAP)
            </button>
          </div>
        </div>
      )}

      {/* SNAP FLASH WARNING PROTOCOL */}
      {pollutionSnapping && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100001,
          animation: 'flashAnimation 0.5s ease-out forwards',
          pointerEvents: 'none'
        }} />
      )}

      {/* FLOATING TOXIC PARTICLES MESH */}
      {pollutionActive && (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
          {/* Toxic SMOG clouds drifting */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(140, 150, 100, 0.15) 0%, rgba(0,0,0,0) 70%)',
            top: '10%',
            left: '-100px',
            animation: 'moveSmog 25s infinite linear',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(60, 50, 40, 0.2) 0%, rgba(0,0,0,0) 70%)',
            bottom: '15%',
            right: '-150px',
            animation: 'moveSmogReverse 30s infinite linear',
            borderRadius: '50%'
          }} />
          
          {/* Dynamic soot particles drifting based on pollutionLevel */}
          {Array.from({ length: Math.min(30, Math.floor(pollutionLevel / 3) + 3) }).map((_, i) => {
            const size = Math.random() * 8 + 4;
            const left = Math.random() * 100;
            const animDuration = Math.random() * 8 + 5;
            const delay = Math.random() * 5;
            const typeGreen = Math.random() > 0.5;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  background: typeGreen ? 'rgba(0, 255, 102, 0.4)' : 'rgba(100, 80, 70, 0.5)',
                  borderRadius: '50%',
                  boxShadow: typeGreen ? '0 0 6px rgba(0, 255, 102, 0.5)' : 'none',
                  left: `${left}%`,
                  bottom: '-20px',
                  animation: `floatUp ${animDuration}s infinite linear`,
                  animationDelay: `${delay}s`,
                  filter: 'blur(1px)'
                }}
              />
            );
          })}
        </div>
      )}

      {/* ACTIVE ATMOSPHERE WARNING BAR */}
      {pollutionActive && pollutionLevel < 100 && (
        <div className="pollution-warning-sticky">
          <Flame size={14} style={{ color: '#ff3300', animation: 'spin 5s infinite linear' }} />
          <span>
            [HAZARDOUS BIOSPHERE ALERT] CO2 LEVEL: {Math.floor(400 + pollutionLevel * 5.9)} PPM | AQI: {Math.floor(100 + pollutionLevel * 4.0)} ({pollutionLevel < 40 ? 'POOR' : pollutionLevel < 75 ? 'UNHEALTHY' : 'TOXIC COLLAPSE'})
          </span>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', borderLeft: '1px solid rgba(255,51,0,0.3)', paddingLeft: '10px' }}>
            {pollutionLevel < 35 ? 'Methane Leak detected' : pollutionLevel < 70 ? 'Acid Rain Alert' : 'Systemic Cell Failure'}
          </span>
        </div>
      )}

      {/* ==========================================
         TOP NAVIGATION BAR
         ========================================== */}
      <nav 
        className="navbar" 
        style={{ 
          borderBottom: '1px solid rgba(0, 255, 102, 0.15)',
          top: pollutionActive && pollutionLevel < 100 ? '42px' : '0',
          transition: 'top 0.3s ease'
        }}
      >
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick('home', e)}>
          <img 
            src={logoImg} 
            alt="FusioniX Logo" 
            style={{ height: '54px', width: 'auto', marginRight: '4px', filter: 'drop-shadow(0 0 6px rgba(0, 255, 102, 0.4))' }} 
            referrerPolicy="no-referrer"
          />
          <h3 className="nav-brand-text">FusioniX</h3>
        </a>

        {/* Navigation Menu Links */}
        <ul 
          className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}
          style={{
            top: pollutionActive && pollutionLevel < 100 ? '122px' : undefined,
            height: pollutionActive && pollutionLevel < 100 ? 'calc(100vh - 122px)' : undefined
          }}
        >
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeMenu === 'home' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('home', e)}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeMenu === 'about' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('about', e)}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#timeline" 
              className={`nav-link ${activeMenu === 'timeline' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('timeline', e)}
            >
              Timeline
            </a>
          </li>
          <li>
            <a 
              href="#prizes" 
              className={`nav-link ${activeMenu === 'prizes' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('prizes', e)}
            >
              Prizes
            </a>
          </li>
          <li>
            <a 
              href="#sponsors" 
              className={`nav-link ${activeMenu === 'sponsors' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('sponsors', e)}
            >
              Sponsors
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              className={`nav-link ${activeMenu === 'team' || activeMenu === 'teams' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('team', e)}
            >
              Teams
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeMenu === 'contact' ? 'active nav-underlined-active' : ''}`}
              onClick={(e) => handleNavClick('contact', e)}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a 
              href={brochurePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: '#ffb703', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              <FileText size={14} />
              <span>Brochure</span>
            </a>
          </li>
          {mobileMenuOpen && (
            <li style={{ marginTop: '20px' }}>
              <a 
                href="https://unstop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-solid" 
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setShowScholarSuggestionModal(true);
                }}
              >
                <Cpu size={16} />
                <span>REGISTER NOW</span>
              </a>
            </li>
          )}
        </ul>

        {/* Action Registration Trigger */}
        <div className="nav-actions">
          <div className="univ-logos" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginRight: '10px' }}>
            <SmartLogo 
              src={uem}
              alt="University Logo" 
              fallbackText="UEM"
              className="navbar-logo-uem"
            />
            <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            <SmartLogo 
              src={iem} 
              alt="Department Logo" 
              fallbackText="ECE & CSE"
              className="navbar-logo-iem"
            />
          </div>

          {/* Combined hamburger button */}
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(p => !p)}
            aria-label="Toggle Navigation Bar Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {viewingSponsorsPage ? (
        <div style={{ padding: '120px 8% 80px', minHeight: '85vh', position: 'relative' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <button
              onClick={() => {
                setViewingSponsorsPage(false);
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="btn-cyber-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', cursor: 'pointer', padding: '10px 20px' }}
            >
              <ArrowLeft size={16} />
              <span>RETURN TO MAIN TERMINAL</span>
            </button>

            <div style={{ borderBottom: '1px solid rgba(0, 255, 102, 0.25)', paddingBottom: '30px', marginBottom: '50px' }}>
              <span className="overline">CO-SPONSOR INTELLIGENCE ENGINE</span>
              <h2 className="glow-text-green" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '15px', textTransform: 'uppercase' }}>
                FUSIONIX CO-SPONSORS PARTNER NETWORK
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Fostering technological research, prototype materials, and high capacity hardware kits. Explore how our strategic hardware and cloud partners are powering this edition of FusioniX.
              </p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="team-member-card gold" style={{ padding: '60px 40px', textAlign: 'center', background: 'rgba(5, 15, 8, 0.65)', border: '1px solid rgba(255, 183, 3, 0.4)', boxShadow: '0 0 20px rgba(255, 183, 3, 0.2)' }}>
                <div className="team-card-corners" />
                <Cpu size={44} className="glow-text-gold" style={{ marginBottom: '20px', display: 'inline-block' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>Coming soon....</h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
                  We are currently integrating with our partner networks, industry alliances, and tech consortiums to provide state-of-the-art developer materials, customized microchip boards, and sandbox cloud databases. The entire list will be synchronized and published soon. Please check back later.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center', background: 'rgba(0, 0, 0, 0.25)', border: '1px solid rgba(0, 255, 102, 0.1)', borderRadius: '8px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>INTERESTED IN COLLABORATING WITH FUSIONIX?</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 20px', lineHeight: '1.5' }}>
                Join our ecosystem and showcase your systems architectures, hardware, or cloud technologies to hundreds of innovative engineering talents.
              </p>
              <a 
                href="mailto:fusionix2026@gmail.com" 
                className="btn-cyber-solid"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                <Mail size={16} />
                <span>CONTACT SPONSORSHIP CHAIR</span>
              </a>
            </div>
          </div>
        </div>
      ) : viewingSubordinateTeam ? (
        <div style={{ padding: '120px 8% 80px', minHeight: '85vh', position: 'relative' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <button
              onClick={() => {
                setViewingSubordinateTeam(null);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="btn-cyber-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', cursor: 'pointer', padding: '10px 20px' }}
            >
              <ArrowLeft size={16} />
              <span>RETURN TO MAIN TERMINAL</span>
            </button>

            {(() => {
              const isFaculty = viewingSubordinateTeam.coordinatorName === "OUR ANOTHER FACULTY";
              return (
                <>
                  <div style={{ 
                    borderBottom: isFaculty ? '1px solid rgba(0, 255, 102, 0.25)' : '1px solid rgba(255, 183, 3, 0.25)', 
                    paddingBottom: '30px', 
                    marginBottom: '50px', 
                    textAlign: 'center' 
                  }}>
                    <span className="overline" style={{ color: isFaculty ? 'var(--accent-green)' : 'var(--accent-gold)' }}>
                      {isFaculty ? "ACADEMIC INTEGRATION PROTOCOL" : "ACTIVE PROTOCOL DECK"}
                    </span>
                    <h2 className={isFaculty ? "glow-text-green" : "glow-text-gold"} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '10px', textTransform: 'uppercase' }}>
                      {viewingSubordinateTeam.coordinatorName === "Subhankar Das Adhikary" ? "WEB DEVELOPMENT SQUAD" :
                       viewingSubordinateTeam.coordinatorName === "Rohitaswa Singha" ? "GRAPHICS SQUAD" :
                       viewingSubordinateTeam.coordinatorName === "Rajdeb Pal" ? "SPONSORSHIP SQUAD" :
                       viewingSubordinateTeam.coordinatorName === "Raunak Dasgupta" ? "SOCIAL MEDIA SQUAD" :
                       viewingSubordinateTeam.coordinatorName === "Maupriya Pramanik" ? "DECORATION SQUAD" :
                       viewingSubordinateTeam.coordinatorName === "Soham Chatterjee" ? "DESIGN & UX SQUAD" :
                       viewingSubordinateTeam.coordinatorName === "Piyali Sen" ? "PR & LOGISTICS SQUAD" :
                       isFaculty ? "OUR ANOTHER FACULTY" : "OPERATIONAL SQUAD"}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>
                      {isFaculty ? "Faculty Integrators" : <>Coordinator: <strong style={{ color: '#fff' }}>{viewingSubordinateTeam.coordinatorName}</strong></>}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
                    {viewingSubordinateTeam.members.map((member, idx) => (
                      <div 
                        key={idx} 
                        className="pdf-card-container"
                        style={{ 
                          padding: '24px', 
                          borderRadius: '12px', 
                          border: isFaculty ? '1px solid var(--accent-green)' : '1px solid var(--accent-gold)', 
                          background: 'rgba(2, 6, 3, 0.8)',
                          textAlign: 'center',
                          boxShadow: isFaculty ? '0 0 15px rgba(0, 255, 102, 0.15)' : '0 0 15px rgba(255, 183, 3, 0.1)'
                        }}
                      >
                        <h4 style={{ 
                          fontFamily: 'var(--font-display)', 
                          color: '#fff', 
                          fontSize: '1.4rem', 
                          fontWeight: 700, 
                          margin: 0,
                          textShadow: isFaculty ? '0 0 8px rgba(0, 255, 102, 0.3)' : '0 0 8px rgba(255, 183, 3, 0.2)'
                        }}>
                          {member.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      ) : (
        <>
          {/* ==========================================
             PAGE 1: HERO & REGISTRATION
             ========================================== */}
          <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden', padding: '120px 8% 60px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Robot Image Background Layer (Full Screen Width, behind the section content) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${roboninjaHeroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              zIndex: 0,
            }} />
            
            {/* Split Content Grid (Elevated to zIndex: 2) */}
            <div className="army-grid" style={{ position: 'relative', zIndex: 2 }}>
              <div className="hero-left">
                <span className="overline" style={{ color: 'var(--accent-green)', letterSpacing: '3px', fontWeight: 'bold' }}>FUSIONIX'26</span>
                <h1 className="hero-title" style={{ textTransform: 'uppercase', fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2.5rem, 8vw, 4.8rem)', fontWeight: 900, lineHeight: 1.1, margin: '15px 0' }}>
                  FUSION<span className="glow-text-green">IX'26</span>
                </h1>
                <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)', color: '#00ff66', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 'bold', textShadow: '0 0 10px rgba(0, 255, 102, 0.4)', marginBottom: '15px' }}>
                  24-HOUR HACKATHON
                </h3>
                <p className="hero-desc" style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: '1.6', marginBottom: '10px' }}>
                  
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '35px', borderLeft: '3px solid var(--accent-green)', paddingLeft: '12px' }}>
                  Organized by: Department Of ECE & CSE ( IOT )
                </p>

                <div className="hero-btn-group" style={{ flexWrap: 'wrap', gap: '15px' }}>
                  <button 
                    className="btn-cyber-solid"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '15px 30px', fontSize: '1rem', fontWeight: 'bold', background: '#00ff66', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 0 15px rgba(0, 255, 102, 0.45)' }}
                    onClick={() => setShowScholarSuggestionModal(true)}
                  >
                    <span>REGISTER</span>
                    <ArrowRight size={18} />
                  </button>
                  <a 
                    href={brochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-solid"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 30px', fontSize: '1rem', fontWeight: 'bold', background: 'rgba(255, 183, 3, 0.15)', color: '#ffb703', border: '1px solid #ffb703', borderRadius: '4px', textDecoration: 'none', boxShadow: '0 0 15px rgba(255, 183, 3, 0.3)', cursor: 'pointer' }}
                  >
                    <FileText size={18} />
                    <span>EVENT BROCHURE</span>
                  </a>
                  <a 
                    href="#contact"
                    className="btn-cyber-outline"
                    onClick={(e) => handleNavClick('contact', e)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 30px', fontSize: '1rem', fontWeight: 'bold', color: '#00ff66', border: '1px solid #00ff66', background: 'rgba(0, 255, 102, 0.05)', borderRadius: '4px', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <Phone size={16} />
                    <span>CONTACT US</span>
                  </a>
                  <button 
                    className="btn-cyber-solid"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 30px', fontSize: '1rem', fontWeight: 'bold', background: 'rgba(0, 229, 255, 0.15)', color: 'var(--accent-blue)', border: '1px solid var(--accent-blue)', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                    onClick={() => {
                      playSfx('click');
                      setGameModalOpen(true);
                    }}
                  >
                    <Gamepad2 size={18} />
                    <span>PLAY THE GAME</span>
                  </button>
                </div>
              </div>
              {/* Empty placeholder div to occupy the right column of the grid on desktop */}
              <div />
            </div>

            {/* Countdown timer card centered at the bottom of hero - Beautiful dual-layer trapezoid shape exactly like image.png */}
            <div className="hero-timer-wrapper">
              <div className="countdown-trapezoid-outer">
                <div 
                  className="countdown-trapezoid-inner"
                  style={{ 
                    minHeight: 'clamp(80px, 18vw, 184.8px)',
                    background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${timerBgImg}) no-repeat center center / cover` 
                  }}
                >
                  <div className="countdown-column">
                    <div className="countdown-number" style={{ color: '#ffffff', textShadow: 'none', fontWeight: 800 }}>
                      {pdfTimeLeft.days.toString().padStart(2, '0')}
                    </div>
                    <div className="countdown-label" style={{ color: '#84ec30', textTransform: 'none', fontWeight: 'bold', marginTop: '4px', letterSpacing: '0.5px' }}>
                      Days
                    </div>
                  </div>
                  <div className="countdown-column">
                    <div className="countdown-number" style={{ color: '#ffffff', textShadow: 'none', fontWeight: 800 }}>
                      {pdfTimeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="countdown-label" style={{ color: '#84ec30', textTransform: 'none', fontWeight: 'bold', marginTop: '4px', letterSpacing: '0.5px' }}>
                      Hours
                    </div>
                  </div>
                  <div className="countdown-column">
                    <div className="countdown-number" style={{ color: '#ffffff', textShadow: 'none', fontWeight: 800 }}>
                      {pdfTimeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="countdown-label" style={{ color: '#84ec30', textTransform: 'none', fontWeight: 'bold', marginTop: '4px', letterSpacing: '0.5px' }}>
                      Minutes
                    </div>
                  </div>
                  <div className="countdown-column">
                    <div className="countdown-number" style={{ color: '#ffffff', textShadow: 'none', fontWeight: 800 }}>
                      {pdfTimeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="countdown-label" style={{ color: '#84ec30', textTransform: 'none', fontWeight: 'bold', marginTop: '4px', letterSpacing: '0.5px' }}>
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
             PAGE 2: ABOUT US
             ========================================== */}
          <style>{`
    .about-container{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:50px;
    }

    .about-text{
      flex:1.8;
    }

    .about-image{
      flex:1;
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .about-image img{
      width:100%;
      max-width:580px;
      height:auto;
      display:block;
      pointer-events:none;
      transition:0.3s;
      transform: translateX(40px);
    }

    /* Tablet */
    @media (max-width:992px){
      .about-container{
        gap:30px;
      }

      .about-text{
        flex:1.4;
      }

      .about-image img{
        max-width:460px;
        transform: translateX(0);
      }
    }

    /* Mobile */
    @media (max-width:768px){
      .about-container{
        flex-direction:column;
      }

      .about-image{
        order:1;
        width:100%;
        margin-bottom:25px;
      }

      .about-text{
        order:2;
        width:100%;
      }

      .about-text h2{
        text-align:center;
      }

      .about-text p{
        text-align:justify;
      }

      .about-image img{
        max-width:320px;
        transform: translateX(0);
      }
    }
  `}</style>

  <section
    id="about"
    style={{
      padding: "80px 8% 60px",
      background: "rgba(2, 6, 3, 0.4)",
      position: "relative",
      overflow: "visible",
    }}
  >
    <div
      style={{
        border: "1.5px solid #84ec30",
        background: "#020603",
        borderRadius: "24px",
        padding: "60px 6%",
        boxShadow: "0 0 35px rgba(132,236,48,0.05)",
        overflow: "visible",
      }}
    >
      <div className="about-container">
        {/* Text */}
        <div className="about-text">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "#84ec30",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            About Us
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(0.95rem,1.8vw,1.15rem)",
              lineHeight: "1.8",
              margin: 0,
              textAlign: "justify",
            }}
          >
            FusioniX is a 24-hour hackathon by the Departments of ECE and CSE
            (IoT) at the University of Engineering & Management, Kolkata where
            participants transform ideas into real-world solutions through
            integrated hardware and software innovation. With no fixed domain 
            spanning intelligent systems, environmental monitoring, industrial
            safety, and beyond teams ideate, design, and prototype across
            multiple competitive rounds. Judged on creativity and real-world
            impact, top performers win prizes and cash rewards alongside
            valuable feedback from industry experts. At
            FusioniX, innovation is expected where ideas become solutions.
          </p>
        </div>

        {/* Image */}
        <div className="about-image" style={{
          height: '322.95px',
          marginLeft: '-3px',
          marginRight: '-78px',
          paddingLeft: '0px',
          marginBottom: '1px',
          marginTop: '9px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img
            src={shadowXImg}
            alt="FusioniX Cyber Scout Mascot"
            referrerPolicy="no-referrer"
            style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  </section>

          {/* ==========================================
             PAGE 3: THEME SUSTAINABILITY
             ========================================== */}
          <section id="theme" style={{ width: '100%', padding: '0px 20px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.img 
              src={themeImg} 
              alt="Theme Sustainability" 
              style={{ width: '100%', maxWidth: '1200px', height: 'auto', maxHeight: '550px', display: 'block', objectFit: 'contain', margin: '0 auto' }}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.8 }}
            />
          </section>

          {/* ==========================================
             PAGE 4: TIMELINE (Real-Time Dynamic Timeline)
             ========================================== */}
          <section id="timeline" style={{ padding: '80px 8% 60px', background: 'rgba(2, 6, 3, 0.4)' }}>
            <div className="pdf-card-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', color: '#00ff66', fontSize: '2.4rem', fontWeight: 800, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
                  <span style={{ width: '12px', height: '12px', background: '#00ff66', borderRadius: '2px', display: 'inline-block' }}></span>
                  TIMELINE
                </h2>
                <div style={{ background: 'rgba(0, 255, 102, 0.08)', border: '1px solid rgba(0, 255, 102, 0.25)', padding: '6px 14px', borderRadius: '20px', color: '#84ec30', fontSize: '0.82rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#84ec30', boxShadow: '0 0 10px #84ec30' }}></span>
                  REAL-TIME SYNC: {nowTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} {nowTime.toLocaleTimeString()}
                </div>
              </div>

              {/* Responsive Timeline Flow */}
              <div className="timeline-container-wrapper custom-scroll">
                <div className="timeline-grid-layout">
                  
                  {/* Connector Path Line */}
                  <div className="timeline-track-line"></div>

                  {[
                    {
                      id: 1,
                      title: "Registration Starts",
                      dateStr: "Live Now (Website Launch)",
                      start: new Date('2026-07-01T00:00:00'),
                      end: new Date('2026-08-15T00:00:00')
                    },
                    {
                      id: 2,
                      title: "Last Date of PPT Submission",
                      dateStr: "Aug 15, 2026",
                      start: new Date('2026-08-15T00:00:00'),
                      end: new Date('2026-08-15T23:59:59')
                    },
                    {
                      id: 3,
                      title: "1st Round Result Announcement",
                      dateStr: "Aug 26, 2026",
                      start: new Date('2026-08-26T00:00:00'),
                      end: new Date('2026-08-26T23:59:59')
                    },
                    {
                      id: 4,
                      title: "Finalist Team Reveal",
                      dateStr: "Sep 5, 2026",
                      start: new Date('2026-09-05T00:00:00'),
                      end: new Date('2026-09-05T23:59:59')
                    },
                    {
                      id: 5,
                      title: "Offline Hacking Starts",
                      dateStr: "Sep 11, 2026",
                      start: new Date('2026-09-11T09:00:00'),
                      end: new Date('2026-09-11T23:59:59')
                    },
                    {
                      id: 6,
                      title: "Hacking Ends",
                      dateStr: "Sep 12, 2026",
                      start: new Date('2026-09-12T09:00:00'),
                      end: new Date('2026-09-12T23:59:59')
                    }
                  ].map((item) => {
                    const nowMs = nowTime.getTime();
                    const isCompleted = nowMs > item.end.getTime();
                    const isActive = nowMs >= item.start.getTime() && nowMs <= item.end.getTime();
                    const isUpcoming = nowMs < item.start.getTime();

                    return (
                      <div className="timeline-sphere-node" key={item.id}>
                        <div className={`timeline-sphere-globe ${isCompleted || isActive ? 'active' : 'inactive'}`} style={isActive ? { boxShadow: '0 0 20px #00ff66', border: '2px solid #00ff66' } : {}}>
                          <img 
                            src={hologramEarthImg} 
                            alt={item.title} 
                            referrerPolicy="no-referrer" 
                            className={`timeline-earth-icon ${isCompleted || isActive ? 'active' : 'inactive'}`}
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              borderRadius: '50%', 
                              objectFit: 'cover',
                              filter: isUpcoming ? 'grayscale(100%) opacity(40%)' : 'none' 
                            }}
                          />
                        </div>
                        <div className="timeline-node-info" style={{ marginTop: '12px' }}>
                          <div className={`timeline-node-title ${isUpcoming ? 'inactive' : ''}`} style={{ color: isActive ? '#00ff66' : isCompleted ? '#ffffff' : '#888', fontWeight: isActive ? 800 : 600 }}>
                            {item.title}
                          </div>
                          <div className="timeline-node-date" style={{ color: isActive ? '#84ec30' : '#aaa' }}>
                            {item.dateStr}
                          </div>
                          <div style={{ marginTop: '4px' }}>
                            {isCompleted && (
                              <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(0,255,102,0.12)', color: '#00ff66', border: '1px solid rgba(0,255,102,0.3)', fontWeight: 700 }}>
                                ✓ COMPLETED
                              </span>
                            )}
                            {isActive && (
                              <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(132,236,48,0.25)', color: '#84ec30', border: '1px solid #84ec30', fontWeight: 800 }}>
                                ● LIVE NOW
                              </span>
                            )}
                            {isUpcoming && (
                              <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: '#777', border: '1px solid rgba(255,255,255,0.1)' }}>
                                UPCOMING
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
             GOOGLE SCHOLAR SCIENTIFIC VALIDATION SECTION
             ========================================== */}
          <section id="scholar-validation" style={{ padding: '80px 8% 60px', background: 'rgba(2, 6, 3, 0.65)', position: 'relative' }}>
            <div className="pdf-card-container" style={{ borderColor: 'var(--accent-green)', boxShadow: '0 0 30px rgba(0, 255, 102, 0.15)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h2 style={{ 
                    fontFamily: 'var(--font-display)', 
                    color: '#00ff66', 
                    fontSize: '2.2rem', 
                    fontWeight: 800, 
                    margin: 0,
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <GraduationCap style={{ color: '#00ff66' }} size={32} />
                    GOOGLE SCHOLAR RESEARCH ENGINE
                  </h2>
                  <p style={{ 
                    color: '#f1f5f9', 
                    fontSize: '1.1rem', 
                    lineHeight: '1.75', 
                    textAlign: 'left', 
                    margin: 0,
                    fontWeight: 400
                  }}>
                    To maximize feasibility and validation points from our ECE & CSE expert review panel, it is highly critical to search and verify your design against peer-reviewed research papers. Use the real-time search interface below to discover existing research on smart nodes, energy efficiency, sensor deployments, and green microcontrollers.
                  </p>
                </div>
                
                <div className="lg:col-span-5">
                  <div style={{ background: 'rgba(5, 15, 8, 0.95)', border: '1px solid var(--accent-green)', padding: '24px', borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 255, 102, 0.08)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      VALIDATE YOUR IDEA INSTANTLY
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <input 
                        type="text" 
                        placeholder="e.g., LoRa smart agriculture microchip STM32"
                        className="news-input" 
                        value={scholarQuery}
                        onChange={(e) => setScholarQuery(e.target.value)}
                        style={{ width: '100%', boxSizing: 'border-box', padding: '12px 16px', background: '#020603', border: '1px solid rgba(0, 255, 102, 0.35)', color: '#fff', borderRadius: '6px', fontSize: '0.95rem' }}
                      />
                      
                      <a 
                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(scholarQuery || "sustainable IoT microcontroller")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cyber-solid"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '10px',
                          padding: '14px', 
                          background: '#00ff66', 
                          color: '#000', 
                          border: 'none', 
                          borderRadius: '6px', 
                          textDecoration: 'none',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          boxShadow: '0 0 15px rgba(0, 255, 102, 0.25)'
                        }}
                        onClick={() => playSfx('click')}
                      >
                        <Search size={16} />
                        <span>SEARCH ON GOOGLE SCHOLAR</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
             PAGE 5: PRIZES
             ========================================== */}
          <section id="prizes" style={{ width: '100%', padding: '0px 20px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={prizesBannerImg} 
              alt="30K Prize Pool" 
              style={{ width: '100%', maxWidth: '1000px', height: 'auto', maxHeight: '450px', display: 'block', objectFit: 'contain', margin: '0 auto' }}
              referrerPolicy="no-referrer"
            />
          </section>



      <div id="swarm-copilot" style={{ display: 'none' }}></div>



      {/* ==========================================
         DO'S AND DON'TS / RULES SECTION
         ========================================== */}
      <section className="benefit-rail" id="rules" style={{ background: 'var(--bg-deep)', padding: '100px 8% 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="overline">CRITICAL DEPLOYMENT GUIDELINES</span>
            <h2 className="collection-main-title">RULES & CODE OF CONDUCT</h2>
          </div>

          <div className="rules-grid">
            {/* DO's Card */}
            <div className="benefit-card" style={{ border: '1px solid rgba(0, 255, 102, 0.35)', background: 'rgba(4, 18, 9, 0.55)', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div className="benefit-icon-box" style={{ background: 'rgba(0, 255, 102, 0.1)', borderColor: 'var(--accent-green)' }}>
                  <CheckCircle2 className="glow-text-green" size={26} />
                </div>
                <h3 className="collection-main-title" style={{ fontSize: '1.6rem', color: '#fff' }}>THE DO'S</h3>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }} className="faq-text">
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.2rem', marginTop: '-2px' }}>✓</span>
                  <span><strong>Duration Compliance:</strong> Hackers must operate strictly within the declared 24-hour window (at venue).</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.2rem', marginTop: '-2px' }}>✓</span>
                  <span><strong>Component Provision:</strong> Bring your own laptops, microcontrollers (ESP32/Arduino), jumpers, sensors, and required diagnostic tools.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.2rem', marginTop: '-2px' }}>✓</span>
                  <span><strong>Original Blueprint:</strong> Maintain absolute originality. Design files, codeblocks, and schematics must be created fresh during key hours.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.2rem', marginTop: '-2px' }}>✓</span>
                  <span><strong>Protocol Sync:</strong> Strictly respect evaluation timeline prompts, component checklists, and mentor instructions.</span>
                </li>
              </ul>
            </div>

            {/* DON'Ts Card */}
            <div className="benefit-card" style={{ border: '1px solid rgba(157, 78, 221, 0.35)', background: 'rgba(15, 6, 18, 0.55)', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div className="benefit-icon-box" style={{ background: 'rgba(157, 78, 221, 0.1)', borderColor: 'var(--accent-purple)' }}>
                  <AlertOctagon style={{ color: '#d78cf6' }} size={26} />
                </div>
                <h3 className="collection-main-title" style={{ fontSize: '1.6rem', color: '#fff' }}>THE DON'TS</h3>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }} className="faq-text">
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d78cf6', fontSize: '1.2rem', marginTop: '-2px' }}>✗</span>
                  <span><strong>No Prebuilt Units:</strong> Do not deploy pre-assembled physical projects or code libraries created prior to registration blocks.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d78cf6', fontSize: '1.2rem', marginTop: '-2px' }}>✗</span>
                  <span><strong>No Plagiarism:</strong> Do not clone existing internet projects or copy source blocks directly from online github directories.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d78cf6', fontSize: '1.2rem', marginTop: '-2px' }}>✗</span>
                  <span><strong>No Unfair Gen-AI:</strong> Avoid using automated gen-AI systems during live testing loops to synthesize entire solution structures.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d78cf6', fontSize: '1.2rem', marginTop: '-2px' }}>✗</span>
                  <span><strong>No Device Tampering:</strong> Do not violate network parameters or exit key sectors without scanning clearance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         OFFICIAL SECTOR TIMELINE ROADMAP
         ========================================== */}
      <section className="faq-wrap" id="timeline">
        <span className="overline" style={{ textAlign: 'center', display: 'block' }}>FUSIONIX PROGRAM FILE</span>
        <h2 className="faq-title">EVENT CHRONOGRAM</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
          {/* Vertical central path line */}
          <div style={{ position: 'absolute', left: '50px', top: '24px', bottom: '24px', width: '2px', background: 'linear-gradient(rgba(0, 255, 102, 0.45) 0%, rgba(0, 229, 255, 0.45) 100%)' }}></div>

          {/* Phase 1 */}
          <div style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: '2' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#020603', border: '2px solid var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 10px rgba(0,255,102,0.4)' }}>
              <span style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>01</span>
            </div>
            <div className="stat-box" style={{ flex: '1', display: 'block', background: 'rgba(8, 20, 13, 0.7)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.1rem' }}>Pitch Deck Qualifier</h4>
                <span style={{ color: 'var(--accent-green)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>ROUND 01 • ONLINE</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.90rem', lineHeight: '1.5' }}>
                Registered teams must upload their conceptual pitch slides showcasing component architecture, sustainability targets, and projected sensor maps before deadline parameters settle.
              </p>
            </div>
          </div>

          {/* Phase 2 */}
          <div style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: '2' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#020603', border: '2px solid var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 10px rgba(0,229,255,0.4)' }}>
              <span style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>02</span>
            </div>
            <div className="stat-box" style={{ flex: '1', display: 'block', background: 'rgba(8, 20, 13, 0.7)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.1rem' }}>Hardware & Blueprint Mapping</h4>
                <span style={{ color: 'var(--accent-blue)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>ROUND 02 • VENUE</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.90rem', lineHeight: '1.5' }}>
                Offline venue launch. Teams assemble physical microcontrollers, wire up primary sensory nodes, and outline hardware limits under supervisor checks.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: '2' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#020603', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 10px rgba(255,183,3,0.4)' }}>
              <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>03</span>
            </div>
            <div className="stat-box" style={{ flex: '1', display: 'block', background: 'rgba(8, 20, 13, 0.7)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.1rem' }}>Software Convergence Sprint</h4>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>ROUND 03 • VENUE</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.90rem', lineHeight: '1.5' }}>
                Night-long continuous coding. Syncing devices to endpoints, verifying analytics transmission, and solidifying physical user interface elements.
              </p>
            </div>
          </div>

          {/* Phase 4 */}
          <div style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: '2' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#020603', border: '2px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 10px rgba(157,78,221,0.4)' }}>
              <span style={{ color: '#d78cf6', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>04</span>
            </div>
            <div className="stat-box" style={{ flex: '1', display: 'block', background: 'rgba(8, 20, 13, 0.7)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.1rem' }}>Grand Finale Pitch & Demo</h4>
                <span style={{ color: '#d78cf6', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>EVALUATION • AUDITORIUM</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.90rem', lineHeight: '1.5' }}>
                Main state evaluation. Live physical demonstration to industry evaluators mapping solution viability, cost models, and sustainable scope relevance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         ORGANIZATIONAL TEAM DECK
         ========================================== */}
      <section className="collection-section" id="team" style={{ background: 'rgba(4, 12, 7, 0.6)', padding: '100px 8%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="overline">COMMUNITY ARCHITECTS</span>
          <h2 className="collection-main-title">MEET THE FUSIONIX TEAM</h2>
        </div>

        {/* Faculty Advisors */}
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-green)', letterSpacing: '1px', fontSize: '1.24rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>●</span> FACULTY INTEGRATORS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginBottom: '30px' }}>
          {[
            {
              name: "Dr. Abir Chattopadhyay",
              role: "Faculty Coordinator",
              src:hod,
              initials: "AC",
              email: "abir.chattopadhyay@uem.edu.in",
              linkedin: "https://linkedin.com",
              desc: "Overseeing the technical committee, curriculum validation, and academic review of top prototype entries."
            },
            {
              name: "Prof. Dr. Shreya Nag",
              role: "Faculty Coordinator",
              src:madam,
              initials: "SN",
              email: "shreya.nag@uem.edu.in",
              linkedin: "https://linkedin.com",
              desc: "Directing institutional resource planning, department lab integrations, and logistics coordination."
            },
            {
              name: "Sudipta Ghosh",
              role: "Faculty Coordinator",
              src:sudip,
              initials: "SN",
              email: "shreya.nag@uem.edu.in",
              linkedin: "https://linkedin.com",
              desc: "Directing institutional resource planning, department lab integrations, and logistics coordination."
            }
          ].map((faculty, idx) => (
            <div key={idx} className="team-member-card green" style={{ position: 'relative', width: '100%', height: 'auto', padding: 0, overflow: 'hidden' }}>
              <div className="team-card-corners" />
              
              {/* Full background Avatar that sizes the card naturally */}
              <div style={{ position: 'relative', width: '100%', height: 'auto', zIndex: 1 }}>
                <SmartAvatar 
                  src={faculty.src} 
                  alt={faculty.name} 
                  initials={faculty.initials} 
                  accentColor="var(--accent-green)"
                  style={{ borderRadius: '0px', width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
                />
              </div>
              
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(2, 6, 3, 0.98) 0%, rgba(2, 6, 3, 0.75) 45%, rgba(2, 6, 3, 0.15) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }} />

              {/* Overlaid content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px 0', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{faculty.name}</h4>
                  <span style={{ color: 'var(--accent-green)', fontSize: '0.82rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '1px', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{faculty.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button for Additional Faculty */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '80px' }}>
          <button 
            className="btn-cyber-solid"
            onClick={() => {
              setViewingSubordinateTeam({
                coordinatorName: "OUR ANOTHER FACULTY",
                coordinatorRole: "Faculty Integrator",
                coordinatorAvatar: "",
                members: [
  { name: "Prof.(Dr.) Abir Chatterjee", role: "Faculty Integrator", email: "", initials: "AC" },
  { name: "Prof.(Dr.) Arpita Das", role: "Faculty Integrator", email: "", initials: "APD" },
  { name: "Prof.(Dr.) Shreya Nag", role: "Faculty Integrator", email: "", initials: "SRN" },
  { name: "Prof. Debanjana Ghosh", role: "Faculty Integrator", email: "", initials: "DG" },
  { name: "Prof. Rimi Sengupta", role: "Faculty Integrator", email: "", initials: "RSG" },
  { name: "Prof. Karunamayee Dey", role: "Faculty Integrator", email: "", initials: "KD" },
  { name: "Prof. Sohom Chakraborty", role: "Faculty Integrator", email: "", initials: "SCH" },
  { name: "Prof. Mandar Chakrabarti", role: "Faculty Integrator", email: "", initials: "MNC" },
  { name: "Prof.(Dr.) Maumita Das", role: "Faculty Integrator", email: "", initials: "MMD" },
  { name: "Prof.(Dr.) Ayan Chatterjee", role: "Faculty Integrator", email: "", initials: "AYC" },
  { name: "Prof.(Dr.) Sudipta Ghosh", role: "Faculty Integrator", email: "", initials: "SGH" },
  { name: "Prof.(Dr.) Subhajit Das", role: "Faculty Integrator", email: "", initials: "SBD" },
  { name: "Prof. Prakash Banerjee", role: "Faculty Integrator", email: "", initials: "PB" },
  { name: "Prof.(Dr.) Rijhi Dey", role: "Faculty Integrator", email: "", initials: "RJD" },
  { name: "Prof. Somnath Garai", role: "Faculty Integrator", email: "", initials: "SG" },
  { name: "Sanchita Sarkar", role: "Faculty Integrator", email: "", initials: "SCS" },
  { name: "Prof. Saikat Biswas", role: "Faculty Integrator", email: "", initials: "SKB" },
  { name: "Prof.(Dr.) Pramita Nath", role: "Faculty Integrator", email: "", initials: "PRN" },
  { name: "Prof.(Dr.) Arpita Biswas", role: "Faculty Integrator", email: "", initials: "ARB" },
  { name: "Prof. Saptaparna Ghosh", role: "Faculty Integrator", email: "", initials: "SNG" }
]
              });
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            style={{
              padding: '12px 28px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#000',
              background: 'var(--accent-green)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(132, 236, 48, 0.3)',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.3s ease'
            }}
          >
            OUR ANOTHER FACULTY
          </button>
        </div>

        {/* Student Leads */}
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-blue)', letterSpacing: '1px', fontSize: '1.24rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>●</span> CORE STUDENT LEADS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          {[
            {
              name: "Abhiraj Saha",
              role: "Organizing Lead",
              src: abhiraj,
              initials: "AS",
              instagram: "https://www.instagram.com/ig__abhirajsaha/",
              linkedin: "http://www.linkedin.com/in/abhirajsaha",
              desc: "Directing organizational sprints, team alignments, and industrial mentor linkages."
            },
            {
              name: "Debdip Ghosh",
              role: "Organizing Lead",
              src: debdip,
              initials: "DG",
              instagram: "https://www.instagram.com/chiiku_x?igsh=aW9hbWtzM3hlcmFu",
              linkedin: "https://www.linkedin.com/in/debdipghosh28?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              desc: "Commanding hardware lab operations, micro-controllers assembly setups, and dev kits distribution."
            },
            {
              name: "Shibangi Bose",
              role: "Organizing Lead",
              src: shibangi,
              initials: "SB",
              instagram: "https://instagram.com",
              linkedin: "https://linkedin.com",
              desc: "Managing institutional collaborations, public relations campaigns, and event hosting schedules."
            }
          ].map((lead, idx) => (
            <div key={idx} className="team-member-card blue" style={{ position: 'relative', width: '100%', height: 'auto', padding: 0, overflow: 'hidden' }}>
              <div className="team-card-corners" />
              
              {/* Full background Avatar that sizes the card naturally */}
              <div style={{ position: 'relative', width: '100%', height: 'auto', zIndex: 1 }}>
                <SmartAvatar 
                  src={lead.src} 
                  alt={lead.name} 
                  initials={lead.initials} 
                  accentColor="var(--accent-blue)"
                  style={{ borderRadius: '0px', width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
                />
              </div>
              
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(2, 6, 3, 0.98) 0%, rgba(2, 6, 3, 0.75) 45%, rgba(2, 6, 3, 0.15) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }} />

              {/* Overlaid content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px 0', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{lead.name}</h4>
                  <span style={{ color: 'var(--accent-blue)', fontSize: '0.82rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '1px', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{lead.role}</span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '15px', display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <a 
                    href={(lead as Record<string, any>).instagram || "https://instagram.com"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Instagram Profile" 
                    className="team-social-btn" 
                    style={{ background: 'rgba(0, 0, 0, 0.6)', border: 'none', cursor: 'pointer', zIndex: 10 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram size={13} />
                  </a>
                  <a 
                    href={lead.linkedin.startsWith('http') ? lead.linkedin : `https://${lead.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile" 
                    className="team-social-btn" 
                    style={{ background: 'rgba(0, 0, 0, 0.6)', border: 'none', cursor: 'pointer', zIndex: 10 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Core Coordinators */}
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-gold)', letterSpacing: '1px', fontSize: '1.24rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>●</span> ORGANIZING COMMITTEE
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            {
              name: "Subhankar Das Adhikary",
              role: "Web Development Executive",
              src: subhankar,
              initials: "SD",
              instagram: "https://instagram.com",
              linkedin: "www.linkedin.com/in/subhankar-das-adhikary-a4b555320",
              desc: "Architecting core platform architecture, responsive system frameworks, and secure cloud handshakes."
            },
            {
              name: "Rohitaswa Singha",
              role: "Graphics Executive",
              src: rohitaswa,
              initials: "RS",
              instagram: "https://www.instagram.com/measuredwrath?igsh=MWI3c2piYWgzMGZoOA==",
              linkedin: "https://www.linkedin.com/in/rohitaswa-singha-b46ba4318?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              desc: "Designing top tier visual interfaces, dark mode color grading schemas, vector mockups, and assets."
            },
            {
              name: "Rajdeb Pal",
              role: "Sponsorship Executive",
              src: rajdeb,
              initials: "RP",
              instagram: "https://www.instagram.com/pixelcoder_raj?igsh=MTZlNzUxam8zbXQ=",
              linkedin: "https://www.linkedin.com/in/rajdeb-pal-716249288?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              desc: "Coordinating strategic partner networks, resource allocations, and corporate sponsor pools."
            },
            {
              name: "Raunak Dasgupta",
              role: "Social Media Executive",
              src: raunak,
              initials: "RD",
              instagram: "https://www.instagram.com/raunak.dg?igsh=Mml5cnZjZHdhYWow",
              linkedin: "https://www.linkedin.com/in/raunak-dasgupta-3817b631a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              desc: "Synchronizing community outreach broadcasts, interactive social threads, and engagement tracks."
            },
            {
              name: "Shivam Singh",
              role: "Decoration Executive",
              src: shivam,
              initials: "PS",
              instagram: "https://www.instagram.com/shivamsingh_6439/?__pwa=1",
              linkedin: "https://www.linkedin.com/in/shivam-singh-2638a4308/",
              desc: "Supervising venue micro-logistics, catering syncs, hardware kits distribution, and communications."
            },
            {
              name: "Ankan Sarkar",
              role: "Event Finance Manager",
              src: ankan,
              initials: "PS",
              instagram: "https://instagram.com",
              linkedin: "https://www.linkedin.com/in/ankan-sarkar-391005325",
              desc: "Supervising venue micro-logistics, catering syncs, hardware kits distribution, and communications."
            },
            {
              name: "Daliya Paul ",
              role: "sponsorship Manager",
              src: dalia,
              initials: "PS",
              instagram: "https://www.instagram.com/_daliya_here?igsh=MXZqb3E1Y2EweHprbA==",
              linkedin: "https://www.linkedin.com/in/daliya-paul-4b80393a9?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              desc: "Supervising venue micro-logistics, catering syncs, hardware kits distribution, and communications."
            }
          ].map((coord, idx) => (
            <div key={idx} className="team-member-card gold" style={{ position: 'relative', width: '100%', height: 'auto', padding: 0, overflow: 'hidden' }}>
              <div className="team-card-corners" />
              
              {/* Full background Avatar that sizes the card naturally */}
              <div style={{ position: 'relative', width: '100%', height: 'auto', zIndex: 1 }}>
                <SmartAvatar 
                  src={coord.src} 
                  alt={coord.name} 
                  initials={coord.initials} 
                  accentColor="var(--accent-gold)"
                  style={{ borderRadius: '0px', width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
                />
              </div>
              
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(2, 6, 3, 0.98) 0%, rgba(2, 6, 3, 0.75) 45%, rgba(2, 6, 3, 0.15) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }} />

              {/* Overlaid content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px 0', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{coord.name}</h4>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.82rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '1px', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{coord.role}</span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '15px', display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a 
                      href={(coord as Record<string, any>).instagram || "https://instagram.com"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Instagram Profile" 
                      className="team-social-btn" 
                      style={{ background: 'rgba(0, 0, 0, 0.6)', border: 'none', cursor: 'pointer', zIndex: 10 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram size={13} />
                    </a>
                    <a 
                      href={coord.linkedin.startsWith('http') ? coord.linkedin : `https://${coord.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="LinkedIn Profile" 
                      className="team-social-btn" 
                      style={{ background: 'rgba(0, 0, 0, 0.6)', border: 'none', cursor: 'pointer', zIndex: 10 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={13} />
                    </a>
                  </div>

                  {/* Clicking opens subordinate page */}
                  {Boolean(subordinateTeams[coord.name]?.length) && (
                    <button 
                      onClick={() => {
                        setViewingSubordinateTeam({
                          coordinatorName: coord.name,
                          coordinatorRole: coord.role,
                          coordinatorAvatar: coord.src,
                          members: subordinateTeams[coord.name] || []
                        });
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="btn-cyber-outline"
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        borderWidth: '1px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--accent-gold)',
                        borderColor: 'rgba(255, 183, 3, 0.4)',
                        background: 'rgba(0, 0, 0, 0.6)',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronRight size={12} />
                      <span>VIEW SQUAD</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
         FAQ SECTION DEPLOYED VIA CHROME ACCENTS
         ========================================== */}
      <section className="faq-wrap" id="faq">
        <span className="overline" style={{ textAlign: 'center', display: 'block' }}>RESERVES OVERVIEW</span>
        <h2 className="faq-title">Frequently Asked Queries</h2>

        <div className="faq-items-list">
          {faqData.map((faq, index) => {
            const isCollapseActive = faqActiveIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-element ${isCollapseActive ? 'active' : ''}`}
              >
                <button 
                  className="faq-trigger"
                  onClick={() => setFaqActiveIndex(isCollapseActive ? null : index)}
                >
                  <span style={{ fontWeight: '600' }}>{faq.q}</span>
                  <span className="faq-expand-icon">
                    {isCollapseActive ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-content-box">
                  <p className="faq-text" style={{ paddingBottom: '10px' }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>



      {/* ==========================================
         PARTNERS & SPONSORS GRID
         ========================================== */}
      <section className="benefit-rail" id="sponsors" style={{ background: 'rgba(5, 15, 8, 0.45)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="overline">ECOSYSTEM SUPPORT</span>
            <h3 className="collection-main-title" style={{ fontSize: '2rem' }}>OUR SPONSORS & PARTNERS</h3>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="team-member-card gold" style={{ padding: '40px 30px', textAlign: 'center', background: 'rgba(5, 15, 8, 0.6)', border: '1px solid rgba(255, 183, 3, 0.4)', boxShadow: '0 0 20px rgba(255, 183, 3, 0.15)' }}>
              <div className="team-card-corners" />
              <Cpu size={36} className="glow-text-gold" style={{ marginBottom: '15px', display: 'inline-block' }} />
              <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Coming soon....</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                Our premium network of innovative sponsors, resource providers, and component facilitators is currently being synchronized. Stay tuned for the grand physical and cloud support reveal!
              </p>
            </div>
          </div>

          {/* Action Trigger for Co-Sponsors Page */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => {
                setViewingSponsorsPage(true);
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="btn-cyber-solid"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                padding: '12px 28px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                textDecoration: 'none',
              }}
            >
              <Cpu size={16} />
              <span>EXPLORE ALL SPONSORS & CO-COLLABORATORS</span>
            </button>
          </div>
        </div>
      </section>
        </>
      )}

      {/* ==========================================
         FOOTER & EMBEDDED GOOGLE MAP VENUE
         ========================================== */}
      <footer className="footer" id="contact">
        <div id="rules-contact-link" />
        <div className="footer-grid" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {/* Contacts Block */}
          <div className="footer-news" style={{ gap: '15px' }}>
            <div style={{ marginBottom: '5px' }}>
              <img 
                src={footerLogoImg} 
                alt="FusioniX Footer Logo" 
                style={{ height: '70px', width: 'auto', display: 'block', objectFit: 'contain', filter: 'none', boxShadow: 'none' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="news-title" style={{ color: 'var(--accent-green)' }}>FUSIONIX EVENT HELPLINE</h3>
            <p className="news-desc">
              Have critical inquiries regarding kits, streams, guidelines, or accommodations? Reach out straight to our organizing chairs:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.90rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} className="glow-text-green" />
                <span><strong>Abhiraj Saha:</strong> +91 6003150816</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} className="glow-text-green" />
                <span><strong>Debdip Ghosh:</strong> +91 9883923300</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} className="glow-text-green" />
                <span><strong>Shibangi Bose:</strong> +91 9474387252</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-blue)' }}>
                <Mail size={14} />
                <span><strong>fusionix2026@gmail.com</strong></span>
              </div>
            </div>
          </div>

          {/* Quick links block */}
          <div className="footer-links-row" style={{ alignContent: 'start' }}>
            <div className="links-group">
              <h4 className="links-title">EVENT LINKS</h4>
              <ul className="footer-link-list">
                <li><a href="#home" onClick={(e) => handleNavClick('home', e)}>Home Base</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick('about', e)}>About Hub</a></li>
                <li><a href="#tracks" onClick={(e) => handleNavClick('tracks', e)}>Domain Tracks</a></li>
                <li><a href="#rules" onClick={(e) => handleNavClick('rules', e)}>Participation Code</a></li>
              </ul>
            </div>
            <div className="links-group">
              <h4 className="links-title">RESOURCES</h4>
              <ul className="footer-link-list">
                <li><a href="#timeline" onClick={(e) => handleNavClick('timeline', e)}>Chronogram</a></li>
                <li><a href="#team" onClick={(e) => handleNavClick('team', e)}>Teamintegrators</a></li>
                <li><a href="#faq" onClick={(e) => handleNavClick('faq', e)}>FAQ Hub</a></li>
                <li><a href={brochurePdf} target="_blank" rel="noopener noreferrer" style={{ color: '#ffb703', fontWeight: 'bold' }}>Event Brochure (PDF)</a></li>
              </ul>
            </div>
          </div>

          {/* Google Iframe Map block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 className="news-title">VENUE SCHEMATIC MAP</h4>
            <div style={{ width: '100%', height: '160px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(0, 255, 102, 0.25)' }}>
              <iframe 
                title="UEM Kolkata Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050975.039442342!2d76.8005661631284!3d24.792843495139202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e1!3m2!1sen!2sin!4v1784659877883!5m2!1sen!2sin" 
                style={{ border: 'none', width: '100%', height: '100%', filter: 'invert(90%) hue-rotate(120deg) contrast(110%) brightness(95%)' }}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              AA-III/B, New Town, Area III, Kolkata, West Bengal 700160
            </span>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="footer-bottom">
          <p className="copy-text">© 2026 FusioniX. ECE & CSE (IoT) Department. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a 
                href="https://www.instagram.com/fusionix.26" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e1306c'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/fusionix-26/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00e5ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Linkedin size={18} />
              </a>
            </div>
            <div style={{ width: '1px', height: '14px', background: 'rgba(255, 255, 255, 0.15)' }} />
            <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => alert("UEM Kolkata privacy protocols are active.")}>Privacy Guidelines</span>
              <span style={{ cursor: 'pointer' }} onClick={() => alert("UEM Kolkata event terms apply.")}>Terms of Entry</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================
         OFFICIAL INTERACTIVE REGISTRATION CAPTURE MODAL
         ========================================== */}
      {registrationModalOpen && (
        <div className="modal-overlay" onClick={() => setRegistrationModalOpen(false)}>
          <div className="modal-content-wrapper" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
            <div className="accent-corner tl"></div>
            <div className="accent-corner tr"></div>
            <div className="accent-corner bl"></div>
            <div className="accent-corner br"></div>

            <div className="modal-header">
              <h3 className="modal-title">FUSIONIX PORTAL ENTRY</h3>
              <button className="btn-modal-close" onClick={() => setRegistrationModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body" style={{ maxHeight: '82vh', overflowY: 'auto' }}>
              {registrationSubmitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0, 255, 102, 0.1)', border: '2px solid var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={44} className="glow-text-green" />
                  </div>
                  <h3 className="collection-main-title" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>TRANSMISSION SECURED!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '25px' }}>
                    Your team <strong>{registrationForm.teamName.toUpperCase()}</strong> has successfully locked in a presale slot for FusioniX 2026! A confirmation receipt has been dispatched to <strong>{registrationForm.leaderEmail}</strong>.
                  </p>

                  <div className="stat-box" style={{ background: '#020603', border: '1px dashed var(--accent-green)', padding: '20px', display: 'block', textAlign: 'left', fontFamily: 'var(--font-mono)' }}>
                    <div style={{ color: 'var(--accent-green)', fontWeight: 'bold', borderBottom: '1px dashed rgba(0,255,102,0.3)', paddingBottom: '8px', marginBottom: '10px', fontSize: '0.85rem' }}>
                      MOCK SMART TICKET RECEIPT
                    </div>
                    <div style={{ fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div><span style={{ color: 'var(--text-secondary)' }}>TRANSACTION HASH:</span> 0x82f9...8d21</div>
                      <div><span style={{ color: 'var(--text-secondary)' }}>TEAM DESIGNATION:</span> {registrationForm.teamName}</div>
                      <div><span style={{ color: 'var(--text-secondary)' }}>COMMAND LEADER:</span> {registrationForm.leaderName}</div>
                      <div><span style={{ color: 'var(--text-secondary)' }}>SELECTED DOMAIN:</span> {innovationTracks.find(t => t.id === registrationForm.selectedTrackId)?.name || 'IoTech'}</div>
                      <div><span style={{ color: 'var(--text-secondary)' }}>COMPONENTS STATUS:</span> STANDBY FOR REVEAL</div>
                      <div><span style={{ color: 'var(--text-secondary)' }}>TEAM FEE COMPLIANT:</span> 400 INR (PAID - DEMO MODE)</div>
                    </div>
                  </div>

                  <button className="btn-cyber-solid" style={{ marginTop: '30px', marginInline: 'auto' }} onClick={() => { setRegistrationSubmitted(false); setRegistrationModalOpen(false); }}>
                    <span>CLOSE TERMINAL</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegistrationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Enter your tactical coordinates. Prepare for extreme 24-hour engineering compilation at UEM Kolkata campus.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="stats-container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>TEAM NAME *</label>
                      <input 
                        type="text" 
                        required 
                        className="news-input" 
                        placeholder="e.g. Cyber Ninjas"
                        value={registrationForm.teamName}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, teamName: e.target.value }))}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>LEADER NAME *</label>
                      <input 
                        type="text" 
                        required 
                        className="news-input" 
                        placeholder="Leader Full Name"
                        value={registrationForm.leaderName}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, leaderName: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="stats-container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>LEADER E-MAIL *</label>
                      <input 
                        type="email" 
                        required 
                        className="news-input" 
                        placeholder="leader@gmail.com"
                        value={registrationForm.leaderEmail}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, leaderEmail: e.target.value }))}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>WHATSAPP NO *</label>
                      <input 
                        type="tel" 
                        required 
                        className="news-input" 
                        placeholder="+91 XXXXX XXXXX"
                        value={registrationForm.leaderPhone}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, leaderPhone: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Core team details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>CO-ENGINEER NAMES (MEMBERS 2 TO 4)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }} className="stats-container">
                      <input 
                        type="text" 
                        className="news-input" 
                        placeholder="Member 2"
                        value={registrationForm.member2}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, member2: e.target.value }))}
                      />
                      <input 
                        type="text" 
                        className="news-input" 
                        placeholder="Member 3"
                        value={registrationForm.member3}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, member3: e.target.value }))}
                      />
                      <input 
                        type="text" 
                        className="news-input" 
                        placeholder="Member 4"
                        value={registrationForm.member4}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, member4: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '15px' }} className="stats-container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>CHOOSE TRACK TARGET *</label>
                      <select 
                        className="news-input" 
                        style={{ background: '#020603' }}
                        value={registrationForm.selectedTrackId}
                        onChange={(e) => setRegistrationForm(prev => ({ ...prev, selectedTrackId: e.target.value }))}
                      >
                        {innovationTracks.map(t => (
                          <option key={t.id} value={t.id} style={{ background: '#020603', color: '#fff' }}>
                            {t.name} ({t.rarity.toUpperCase()})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>FEE STATUS *</label>
                      <div className="news-input" style={{ background: 'rgba(0, 255, 102, 0.05)', color: 'var(--accent-green)', fontWeight: 'bold' }}>
                        400 INR (On-Site Pay)
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-cyber-solid" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                    <Check size={18} />
                    <span>SUBMIT MISSION PROFILE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
         TRACK SPECIFIC SPECIFICATIONS POPUP MODAL
         ========================================== */}
      {selectedTrack && (
        <div className="modal-overlay" onClick={() => setSelectedTrack(null)}>
          <div className="modal-content-wrapper" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
            <div className="accent-corner tl"></div>
            <div className="accent-corner tr"></div>
            <div className="accent-corner bl"></div>
            <div className="accent-corner br"></div>

            <div className="modal-header">
              <h3 className="modal-title">{selectedTrack.name} SPECS</h3>
              <button className="btn-modal-close" onClick={() => setSelectedTrack(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="mint-sim-panel">
                <div className="mint-sim-image-holder">
                  <img 
                    src={selectedTrack.img} 
                    className="mint-image-full" 
                    alt={selectedTrack.name} 
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mint-sim-right">
                  <div className="sim-text-block">
                    <span className="sim-lbl">TRACK LEVEL CLASSIFICATION</span>
                    <span className="sim-val" style={{ color: 'var(--accent-green)', letterSpacing: '1.2px' }}>
                      {selectedTrack.tag}
                    </span>
                  </div>

                  <p className="sim-desc">{selectedTrack.description}</p>

                  <div className="sim-text-block">
                    <span className="sim-lbl">HACKATHON HARDWARE BLUEPRINT</span>
                    <div className="sim-attributes-grid">
                      <div className="attribute-tag">
                        <span className="attribute-name">HW COMPLEXITY</span>
                        <span className="attribute-val">{selectedTrack.statArmor}/100</span>
                      </div>
                      <div className="attribute-tag">
                        <span className="attribute-name">SW API COMPACTNESS</span>
                        <span className="attribute-val">{selectedTrack.statSpeed}/100</span>
                      </div>
                      <div className="attribute-tag">
                        <span className="attribute-name">PREFER CORE</span>
                        <span className="attribute-val" style={{ color: '#00e5ff', fontSize: '0.72rem' }}>{selectedTrack.statCore}</span>
                      </div>
                      <div className="attribute-tag">
                        <span className="attribute-name">PRIMARY SENSORS</span>
                        <span className="attribute-val" style={{ color: 'var(--accent-gold)', fontSize: '0.72rem' }}>{selectedTrack.statWeapon}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '18px' }}>
                    <a 
                      href={`https://scholar.google.com/scholar?q=${encodeURIComponent(selectedTrack.name + " IoT sustainable microcontroller")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-solid"
                      style={{  
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '100%', 
                        textDecoration: 'none', 
                        gap: '8px', 
                        background: 'linear-gradient(90deg, rgba(0, 255, 102, 0.12) 0%, rgba(0, 229, 255, 0.12) 100%)', 
                        borderColor: 'rgba(0, 255, 102, 0.4)',
                        padding: '10px'
                      }}
                    >
                      <GraduationCap size={16} />
                      <span>FIND BEST SCHOLARLY IDEAS FOR PROJECT</span>
                    </a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          GOOGLE SCHOLAR RECOMMENDATION SUGGESTAL MODAL
          ========================================== */}
      {showScholarSuggestionModal && (
        <div className="modal-overlay" onClick={() => setShowScholarSuggestionModal(false)}>
          <div className="modal-content-wrapper" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
            <div className="accent-corner tl"></div>
            <div className="accent-corner tr"></div>
            <div className="accent-corner bl"></div>
            <div className="accent-corner br"></div>

            <div className="modal-header">
              <h3 className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cpu style={{ color: 'var(--accent-green)' }} size={24} />
                <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.5px' }}>REGISTRATION PORTAL</span>
              </h3>
              <button className="btn-modal-close" onClick={() => setShowScholarSuggestionModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body" style={{ textAlign: 'center', padding: '25px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ 
                  background: 'rgba(0, 255, 102, 0.04)', 
                  border: '1px solid rgba(0, 255, 102, 0.25)', 
                  borderRadius: '8px', 
                  padding: '24px', 
                  textAlign: 'center' 
                }}>
                  <GraduationCap style={{ color: 'var(--accent-green)', marginBottom: '12px', display: 'inline-block' }} size={48} />
                  <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    VALIDATE YOUR IDEA FIRST
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                    Click the button below to close this gateway and navigate straight to the interactive search engine.
                  </p>
                  
                  <button 
                    onClick={() => {
                      playSfx('click');
                      setShowScholarSuggestionModal(false);
                      const element = document.getElementById("scholar-validation");
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="btn-cyber-solid"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '10px',
                      padding: '14px 28px', 
                      background: 'var(--accent-green)', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '6px', 
                      textDecoration: 'none',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      width: '100%',
                      boxShadow: '0 0 15px rgba(0, 255, 102, 0.25)'
                    }}
                  >
                    <Search size={16} />
                    <span>GO TO GOOGLE SCHOLAR SECTION</span>
                  </button>
                </div>

                <div style={{ margin: '15px 0 5px', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    — OR REGISTER VIA OFFICIAL PARTNERS —
                  </span>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  {/* Unstop Portal Button */}
                  <a 
                    href="https://unstop.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="team-member-card green w-full"
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'row',
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      background: 'rgba(15, 98, 254, 0.06)', 
                      border: '1px solid rgba(15, 98, 254, 0.25)', 
                      borderRadius: '8px', 
                      padding: '12px 18px',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'all 0.2s',
                      textAlign: 'left'
                    }}
                    onClick={() => {
                      playSfx('click');
                      setShowScholarSuggestionModal(false);
                    }}
                  >
                    <div className="team-card-corners" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                        <circle cx="22" cy="22" r="20" fill="url(#unstop-gradient-sponsor-modal-compact)" />
                        <path d="M14 22C14 17.5817 17.5817 14 22 14C26.4183 14 30 17.5817 30 22C30 26.4183 26.4183 30 22 30" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="22" cy="22" r="4" fill="#00ff66" />
                        <defs>
                          <linearGradient id="unstop-gradient-sponsor-modal-compact" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F62FE" />
                            <stop stopColor="#0070F3" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 900, color: '#fff' }}>
                          un<span style={{ color: '#00ff66' }}>stop</span>
                        </span>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>OFFICIAL PORTAL</div>
                      </div>
                    </div>
                    <div className="btn-cyber-solid" style={{ background: '#0F62FE', borderColor: '#0F62FE', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', fontSize: '0.75rem', height: 'fit-content' }}>
                      <span>REGISTER</span>
                      <ArrowRight size={12} />
                    </div>
                  </a>

                  {/* Devfolio Portal Button */}
                  <a 
                    href="https://devfolio.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="team-member-card blue w-full"
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'row',
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      background: 'rgba(55, 112, 255, 0.06)', 
                      border: '1px solid rgba(55, 112, 255, 0.25)', 
                      borderRadius: '8px', 
                      padding: '12px 18px',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'all 0.2s',
                      textAlign: 'left'
                    }}
                    onClick={() => {
                      playSfx('click');
                      setShowScholarSuggestionModal(false);
                    }}
                  >
                    <div className="team-card-corners" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="22" height="22" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                        <path d="M124.2 216.2c-5.7 3.3-10.2 8.1-13 13.9L24.8 409.8c-2.8 5.8-4.2 12.1-4.2 18.5V607c0 6.4 1.4 12.7 4.2 18.5l86.4 179.7c2.8 5.8 7.3 10.6 13 13.9l173 100.1c5.7 3.3 12.1 5 18.5 5h172.8c6.4 0 12.8-1.7 18.5-5l173-100.1c5.7-3.3 10.2-8.1 13-13.9l86.4-179.7c2.8-5.8 4.2-12.1 4.2-18.5V428.3c0-6.4-1.4-12.7-4.2-18.5l-86.4-179.7c-2.8-5.8-7.3-10.6-13-13.9l-173-100.1c-5.7-3.3-12.1-5-18.5-5H315.7c-6.4 0-12.8 1.7-18.5 5l-173 100.1z" fill="#3770FF"/>
                        <path d="M371.4 345h164c72.4 0 131 58.6 131 131s-58.6 131-131 131h-164V345z" fill="#FFFFFF"/>
                      </svg>
                      <div>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 900, color: '#fff' }}>
                          DEV<span style={{ color: '#3770FF' }}>FOLIO</span>
                        </span>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>CONDUIT PORTAL</div>
                      </div>
                    </div>
                    <div className="btn-cyber-solid" style={{ background: 'var(--accent-blue)', borderColor: 'var(--accent-blue)', color: '#000', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', fontSize: '0.75rem', height: 'fit-content' }}>
                      <span>REGISTER</span>
                      <ArrowRight size={12} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
         OFFICIAL INTERACTIVE DECRYPTION MINI-GAME MODAL
         ========================================== */}
      {gameModalOpen && (
        <div className="modal-overlay" onClick={() => setGameModalOpen(false)}>
          <div className="modal-content-wrapper" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <div className="accent-corner tl"></div>
            <div className="accent-corner tr"></div>
            <div className="accent-corner bl"></div>
            <div className="accent-corner br"></div>

            <div className="modal-header">
              <h3 className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Gamepad2 size={20} className="glow-text-green" />
                <span>FIREWALL DECRYPTION KEY</span>
              </h3>
              <button className="btn-modal-close" onClick={() => setGameModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Reconfigure the ECE node by alignment. Connect 3 nodes in a line (X) to bypass secure firewall keys!
              </p>

              {/* Score indicators */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-green)' }}>HACKER SCORE</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>{hackerScore}</span>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', height: '40px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#ff3300' }}>MAINFRAME</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>{systemScore}</span>
                </div>
              </div>

              {/* The Tic-Tac-Toe Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                maxWidth: '280px',
                margin: '0 auto 20px',
              }}>
                {board.map((cell, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    disabled={cell !== null || !isPlayerTurn || tttWinner !== null}
                    style={{
                      aspectRatio: '1',
                      background: cell === 'X' ? 'rgba(0, 255, 102, 0.1)' : cell === 'O' ? 'rgba(255, 51, 0, 0.1)' : '#020603',
                      border: cell === 'X' ? '1px solid var(--accent-green)' : cell === 'O' ? '1px solid #ff3300' : '1px solid rgba(0, 255, 102, 0.25)',
                      borderRadius: '4px',
                      color: cell === 'X' ? 'var(--accent-green)' : cell === 'O' ? '#ff3300' : '#fff',
                      fontSize: '1.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 'bold',
                      cursor: (cell || !isPlayerTurn || tttWinner) ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: cell === 'X' ? '0 0 10px rgba(0, 255, 102, 0.15)' : cell === 'O' ? '0 0 10px rgba(255, 51, 0, 0.15)' : 'none'
                    }}
                  >
                    {cell}
                  </button>
                ))}
              </div>

              {/* Status Message */}
              <div style={{
                background: '#020603',
                border: '1px solid rgba(0, 255, 102, 0.15)',
                padding: '12px',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: tttWinner === 'O' ? '#ff3300' : 'var(--accent-green)',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {tttMessage}
              </div>

              {/* Reset Controls */}
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button
                  className="btn-cyber-outline"
                  onClick={handleResetTtt}
                  style={{ fontSize: '0.82rem', padding: '10px 20px', cursor: 'pointer' }}
                >
                  REBOOT CORE
                </button>
                <button
                  className="btn-cyber-solid"
                  onClick={() => setGameModalOpen(false)}
                  style={{ fontSize: '0.82rem', padding: '10px 20px', background: 'var(--accent-green)', color: '#000', cursor: 'pointer' }}
                >
                  CLOSE PORTAL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
         THANOS POLLUTION GAUNTLET WIDGET
         ========================================== */}
      <div 
        style={{
          fontFamily: 'var(--font-mono)'
        }}
        id="gauntlet-container"
        className="gauntlet-fixed-trigger"
      >
        {!gauntletExpanded ? (
          <div 
            onClick={() => {
              playSfx('click');
              setGauntletExpanded(true);
            }}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(15, 6, 2, 0.95)',
              border: pollutionActive ? '1px solid #ff3300' : '1px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: pollutionActive ? '0 0 20px rgba(255, 51, 0, 0.6)' : '0 0 10px rgba(255, 183, 3, 0.3)',
              animation: pollutionActive ? 'toxicPulse 1.5s infinite' : 'none',
              transition: 'all 0.3s'
            }}
            title="Open Pollution Gauntlet"
          >
            {/* Golden Gauntlet SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8C5 6.89543 5.89543 6 7 6H8C9.10457 6 10 6.89543 10 8V10H5V8Z" fill={pollutionLevel > 15 ? "#ff3300" : "var(--accent-gold)"} opacity="0.8"/>
              <path d="M10 7C10 5.89543 10.8954 5 12 5H13C14.1046 5 15 5.89543 15 7V10H10V7Z" fill={pollutionLevel > 35 ? "#ff8800" : "var(--accent-gold)"} opacity="0.8"/>
              <path d="M15 8C15 6.89543 15.8954 6 17 6H18C19.1046 6 20 6.89543 20 8V10H15V8Z" fill={pollutionLevel > 55 ? "#ffcc00" : "var(--accent-gold)"} opacity="0.8"/>
              <path d="M4 11C4 9.89543 4.89543 9 6 9H7C8.10457 9 9 9.89543 9 11V13H4V11Z" fill={pollutionLevel > 75 ? "#00ff66" : "var(--accent-gold)"} opacity="0.8"/>
              <path d="M5 13H19C19.5523 13 20 13.4477 20 14V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V14C4 13.4477 4.45228 13 5 13Z" fill="var(--accent-gold)" stroke="#3a2003" strokeWidth="1"/>
              <circle cx="7" cy="16" r="1.5" fill="#00e5ff" opacity={pollutionActive ? 1 : 0.4}/>
              <circle cx="12" cy="15" r="1.5" fill="#ea755f" opacity={pollutionActive ? 1 : 0.4}/>
              <circle cx="17" cy="16" r="1.5" fill="#a855f7" opacity={pollutionActive ? 1 : 0.4}/>
              <circle cx="12" cy="19" r="2" fill={pollutionActive ? "#ff3300" : "#a1824a"} />
            </svg>
          </div>
        ) : (
          <div style={{
            background: 'rgba(15, 6, 2, 0.98)',
            border: pollutionActive ? '1px solid #ff3300' : '1px solid var(--accent-gold)',
            borderRadius: '10px',
            padding: '12px',
            boxShadow: pollutionActive ? '0 0 25px rgba(255, 51, 0, 0.5)' : '0 0 15px rgba(255, 183, 3, 0.2)',
            width: '210px',
            boxSizing: 'border-box',
            transition: 'all 0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div 
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: pollutionActive ? 'rgba(255,51,0,0.15)' : 'rgba(255,183,3,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: pollutionActive ? '1px solid #ff3300' : '1px solid var(--accent-gold)',
                  }}
                  onClick={() => {
                    playSfx('snap');
                    setPollutionSnapping(true);
                    setTimeout(() => {
                      const stateVal = !pollutionActive;
                      setPollutionActive(stateVal);
                      if(stateVal) {
                        setPollutionLevel(1);
                      } else {
                        setPollutionLevel(0);
                      }
                      setPollutionSnapping(false);
                    }, 500);
                  }}
                  title="Snap emissions!"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8C5 6.89543 5.89543 6 7 6H8C9.10457 6 10 6.89543 10 8V10H5V8Z" fill={pollutionLevel > 15 ? "#ff3300" : "var(--accent-gold)"} opacity="0.8"/>
                    <path d="M10 7C10 5.89543 10.8954 5 12 5H13C14.1046 5 15 5.89543 15 7V10H10V7Z" fill={pollutionLevel > 35 ? "#ff8800" : "var(--accent-gold)"} opacity="0.8"/>
                    <path d="M15 8C15 6.89543 15.8954 6 17 6H18C19.1046 6 20 6.89543 20 8V10H15V8Z" fill={pollutionLevel > 55 ? "#ffcc00" : "var(--accent-gold)"} opacity="0.8"/>
                    <path d="M4 11C4 9.89543 4.89543 9 6 9H7C8.10457 9 9 9.89543 9 11V13H4V11Z" fill={pollutionLevel > 75 ? "#00ff66" : "var(--accent-gold)"} opacity="0.8"/>
                    <path d="M5 13H19C19.5523 13 20 13.4477 20 14V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V14C4 13.4477 4.45228 13 5 13Z" fill="var(--accent-gold)" stroke="#3a2003" strokeWidth="1"/>
                  </svg>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: pollutionActive ? '#ff3300' : 'var(--accent-gold)', lineHeight: '1.1' }}>
                    GAUNTLET
                  </span>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                    {pollutionActive ? 'EMISSIONS' : 'SAFE'}
                  </span>
                </div>
              </div>

              {/* Close/Minimize button */}
              <button 
                onClick={() => {
                  playSfx('click');
                  setGauntletExpanded(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Minimize Panel"
              >
                [X]
              </button>
            </div>

            <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', margin: '0 0 8px 0', lineHeight: '1.3', fontFamily: 'var(--font-sans)' }}>
              Click Glove to Snap. Cycle biosphere decay.
            </p>

            {pollutionActive ? (
              <div style={{ borderTop: '1px solid rgba(255,51,0,0.15)', paddingTop: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#ff9980', marginBottom: '4px' }}>
                  <span>DECAY LEVEL:</span>
                  <span style={{ fontWeight: 'bold' }}>{pollutionLevel}%</span>
                </div>
                
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={pollutionLevel} 
                  onChange={(e) => {
                    setPollutionLevel(parseInt(e.target.value));
                  }}
                  style={{
                    width: '100%',
                    accentColor: '#ff3300',
                    height: '3px',
                    outline: 'none',
                    cursor: 'pointer',
                    background: '#331105',
                    borderRadius: '2px',
                    marginBottom: '8px'
                  }}
                />

                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => {
                      setPollutionLevel(100);
                    }}
                    style={{
                      flex: 1,
                      background: 'rgba(255,51,0,0.15)',
                      color: '#ff3300',
                      border: '1px solid rgba(255,51,0,0.3)',
                      fontSize: '0.58rem',
                      padding: '3px 0',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    INSTANT MELT
                  </button>
                  <button
                    onClick={() => {
                      playSfx('click'); // healing chord trigger
                      setPollutionLevel(0);
                      setPollutionActive(false);
                    }}
                    style={{
                      flex: 1,
                      background: 'rgba(0,255,102,0.1)',
                      color: 'var(--accent-green)',
                      border: '1px solid rgba(0,255,102,0.3)',
                      fontSize: '0.58rem',
                      padding: '3px 0',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    HEAL EARTH
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  playSfx('snap');
                  setPollutionSnapping(true);
                  setTimeout(() => {
                    setPollutionActive(true);
                    setPollutionLevel(1);
                    setPollutionSnapping(false);
                  }, 500);
                }}
                style={{
                  width: '100%',
                  background: 'rgba(255,183,3,0.08)',
                  color: 'var(--accent-gold)',
                  border: '1px solid rgba(255,183,3,0.3)',
                  fontSize: '0.62rem',
                  padding: '4px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                TRIGGER DECAY SNAP
              </button>
            )}
          </div>
        )}
      </div>

      {/* ==========================================
         CYBER BGM BACKGROUND SOUND WIDGET
         ========================================== */}
      <div 
        className="cyber-bgm-widget" 
        onClick={toggleSound}
        title={isPlayingSound ? "Pause Cyber Soundtrack" : "Play Cyber Soundtrack"}
      >
        {isPlayingSound ? (
          <Volume2 size={16} className="glow-text-green" style={{ color: '#84ec30' }} />
        ) : (
          <VolumeX size={16} style={{ color: 'rgba(255,255,255,0.4)' }} />
        )}
        <span className="cyber-bgm-text">
          {isPlayingSound ? "BGM: ACTIVE" : "BGM: MUTED"}
        </span>
        <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '15px' }}>
          <div className={`equalizer-bar ${isPlayingSound ? 'animating' : ''}`} />
          <div className={`equalizer-bar ${isPlayingSound ? 'animating' : ''}`} />
          <div className={`equalizer-bar ${isPlayingSound ? 'animating' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export function generateMultiAgentAnalysis(ideaText: string) {
  const text = ideaText || 'Smart atmospheric monitoring array';
  
  // Keyword mapping
  const matches = (keywords: string[]) => keywords.some(k => text.toLowerCase().includes(k));
  
  let category = 'Smart Cyber-Physical IoT Gateway';
  let deviceAlign = 'Standard microcontroller meshes and multi-sensor routing';
  let sensorsUsed = 'Atmospheric sensors (BME280), localized telemetry, and RF arrays';
  let commercialExisting = 'Generic smart monitoring hubs and commercial climate stations';
  let noveltyRoom = 'Self-powering ultra-low-power sleep configurations with localized tinyML anomaly classification networks';
  
  if (matches(['agri', 'soil', 'crop', 'irrigation', 'plant', 'farm', 'moisture'])) {
    category = 'Precision Agritech & Soil Sensing System';
    deviceAlign = 'ESP32-S3 boards combined with capacitive moisture relays and solar-coupled charging boards';
    sensorsUsed = 'DFRobot Soil Moisture Capacitives, NPK Nitrogen-Phosphorus-Potassium RS485 probes, and DS18B20 digital thermal probes';
    commercialExisting = 'Standard Bluetooth-based garden soil testers and generic automated lawn sprinklers';
    noveltyRoom = 'Distributed LoRa Mesh nodes calculating real-time soil hydration transiency based on atmospheric vapor deficit calculations locally';
  } else if (matches(['solar', 'battery', 'power', 'grid', 'renewable', 'electricity', 'charge', 'grid'])) {
    category = 'Smart Micro-Grid Energy Harvester';
    deviceAlign = 'NodeMCU ESP8266 or STM32 coupled with MPPT charge controllers and solid-state wireless relays';
    sensorsUsed = 'INA219 High-Side DC I2C current monitors, ACS712 Hall-effect current transformers, and ambient light phototransistors';
    commercialExisting = 'Commercial pure sine wave home controllers and passive solar battery telemetry modules';
    noveltyRoom = 'Dynamic charge-balancing algorithms deployed locally on-microcontroller preventing battery thermal runaway cycle wear under variable load transients';
  } else if (matches(['air', 'pollution', 'monitoring', 'carbon', 'greenhouse', 'co2', 'gas', 'smoke', 'pm2'])) {
    category = 'Atmospheric Carbon & Fine Particulate Telemetry Node';
    deviceAlign = 'Raspberry Pi Pico W or Heltec ESP32 with built-in OLED and multi-hop Wi-Fi loops';
    sensorsUsed = 'Sensirion SPS30 particulate matter sensors, MQ-135 hazardous gas detectors, and MH-Z19B NDIR CO2 sensors';
    commercialExisting = 'Consumer indoor air quality displays and standard wall-integrated industrial alarm boxes';
    noveltyRoom = 'TinyML neural network compilers running on Cortex-M0+ classifying toxic exhaust signatures using dynamic multi-gas cross-sensitivity curves';
  } else if (matches(['water', 'leak', 'flow', 'ocean', 'plastic', 'sea', 'hydro'])) {
    category = 'Hydrodynamic Leakage & Marine Ecosystem Sentinel';
    deviceAlign = 'Heltec ESP32 LoRa module with solid-state solenoid valves and lithium iron phosphate (LiFePO4) storage';
    sensorsUsed = 'YF-S201 Hall-Effect water flow meters, ultrasonic depth transceivers, and turbidity/acidity pH-sensitive electrode nodes';
    commercialExisting = 'Simple mechanical float switches, generic home smart shutoff valves, and high-frequency acoustic pipe monitors';
    noveltyRoom = 'Self-calibrating flow anomaly models that differentiate standard domestic consumption usage from low-rate systemic capillary piping fractures';
  } else if (matches(['health', 'medical', 'wearable', 'heart', 'pulse', 'body', 'temp'])) {
    category = 'Wearable Bio-Sensory Telemetry Patch';
    deviceAlign = 'Ultra-low voltage STM32L4 boards coupled with Bluetooth Low Energy (BLE) transmitters';
    sensorsUsed = 'MAX30102 pulse oximeter + heart-rate sensor, AD8232 single-lead ECG monitor, and MLX90614 contact-less infrared body thermometer';
    commercialExisting = 'Fitness activity bands, Apple watches, and static commercial optical bedside vital-sign monitors';
    noveltyRoom = 'Edge-driven ventricular premature contraction (VPC) classification running directly on BLE sleep nodes without streaming raw signal overhead';
  } else if (matches(['safety', 'security', 'alarm', 'alert', 'intrusion', 'theft', 'lock', 'fire', 'gas-leak'])) {
    category = 'Autonomous Emergency & Intrusion Sentinel Mesh';
    deviceAlign = 'ESP32 Cam boards with passive infrared motion arrays and wireless RF transmitters';
    sensorsUsed = 'PIR motion sensors, MQ-2 methane/LPG vapor arrays, sound-level dB capsules, and infrared barrier receivers';
    commercialExisting = 'Standard closed-circuit alarm circuits, residential smoke detectors, and ring doorbell active loops';
    noveltyRoom = 'Multi-spectrum sensory fusion (correlating sudden ambient sound spike, localized flame spectrum, and volatile organic vapor levels) to drastically minimize false alarm incidents';
  } else if (matches(['traffic', 'vehicle', 'car', 'autonomous', 'road', 'path', 'city'])) {
    category = 'Decentralized V2X Smart-City Transit Interface';
    deviceAlign = 'ESP32-S3 Dual-Core processors connected to low-power ultrasonic and radar matrices';
    sensorsUsed = 'Ultrasonic distance sensors, microwave Doppler radar modules, and ambient carbon sensors';
    commercialExisting = 'Inductive road-loop metal detectors, centralized red-light traffic cameras, and simple active countdown timers';
    noveltyRoom = 'Dynamic traffic-light phase control computed locally on sub-GHz mesh nodes, allocating transit priorities based of continuous physical approach vectors';
  }

  return {
    gemini: `[GEMINI 3.5 CORE ENGINE ANALYSIS]
CATEGORY ALIGNMENT: ${category}
FEASIBILITY & INTEGRATION COEFFICIENT: 9.4 / 10

1. HARDWARE REALIZATION PROTOCOL:
To deploy this, utilize the ${deviceAlign}. Gemini recommends binding the following sensory inputs:
- ${sensorsUsed}.
Compute processing loop using an interrupt-style routine (to preserve battery life).

2. THE "SOCIETY-LINE" FEASIBILITY FACTOR:
- Prior Art: ${commercialExisting} is abundant and heavily saturated. Merely displaying these metrics on a standard Blynk.IO dashboard will fail to secure high marks from the university jury on "Technical Complexity".
- Novelty Vector (Your Inventive Space): ${noveltyRoom}. This is where you score! You can implement a dynamic offline sensor diagnostic, or trigger localized edge classification loops using micro-compiled TinyML models.

3. OPTIMIZED EMBEDDED SPECS:
- Recommended Chipset: ESP32-WROOM-32D Core (240MHz, 4MB Flash).
- Power Saving Mode: Deep-Sleep under ULP (Ultra-Low-Power) co-processor routing pulling ~15 microamps.
- Antenna Protocol: External gain IPEX antenna to pierce metallic encasement shield barriers.`,

    chatgpt: `🚀 [CHATGPT-4o MULTI-AGENT SWARM REPORT]
ALIGNMENT DOMAIN: ${category}
PROJECT VIABILITY STATUS: Highly Prospective!

💡 WHAT'S ALREADY SATURATED IN THE MARKET:
Let's keep it 100% real: ${commercialExisting} is everywhere. If your team shows up with a project that just prints values to an LCD screen, you risk blending in. Practically every standard YouTube tutorial has built some version of that.

🔥 THE "INNOVATIVE GAP" TO INVENT SOMETHING NEW:
This is where you make yours legendary:
- Focus on ${noveltyRoom}.
- Construct an active feedback loop where the device doesn't just read values, but self-heals by triggering an physical relay or warning pattern locally.
- Build a lightweight mesh mechanism so nodes communicate locally without relying on the campus Wi-Fi structure.

🛠️ PROPOSED BLUEPRINT SPECIFICATION:
1. Core Controller: ESP32-S3 Dual Core (with AI acceleration vectors).
2. Sensory Array: ${sensorsUsed}.
3. Firmware Framework: Arduino C++ utilizing FreeRTOS for multi-threaded task management. Check tasks continuously to prevent buffer overflows!`,

    claude: `[CLAUDE 3.5 SYSTEMIC BLUEPRINT]
SYSTEM ARCHITECTURE: ${category}
FEASIBILITY & STRUCTURAL INTEGRITY RATING: Pristine / Production-Oriented

I. SYSTEMIC ALIGNMENT ANALYSIS:
At first glance, your proposed idea matches standard ${category} archetypes. However, to translate this into a truly sustainable, high-viability deployment, we must move beyond standard consumer boards and explore industrial lifecycle constraints. 

II. INVENTIVE ROOM & SUSTAINABLE CIRCULARITY CORES:
- Saturated Marketspace: Current implementations representing ${commercialExisting} suffer from rapid battery decay and delicate, non-rigid structural casing models.
- Novelty Space (Your Advantage): ${noveltyRoom}. Focus on physical circularity. Implement an off-grid energy harvester that monitors its own battery health indexes and dynamically switches between solar and secondary battery reservoirs.

III. SEAMLESS DEPLOYMENT SCHEMAS:
- Controller Choice: Raspberry Pi Pico W or Heltec ESP32 with built-in LoRa, providing extremely low-power continuous polling.
- Shell Casing: SLA-printed biomaterial casings (IP67 certified) styled with ventilation labyrinths allowing moisture drain-off.
- Sensor Mapping: ${sensorsUsed} wired safely with shielded coaxial cables to minimize ambient electrical electromagnetic interference (EMI).`,

    deepseek: `🐳 [DEEPSEEK-R1 ENGINE VERDICT]
SYSTEM ASSEMBLY PROTOCOL: ${category}
ESTIMATED PROTOTYPING COST MATRIX: $14.85 - $22.50 USD

1. LOW-LEVEL MCU REGISTRY & INSTRUCTION PARAMETERS:
To maximize physical battery lifetime, deep sleep states must bypass the standard Arduino delay loop entirely.
Use the ESP32 Low-Power registry configurations:
\`\`\`cpp
// Deep Sleep Configuration for Ultra Low Power state
esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 1); // Trigger wake loop on sensor state
esp_deep_sleep_start();
\`\`\`
Configure hardware registers to shut down unused peripherals (Wi-Fi and Bluetooth radio grids) during passive cycles.

2. COMMERCIAL PRIOR-ART vs. TEAM INVENTION WINDOW:
- Existing Tech Layer: ${commercialExisting} relies on continuous power grid connectivity and active cloud processing.
- Team Novelty Vector: ${noveltyRoom}. This can be easily implemented with a standard memory-efficient decision-tree model compiled into plain C using Edge Impulse CLI.

3. DETAILED BILL OF MATERIALS (BOM) ASSEMBLY:
- Core Processor: ESP32 (30-pin variant) — estimated $3.20
- Sensors Module: ${sensorsUsed} — estimated $7.50
- Charging Core: TP4056 with 18650 Lipo cell — estimated $2.80
- Structural elements: Polycarbonate Case & copper wire — estimated $1.50`,

    perplexity: `[PERPLEXITY.AI RESEARCH GROUNDING SYNTHESIS]
ACADEMIC DOMAIN: ${category}
ACADEMIC NOVELTY SCORE: 92% Confirmed

1. STATE-OF-THE-ART LITERATURE CRITIQUE:
Recent publications in IEEE Transactions on Mobile Computing (2025) and ACM Transactions on Internet of Things (2024) indicate that while basic ${commercialExisting} has been fully solved, major challenges persist in localized mesh sync, sensor signal degradation, and power management. 

2. TARGET INVENTIVE ADVANTAGE FOR THE REVIEW PANEL:
- Saturated: Simple sensor data streaming over Wi-Fi is academically dead. Reviewers will immediately challenge this on network fragility.
- High-Viability Novelty: ${noveltyRoom}.
- Citations to Leverage:
  - 'Distributed Low-Power Soil Diagnostics on LoRa Sub-GHz Meshes' (Journal of Agritech Informatics, 2024)
  - 'tinyML: Edge-based Predictive Telemetry under Drastic Environmental Degradation' (IEEE Open-Access, 2025)

3. PHYSICO-TECHNICAL HARDWARE MATRIX:
- Primary MCU: STM32L432KC (extremely low-power ARM Cortex-M4).
- Peripheral Shielding: Optocouplers to completely isolate sensor surge currents from processor core power rails.`
  };
}
