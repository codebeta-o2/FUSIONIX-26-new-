import React, { useState, useEffect } from 'react';
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
  Search
} from 'lucide-react';

// Define safe URL references to static generated assets
const roboninjaHeroImg = "/src/assets/images/roboninja_hero_1781580759799.jpg";
const shadowXImg = "/src/assets/images/shadow_x_1781580781018.jpg";
const stealth07Img = "/src/assets/images/stealth_07_1781580797326.jpg";
const nighthawkImg = "/src/assets/images/nighthawk_gold_1781580817851.jpg";
const cyberVImg = "/src/assets/images/cyber_v_blue_1781580834832.jpg";
const targetRobotImg = "/src/assets/images/target_robot_1781580853723.jpg";

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
  style?: React.CSSProperties;
}

function SmartLogo({ src, alt, fallbackText, style }: SmartLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
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
      style={{ height: '38px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(0, 255, 102, 0.45))', ...style }}
      onError={() => setHasError(true)}
    />
  );
}

export default function App() {
  // Loading Screen & Mini-Game State
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bypassCountdown, setBypassCountdown] = useState<number>(30);
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
          setIsLoading(false);
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

  // Countdown timer for Registration Close
  const [timeLeft, setTimeLeft] = useState({
    hours: 71,
    minutes: 34,
    seconds: 15,
    ms: 99
  });

  // Ticking countdown effect
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
      a: 'FusioniX is an epic 24-hour hackathon to show your skills, network with fellow engineers, and construct physical solutions for a smarter, greener, and more connected tomorrow. Participation earns elite certificates, professional mentoring, and access to a ₹50,000 cash prize pool!'
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
        setIsLoading(false);
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
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#020603',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        color: '#fff',
        padding: '20px',
        overflowY: 'auto'
      }}>
        {/* Glowing Matrix Theme grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0, 0, 0, 0.95), rgba(4, 18, 9, 0.95))',
          backgroundImage: 'radial-gradient(ellipse at center, rgba(0, 255, 102, 0.08) 0%, rgba(0, 0, 0, 0.98) 75%)',
          zIndex: -1
        }}></div>

        <div style={{
          width: '100%',
          maxWidth: '520px',
          background: 'rgba(5, 15, 8, 0.93)',
          border: '1px solid rgba(0, 255, 102, 0.3)',
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 0 25px rgba(0, 255, 102, 0.15)',
          position: 'relative'
        }}>
          {/* Accent corners */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '12px', borderTop: '2px solid var(--accent-green)', borderLeft: '2px solid var(--accent-green)' }}></div>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', borderTop: '2px solid var(--accent-green)', borderRight: '2px solid var(--accent-green)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '12px', height: '12px', borderBottom: '2px solid var(--accent-green)', borderLeft: '2px solid var(--accent-green)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderBottom: '2px solid var(--accent-green)', borderRight: '2px solid var(--accent-green)' }}></div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '16px', background: 'rgba(0, 255, 102, 0.03)', border: '1px solid rgba(0, 255, 102, 0.15)', marginBottom: '14px' }}>
              <img 
                src="/src/assets/images/logo.png" 
                alt="FusioniX Logo" 
                style={{ height: '80px', width: 'auto', filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.45))' }} 
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '1px', color: '#fff', margin: '0 0 4px' }}>
              FUSION<span className="glow-text-green">IX</span> BOOT SYSTEM
            </h1>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', letterSpacing: '0.5px' }}>
              SECURE TELEMETRY NODES INITIALIZING...
            </span>
          </div>

          {/* Interactive Tic Tac Toe Game Block */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 255, 102, 0.15)',
            borderRadius: '6px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>
                PORT SECURITY CODES
              </span>
              <span style={{ fontSize: '0.72rem', background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', padding: '3px 8px', borderRadius: '3px', fontFamily: 'var(--font-mono)' }}>
                HACKER: {hackerScore} | SYSTEM: {systemScore}
              </span>
            </div>

            {/* Tic Tac Toe Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              maxWidth: '240px',
              margin: '15px auto 20px'
            }}>
              {board.map((cell, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleCellClick(idx)}
                  style={{
                    aspectRatio: '1',
                    background: 'rgba(0, 0, 0, 0.65)',
                    border: cell 
                      ? cell === 'X' 
                        ? '1px solid rgba(0, 255, 102, 0.6)' 
                        : '1px solid rgba(13, 148, 136, 0.6)'
                      : '1px solid rgba(0, 255, 102, 0.15)',
                    borderRadius: '6px',
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: cell || tttWinner ? 'not-allowed' : 'pointer',
                    color: cell === 'X' ? '#00ff66' : '#00e5ff',
                    textShadow: cell === 'X' 
                      ? '0 0 10px rgba(0, 255, 102, 0.8)' 
                      : cell === 'O' 
                        ? '0 0 10px rgba(0, 229, 255, 0.8)' 
                        : 'none',
                    transition: 'all 0.15s ease',
                    boxShadow: cell ? 'inset 0 0 8px rgba(0, 0, 0, 0.8)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!cell && !tttWinner) {
                      e.currentTarget.style.borderColor = 'rgba(0, 255, 102, 0.7)';
                      e.currentTarget.style.background = 'rgba(0, 255, 102, 0.05)';
                      e.currentTarget.style.boxShadow = '0 0 8px rgba(0, 255, 102, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!cell && !tttWinner) {
                      e.currentTarget.style.borderColor = 'rgba(0, 255, 102, 0.15)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {cell}
                </button>
              ))}
            </div>

            {/* Game Message Context Terminal */}
            <p style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              lineHeight: '1.4',
              color: tttWinner === 'O' ? '#ff4f4f' : tttWinner === 'X' ? '#00ff66' : 'var(--text-secondary)',
              minHeight: '44px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '4px',
              padding: '6px 14px',
              border: '1px dashed rgba(255, 255, 255, 0.05)',
              marginBottom: '15px'
            }}>
              {tttMessage}
            </p>

            <button 
              type="button" 
              onClick={handleResetTtt}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                border: '1px dashed rgba(255, 255, 255, 0.15)',
                borderRadius: '4px',
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.borderColor = 'var(--accent-green)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
            >
              <span>RESET HACK CYCLES BOARD</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center' }}>
            <button
              onClick={() => setIsLoading(false)}
              className="btn-cyber-secondary"
              style={{
                width: '100%',
                justifyContent: 'center',
                border: '1px dashed rgba(0, 255, 102, 0.3)',
                padding: '10px',
                fontSize: '0.8rem',
                background: 'transparent',
                cursor: 'pointer'
              }}
            >
              <span>BY-PASS SECURITY & ENTER HUB{isAutoCloseActive ? ` (${bypassCountdown}s)` : ''}</span>
            </button>
            <span style={{ fontSize: '0.62rem', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-mono)' }}>
              ECE-IoT SECURITY PARADIGM SHIELD v2.4.9
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Matrix background code styles */}
      <div className="matrix-canvas" id="matrixEffect"></div>

      {/* ==========================================
         TOP NAVIGATION BAR
         ========================================== */}
      <nav className="navbar" style={{ borderBottom: '1px solid rgba(0, 255, 102, 0.15)' }}>
        <a href="#home" className="nav-brand" onClick={() => { setActiveMenu('home'); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}>
          <img 
            src="/src/assets/images/logo.png" 
            alt="FusioniX Logo" 
            style={{ height: '34px', width: 'auto', marginRight: '4px', filter: 'drop-shadow(0 0 6px rgba(0, 255, 102, 0.4))' }} 
            referrerPolicy="no-referrer"
          />
          <span>FUSIONIX</span>
        </a>

        {/* Navigation Menu Links */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeMenu === 'home' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('home'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeMenu === 'about' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('about'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#tracks" 
              className={`nav-link ${activeMenu === 'tracks' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('tracks'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              Tracks
            </a>
          </li>
          <li>
            <a 
              href="#rules" 
              className={`nav-link ${activeMenu === 'rules' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('rules'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              Rules
            </a>
          </li>
          <li>
            <a 
              href="#timeline" 
              className={`nav-link ${activeMenu === 'timeline' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('timeline'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              Timeline
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              className={`nav-link ${activeMenu === 'team' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('team'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              Teams
            </a>
          </li>
          <li>
            <a 
              href="#faq" 
              className={`nav-link ${activeMenu === 'faq' && !viewingSponsorsPage && !viewingFacultyPage ? 'active' : ''}`}
              onClick={() => { setActiveMenu('faq'); setMobileMenuOpen(false); setViewingSponsorsPage(false); setViewingFacultyPage(false); }}
            >
              FAQ
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
              src="/src/assets/images/UEM-BALCK.png" 
              alt="University Logo" 
              fallbackText="UEM"
            />
            <SmartLogo 
              src="/src/assets/images/iem-blac.png" 
              alt="Department Logo" 
              fallbackText="ECE & CSE"
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
      ) : viewingFacultyPage ? (
        <div style={{ padding: '120px 8% 80px', minHeight: '85vh', position: 'relative' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <button
              onClick={() => {
                setViewingFacultyPage(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="btn-cyber-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', cursor: 'pointer', padding: '10px 20px' }}
            >
              <ArrowLeft size={16} />
              <span>RETURN TO MAIN TERMINAL</span>
            </button>

            <div style={{ borderBottom: '1px solid rgba(0, 255, 102, 0.25)', paddingBottom: '30px', marginBottom: '50px' }}>
              <span className="overline">AUXILIARY FACULTY REGISTRY</span>
              <h2 className="glow-text-green" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '15px', textTransform: 'uppercase' }}>
                FUSIONIX EXTRA BOARD OF INTEGRATORS
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Dedicated faculty mentors coordinating hardware setups, laboratory spaces, and regulatory compliances across the ECE and CSE departments.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
              {[
                {
                  name: "Prof. Dr. Rajeev Chatterjee",
                  designation: "Professor, CSE (IoT) Department",
                  initials: "RC",
                  color: "var(--accent-green)",
                  desc: "Expert in internet core protocols, distributed databases, cyber-physical security, and high-performance sensor integrations.",
                  email: "rajeev.chatterjee@uem.edu.in",
                  linkedin: "https://linkedin.com"
                },
                {
                  name: "Prof. Dr. Sandip Chandra",
                  designation: "Associate Professor, ECE Department",
                  initials: "SC",
                  color: "var(--accent-blue)",
                  desc: "Specialist in high-gain antennas, wireless smart node designs, low-power embedded software architectures, and RF telemetry systems.",
                  email: "sandip.chandra@uem.edu.in",
                  linkedin: "https://linkedin.com"
                },
                {
                  name: "Prof. Dr. Souren Mitra",
                  designation: "Assistant Professor, CSE Department",
                  initials: "SM",
                  color: "var(--accent-purple)",
                  desc: "Specialist in edge cloud deployments, real-time sensory data streams, lightweight REST APIs, and embedded ML compilers.",
                  email: "souren.mitra@uem.edu.in",
                  linkedin: "https://linkedin.com"
                },
                {
                  name: "Prof. Debasri Roy",
                  designation: "Assistant Professor, ECE Department",
                  initials: "DR",
                  color: "var(--accent-gold)",
                  desc: "Academic researcher specializing in analog signal processing, microelectronic sensor arrays, smart node packaging, and green hardware structures.",
                  email: "debasri.roy@uem.edu.in",
                  linkedin: "https://linkedin.com"
                }
              ].map((faculty, idx) => (
                <div 
                  key={idx} 
                  className="team-member-card green"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}
                >
                  <div className="team-card-corners" />
                  <div>
                    <div className="team-card-inner" style={{ marginBottom: '20px' }}>
                      <div className="team-avatar-frame" style={{ borderColor: faculty.color }}>
                        <SmartAvatar 
                          src={`/input_file_faculty_${idx + 13}.png`} 
                          alt={faculty.name} 
                          initials={faculty.initials} 
                          accentColor={faculty.color}
                        />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', fontWeight: 700, lineHeight: '1.25' }}>{faculty.name}</h4>
                        <span style={{ color: faculty.color, fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{faculty.designation}</span>
                      </div>
                    </div>

                    <p className="team-card-desc" style={{ minHeight: '90px', margin: '0 0 20px 0' }}>
                      {faculty.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '15px', display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    <a 
                      href={`mailto:${faculty.email}`} 
                      title="Send Email"
                      className="team-social-btn"
                    >
                      <Mail size={14} />
                    </a>
                    <a 
                      href={faculty.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="LinkedIn Profile"
                      className="team-social-btn"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ==========================================
             HERO SECTION WITH CHROME ROTATING GRID
             ========================================== */}
          <section className="hero" id="home">
        <div className="hero-left">
          <span className="overline">ECE & CSE (IoT) PRESENT</span>
          <h1 className="hero-title" style={{ textTransform: 'none' }}>
            FUSION<span className="glow-text-green">IX</span>
          </h1>
          <p className="hero-desc">
            <strong>THE ULTIMATE SUSTAINABLE TECH & IoT INNOVATION HACKATHON.</strong> <br />
            Prototype custom integrated systems across multi-competitive domains. Build hardware and software designs for a smarter, greener, and more connected tomorrow.
          </p>

          <div className="hero-btn-group" style={{ flexWrap: 'wrap', gap: '15px' }}>
            <a 
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-solid"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                setShowScholarSuggestionModal(true);
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight size={18} />
            </a>
            <button 
              onClick={() => {
                handleResetTtt();
                setIsLoading(true);
              }}
              className="btn-cyber-outline"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '12px 20px', 
                background: 'rgba(0, 255, 102, 0.04)',
                borderColor: 'rgba(0, 255, 102, 0.45)',
                color: 'var(--accent-green)'
              }}
              title="Re-open Port Decrypt Security Code Game"
            >
              <Gamepad2 size={16} />
              <span>PLAY CODES GAME</span>
            </button>
          </div>
        </div>

        {/* Robot platform and telemetry details */}
        <div className="hero-right">
          <div className="pedestal-container">
            <div className="hologram-circle-outer"></div>
            <div className="hologram-circle-inner"></div>
            <div className="pedestal-glow"></div>

            <img 
              src={roboninjaHeroImg} 
              className="hero-robot-image" 
              alt="Holographic Mascot Guarding Node" 
              referrerPolicy="no-referrer"
            />

            {/* Floating Telemetry Metric Overlays */}
            <div className="floating-stat-panel panel-stat-1" style={{ width: '220px' }}>
              <div className="floating-icon">
                <Award size={20} className="glow-text-green" />
              </div>
              <div className="floating-info">
                <span className="floating-val">₹50,000</span>
                <span className="floating-lbl">Grand Cash Prize Pool</span>
              </div>
            </div>

            <div className="floating-stat-panel panel-stat-2" style={{ width: '230px' }}>
              <div className="floating-icon">
                <Activity size={20} style={{ color: '#00ff66' }} />
              </div>
              <div className="floating-info">
                <span className="floating-lbl">REGISTRATION CLOSING</span>
                <span className="timer-text">
                  {timeLeft.hours.toString().padStart(2, '0')}:
                  {timeLeft.minutes.toString().padStart(2, '0')}:
                  {timeLeft.seconds.toString().padStart(2, '0')}
                  <span style={{ fontSize: '0.8rem', opacity: 0.8 }} className="glow-text-green">.{timeLeft.ms.toString().padStart(2, '0')}</span>
                </span>
              </div>
            </div>

            <div className="floating-stat-panel panel-stat-3">
              <div className="floating-icon">
                <Calendar size={20} style={{ color: '#ffb703' }} />
              </div>
              <div className="floating-info">
                <span className="floating-val">24 HOURS</span>
                <span className="floating-lbl">Hackathon Sprint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         ABOUT THE HACKATHON
         ========================================== */}
      <section className="benefit-rail" id="about" style={{ background: 'rgba(4, 12, 7, 0.8)', borderTop: '1px solid rgba(0, 255, 102, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', textAlign: 'center', marginBottom: '50px' }}>
            <div>
              <span className="overline">EVENT OVERVIEW</span>
              <h2 className="collection-main-title" style={{ fontSize: '2.8rem' }}>TRANSFORM IDEAS TO HARDWARE</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }} className="army-grid">
            <div>
              <div className="stat-box" style={{ width: '100%', marginBottom: '20px', display: 'block', padding: '30px' }}>
                <h3 className="benefit-title" style={{ color: 'var(--accent-green)', marginBottom: '15px' }}>ORGANIZED BY DEPARTMENTS OF ECE & CSE (IoT)</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  FusioniX, hosted at the University of Engineering & Management, is the paramount platform where developers build physical software-integrated blueprints. With no fixed stream limitations, teams pitch, map components, draft wiring diagrams, write firmware logic, and demonstrate physical models during real rounds.
                </p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
                  <span style={{ background: 'rgba(0, 255, 102, 0.08)', border: '1px solid var(--accent-green)', padding: '5px 12px', borderRadius: '4px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>IoT Systems</span>
                  <span style={{ background: 'rgba(0, 229, 255, 0.08)', border: '1px solid var(--accent-blue)', padding: '5px 12px', borderRadius: '4px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Sustainable Tech</span>
                  <span style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid var(--accent-gold)', padding: '5px 12px', borderRadius: '4px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Hardware Prototype</span>
                </div>
              </div>
            </div>

            {/* Event Core specs column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="stat-box" style={{ background: 'rgba(4, 10, 6, 0.5)' }}>
                <div className="stat-icon">
                  <MapPin size={22} style={{ color: 'var(--accent-green)' }} />
                </div>
                <div className="stat-content">
                  <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.1rem' }}>GRAND FINALE VENUE</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>University of Engineering & Management, Newtown Campus, Kolkata - 700160</span>
                </div>
              </div>

              <div className="stat-box" style={{ background: 'rgba(4, 10, 6, 0.5)' }}>
                <div className="stat-icon">
                  <FlameKindling size={22} style={{ color: 'var(--accent-blue)' }} />
                </div>
                <div className="stat-content">
                  <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.1rem' }}>UNRESTRICTED ACCESS</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Comprehensive kit utility setup. Standard 24Hr power backup nodes with high velocity internet support.</span>
                </div>
              </div>

              <div className="stat-box" style={{ background: 'rgba(4, 10, 6, 0.5)' }}>
                <div className="stat-icon">
                  <Coins size={22} style={{ color: 'var(--accent-gold)' }} />
                </div>
                <div className="stat-content">
                  <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.1rem' }}>AFFORDABLE FEE</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Standard 400 INR team fee, fully covering dynamic meal services (Breakfast, Lunch, Dinner, Drinks)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         SUSTECH IDEAS / AI COPILOT INTERACTIVE RAIL
         ========================================== */}
      <section className="benefit-rail" id="tracks">
        <div className="benefit-grid">
          {/* AI COPILOT CARD */}
          <div className="benefit-card">
            <div className="benefit-icon-box">
              <Cpu size={24} />
            </div>
            <h3 className="benefit-title">AI SMART COPILOT</h3>
            <p className="benefit-desc">
              Unsure about sustainable ideas? Use our dynamic idea synthesizer to generate customized ECE/IoT prototypes in real-time.
            </p>

            <div className="ai-interactive-panel" style={{ marginTop: 'auto' }}>
              <form onSubmit={runIdeaGenerator} className="ai-input-row">
                <input 
                  type="text" 
                  className="ai-minibox" 
                  placeholder="Keyword: e.g. waste, solar"
                  value={ideaKeyword}
                  onChange={(e) => setIdeaKeyword(e.target.value)}
                  disabled={aiGenerating}
                />
                <button type="submit" className="ai-minibtn">
                  {aiGenerating ? '...' : 'GENERATE'}
                </button>
              </form>
              <div className="ai-terminal-output" style={{ minHeight: '85px' }}>
                {aiTerminalLogs.map((log, idx) => (
                  <div key={idx} style={{ marginBottom: '3px' }}>{log}</div>
                ))}
              </div>
            </div>
          </div>

          {/* PRIZES BREAKDOWN CARD */}
          <div className="benefit-card">
            <div className="benefit-icon-box">
              <Coins size={24} style={{ color: 'var(--accent-gold)' }} />
            </div>
            <h3 className="benefit-title">₹50K PRIZE POOL</h3>
            <p className="benefit-desc">
              Substantial investments distributed perfectly across the most viable and highly polished sustainable models:
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>1st Place Champion</span>
                <span style={{ color: '#fff' }}>₹20,000 + Trophy</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>2nd Place Runner</span>
                <span style={{ color: '#fff' }}>₹15,000 + Trophy</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>3rd Place Runner</span>
                <span style={{ color: '#fff' }}>₹10,000 + Trophy</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span style={{ color: 'var(--accent-green)' }}>Best IoT Specialized</span>
                <span style={{ color: '#fff' }}>₹5,000</span>
              </div>
            </div>
          </div>

          {/* TEAM DYNAMICS CARD */}
          <div className="benefit-card">
            <div className="benefit-icon-box">
              <Users size={24} style={{ color: 'var(--accent-blue)' }} />
            </div>
            <h3 className="benefit-title">TEAM DYNAMICS</h3>
            <p className="benefit-desc">
              Teams must consist of exactly 3 to 4 participants. Cross-stream, cross-department, and cross-campus combinations are highly encouraged to build multi-disciplinary tech!
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <div className="mini-progress-track">
                <div className="mini-progress-fill" style={{ width: '100%', background: 'var(--accent-blue)' }}></div>
              </div>
            </div>
          </div>

          {/* PARTICIPANT BENEFITS CARD */}
          <div className="benefit-card">
            <div className="benefit-icon-box">
              <ShieldCheck size={24} />
            </div>
            <h3 className="benefit-title">HACKER BENEFITS</h3>
            <p className="benefit-desc">
              All registered candidates are entitled to first-rate infrastructure supplies for seamless prototyping:
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Check size={14} className="glow-text-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Premium lunch, evening snacks, hot tea, dinner, and morning breakfast</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Check size={14} className="glow-text-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Dedicated Wi-Fi access & continuous power terminals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         INNOVATION TRACKS (Procedurally Visually Stunning Cards)
         ========================================== */}
      <section className="collection-section" id="tracks">
        <div className="collection-header">
          <div className="collection-title-wrap">
            <span className="overline">CHOOSE YOUR TARGET DOMAIN</span>
            <h2 className="collection-main-title">EXPLORE DOMAIN TRACKS</h2>
          </div>

          {/* Filtering buttons */}
          <div className="collection-filters">
            {(['all', 'rare', 'epic', 'legendary'] as const).map(tab => (
              <button
                key={tab}
                className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
                style={{ textTransform: 'capitalize' }}
              >
                {tab === 'all' ? 'All Domains' : tab === 'rare' ? 'Standard Track' : tab === 'epic' ? 'Advanced Track' : 'Legendary Track'}
              </button>
            ))}
          </div>
        </div>

        {/* Google Scholar Idea Discovery Companion */}
        <div className="research-assistant-panel" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(0, 255, 102, 0.1)', border: '1px solid var(--accent-green)', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 10px rgba(0, 255, 102, 0.15)' }}>
              <GraduationCap size={24} style={{ color: 'var(--accent-green)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  GOOGLE SCHOLAR ACADEMIC DISCOVERY COMPANION
                </h4>
                <span className="glow-text-green" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: 'rgba(0, 255, 102, 0.08)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(0, 255, 102, 0.2)' }}>
                  ACTIVE ENGAGEMENT ENGINE
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.5' }}>
                Uncover state-of-the-art sustainable systems, IEEE/Elsevier references, and peer-reviewed prototypes. Enter an idea keyword or click a verified topic pill below to search Google Scholar and find academic evidence for your prototype!
              </p>
            </div>
          </div>

          <form action="https://scholar.google.com/scholar" method="get" target="_blank" className="scholar-search-wrapper">
            <input 
              type="text" 
              name="q" 
              value={scholarQuery}
              onChange={(e) => setScholarQuery(e.target.value)}
              className="news-input" 
              placeholder="Search Google Scholar (e.g. smart farming microcontroller, IoT water level)..." 
              style={{ flex: 1, margin: 0, background: 'rgba(1, 4, 2, 0.85)' }}
            />
            <button type="submit" className="btn-cyber-solid" style={{ whiteSpace: 'nowrap' }}>
              <Search size={16} style={{ marginRight: '8px' }} />
              <span>SEARCH RESEARCH PAPERS</span>
            </button>
          </form>

          <div style={{ marginTop: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              SUGGESTED HIGH-VIABILITY SUSTAINABLE DOMAIN FIELDS:
            </span>
            <div className="scholar-pills-container">
              {[
                "Low-Power LoRaWAN Smart Agriculture",
                "IoT Smart Water Grid and Quality Indexing",
                "Esp32 Solar Photovoltaic MPPT Power Tracker",
                "Edge ML Anomaly Detection in Smart Manufacturing",
                "IoT Automated Aquaponics Environmental Control",
                "Vibration Energy Harvesting for Wearable Devices",
                "AI-Powered Municipal Waste Classification and Sorting"
              ].map(pill => (
                <a
                  key={pill}
                  href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pill)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scholar-pill"
                  onClick={() => setScholarQuery(pill)}
                >
                  <BookOpen size={11} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} />
                  {pill}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tracks display grid */}
        <div className="nft-grid">
          {filteredTracks.map(track => (
            <div 
              key={track.id} 
              className={`nft-card ${track.rarity}`}
              onClick={() => {
                setSelectedTrack(track);
              }}
            >
              <div className="nft-image-container">
                <img 
                  src={track.img} 
                  className="nft-thumbnail" 
                  alt={track.name} 
                  referrerPolicy="no-referrer"
                />
                <span className={`rarity-badge ${track.rarity === 'rare' ? 'rare-tag' : track.rarity === 'epic' ? 'epic-tag' : 'epic-tag glow-text-gold'}`} style={{ textTransform: 'uppercase' }}>
                  {track.rarity === 'rare' ? 'Standard' : track.rarity === 'epic' ? 'Advanced' : 'Super Power'}
                </span>
              </div>

              <div className="nft-info">
                <div className="nft-name-row">
                  <h3 className="nft-name">{track.name}</h3>
                  <span className="nft-tag" style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>{track.tag}</span>
                </div>

                <div className="nft-stats-divider"></div>

                <div className="nft-rarity-row">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="score-label" style={{ textTransform: 'uppercase', fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-mono)' }}>Core Platform</span>
                    <span className="score-value glow-text-green" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
                      {track.statCore}
                    </span>
                  </div>
                  <div className="nft-action-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <div className="nft-card-runner"></div>
            </div>
          ))}
        </div>
      </section>

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
      <section className="collection-section" id="team" style={{ background: 'rgba(4, 12, 7, 0.6)' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="overline">COMMUNITY ARCHITECTS</span>
          <h2 className="collection-main-title">MEET THE FUSIONIX TEAM</h2>
        </div>

        {/* Faculty Advisors */}
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-green)', letterSpacing: '1px', fontSize: '1.2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>●</span> FACULTY INTEGRATORS
        </h3>
        <div className="nft-grid" style={{ marginBottom: '60px' }}>
          {/* Faculty 1 */}
          <div className="team-member-card green">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/DrAbir.jpeg" 
                  alt="Dr. Abir Chattopadhyay" 
                  initials="AC" 
                  accentColor="var(--accent-green)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name">Dr. Abir Chattopadhyay</h4>
                <span className="team-card-role">Faculty Coordinator</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:abir.chattopadhyay@uem.edu.in" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={13} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty 2 */}
          <div className="team-member-card green">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/DrShreya.jpeg" 
                  alt="Prof. Dr. Shreya Nag" 
                  initials="SN" 
                  accentColor="var(--accent-green)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name">Prof. Dr. Shreya Nag</h4>
                <span className="team-card-role">Faculty Coordinator</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:shreya.nag@uem.edu.in" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={13} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button for Additional Faculty */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-35px', marginBottom: '60px' }}>
          <button 
            onClick={() => {
              setViewingFacultyPage(true);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="btn-cyber-solid"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              cursor: 'pointer',
              padding: '12px 24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 0 15px rgba(0, 255, 102, 0.25)',
              border: '1px solid var(--accent-green)'
            }}
          >
            <Users size={16} />
            <span>DECRYPT AUXILIARY FACULTY DIRECTORY</span>
          </button>
        </div>

        {/* Student Leads */}
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-blue)', letterSpacing: '1px', fontSize: '1.2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>●</span> CORE STUDENT LEADS
        </h3>
        <div className="nft-grid" style={{ marginBottom: '60px' }}>
          {/* Lead 1 */}
          <div className="team-member-card blue">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/AbhirajSaha.jpeg" 
                  alt="Abhiraj Saha" 
                  initials="AS" 
                  accentColor="var(--accent-blue)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name">Abhiraj Saha</h4>
                <span className="team-card-role">Organizing Lead</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:abhiraj.saha@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={12} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lead 2 */}
          <div className="team-member-card blue">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/DebdipGhosh.jpeg" 
                  alt="Debdip Ghosh" 
                  initials="DG" 
                  accentColor="var(--accent-blue)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name">Debdip Ghosh</h4>
                <span className="team-card-role">Organizing Lead</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:debdip.ghosh@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={12} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lead 3 */}
          <div className="team-member-card blue">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/ShibangiBose.jpeg" 
                  alt="Shibangi Bose" 
                  initials="SB" 
                  accentColor="var(--accent-blue)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name">Shibangi Bose</h4>
                <span className="team-card-role">Organizing Lead</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:shibangi.bose@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={12} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Core Coordinators */}
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-gold)', letterSpacing: '1px', fontSize: '1.2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>●</span> PROTOCOL COORDINATORS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {/* Coord 1 */}
          <div className="team-member-card gold">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/Subhankar.jpeg" 
                  alt="Subhankar Das Adhikary" 
                  initials="SD" 
                  accentColor="var(--accent-gold)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name" style={{ fontSize: '1.02rem' }}>Subhankar Das Adhikary</h4>
                <span className="team-card-role">Web Developer Exec</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:subhankardasadhikary2005@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={11} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/subhankar-das-adhikary-196144299" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coord 2 */}
          <div className="team-member-card gold">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/Rohitaswa.jpeg" 
                  alt="Rohitaswa Singha" 
                  initials="RS" 
                  accentColor="var(--accent-gold)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name" style={{ fontSize: '1.02rem' }}>Rohitaswa Singha</h4>
                <span className="team-card-role">Graphics Executive</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:rohitaswasingha@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={11} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coord 3 */}
          <div className="team-member-card gold">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/RajdebPal.jpeg" 
                  alt="Rajdeb Pal" 
                  initials="RP" 
                  accentColor="var(--accent-gold)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name" style={{ fontSize: '1.02rem' }}>Rajdeb Pal</h4>
                <span className="team-card-role">Sponsorship Executive</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:rajdebpal@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={11} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coord 4 */}
          <div className="team-member-card gold">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/Raunak.jpeg" 
                  alt="Raunak Dasgupta" 
                  initials="RD" 
                  accentColor="var(--accent-gold)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name" style={{ fontSize: '1.02rem' }}>Raunak Dasgupta</h4>
                <span className="team-card-role">Social Media Lead</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:raunakdasgupta@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={11} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coord 5 */}
          <div className="team-member-card gold">
            <div className="team-card-corners" />
            <div className="team-card-inner">
              <div className="team-avatar-frame">
                <SmartAvatar 
                  src="/src/assets/images/Moupriya.jpeg" 
                  alt="Maupriya Pramanik" 
                  initials="MP" 
                  accentColor="var(--accent-gold)"
                />
              </div>
              <div className="team-card-info-layout">
                <h4 className="team-card-name" style={{ fontSize: '1.02rem' }}>Maupriya Pramanik</h4>
                <span className="team-card-role">Decoration Lead</span>
                
                {/* Social Buttons Block */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <a 
                    href="mailto:maupriyapramanik@gmail.com" 
                    title="Send Email"
                    className="team-social-btn"
                  >
                    <Mail size={11} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                    className="team-social-btn"
                  >
                    <Linkedin size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
      <section className="benefit-rail" style={{ background: 'rgba(5, 15, 8, 0.45)' }}>
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
      <footer className="footer">
        <div className="footer-grid" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {/* Contacts Block */}
          <div className="footer-news" style={{ gap: '15px' }}>
            <h3 className="news-title" style={{ color: 'var(--accent-green)' }}>FUSIONIX EVENT HELPLINE</h3>
            <p className="news-desc">
              Have critical inquiries regarding kits, streams, guidelines, or accommodations? Reach out straight to our organizing chairs:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.90rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} className="glow-text-green" />
                <span><strong>Abhiraj Saha:</strong> +91 70631 94265</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} className="glow-text-green" />
                <span><strong>Debdip Ghosh:</strong> +91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} className="glow-text-green" />
                <span><strong>Shibangi Bose:</strong> +91 91234 56789</span>
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
                <li><a href="#home">Home Base</a></li>
                <li><a href="#about">About Hub</a></li>
                <li><a href="#tracks">Domain Tracks</a></li>
                <li><a href="#rules">Participation Code</a></li>
              </ul>
            </div>
            <div className="links-group">
              <h4 className="links-title">RESOURCES</h4>
              <ul className="footer-link-list">
                <li><a href="#timeline">Chronogram</a></li>
                <li><a href="#team">Teamintegrators</a></li>
                <li><a href="#faq">FAQ Hub</a></li>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); alert("FusioniX Sustainable Whitepaper Draft mapped safely."); }}>Sustech Sheet</a></li>
              </ul>
            </div>
          </div>

          {/* Google Iframe Map block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 className="news-title">VENUE SCHEMATIC MAP</h4>
            <div style={{ width: '100%', height: '140px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(0, 255, 102, 0.25)' }}>
              <iframe 
                title="UEM Kolkata Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2811197945763!2d88.48774787597148!3d22.56860363312015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d3684!2d88.4903332!3d22.5685833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!1m3!2m1!2sUniversity%20of%20Engineering%20%26%20Management%20Kolkata!5e0!3m2!1sen!2sin!4v1714589254321!5m2!1sen!2sin" 
                style={{ border: 'none', width: '100%', height: '100%', filter: 'invert(90%) hue-rotate(120deg) contrast(110%) brightness(95%)' }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
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
                href="https://instagram.com" 
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
                href="https://linkedin.com" 
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
                <GraduationCap style={{ color: 'var(--accent-green)' }} size={24} />
                <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.5px' }}>SUSTAINABILITY IDEA VALIDATION</span>
              </h3>
              <button className="btn-modal-close" onClick={() => setShowScholarSuggestionModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body" style={{ textAlign: 'center', padding: '15px' }}>
              <div style={{ background: 'rgba(0, 255, 102, 0.03)', border: '1px solid rgba(0, 255, 102, 0.15)', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                <BookOpen size={40} className="glow-text-green" style={{ marginBottom: '12px', display: 'inline-block' }} />
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  HAVE YOU CHECKED YOUR SCIENTIFIC IDEA?
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  Excellent choice to register! However, to maximize your feasibility & viability points from our expert ECE/CSE review panel, we heavily encourage you to check your project designs, IoT sensors, and microcontroller frameworks on **Google Scholar** first to gather supportive peer-reviewed research papers.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="#tracks" 
                  className="btn-cyber-solid"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px', 
                    background: 'var(--accent-green)', 
                    color: '#020603',
                    borderColor: 'var(--accent-green)', 
                    textDecoration: 'none',
                    fontWeight: 800,
                    width: '100%',
                    padding: '14px',
                    boxShadow: '0 0 15px rgba(0, 255, 102, 0.4)',
                    boxSizing: 'border-box'
                  }}
                  onClick={() => {
                    setShowScholarSuggestionModal(false);
                    const element = document.getElementById("tracks");
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Search size={16} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', whiteSpace: 'normal', textAlign: 'center' }}>CHECK GOOGLE SCHOLAR SECTION NOW</span>
                </a>

                <a 
                  href="https://unstop.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-cyber-outline"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px', 
                    textDecoration: 'none', 
                    border: '1px solid rgba(0, 255, 102, 0.4)',
                    background: 'rgba(0, 255, 102, 0.05)',
                    color: 'var(--accent-green)',
                    fontWeight: 'bold',
                    padding: '14px',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onClick={() => {
                    setShowScholarSuggestionModal(false);
                  }}
                >
                  <span style={{ fontSize: '0.85rem', whiteSpace: 'normal', textAlign: 'center' }}>PROCEED TO UNSTOP REGISTRATION DIRECTLY</span>
                  <ArrowRight size={16} style={{ flexShrink: 0 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
