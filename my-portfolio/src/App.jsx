import { useState, useEffect, useRef } from "react";
import "./App.css";

const SKILLS = [
  { name: "Python 🐍", level: 85, color: "#3776AB" },
  { name: "HTML 🌐", level: 90, color: "#E34F26" },
  { name: "CSS 🎨", level: 88, color: "#1572B6" },
  { name: "JavaScript ⚡", level: 82, color: "#F7DF1E" },
  { name: "Node.js 🟢", level: 75, color: "#339933" },
  { name: "Java ☕", level: 78, color: "#007396" },
  { name: "Figma ✏️", level: 80, color: "#F24E1E" },
  { name: "UI/UX 💡", level: 83, color: "#FF61F6" },
  { name: "DSA 🧠", level: 72, color: "#9B59B6" },
  { name: "AI/ML 🤖", level: 68, color: "#00BCD4" },
];

const PROJECTS = [
  { title: "AI Chat Assistant", desc: "Python-based AI chatbot using NLP techniques with a sleek React frontend for real-time conversations. NOT COMPLETED STILL WORKING ON IT", tags: ["Python","AI/ML","React"], emoji: "🤖", bg: "linear-gradient(135deg,#7C3AED,#4C1D95)" },
  { title: "Portfolio Design System", desc: "A complete Figma design system with reusable components, typography & color palettes for modern web apps.", tags: ["Figma","UI/UX","Design"], emoji: "🎨", bg: "linear-gradient(135deg,#EC4899,#9D174D)" },
  { title: "E-Commerce UI", desc: "Full-stack platform with Node.js backend, dynamic product listings and responsive mobile-first design.", tags: ["Node.js","JavaScript","CSS"], emoji: "🛒", bg: "linear-gradient(135deg,#F97316,#C2410C)" },
];

function Navbar({ darkMode, setDarkMode }) {  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"1rem 3%",
      background: scrolled ? (darkMode?"rgba(31,17,53,0.85)":"rgba(255,255,255,0.85)") : (darkMode?"rgba(31,17,53,0.7)":"rgba(255,255,255,0.7)"),
      backdropFilter:"blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(242,96,118,0.15)" : "1px solid rgba(255,255,255,0.5)",
      transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
    }}>

      {/* LEFT — Logo circle + Name */}
      <div style={{display:"flex",alignItems:"center",gap:"0.7rem"}}>
        <div style={{
          width:42,height:42,borderRadius:"50%",
          background:"linear-gradient(135deg,#F26076,#FF9760)",
          display:"flex",alignItems:"center",justifyContent:"center",
          color:"white",fontWeight:800,fontSize:"1rem",
          fontFamily:"'Syne',sans-serif",
          boxShadow:"0 4px 15px rgba(242,96,118,0.4)",
          flexShrink:0,
        }}>AR</div>
        <span style={{
  fontFamily:"'Syne',sans-serif",
  fontSize:"1.1rem",fontWeight:700,
  color:darkMode?"#E8EAED":"#1F1135",
}}>Portfolio</span>
      </div>

      {/* CENTER — Nav links with / separators */}
<div style={{display:"flex",alignItems:"center",gap:"0.3rem"}}>
  {["Home","About","Skills","Projects","Contact"].map((l,idx,arr)=>(
    <div key={l} style={{display:"flex",alignItems:"center",gap:"0.3rem"}}>
      <a href={`#${l.toLowerCase()}`} style={{
        color:darkMode?"#E8EAED":"#1F1135",
        textDecoration:"none",
        fontWeight:500,fontSize:"0.95rem",
        padding:"0.3rem 0.6rem",
        borderRadius:"6px",
        transition:"all 0.2s",
      }}
      onMouseOver={e=>{e.target.style.color="#F26076";}}
      onMouseOut={e=>{e.target.style.color=darkMode?"#E8EAED":"#1F1135";}}
      >{l}</a>
      {idx < arr.length-1 && (
        <span style={{color:darkMode?"#6B7280":"#D1D5DB",fontSize:"0.9rem"}}>/</span>
      )}
    </div>
  ))}
</div>

      {/* RIGHT — Dark Mode Toggle + Download CV */}
<div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
  <button onClick={()=>setDarkMode(!darkMode)} style={{
    width:"42px",height:"42px",borderRadius:"50%",
    border:"2px solid rgba(242,96,118,0.3)",
    background:darkMode?"#1F1135":"white",
    color:darkMode?"#FFD150":"#1F1135",
    fontSize:"1.2rem",cursor:"pointer",
    display:"flex",alignItems:"center",justifyContent:"center",
    transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow:"0 4px 15px rgba(0,0,0,0.1)",
  }}
  onMouseOver={e=>{e.currentTarget.style.transform="rotate(180deg) scale(1.1)";e.currentTarget.style.boxShadow="0 6px 25px rgba(242,96,118,0.4)";}}
  onMouseOut={e=>{e.currentTarget.style.transform="rotate(0deg) scale(1)";e.currentTarget.style.boxShadow="0 4px 15px rgba(0,0,0,0.1)";}}
  >
    {darkMode ? "🌙" : "☀️"}
  </button>

<a href="/Anshika_Rathore_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{
    display:"flex",
    alignItems:"center",
    gap:"0.5rem",
    background:"linear-gradient(135deg,#F26076,#FF9760)",
    color:"white",
    padding:"0.6rem 1.3rem",
    borderRadius:"50px",
    textDecoration:"none",
    fontWeight:600,
    fontSize:"0.9rem",
    boxShadow:"0 4px 20px rgba(242,96,118,0.4)",
    transition:"opacity 0.2s, transform 0.2s",
  }}
  onMouseOver={e=>{e.currentTarget.style.opacity="0.85";e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow="0 0 25px rgba(242,96,118,0.8), 0 0 50px rgba(242,96,118,0.4)";}}
  onMouseOut={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 20px rgba(242,96,118,0.4)";}}
  >
    📄 View CV
  </a>
</div>

    </nav>
  );
}

function HelloBadge() {
  const greetings = [
    { text: "Hello!" },
    { text: "नमस्ते!"},
    { text: "Hola!" },
    { text: "Bonjour!" },
    { text: "こんにちは!" },
    { text: "你好!" },


  ];
  const [gIdx, setGIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [del, setDel] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    const word = greetings[gIdx].text;
    const timer = setTimeout(() => {
      if (!del) {
        setTyped(word.slice(0, i + 1));
        if (i + 1 === word.length) {
          setTimeout(() => setDel(true), 1500);
        } else {
          setI(i + 1);
        }
      } else {
        setTyped(word.slice(0, i - 1));
        if (i - 1 === 0) {
          setDel(false);
          setGIdx((gIdx + 1) % greetings.length);
          setI(0);
        } else {
          setI(i - 1);
        }
      }
    }, del ? 60 : 120);
    return () => clearTimeout(timer);
  }, [i, del, gIdx]);

  return (
    <div style={{
      display:"inline-flex",
      alignItems:"center",
      gap:"0.6rem",
      background:"rgba(255,255,255,0.85)",
      backdropFilter:"blur(10px)",
      border:"1.5px solid rgba(242,96,118,0.25)",
      borderRadius:"50px",
      padding:"0.5rem 1.2rem",
      marginBottom:"1.5rem",
      boxShadow:"0 4px 20px rgba(242,96,118,0.15)",
      animation:"pulse 2s ease-in-out infinite",
      cursor:"pointer",
      transition:"box-shadow 0.3s ease",
    }}
    onMouseOver={e=>{e.currentTarget.style.boxShadow="0 0 20px rgba(225, 58, 83, 0.7), 0 0 40px rgba(242,96,118,0.3)";}}
    onMouseOut={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(86, 27, 36, 0.15)";}}
>
      <span style={{
        fontSize:"0.95rem",
        fontWeight:700,
        color:"#1F1135",
        minWidth:"80px",
        letterSpacing:"0.02em",
      }}>
        {typed}
        <span style={{
          display:"inline-block",
          width:"2px",
          height:"1em",
          background:"#F26076",
          marginLeft:"2px",
          animation:"blink 1s step-end infinite",
          verticalAlign:"middle",
        }}/>
      </span>
      <span style={{fontSize:"1.2rem"}}>
        {greetings[gIdx].emoji}
      </span>
    </div>
  );
}

function PolaroidStack({ darkMode }) {
  const [expanded, setExpanded] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);

 const photos = [
  { src: "pic4.jpeg", },
  { src: "pic2.jpeg", },
  { src: "pic3.jpeg", },
  { src: "pic5.jpeg",},
];

  const stackPositions = [
    { x: 0,   y: 0,   rotate: -14 },
    { x: 18,  y: -18, rotate: 4   },
    { x: -16, y: -36, rotate: -6  },
    { x: 14,  y: -54, rotate: 10  },
  ];

  const scatteredPositions = [
    { x: -130, y: -90,  rotate: -18 },
    { x: 110,  y: -110, rotate: 10  },
    { x: -120, y: 90,   rotate: 14  },
    { x: 100,  y: 80,   rotate: -8  },
  ];

  const cardBgs = [
    "linear-gradient(135deg,#F26076,#FF9760)",
    "linear-gradient(135deg,#EC4899,#9D174D)",
    "linear-gradient(135deg,#06B6D4,#0E7490)",
    "linear-gradient(135deg,#7C3AED,#4C1D95)",
  ];

  const darkCardBgs = [
    "linear-gradient(135deg,#4C1D95,#7C3AED)",
    "linear-gradient(135deg,#0E7490,#06B6D4)",
    "linear-gradient(135deg,#9D174D,#EC4899)",
    "linear-gradient(135deg,#1F1135,#F26076)",
  ];

  const handleCardClick = (e, idx) => {
    e.stopPropagation();
    if (!expanded) {
      setExpanded(true);
      setActiveIdx(null);
    } else {
      setActiveIdx(prev => prev === idx ? null : idx);
    }
  };

  const handleClose = () => {
    setExpanded(false);
    setActiveIdx(null);
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%", zIndex: 5 }}
      onClick={expanded ? handleClose : undefined}
    >
      <style>{`
        @keyframes polaroid-float {
          0%,100% { transform: var(--base-transform) translateY(0px); }
          50%      { transform: var(--base-transform) translateY(-8px); }
        }
      `}</style>

      {photos.map((photo, idx) => {
        const stack = stackPositions[idx];
        const scatter = scatteredPositions[idx];
        const isActive = activeIdx === idx;
        const zIdx = isActive ? 50 : expanded ? 20 + idx : 10 - idx;

        let tx, ty, rot, scale;
        if (!expanded) {
          tx = stack.x;
          ty = stack.y;
          rot = stack.rotate;
          scale = 1 - idx * 0.02;
        } else if (isActive) {
          tx = 0;
          ty = -30;
          rot = 0;
          scale = 1.1;
        } else {
          tx = scatter.x;
          ty = scatter.y;
          rot = scatter.rotate;
          scale = 0.92;
        }

        return (
          <div
            key={idx}
            onClick={(e) => handleCardClick(e, idx)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rot}deg) scale(${scale})`,
              zIndex: zIdx,
              transition: "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, z-index 0s",
              cursor: "pointer",
            }}
          >
            {/* Polaroid frame */}
            <div style={{
              background: darkMode ? "#1a1035" : "white",
              padding: "12px 12px 48px 12px",
              borderRadius: 8,
              boxShadow: isActive
                ? "0 40px 80px rgba(0,0,0,0.5), 0 0 0 2px rgba(242,96,118,0.5)"
                : expanded
                  ? "0 20px 60px rgba(0,0,0,0.35)"
                  : idx === 0
                    ? "0 20px 50px rgba(0,0,0,0.28)"
                    : `0 ${8 + idx * 4}px ${16 + idx * 8}px rgba(0,0,0,${0.18 - idx * 0.02})`,
              width: 200,
              userSelect: "none",
              transition: "box-shadow 0.4s ease, background 0.5s ease",
              border: darkMode
                ? "1px solid rgba(242,96,118,0.2)"
                : "1px solid rgba(0,0,0,0.06)",
            }}>
              {/* Photo area */}
<div style={{
  width: 176,
  height: 176,
  background: darkMode ? darkCardBgs[idx] : cardBgs[idx],
  borderRadius: 4,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}}>
  {/* Gloss overlay */}
  <div style={{
    position: "absolute", inset: 0,
    background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
    pointerEvents: "none",
    zIndex: 2,
  }} />
  {/* Real photo — falls back to emoji if missing */}
  <img
    src={photo.src}
    alt={photo.label}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      inset: 0,
      borderRadius: 4,
    }}
    onError={(e) => { e.target.style.display = "none"; }}
  />
  {/* Emoji shown behind image as fallback */}
  <div style={{ fontSize: "4.5rem", zIndex: 1 }}>{photo.fallback}</div>
</div>

              {/* Polaroid bottom strip */}
              <div style={{
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 4,
              }}>
                <div style={{
                  width: 60,
                  height: 3,
                  borderRadius: 2,
                  background: darkMode
                    ? "rgba(242,96,118,0.4)"
                    : "rgba(0,0,0,0.08)",
                }} />
              </div>
            </div>

            {/* "Tap" hint on front card when not expanded */}
            {idx === 0 && !expanded && (
              <div style={{
                position: "absolute",
                bottom: -28,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "0.7rem",
                color: darkMode ? "rgba(242,96,118,0.7)" : "rgba(0,0,0,0.35)",
                fontWeight: 600,
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                textShadow: darkMode ? "0 0 10px rgba(242,96,118,0.4)" : "none",
              }}>

              </div>
            )}

            {/* "Close" hint when expanded */}
            {idx === 0 && expanded && !isActive && (
              <div style={{
                position: "absolute",
                bottom: -28,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "0.7rem",
                color: darkMode ? "rgba(242,96,118,0.7)" : "rgba(0,0,0,0.35)",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}>
                Click bg to close ✦
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Hero({ darkMode, setDarkMode }) {
  const roles = ["Web Developer 🌐","UI/UX Designer 🎨","AI/ML Enthusiast 🤖","DSA Practitioner 🧠","Figma Creator ✏️"];
  const [typed, setTyped] = useState("");
  const [rIdx, setRIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    const word = roles[rIdx];
    const timer = setTimeout(() => {
      if (!del) {
        setTyped(word.slice(0, i + 1));
        if (i + 1 === word.length) { setTimeout(() => setDel(true), 1200); }
        else setI(i + 1);
      } else {
        setTyped(word.slice(0, i - 1));
        if (i - 1 === 0) { setDel(false); setRIdx((rIdx + 1) % roles.length); setI(0); }
        else setI(i - 1);
      }
    }, del ? 50 : 90);
    return () => clearTimeout(timer);
  }, [i, del, rIdx]);

  const blob = (w,h,bg,top,left,bottom,right,delay) => (
    <div style={{position:"absolute",width:w,height:h,borderRadius:"50%",background:bg,filter:"blur(80px)",opacity:0.55,top,left,bottom,right,animation:`float 8s ease-in-out ${delay} infinite`}} />
  );

  return (
    <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8rem 5% 4rem",position:"relative",overflow:"hidden",gap:"2rem"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&family=Playfair+Display:wght@700;800;900&display=swap');

.send-btn {
  position: relative;
  overflow: hidden;
}

.send-btn .btn-text {
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.send-btn .plane-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(-10deg);
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  z-index: 3;
  transition: all 0.3s ease;
}

.send-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #52e09a;
  transition: left 1s ease;
  z-index: 1;
}

.send-btn::after {
  content: 'SENT';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.3s ease 0.8s;
}

.send-btn.sending .btn-text {
  opacity: 0;
}

.send-btn.sending .plane-icon {
  left: calc(100% + 20px);
  transition: left 1s ease;
}

.send-btn.sending::before {
  left: 0;
}

.send-btn.sending::after {
  opacity: 1;
}

.send-btn.sending {
  pointer-events: none;
}

        
  }
}
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-30px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes cspin { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(242,96,118,0.3)} 50%{box-shadow:0 0 0 8px rgba(242,96,118,0)} }
        * { font-family: 'Space Grotesk', sans-serif; }
        /* Animated Orbs - Different movement patterns */
@keyframes float-orb-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -40px) scale(1.15); }
  50% { transform: translate(-30px, -60px) scale(0.95); }
  75% { transform: translate(40px, 30px) scale(1.1); }
}

@keyframes float-orb-2 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(-60px, 50px) scale(1.2) rotate(120deg); }
  66% { transform: translate(40px, -40px) scale(0.9) rotate(240deg); }
}

@keyframes float-orb-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(70px, 80px) scale(1.3); }
}

@keyframes float-orb-4 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-80px, -30px) scale(0.85); }
  50% { transform: translate(-40px, 60px) scale(1.15); }
  75% { transform: translate(60px, -50px) scale(0.95); }
}

@keyframes float-orb-5 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, -70px) scale(1.2); }
}

@keyframes float-orb-6 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(50px, -50px) scale(1.1) rotate(90deg); }
  66% { transform: translate(-60px, 40px) scale(0.9) rotate(180deg); }
}

@keyframes float-orb-7 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -60px) scale(1.25); }
}

@keyframes float-orb-8 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-40px, 50px) scale(0.9); }
  75% { transform: translate(50px, -30px) scale(1.15); }
}

@keyframes float-orb-9 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-70px, 60px) scale(1.1); }
}

/* Apply animations with different speeds */
.orb1 { animation: float-orb-1 18s ease-in-out infinite; }
.orb2 { animation: float-orb-2 22s ease-in-out infinite 2s; }
.orb3 { animation: float-orb-3 15s ease-in-out infinite 5s; }
.orb4 { animation: float-orb-4 20s ease-in-out infinite 8s; }
.orb5 { animation: float-orb-5 16s ease-in-out infinite 3s; }
.orb6 { animation: float-orb-6 19s ease-in-out infinite 6s; }
.orb7 { animation: float-orb-7 14s ease-in-out infinite 1s; }
.orb8 { animation: float-orb-8 17s ease-in-out infinite 4s; }
.orb9 { animation: float-orb-9 13s ease-in-out infinite 7s; }
      `}</style>
      {blob("480px","480px","#458B73","-100px","-100px",undefined,undefined,"0s")}
      {blob("600px","600px","#FF9760",undefined,undefined,"-80px","5%","-3s")}
      {blob("500px","500px","#FFD150","40%","38%",undefined,undefined,"-5s")}
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"60px 60px"}} />

      <div style={{position:"relative",zIndex:2,maxWidth:600}}>
        <HelloBadge />
        <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2.5rem,6vw,4.5rem)",fontWeight:800,lineHeight:1.1,marginBottom:"1rem",color:darkMode?"#E8EAED":"#1F1135"}}>I'm <br /> <span style={{fontFamily:"'Playfair Display',serif", color:darkMode?"#FFD150":"#7B2D8B",textShadow:"2px 2px 4px rgba(0,0,0,0.1)"}}>Anshika Rathore</span></h1>
        <div style={{
  overflow:"hidden",
  whiteSpace:"nowrap",
  marginBottom:"1.5rem",
  background:"rgba(242,96,118,0.08)",
  border:"1px solid rgba(242,96,118,0.2)",
  borderRadius:"50px",
  padding:"0.6rem 0",
  position:"relative"
}}>
  <div style={{
    display:"inline-block",
    animation:"marquee 20s linear infinite",
    paddingLeft:"100%"
  }}>
    <span style={{
      fontSize:"1rem",
      fontWeight:600,
      color:darkMode?"#E8EAED":"#1F1135",
      marginRight:"3rem"
    }}>
      ✦  Student  ✦  Problem Solver  ✦  Learner  ✦  Designing  ✦  Developer  ✦ 
    </span>
    <span style={{
      fontSize:"1rem",
      fontWeight:600,
      color:darkMode?"#E8EAED":"#1F1135"
    }}>
      ✦  Student  ✦  Problem Solver  ✦  Learner  ✦  Designing  ✦  Developer  ✦ 
    </span>
  </div>
  
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</div>
        <p style={{fontSize:"1.05rem",color:darkMode?"#B8BCC8":"#9CA3AF",lineHeight:1.7,marginBottom:"2rem",maxWidth:480}}>A passionate student crafting beautiful digital experiences — blending code, creativity & curiosity to build things that matter.</p>
        <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"2rem"}}>
  <a 
  href="#projects" 
  onClick={(e)=>{e.preventDefault();document.getElementById('projects').scrollIntoView({behavior:'smooth'});}}
  style={{
  background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(242,96,118,0.1)",
  color: darkMode ? "#E8EAED" : "#1F1135",
  border: "1px solid rgba(242,96,118,0.3)",
      padding:"0.8rem 1.8rem",
      borderRadius:"50px",
      textDecoration:"none",
      fontWeight:600,
      boxShadow:"0 0 30px rgba(242,96,118,0.4)",
      transition:"all 0.3s ease",
      cursor:"pointer"
    }}
    onMouseOver={e=>{
      e.currentTarget.style.boxShadow="0 0 40px rgba(242,96,118,0.8), 0 0 80px rgba(242,96,118,0.4)";
      e.currentTarget.style.transform="translateY(-3px) scale(1.05)";
    }}
    onMouseOut={e=>{
      e.currentTarget.style.boxShadow="0 0 30px rgba(242,96,118,0.4)";
      e.currentTarget.style.transform="translateY(0) scale(1)";
    }}
  >
    View My Work
  </a>
  
  <a 
    href="#contact"
    onClick={(e)=>{e.preventDefault();document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}
    style={{
      color:darkMode?"#E8EAED":"#1F1135",
      padding:"0.8rem 1.8rem",
      borderRadius:"50px",
      textDecoration:"none",
      fontWeight:600,
      border:"1px solid rgba(242,96,118,0.2)",
      transition:"all 0.3s ease",
      cursor:"pointer"
    }}
    onMouseOver={e=>{
      e.currentTarget.style.boxShadow="0 0 30px rgba(242,96,118,0.6)";
      e.currentTarget.style.transform="translateY(-3px) scale(1.05)";
      e.currentTarget.style.borderColor="rgba(242,96,118,0.5)";
    }}
    onMouseOut={e=>{
      e.currentTarget.style.boxShadow="none";
      e.currentTarget.style.transform="translateY(0) scale(1)";
      e.currentTarget.style.borderColor="rgba(242,96,118,0.2)";
    }}
  >
    Let's Connect 
  </a>
</div>

<div style={{display:"flex",gap:"0.8rem",flexWrap:"wrap"}}>
  {[
    {
      label: "GitHub", 
      url: "https://github.com/rathoreanshika2408",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/rathoreanshika",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ].map(({label, url, icon})=>(
    <a 
      key={label} 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
  color: darkMode ? "#E8EAED" : "#4B5563",
  textDecoration:"none",
        fontSize:"0.85rem",
        border:"1px solid rgba(242,96,118,0.15)",
        padding:"0.3rem 0.9rem",
        borderRadius:"50px",
        transition:"all 0.3s ease",
        display:"flex",
        alignItems:"center",
        gap:"0.5rem"
      }}
      onMouseOver={e=>{
        e.currentTarget.style.color="#F26076";
        e.currentTarget.style.borderColor="rgba(242,96,118,0.5)";
        e.currentTarget.style.boxShadow="0 0 15px rgba(242,96,118,0.4)";
        e.currentTarget.style.transform="translateY(-2px)";
      }}
      onMouseOut={e=>{
  e.currentTarget.style.color=darkMode?"#E8EAED":"#4B5563";
  e.currentTarget.style.borderColor="rgba(242,96,118,0.15)";
  e.currentTarget.style.boxShadow="none";
  e.currentTarget.style.transform="translateY(0)";
}}
    >
      {icon}
      {label}
    </a>
  ))}
</div>
      </div>

<div style={{position:"relative",zIndex:2,flexShrink:0,width:320,height:380}}>
  {/* Polaroid Stack */}
  <PolaroidStack darkMode={darkMode} />
</div>
    </section>
  );
}
function About({ darkMode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current && !expandedCard) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [expandedCard]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setExpandedCard(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  // 🔒 Lock body scroll and hide navbar when modal is open
useEffect(() => {
  if (expandedCard) {
    document.body.style.overflow = 'hidden';
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.transform = 'translateY(-100%)';
  } else {
    document.body.style.overflow = 'auto';
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.transform = 'translateY(0)';
  }
  
  return () => {
    document.body.style.overflow = 'auto';
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.transform = 'translateY(0)';
  };
}, [expandedCard]);

  const cards = [
    {
      id: 1,
      title: "Who I Am",
      shortDesc: "I'm Anshika Rathore, a student deeply passionate about the intersection of technology and design.",
      fullDesc: "I'm Anshika Rathore, a 2nd year B.Tech student in the department of Computer Science and Engineering with Artifical Intelligence at the Guru Gobind Singh Indraprastha University. \n\n I am someone who thrives at the intersection of technology and design. I combine logical thinking with creativity to build solutions that are not only functional but also visually engaging. \n\n I enjoy simplifying complex ideas and turning them into clean, intuitive experiences. I value clarity, efficiency, and thoughtful design. \n\n To me, great technology isn’t just about writing code — it’s about creating meaningful, user-focused solutions that solve real problems. I’m constantly pushing myself to think better, design smarter, and build with purpose.",
      gridColumn: "span 5",
      gridRow: "span 2",
      color: "139,92,246"
    },
    {
      id: 2,
      title: "What I Do",
      shortDesc: "From building full-stack web apps to designing sleek UI/UX in Figma and exploring AI/ML.",
      fullDesc: "From building full-stack web apps and practicing DSA to designing sleek UI/UX in Figma and exploring AI/ML — I'm constantly learning and growing every day.\n\n**Web Development:** Building responsive, accessible, and performant web applications using modern frameworks and best practices.\n\n **UI/UX Design:** Crafting intuitive and beautiful user experiences in Figma, focusing on user-centered design principles.\n\n **Data Structures & Algorithms:** Solving complex problems and optimizing code for efficiency.\n\n **AI/ML:** Exploring the frontiers of artificial intelligence and machine learning to build smarter applications.\n\nI'm not just learning these skills — I'm mastering them through real projects and continuous practice.",
      gridColumn: "span 5",
      gridRow: "span 2",
      color: "245,158,11"
    },
    {
      id: 3,
      title: "The Mission",
      shortDesc: "To create impactful digital experiences that are not just functional, but beautiful.",
      fullDesc: "To create impactful digital experiences that are not just functional, but beautiful. Great design and great code go hand in hand — and I'm here to prove it.\n\n **My Philosophy:**\nTechnology should empower people, not confuse them. Every line of code I write and every pixel I place is intentional, purposeful, and aimed at creating delightful experiences.\n\n **My Goals:**\n• Build products that solve real problems\n• Contribute to open-source communities\n• Inspire others to pursue tech and design\n• Never stop learning and evolving\n\n **My Promise:**\nI'm committed to pushing the boundaries of what's possible, always keeping the user at the heart of everything I create. Excellence isn't a goal — it's a habit.",
      gridColumn: "span 7",
      gridRow: "span 2",
      color: "16,185,129"
    }
  ];

  return (
    <section id="about" ref={sectionRef} style={{padding:"6rem 5%",background:"transparent",position:"relative",overflow:"hidden"}}>
      
      {/* Floating gradient orbs in background */}
      <div style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(139,92,246,0.15), transparent)",filter:"blur(60px)",top:"10%",left:"5%",animation:"float 8s ease-in-out infinite",zIndex:0}}></div>
      <div style={{position:"absolute",width:"350px",height:"350px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236,72,153,0.15), transparent)",filter:"blur(60px)",top:"40%",right:"10%",animation:"float 10s ease-in-out infinite 2s",zIndex:0}}></div>
      
      <div style={{position:"relative",zIndex:1}}>
        <div style={{color:"#458B73",fontSize:"0.85rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.5rem"}}></div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:800,marginBottom:"3rem",color:darkMode?"#E8EAED":"#1F1135"}}>About Me</h2>
        
        {/* Bento Grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(12, 1fr)",
          gap:"1rem",
          marginBottom:"2rem"
        }}>
          
          {cards.map((card) => (
            <div 
              key={card.id}
              onClick={() => setExpandedCard(card)}
              style={{
                gridColumn: card.gridColumn,
                gridRow: card.gridRow,
                background: darkMode
                  ? `linear-gradient(135deg, rgba(${card.color},0.12) 0%, rgba(${card.color},0.08) 100%)`
                  : `linear-gradient(135deg, rgba(${card.color},0.08) 0%, rgba(${card.color},0.12) 100%)`,
                backdropFilter:"blur(20px)",
                WebkitBackdropFilter:"blur(20px)",
                border: darkMode ? `1px solid rgba(${card.color},0.25)` : `1px solid rgba(${card.color},0.2)`,
                borderRadius:28,
                padding:"2.5rem",
                position:"relative",
                overflow:"hidden",
                cursor:"pointer",
                transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: expandedCard ? "scale(0.95)" : `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                boxShadow: darkMode
                  ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : `0 8px 32px rgba(${card.color},0.15), inset 0 1px 0 rgba(255,255,255,0.5)`
              }}
              onMouseOver={e=>{
                if (!expandedCard) {
                  e.currentTarget.style.transform=`translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) translateY(-12px) scale(1.02)`;
                  e.currentTarget.style.boxShadow=darkMode
                    ? `0 20px 60px rgba(${card.color},0.4), inset 0 1px 0 rgba(255,255,255,0.15)`
                    : `0 20px 60px rgba(${card.color},0.3), inset 0 1px 0 rgba(255,255,255,0.7)`;
                  e.currentTarget.style.borderColor=`rgba(${card.color},0.5)`;
                }
              }}
              onMouseOut={e=>{
                if (!expandedCard) {
                  e.currentTarget.style.transform=`translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`;
                  e.currentTarget.style.boxShadow=darkMode
                    ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                    : `0 8px 32px rgba(${card.color},0.15), inset 0 1px 0 rgba(255,255,255,0.5)`;
                  e.currentTarget.style.borderColor=darkMode ? `rgba(${card.color},0.25)` : `rgba(${card.color},0.2)`;
                }
              }}
            >
              {/* Gradient overlay */}
              <div style={{position:"absolute",top:0,right:0,width:"200px",height:"200px",background:`radial-gradient(circle, rgba(${card.color},0.3), transparent)`,filter:"blur(40px)",pointerEvents:"none"}}></div>
              
              <div style={{fontSize:"4rem",marginBottom:"1.2rem",animation:"float 3s ease-in-out infinite",position:"relative",zIndex:2}}>{card.emoji}</div>
              <h3 style={{fontSize:"1.8rem",fontWeight:800,marginBottom:"1rem",color:darkMode?"#E8EAED":"#1F1135",fontFamily:"'Syne',sans-serif",position:"relative",zIndex:2}}>{card.title}</h3>
              <p style={{color:darkMode?"#B8BCC8":"#6B7280",lineHeight:1.8,fontSize:"1rem",position:"relative",zIndex:2}}>
                {card.shortDesc}
              </p>
              
              {/* Click hint */}
              <div style={{
                position:"absolute",
                bottom:"1.5rem",
                right:"1.5rem",
                color:darkMode?"#9CA3AF":"#6B7280",
                fontSize:"0.75rem",
                opacity:0.6,
                fontWeight:500,
                letterSpacing:"0.05em",
                textTransform:"uppercase"
              }}>
                Click to expand →
              </div>
            </div>
          ))}

          {/* Stats Cards */}
          <div 
  onClick={()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'})}
  style={{
    gridColumn:"span 3",
    gridRow:"span 1",
    cursor:"pointer",
    background: darkMode
                ? "linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(219,39,119,0.08) 100%)"
                : "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(244,114,182,0.12) 100%)",
              backdropFilter:"blur(20px)",
              WebkitBackdropFilter:"blur(20px)",
              border:darkMode?"1px solid rgba(236,72,153,0.25)":"1px solid rgba(236,72,153,0.2)",
              borderRadius:28,
              padding:"2rem",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
              textAlign:"center",
              transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: expandedCard ? "scale(0.95)" : `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
              boxShadow:darkMode
                ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 8px 32px rgba(236,72,153,0.15), inset 0 1px 0 rgba(255,255,255,0.5)"
            }}
          >
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"150px",height:"150px",background:"radial-gradient(circle, rgba(236,72,153,0.3), transparent)",filter:"blur(30px)",pointerEvents:"none"}}></div>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:"4rem",fontWeight:800,background:"linear-gradient(135deg,#EC4899,#F26076)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",position:"relative",zIndex:2}}>2</div>
            <div style={{color:darkMode?"#B8BCC8":"#9CA3AF",fontSize:"0.9rem",marginTop:"0.5rem",fontWeight:600,letterSpacing:"0.05em",position:"relative",zIndex:2}}>Projects Built and building more</div>
          </div>

          <div 
  onClick={()=>document.getElementById('skills').scrollIntoView({behavior:'smooth'})}
  style={{
    gridColumn:"span 3",
    gridRow:"span 1",
    cursor:"pointer",
    background: darkMode
                 ? "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.08) 100%)"
                : "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(96,165,250,0.12) 100%)",
              backdropFilter:"blur(20px)",
              WebkitBackdropFilter:"blur(20px)",
              border:darkMode?"1px solid rgba(59,130,246,0.25)":"1px solid rgba(59,130,246,0.2)",
              borderRadius:28,
              padding:"2rem",
              display:"flex",
              alignItems:"center",
              gap:"2rem",
              transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: expandedCard ? "scale(0.95)" : `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
              boxShadow:darkMode
                ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 8px 32px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.5)"
            }}
          >
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:"4rem",fontWeight:800,background:"linear-gradient(135deg,#3B82F6,#06B6D4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>5+</div>
            <div>
              <div style={{color:darkMode?"#E8EAED":"#1F1135",fontSize:"1.2rem",fontWeight:700,marginBottom:"0.3rem"}}>Tech Stacks</div>
              <div style={{color:darkMode?"#B8BCC8":"#9CA3AF",fontSize:"0.85rem"}}>Mastered & Growing</div>
            </div>
          </div>

          <div 
  onClick={()=>window.open('https://leetcode.com/u/ANSHIKA240805/','_blank')}
  style={{
    gridColumn:"span 3",
    gridRow:"span 1",
    cursor:"pointer",
    background: darkMode
      ? "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(147,51,234,0.08) 100%)"
                : "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(192,132,252,0.12) 100%)",
              backdropFilter:"blur(20px)",
              WebkitBackdropFilter:"blur(20px)",
              border:darkMode?"1px solid rgba(168,85,247,0.25)":"1px solid rgba(168,85,247,0.2)",
              borderRadius:28,
              padding:"2rem",
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: expandedCard ? "scale(0.95)" : `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)`,
              boxShadow:darkMode
                ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 8px 32px rgba(168,85,247,0.15), inset 0 1px 0 rgba(255,255,255,0.5)"
            }}
          >
            <div>
              <div style={{color:darkMode?"#E8EAED":"#1F1135",fontSize:"1.2rem",fontWeight:700,marginBottom:"0.3rem"}}>DSA Problems</div>
              <div style={{color:darkMode?"#B8BCC8":"#9CA3AF",fontSize:"0.85rem"}}>Solved & Counting</div>
            </div>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:"3.5rem",fontWeight:800,background:"linear-gradient(135deg,#A855F7,#C084FC)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}></div>
          </div>

{/* Beyond Tech Card - NOW IN THE SAME ROW */}
<div 
  onClick={() => setExpandedCard({
    id: 4,
    title: "Beyond Tech",
    shortDesc: "When I'm not coding or designing, you'll find me exploring life's creative side.",
    fullDesc: "When I’m not coding or designing, I’m fully in my main-character energy. \nI love dancing — whether it’s choreographed, freestyle, or just vibing to my favorite songs in my room.\n\n Acting is another creative outlet I enjoy; stepping into different roles and emotions feels exciting and expressive. \n\n I’m also a big fan of reading — from feel-good stories to thought-provoking books — and \n when I need to switch off my brain, you’ll definitely find me binge-watching a series like it’s my full-time job.\n And yes, I genuinely love sleeping. It’s my reset button, my therapy, and honestly, one of my favorite hobbies.\n\n Traveling is something I deeply enjoy — exploring new places, trying different foods, clicking endless pictures, and making spontaneous memories. \n\nI love experiences that add stories to my life.\nFor me, life is about balance — working hard, staying creative, resting well, and enjoying every moment in between.",

    color: "251,113,133"
  })}
    style={{
  gridColumn:"span 3",
  gridRow:"span 1",
    background:darkMode
      ? "linear-gradient(135deg, rgba(251,113,133,0.12) 0%, rgba(244,63,94,0.08) 100%)"
      : "linear-gradient(135deg, rgba(251,113,133,0.08) 0%, rgba(251,113,133,0.12) 100%)",
    backdropFilter:"blur(20px)",
    WebkitBackdropFilter:"blur(20px)",
    border:darkMode?"1px solid rgba(251,113,133,0.25)":"1px solid rgba(251,113,133,0.2)",
    borderRadius:28,
    padding:"2rem",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    cursor:"pointer",
    transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: expandedCard ? "scale(0.95)" : `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px)`,
    boxShadow:darkMode
      ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
      : "0 8px 32px rgba(251,113,133,0.15), inset 0 1px 0 rgba(255,255,255,0.5)"
  }}
  onMouseOver={e=>{
    if (!expandedCard) {
      e.currentTarget.style.transform=`translate(${mousePos.x * 1}px, ${mousePos.y * 1}px) translateY(-12px) scale(1.02)`;
      e.currentTarget.style.boxShadow=darkMode
        ? "0 20px 60px rgba(251,113,133,0.4), inset 0 1px 0 rgba(255,255,255,0.15)"
        : "0 20px 60px rgba(251,113,133,0.3), inset 0 1px 0 rgba(255,255,255,0.7)";
      e.currentTarget.style.borderColor="rgba(251,113,133,0.5)";
    }
  }}
  onMouseOut={e=>{
    if (!expandedCard) {
      e.currentTarget.style.transform=`translate(${mousePos.x * 1}px, ${mousePos.y * 1}px)`;
      e.currentTarget.style.boxShadow=darkMode
        ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
        : "0 8px 32px rgba(251,113,133,0.15), inset 0 1px 0 rgba(255,255,255,0.5)";
      e.currentTarget.style.borderColor=darkMode ? "rgba(251,113,133,0.25)" : "rgba(251,113,133,0.2)";
    }
  }}
>
  <div style={{fontSize:"3rem",marginBottom:"0.5rem"}}>🎭</div>
  <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.1rem",fontWeight:700,color:darkMode?"#E8EAED":"#1F1135"}}>Beyond Tech</div>
  <div style={{color:darkMode?"#B8BCC8":"#9CA3AF",fontSize:"0.75rem",marginTop:"0.5rem"}}>Click to explore</div>
</div>

        </div>
      </div>

      {/* EXPANDED CARD MODAL */}
      {expandedCard && (
        <div 
          style={{
            position:"fixed",
            inset:0,
            zIndex:9999,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding:"2rem",
            animation:"fadeIn 0.3s ease"
          }}
          onClick={() => setExpandedCard(null)}
        >
          {/* Blur backdrop */}
<div style={{
  position:"absolute",
  inset:0,
  backdropFilter:"blur(20px)",
  WebkitBackdropFilter:"blur(20px)",
  background:darkMode?"rgba(0,0,0,0.85)":"rgba(255,255,255,0.85)",
  animation:"fadeIn 0.3s ease"
}}></div>

          {/* Modal Card */}
<div 
  onClick={(e) => e.stopPropagation()}
  style={{
    position:"relative",
    width:"100%",
    maxWidth:"900px",
    maxHeight:"85vh",
overflowY:"auto",
scrollbarWidth:"none",
msOverflowStyle:"none",
              background:darkMode
  ? `linear-gradient(135deg, rgba(${expandedCard.color},0.18) 0%, rgba(${expandedCard.color},0.12) 100%)`
  : `linear-gradient(135deg, rgba(${expandedCard.color},0.15) 0%, rgba(${expandedCard.color},0.22) 100%)`,
backdropFilter:"blur(40px)",
WebkitBackdropFilter:"blur(40px)",
border:darkMode ? `2px solid rgba(${expandedCard.color},0.5)` : `2px solid rgba(${expandedCard.color},0.4)`,
borderRadius:32,
padding:"4rem",
boxShadow:darkMode
  ? `0 40px 120px rgba(${expandedCard.color},0.6), inset 0 2px 0 rgba(255,255,255,0.2)`
  : `0 40px 120px rgba(${expandedCard.color},0.5), inset 0 2px 0 rgba(255,255,255,0.9)`,
animation:"scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transformOrigin:"center"
            }}
          >
            {/* Close button */}
<button 
  onClick={() => setExpandedCard(null)}
  style={{
  position:"fixed",
  top:"5%",
  right:"5%",
    width:"50px",
    height:"50px",
                borderRadius:"50%",
                border:"none",
                background:darkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",
                color:darkMode?"#E8EAED":"#1F1135",
                fontSize:"1.8rem",
cursor:"pointer",
display:"flex",
alignItems:"center",
justifyContent:"center",
transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
backdropFilter:"blur(10px)",
fontWeight:300,
zIndex:10
              }}
              onMouseOver={e=>{
  e.currentTarget.style.transform="scale(1.15) rotate(90deg)";
  e.currentTarget.style.background=darkMode?"rgba(255,255,255,0.25)":"rgba(0,0,0,0.25)";
}}
              onMouseOut={e=>{e.currentTarget.style.transform="scale(1) rotate(0deg)";e.currentTarget.style.background=darkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)";}}
            >
              ✕
            </button>

            {/* Content */}
{expandedCard.emoji && (
  <div style={{fontSize:"6rem",marginBottom:"2rem",animation:"float 3s ease-in-out infinite"}}>{expandedCard.emoji}</div>
)}
<h2 style={{
  fontSize:"clamp(2.5rem,5vw,4rem)",
              fontWeight:800,
              marginBottom:"2.5rem",
color:darkMode?"#E8EAED":"#1F1135",
fontFamily:"'Syne',sans-serif",
lineHeight:1.1
            }}>
              {expandedCard.title}
            </h2>
            <div style={{
  color:darkMode?"#B8BCC8":"#4B5563",
  fontSize:"1.15rem",
  lineHeight:2,
  whiteSpace:"pre-wrap",
  letterSpacing:"0.01em"
}}>
              {expandedCard.fullDesc}
            </div>

           {/* Decorative gradient orbs */}
<div style={{
  position:"absolute",
  top:"-20%",
  right:"-15%",
  width:"400px",
  height:"400px",
  background:`radial-gradient(circle, rgba(${expandedCard.color},0.5), transparent)`,
  filter:"blur(80px)",
  pointerEvents:"none",
  zIndex:-1,
  animation:"float 8s ease-in-out infinite"
}}></div>
<div style={{
  position:"absolute",
  bottom:"-15%",
  left:"-10%",
  width:"350px",
  height:"350px",
  background:`radial-gradient(circle, rgba(${expandedCard.color},0.4), transparent)`,
  filter:"blur(70px)",
  pointerEvents:"none",
  zIndex:-1,
  animation:"float 10s ease-in-out infinite 2s"
}}></div>
          </div>
        </div>
      )}

     <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.8) rotateY(-15deg);
          }
          to { 
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }
        div::-webkit-scrollbar { 
          display: none; 
        }
      `}</style>
    </section>
  );
}

function Skills({ darkMode }) {
  const [activeGroup, setActiveGroup] = useState(null);

  const groups = [
    {
      id: "frontend",
      label: "Frontend",
      emoji: "🌐",
      accent: "#61DAFB",
      accentRgb: "97,218,251",
      rotate: "-2deg",
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ]
    },
    {
      id: "backend",
      label: "Backend",
      emoji: "⚙️",
      accent: "#339933",
      accentRgb: "51,153,51",
      rotate: "1.5deg",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ]
    },
    {
      id: "design",
      label: "Design",
      emoji: "🎨",
      accent: "#F24E1E",
      accentRgb: "242,78,30",
      rotate: "-1deg",
      skills: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
      ]
    },
    {
      id: "others",
      label: "AI / ML & DSA",
      emoji: "🤖",
      accent: "#A855F7",
      accentRgb: "168,85,247",
      rotate: "2deg",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "LeetCode", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" },
      ]
    },
  ];

  return (
    <section id="skills" style={{padding:"6rem 5%",background:"transparent",position:"relative",minHeight:"80vh",overflow:"hidden"}}>
      <style>{`
        .skill-card {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
        }
        .skill-card:hover {
          transform: translateY(-10px) scale(1.08) rotate(0deg) !important;
          box-shadow: 0 24px 48px rgba(0,0,0,0.18) !important;
        }
        .group-card {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
        }
        .group-card:hover {
          transform: translateY(-6px) rotate(0deg) scale(1.02) !important;
        }
        @keyframes blob-morph {
          0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60%/40% 70% 60% 30%; }
          75% { border-radius: 70% 30% 60% 40%/30% 50% 70% 50%; }
        }
      `}</style>

      <div style={{color:"#458B73",fontSize:"0.85rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.5rem",position:"relative",zIndex:10}}>// skills</div>
      <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:800,marginBottom:"0.5rem",color:darkMode?"#E8EAED":"#1F1135",position:"relative",zIndex:10}}>My Toolkit</h2>
      <p style={{color:darkMode?"#9CA3AF":"#6B7280",marginBottom:"3.5rem",fontSize:"1rem",position:"relative",zIndex:10}}></p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"2rem",position:"relative",zIndex:5}}>
        {groups.map((group) => (
          <div
            key={group.id}
            className="group-card"
            onMouseEnter={() => setActiveGroup(group.id)}
            onMouseLeave={() => setActiveGroup(null)}
            style={{
              transform: `rotate(${group.rotate})`,
              background: darkMode
                ? `linear-gradient(145deg, rgba(${group.accentRgb},0.12), rgba(${group.accentRgb},0.04))`
                : "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 24,
              padding: "2rem",
              border: `1.5px solid rgba(${group.accentRgb},${activeGroup===group.id?'0.5':'0.2'})`,
              boxShadow: activeGroup===group.id
                ? `0 20px 60px rgba(${group.accentRgb},0.25), 0 0 0 1px rgba(${group.accentRgb},0.1)`
                : `0 8px 30px rgba(0,0,0,0.08)`,
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Morphing blob background accent */}
            <div style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "160px",
              height: "160px",
              background: `radial-gradient(circle, rgba(${group.accentRgb},${activeGroup===group.id?'0.35':'0.15'}), transparent)`,
              animation: "blob-morph 8s ease-in-out infinite",
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}/>

            {/* Group header */}
            <div style={{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"1.5rem",position:"relative",zIndex:2}}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: `rgba(${group.accentRgb},0.15)`,
                border: `1.5px solid rgba(${group.accentRgb},0.3)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem",
              }}>{group.emoji}</div>
              <div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.1rem",color:darkMode?"#E8EAED":"#1F1135"}}>{group.label}</div>
                <div style={{fontSize:"0.72rem",color:`rgba(${group.accentRgb},0.9)`,fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase"}}>{group.skills.length} technologies</div>
              </div>
            </div>

            {/* Skill cards — polaroid style */}
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.8rem",position:"relative",zIndex:2}}>
              {group.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="skill-card"
                  style={{
                    background: darkMode ? "rgba(255,255,255,0.07)" : "white",
                    borderRadius: 16,
                    padding: "0.75rem 0.6rem 0.5rem",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)`,
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.45rem",
                    width: 72,
                    border: `1px solid rgba(${group.accentRgb},0.15)`,
                    transform: `rotate(${idx%2===0?'-1.5':'1.5'}deg)`,
                    cursor: "default",
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{width:36,height:36,objectFit:"contain",filter:skill.name==="LeetCode"?(darkMode?"invert(1)":"none"):"none"}}
                    onError={e=>{e.target.style.display='none';}}
                  />
                  {/* Polaroid "tape" strip at top */}
                  <div style={{
                    position:"absolute",top:"-6px",left:"50%",transform:"translateX(-50%)",
                    width:28,height:10,borderRadius:3,
                    background:`rgba(${group.accentRgb},0.35)`,
                    pointerEvents:"none",
                  }}/>
                  <div style={{fontSize:"0.62rem",fontWeight:700,color:darkMode?"#D1D5DB":"#374151",textAlign:"center",letterSpacing:"0.02em",lineHeight:1.2}}>{skill.name}</div>
                </div>
              ))}
            </div>

            {/* Bottom liquid wave decoration */}
            <svg viewBox="0 0 300 30" style={{position:"absolute",bottom:0,left:0,right:0,width:"100%",opacity:0.15,pointerEvents:"none"}}>
              <path d={`M0,15 C50,${activeGroup===group.id?'5':'25'} 100,${activeGroup===group.id?'25':'5'} 150,15 C200,${activeGroup===group.id?'5':'25'} 250,${activeGroup===group.id?'25':'5'} 300,15 L300,30 L0,30 Z`}
                fill={`rgba(${group.accentRgb},1)`}
                style={{transition:"d 0.6s ease"}}
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ darkMode }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const sectionRef = useRef(null);
  const wheelBuffer = useRef(0);

  const PROJECTS_WITH_LINKS = [
    { ...PROJECTS[0], liveLink: "https://your-live-link-1.com", githubLink: "https://github.com/rathoreanshika2408/project1" },
    { ...PROJECTS[1], liveLink: "https://anshikarathore-portfolio.netlify.app/", githubLink: "https://github.com/rathoreanshika2408/my-portfolio" },
    { ...PROJECTS[2], liveLink: "https://rathoreanshika2408.github.io/my-shop/", githubLink: "https://github.com/rathoreanshika2408/my-shop" },
  ];

  const goNext = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + 1) % PROJECTS_WITH_LINKS.length);
      setAnimating(false);
      setDirection(null);
    }, 500);
  };

  const goPrev = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c - 1 + PROJECTS_WITH_LINKS.length) % PROJECTS_WITH_LINKS.length);
      setAnimating(false);
      setDirection(null);
    }, 500);
  };

  const goTo = (i) => {
    if (animating || i === current) return;
    setDirection(i > current ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
      setDirection(null);
    }, 500);
  };

  useEffect(() => {
  const el = sectionRef.current;
  if (!el) return;
  const handleWheel = (e) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
    if (!inView) return;
    
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 30) return; // Increased from 10 to 30
    
    e.preventDefault();
    wheelBuffer.current += delta;
    
    if (wheelBuffer.current > 150) { // Increased from 80 to 150
      goNext();
      wheelBuffer.current = 0;
    } else if (wheelBuffer.current < -150) { // Increased from -80 to -150
      goPrev();
      wheelBuffer.current = 0;
    }
  };
  el.addEventListener("wheel", handleWheel, { passive: false }); // Changed to false
  return () => el.removeEventListener("wheel", handleWheel);
}, [animating, current]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); }
    setTouchStart(null);
  };

  const getProject = (offset) =>
    PROJECTS_WITH_LINKS[(current + offset + PROJECTS_WITH_LINKS.length) % PROJECTS_WITH_LINKS.length];

  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: (i * 2.3 % 6) + 3,
      x: (i * 17.3) % 100,
      y: (i * 23.7) % 100,
      duration: (i * 1.3 % 8) + 6,
      delay: (i * 0.7) % 5,
      opacity: (i * 0.03 % 0.25) + 0.05,
    }))
  ).current;

  return (
    <section
      id="projects"
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ padding: "6rem 5%", background: "transparent", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; }
          to   { transform: translateX(-130%) rotate(-10deg) scale(0.88); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; }
          to   { transform: translateX(130%) rotate(10deg) scale(0.88); opacity: 0; }
        }
        @keyframes slideInFromRight {
          from { transform: translateX(60px) scale(0.96); opacity: 0; }
          to   { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-60px) scale(0.96); opacity: 0; }
          to   { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes particleFloat {
          0%,100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25%  { transform: translateY(-30px) translateX(15px) rotate(90deg); }
          50%  { transform: translateY(-15px) translateX(-10px) rotate(180deg); }
          75%  { transform: translateY(-40px) translateX(8px) rotate(270deg); }
        }
        @keyframes orb-drift-1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(60px,-40px) scale(1.2); }
        }
        @keyframes orb-drift-2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-50px,50px) scale(0.85); }
        }
        @keyframes orb-drift-3 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(40px,30px) scale(1.1); }
          66% { transform: translate(-30px,-20px) scale(0.9); }
        }
        @keyframes shimmer-sweep {
          0%   { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes proj-glow-pulse {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        .proj-nav-btn {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .proj-nav-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 0 28px rgba(242,96,118,0.55) !important;
        }
        .proj-dot {
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          cursor: pointer;
        }
        .proj-link-btn {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          cursor: pointer;
        }
        .proj-link-btn:hover {
          transform: translateY(-3px);
          filter: brightness(1.12);
        }
      `}</style>

      {/* BACKGROUND */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,96,118,0.18), transparent)",
          filter: "blur(80px)", top: "-10%", right: "10%",
          animation: "orb-drift-1 14s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,151,96,0.15), transparent)",
          filter: "blur(70px)", bottom: "0%", left: "5%",
          animation: "orb-drift-2 18s ease-in-out infinite 2s",
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,209,80,0.12), transparent)",
          filter: "blur(60px)", top: "40%", left: "40%",
          animation: "orb-drift-3 12s ease-in-out infinite 4s",
        }} />
        {particles.map(p => (
          <div key={p.id} style={{
            position: "absolute",
            left: p.x + "%",
            top: p.y + "%",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(242,96,118," + p.opacity + ")",
            animation: "particleFloat " + p.duration + "s ease-in-out " + p.delay + "s infinite",
            boxShadow: "0 0 " + (p.size * 2) + "px rgba(242,96,118," + (p.opacity * 0.8) + ")",
          }} />
        ))}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(242,96,118,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,96,118,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* HEADER */}
      <div style={{ marginBottom: "3.5rem", position: "relative", zIndex: 2 }}>
        <div style={{ color: "#458B73", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>// projects</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: "0.3rem", color: darkMode ? "#E8EAED" : "#1F1135" }}>Things I've Built</h2>
            <p style={{ color: darkMode ? "#9CA3AF" : "#6B7280", fontSize: "0.92rem" }}></p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <button onClick={goPrev} className="proj-nav-btn" style={{
              width: 48, height: 48, borderRadius: "50%",
              background: darkMode ? "rgba(255,255,255,0.08)" : "white",
              border: "1.5px solid rgba(242,96,118,0.3)",
              color: darkMode ? "#E8EAED" : "#1F1135",
              fontSize: "1.1rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}>←</button>
            <button onClick={goNext} className="proj-nav-btn" style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg,#F26076,#FF9760)",
              border: "none", color: "white", fontSize: "1.1rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(242,96,118,0.4)",
            }}>→</button>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", position: "relative", zIndex: 2 }}>

        {/* LEFT — Stacked card deck */}
        <div style={{ position: "relative", height: 460 }}>

          {/* Background stack cards */}
          {[3, 2, 1].map((offset) => {
            const tx = offset * 8;
            const ty = offset * 8;
            const scale = 1 - offset * 0.05;
            const opacity = 1 - offset * 0.18;
            const p = getProject(offset);
            return (
              <div key={offset} style={{
                position: "absolute", inset: 0, borderRadius: 28,
                background: darkMode ? "rgba(30,20,55,0.9)" : "white",
                border: "1.5px solid rgba(255,255,255," + (darkMode ? 0.07 : 0.9) + ")",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                transform: "translateX(" + tx + "px) translateY(" + ty + "px) scale(" + scale + ")",
                opacity: opacity,
                overflow: "hidden",
                transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease",
              }}>
                <div style={{ height: "100%", background: p.bg, opacity: 0.35 }} />
              </div>
            );
          })}

          {/* FRONT card */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 28, overflow: "hidden",
            background: darkMode ? "rgba(18,10,38,0.97)" : "white",
            border: darkMode ? "1.5px solid rgba(242,96,118,0.3)" : "1.5px solid rgba(255,255,255,1)",
            boxShadow: darkMode
              ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(242,96,118,0.12)"
              : "0 32px 80px rgba(0,0,0,0.18), 0 2px 0 rgba(255,255,255,0.9)",
            animation: animating
              ? (direction === "left"
                ? "slideOutLeft 0.5s cubic-bezier(0.4,0,0.6,1) forwards"
                : "slideOutRight 0.5s cubic-bezier(0.4,0,0.6,1) forwards")
              : (direction === "left"
                ? "slideInFromRight 0.5s cubic-bezier(0.34,1.56,0.64,1)"
                : direction === "right"
                  ? "slideInFromLeft 0.5s cubic-bezier(0.34,1.56,0.64,1)"
                  : "none"),
            zIndex: 10,
          }}>

            {/* Image area — 75% of card */}
            <div style={{
              height: "75%", background: getProject(0).bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              {/* Shimmer sweep */}
              <div style={{
                position: "absolute", top: 0, bottom: 0, width: "45%",
                background: "linear-gradient(105deg,transparent,rgba(255,255,255,0.2),transparent)",
                animation: "shimmer-sweep 3s linear infinite",
                pointerEvents: "none",
              }} />
              {/* Bottom gradient overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                pointerEvents: "none",
              }} />

              {/* Emoji */}
              <div style={{
                fontSize: "6rem",
                filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.35))",
                zIndex: 2,
              }}>
                {getProject(0).emoji}
              </div>

              {/* Frame counter badge */}
              <div style={{
                position: "absolute", top: 14, left: 16,
                background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)",
                borderRadius: 50, padding: "0.25rem 0.8rem",
                fontFamily: "monospace", fontSize: "0.75rem",
                color: "rgba(255,255,255,0.75)", fontWeight: 600, letterSpacing: "0.06em",
                zIndex: 3,
              }}>
                {String(current + 1).padStart(2, "0")} / {String(PROJECTS_WITH_LINKS.length).padStart(2, "0")}
              </div>

              {/* REC indicator */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                display: "flex", alignItems: "center", gap: 5, zIndex: 3,
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#F26076",
                  boxShadow: "0 0 8px rgba(242,96,118,0.9)",
                  animation: "proj-glow-pulse 1.2s ease-in-out infinite",
                }} />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em" }}>LIVE</span>
              </div>

              {/* Action buttons overlaid at bottom of image */}
              <div style={{
                position: "absolute", bottom: 16, left: 16, right: 16,
                display: "flex", gap: "0.7rem", zIndex: 5,
              }}>
                <a
                  href={getProject(0).liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link-btn"
                  style={{
                    flex: 1,
                    padding: "0.55rem 1rem",
                    borderRadius: 50,
                    background: "linear-gradient(135deg,#F26076,#FF9760)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    boxShadow: "0 4px 20px rgba(242,96,118,0.5)",
                  }}
                >
                  View Project ↗
                </a>
                <a
                  href={getProject(0).githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link-btn"
                  style={{
                    flex: 1,
                    padding: "0.55rem 1rem",
                    borderRadius: 50,
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                  }}
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Bottom strip — project name only */}
            <div style={{
              height: "25%",
              padding: "0 1.4rem",
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid rgba(242,96,118,0.1)",
            }}>
              <div style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: darkMode ? "#E8EAED" : "#1F1135",
              }}>
                {getProject(0).title}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Info panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>

          {/* Big project number */}
          <div style={{
  fontFamily: "'Syne',sans-serif",
  fontSize: "clamp(5rem,10vw,8rem)",
  fontWeight: 800,
  lineHeight: 1,
  color: darkMode ? "#F26076" : "#1F1135",
  textShadow: darkMode ? "0 0 40px rgba(242,96,118,0.6)" : "0 4px 20px rgba(0,0,0,0.15)",
}}>
            {String(current + 1).padStart(2, "0")}
          </div>

          {/* Project title */}
          <div style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.4rem,2.5vw,2rem)",
            fontWeight: 800,
            color: darkMode ? "#E8EAED" : "#1F1135",
            lineHeight: 1.2,
          }}>
            {getProject(0).title}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg,rgba(242,96,118,0.5),transparent)" }} />

          {/* Overview */}
          <div>
            <div style={{
  fontSize: "0.72rem", fontWeight: 700, 
  color: darkMode ? "#F26076" : "#1F1135",
  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem",
}}>Overview</div>
            <div style={{ color: darkMode ? "#B8BCC8" : "#1F1135", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 600 }}>
  {getProject(0).desc}
</div>
          </div>

          {/* Tech Stack */}
          <div>
            <div style={{
  fontSize: "0.72rem", fontWeight: 700, 
  color: darkMode ? "#F26076" : "#1F1135",
  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem",
}}>Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {getProject(0).tags.map((t, i) => (
  <span 
    key={t} 
    style={{
      fontSize: "0.78rem", 
      fontWeight: 600, 
      color: darkMode ? "#F26076" : "#1F1135",
      background: darkMode ? "rgba(242,96,118,0.1)" : "rgba(242,96,118,0.15)",
      border: `1px solid ${darkMode ? "rgba(242,96,118,0.25)" : "rgba(242,96,118,0.4)"}`,
      padding: "0.3rem 0.85rem", 
      borderRadius: 50,
      animation: "fadeUp 0.4s ease " + (i * 0.07) + "s both",
      cursor: "default",
      transition: "all 0.3s ease",
    }}
    onMouseOver={e => {
      e.currentTarget.style.boxShadow = "0 0 20px rgba(242,96,118,0.8), 0 0 40px rgba(242,96,118,0.4)";
      e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
      e.currentTarget.style.background = darkMode ? "rgba(242,96,118,0.2)" : "rgba(242,96,118,0.25)";
    }}
    onMouseOut={e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.background = darkMode ? "rgba(242,96,118,0.1)" : "rgba(242,96,118,0.15)";
    }}
  >
    {t}
  </span>
))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg,rgba(242,96,118,0.5),transparent)" }} />

          {/* Dot navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{
  fontSize: "0.75rem",
  color: darkMode ? "#6B7280" : "#1F1135",
              fontWeight: 500, marginRight: "0.4rem",
            }}>
              {current + 1} of {PROJECTS_WITH_LINKS.length}
            </span>
            {PROJECTS_WITH_LINKS.map((_, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                className="proj-dot"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 50,
                  background: i === current
                    ? "linear-gradient(90deg,#F26076,#FF9760)"
                    : darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
                  boxShadow: i === current ? "0 0 12px rgba(242,96,118,0.5)" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ darkMode }) {
  const [form, setForm] = useState({name:"",email:"",msg:""});
  const [sent, setSent] = useState(false);
  
  return (
    <section id="contact" style={{padding:"6rem 5%",background:"transparent",position:"relative",overflow:"hidden"}}>
      {/* Animated Background Orbs */}
{/* Animated Background Orbs */}
<div style={{position:"absolute",inset:0,overflow:"hidden",zIndex:0}}>
  {/* Large orbs */}
  <div className="orb orb1" style={{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"rgba(139,92,246,0.5)",filter:"blur(100px)",top:"-15%",left:"-10%"}}></div>
  <div className="orb orb2" style={{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"rgba(236,72,153,0.4)",filter:"blur(110px)",top:"20%",right:"-15%"}}></div>
  <div className="orb orb3" style={{position:"absolute",width:"450px",height:"450px",borderRadius:"50%",background:"rgba(59,130,246,0.45)",filter:"blur(90px)",bottom:"5%",left:"15%"}}></div>
  
  {/* Medium orbs */}
  <div className="orb orb4" style={{position:"absolute",width:"350px",height:"350px",borderRadius:"50%",background:"rgba(167,139,250,0.35)",filter:"blur(70px)",top:"50%",left:"50%"}}></div>
  <div className="orb orb5" style={{position:"absolute",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(244,114,182,0.3)",filter:"blur(60px)",top:"10%",left:"30%"}}></div>
  <div className="orb orb6" style={{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",background:"rgba(96,165,250,0.35)",filter:"blur(65px)",bottom:"30%",right:"25%"}}></div>
  
  {/* Small orbs */}
  <div className="orb orb7" style={{position:"absolute",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(192,132,252,0.4)",filter:"blur(50px)",top:"70%",left:"5%"}}></div>
  <div className="orb orb8" style={{position:"absolute",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(251,113,133,0.35)",filter:"blur(55px)",top:"35%",left:"70%"}}></div>
  <div className="orb orb9" style={{position:"absolute",width:"180px",height:"180px",borderRadius:"50%",background:"rgba(147,197,253,0.4)",filter:"blur(45px)",bottom:"60%",right:"10%"}}></div>
</div>

      <div style={{position:"relative",zIndex:1}}>
        <div style={{color:"#7C3AED",fontSize:"0.85rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.5rem"}}>// contact</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:800,marginBottom:"1rem",color:darkMode?"#E8EAED":"#1F1135"}}>Let's Talk!</h2>
<p style={{color:darkMode?"#B8BCC8":"#1F1135",marginBottom:"3rem",maxWidth:500,lineHeight:1.7,fontWeight:600,textAlign:"center", margin:"0 auto 3rem auto"}}>Have an idea, opportunity, or just want to say hi? My inbox is always open! </p>
        
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:"2rem",alignItems:"start"}}>
          
          {/* Left Side - Contact Info Cards */}


{/* Left Side - Contact Info Cards */}
<div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
  {/* Email Card */}
  <a 
    href="mailto:rathoreanshika.2408@gmail.com"
    target="_blank" 
    rel="noopener noreferrer"
    className="glass-card" 
    style={{
      display:"flex",
      alignItems:"center",
      gap:"1rem",
      background:"rgba(255,255,255,0.1)",
      backdropFilter:"blur(20px)",
      WebkitBackdropFilter:"blur(20px)",
      border:"1px solid rgba(255,255,255,0.18)",
      borderRadius:16,
      padding:"1.2rem 1.4rem",
      boxShadow:"0 8px 32px rgba(0,0,0,0.1)",
      transition:"all 0.3s ease",
      cursor:"pointer",
      textDecoration:"none"
    }}
    onMouseOver={e=>{
      e.currentTarget.style.background="rgba(255,255,255,0.15)";
      e.currentTarget.style.transform="translateX(5px)";
      e.currentTarget.style.boxShadow="0 12px 40px rgba(124,58,237,0.2)";
    }}
    onMouseOut={e=>{
      e.currentTarget.style.background="rgba(255,255,255,0.1)";
      e.currentTarget.style.transform="translateX(0)";
      e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)";
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#EA4335" strokeWidth="2" fill="none"/>
      <path d="M22 6l-10 7L2 6" stroke="#EA4335" strokeWidth="2"/>
    </svg>
    <div>
      <div style={{fontSize:"0.75rem",color:darkMode?"#9CA3AF":"#9CA3AF",fontWeight:500}}>Email</div>
<div style={{fontWeight:600,color:darkMode?"#E8EAED":"#1F1135",fontSize:"0.9rem"}}>rathoreanshika.2408@gmail.com</div>
    </div>
  </a>

  {/* LinkedIn Card */}
  <a 
    href="https://www.linkedin.com/in/rathoreanshika"
    target="_blank" 
    rel="noopener noreferrer"
    className="glass-card" 
    style={{
      display:"flex",
      alignItems:"center",
      gap:"1rem",
      background:"rgba(255,255,255,0.1)",
      backdropFilter:"blur(20px)",
      WebkitBackdropFilter:"blur(20px)",
      border:"1px solid rgba(255,255,255,0.18)",
      borderRadius:16,
      padding:"1.2rem 1.4rem",
      boxShadow:"0 8px 32px rgba(0,0,0,0.1)",
      transition:"all 0.3s ease",
      cursor:"pointer",
      textDecoration:"none"
    }}
    onMouseOver={e=>{
      e.currentTarget.style.background="rgba(255,255,255,0.15)";
      e.currentTarget.style.transform="translateX(5px)";
      e.currentTarget.style.boxShadow="0 12px 40px rgba(124,58,237,0.2)";
    }}
    onMouseOut={e=>{
      e.currentTarget.style.background="rgba(255,255,255,0.1)";
      e.currentTarget.style.transform="translateX(0)";
      e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)";
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    <div>
  <div style={{fontSize:"0.75rem",color:darkMode?"#9CA3AF":"#9CA3AF",fontWeight:500}}>LinkedIn</div>
  <div style={{fontWeight:600,color:darkMode?"#E8EAED":"#1F1135",fontSize:"0.9rem"}}>linkedin.com/in/rathoreanshika</div>
</div>
  </a>

  {/* GitHub Card */}
  <a 
    href="https://github.com/rathoreanshika2408"
    target="_blank" 
    rel="noopener noreferrer"
    className="glass-card" 
    style={{
      display:"flex",
      alignItems:"center",
      gap:"1rem",
      background:"rgba(255,255,255,0.1)",
      backdropFilter:"blur(20px)",
      WebkitBackdropFilter:"blur(20px)",
      border:"1px solid rgba(255,255,255,0.18)",
      borderRadius:16,
      padding:"1.2rem 1.4rem",
      boxShadow:"0 8px 32px rgba(0,0,0,0.1)",
      transition:"all 0.3s ease",
      cursor:"pointer",
      textDecoration:"none"
    }}
    onMouseOver={e=>{
      e.currentTarget.style.background="rgba(255,255,255,0.15)";
      e.currentTarget.style.transform="translateX(5px)";
      e.currentTarget.style.boxShadow="0 12px 40px rgba(124,58,237,0.2)";
    }}
    onMouseOut={e=>{
      e.currentTarget.style.background="rgba(255,255,255,0.1)";
      e.currentTarget.style.transform="translateX(0)";
      e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)";
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#181717">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    <div>
  <div style={{fontSize:"0.75rem",color:darkMode?"#9CA3AF":"#9CA3AF",fontWeight:500}}>GitHub</div>
  <div style={{fontWeight:600,color:darkMode?"#E8EAED":"#1F1135",fontSize:"0.9rem"}}>github.com/rathoreanshika2408</div>
</div>
  </a>
</div>

          {/* Right Side - Contact Form */}
          {sent ? (
            <div className="glass-card" style={{
              textAlign:"center",
              padding:"3rem 2rem",
              background:"rgba(255,255,255,0.12)",
              backdropFilter:"blur(25px)",
              WebkitBackdropFilter:"blur(25px)",
              border:"1px solid rgba(255,255,255,0.2)",
              borderRadius:24,
              boxShadow:"0 8px 32px rgba(0,0,0,0.1)"
            }}>
              <div style={{fontSize:"4rem",marginBottom:"1rem"}}>🎉</div>
              <h3 style={{fontSize:"1.4rem",marginBottom:"0.5rem",color:"#1F1135",fontWeight:700}}>Message Sent!</h3>
              <p style={{color:"#6B7280"}}>Thanks! I'll get back to you soon.</p>
            </div>
          ) : (
            <div className="glass-card" style={{
              background:"rgba(255,255,255,0.12)",
              backdropFilter:"blur(25px)",
              WebkitBackdropFilter:"blur(25px)",
              border:"1px solid rgba(255,255,255,0.2)",
              borderRadius:24,
              padding:"2rem",
              boxShadow:"0 8px 32px rgba(0,0,0,0.1)"
            }}>
              <div style={{display:"flex",flexDirection:"column",gap:"1.2rem"}}>
                <input 
                  style={{
                    background:"rgba(255,255,255,0.08)",
                    backdropFilter:"blur(10px)",
                    border:"1px solid rgba(255,255,255,0.15)",
                    borderRadius:12,
                    padding:"0.9rem 1.2rem",
                    color:"#1F1135",
                    fontFamily:"inherit",
                    fontSize:"0.95rem",
                    outline:"none",
                    width:"100%",
                    transition:"all 0.3s ease"
                  }}
                  placeholder="Your Name ✍️" 
                  value={form.name} 
                  onChange={e=>setForm({...form,name:e.target.value})}
                  onFocus={e=>{
                    e.target.style.background="rgba(255,255,255,0.15)";
                    e.target.style.borderColor="rgba(124,58,237,0.4)";
                  }}
                  onBlur={e=>{
                    e.target.style.background="rgba(255,255,255,0.08)";
                    e.target.style.borderColor="rgba(255,255,255,0.15)";
                  }}
                />
                
                <input 
                  style={{
                    background:"rgba(255,255,255,0.08)",
                    backdropFilter:"blur(10px)",
                    border:"1px solid rgba(255,255,255,0.15)",
                    borderRadius:12,
                    padding:"0.9rem 1.2rem",
                    color:"#1F1135",
                    fontFamily:"inherit",
                    fontSize:"0.95rem",
                    outline:"none",
                    width:"100%",
                    transition:"all 0.3s ease"
                  }}
                  placeholder="Your Email 📧" 
                  value={form.email} 
                  onChange={e=>setForm({...form,email:e.target.value})}
                  onFocus={e=>{
                    e.target.style.background="rgba(255,255,255,0.15)";
                    e.target.style.borderColor="rgba(124,58,237,0.4)";
                  }}
                  onBlur={e=>{
                    e.target.style.background="rgba(255,255,255,0.08)";
                    e.target.style.borderColor="rgba(255,255,255,0.15)";
                  }}
                />
                
                <textarea 
                  style={{
                    background:"rgba(255,255,255,0.08)",
                    backdropFilter:"blur(10px)",
                    border:"1px solid rgba(255,255,255,0.15)",
                    borderRadius:12,
                    padding:"0.9rem 1.2rem",
                    color:"#1F1135",
                    fontFamily:"inherit",
                    fontSize:"0.95rem",
                    outline:"none",
                    width:"100%",
                    resize:"vertical",
                    minHeight:140,
                    transition:"all 0.3s ease"
                  }}
                  placeholder="Your Message 💬" 
                  value={form.msg} 
                  onChange={e=>setForm({...form,msg:e.target.value})}
                  onFocus={e=>{
                    e.target.style.background="rgba(255,255,255,0.15)";
                    e.target.style.borderColor="rgba(124,58,237,0.4)";
                  }}
                  onBlur={e=>{
                    e.target.style.background="rgba(255,255,255,0.08)";
                    e.target.style.borderColor="rgba(255,255,255,0.15)";
                  }}
                />
                
                <button 
                  onClick={async (e)=>{
  if(form.name && form.email && form.msg){
    e.currentTarget.classList.add('sending');
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwJ8afHQfTQNb8tM6hlFLfupSIAZXEpPl13k5DjuGpqDige8hSg2uZQw3cNxDOi_gUM/exec", {
        method: "POST",
        body: JSON.stringify({ name: form.name, email: form.email, message: form.msg }),
      });
    } catch(err) { console.log(err); }
    setTimeout(()=>setSent(true), 1500);
  }
}}
                  className="send-btn"
                  style={{
                    background:"#6366F1",
                    color:"white",
                    border:"none",
                    padding:"0.7rem 2rem",
                    borderRadius:50,
                    fontFamily:"inherit",
                    fontWeight:700,
                    fontSize:"0.95rem",
                    cursor:"pointer",
                    position:"relative",
                    overflow:"hidden",
                    transition:"all 0.3s ease",
                    boxShadow:"0 4px 20px rgba(99,102,241,0.3)"
                  }}
                >
                  <span className="btn-text">SEND</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ darkMode }) {
  return (
    <footer style={{textAlign:"center",padding:"3rem 5%",borderTop:"1px solid rgba(242,96,118,0.15)",background:"transparent"}}>
      <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.5rem",fontWeight:800,background:"linear-gradient(135deg,#F26076,#FF9760,#FFD150)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"0.5rem"}}>Anshika Rathore</div>
<p style={{color:darkMode?"#B8BCC8":"#9CA3AF",fontSize:"0.9rem",marginBottom:"0.5rem"}}>Designed & Built with 🩵 and lots of ☕</p>
<p style={{color:darkMode?"rgba(218, 218, 226, 0.5)":"rgba(81, 84, 90, 0.5)",fontSize:"0.8rem"}}>© 2026 Anshika Rathore. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div style={{margin:0,padding:0,overflowX:"hidden"}}>
      <style>{`
        @keyframes wave1 { 0%,100%{d:path("M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z")} 50%{d:path("M0,40 C360,0 1080,0 1440,40 L1440,80 L0,80 Z")} }
        @keyframes wave2 { 0%,100%{d:path("M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z")} 50%{d:path("M0,40 C360,80 1080,80 1440,40 L1440,80 L0,80 Z")} }
        @keyframes waveMove { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* HERO */}
      <div style={{position:"relative",background:darkMode?"linear-gradient(160deg,#1a1a2e,#16213e,#0f3460)":"linear-gradient(160deg,#ffd6d6,#ffbfa0,#fde68a)",zIndex:1,paddingBottom:"120px",transition:"background 0.5s ease"}}>
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />  

        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"120px",overflow:"hidden"}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{width:"200%",height:"100%",display:"block",animation:"waveMove 6s linear infinite"}}>
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fde68a"/>
                <stop offset="50%" stopColor="#c8f7e8"/>
                <stop offset="100%" stopColor="#fde68a"/>
              </linearGradient>
            </defs>
            <path d="M0,0 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1620,60 C1800,120 1980,0 2160,60 C2340,120 2520,0 2880,0 L2880,120 L0,120 Z" fill="url(#g1)"/>
          </svg>
        </div>
      </div>

      {/* ABOUT */}
      <div style={{position:"relative",background:darkMode?"linear-gradient(160deg,#0f3460,#1a1f3a,#16213e)":"linear-gradient(160deg,#fde68a,#c8f7e8,#a7f3d0)",zIndex:2,marginTop:"-2px",paddingBottom:"120px",transition:"background 0.5s ease"}}>
        <About darkMode={darkMode} />

        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"120px",overflow:"hidden"}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{width:"200%",height:"100%",display:"block",animation:"waveMove 8s linear infinite"}}>
            <defs>
              <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a7f3d0"/>
                <stop offset="50%" stopColor="#6ee7c7"/>
                <stop offset="100%" stopColor="#a7f3d0"/>
              </linearGradient>
            </defs>
            <path d="M0,60 C180,0 360,120 540,60 C720,0 900,120 1080,60 C1260,0 1440,120 1620,60 C1800,0 1980,120 2160,60 C2340,0 2520,120 2880,60 L2880,120 L0,120 Z" fill="url(#g2)"/>
          </svg>
        </div>
      </div>

      {/* SKILLS */}
      <div style={{position:"relative",background:darkMode?"linear-gradient(160deg,#16213e,#1e2749,#0a2342)":"linear-gradient(160deg,#a7f3d0,#6ee7c7,#5dd6b5)",zIndex:3,marginTop:"-2px",paddingBottom:"120px",transition:"background 0.5s ease"}}>
        <Skills darkMode={darkMode} />

        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"120px",overflow:"hidden"}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{width:"200%",height:"100%",display:"block",animation:"waveMove 7s linear infinite"}}>
            <defs>
              <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffbfa0"/>
                <stop offset="50%" stopColor="#FF9760"/>
                <stop offset="100%" stopColor="#ffbfa0"/>
              </linearGradient>
            </defs>
            <path d="M0,0 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1620,60 C1800,120 1980,0 2160,60 C2340,120 2520,0 2880,0 L2880,120 L0,120 Z" fill="url(#g3)"/>
          </svg>
        </div>
      </div>

      {/* PROJECTS */}
      <div style={{position:"relative",background:darkMode?"linear-gradient(160deg,#0a2342,#1a1a2e,#2d1b3d)":"linear-gradient(160deg,#ffbfa0,#FF9760,#F26076)",zIndex:4,marginTop:"-2px",paddingBottom:"120px",transition:"background 0.5s ease"}}>
< Projects darkMode={darkMode} />        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"120px",overflow:"hidden"}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{width:"200%",height:"100%",display:"block",animation:"waveMove 5s linear infinite"}}>
            <defs>
              <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F26076"/>
                <stop offset="50%" stopColor="#e84d6a"/>
                <stop offset="100%" stopColor="#F26076"/>
              </linearGradient>
            </defs>
            <path d="M0,60 C180,0 360,120 540,60 C720,0 900,120 1080,60 C1260,0 1440,120 1620,60 C1800,0 1980,120 2160,60 C2340,0 2520,120 2880,60 L2880,120 L0,120 Z" fill="url(#g4)"/>
          </svg>
        </div>
      </div>

      {/* CONTACT */}
      <div style={{position:"relative",background:darkMode?"linear-gradient(160deg, #2d1b3d, #1F1135,#0a0a0a)":"linear-gradient(160deg, #F26076, #e84d6a, #5f3783)",zIndex:5,marginTop:"-2px",paddingBottom:"120px",transition:"background 0.5s ease"}}>
        <Contact darkMode={darkMode} />
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"120px",overflow:"hidden"}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{width:"200%",height:"100%",display:"block",animation:"waveMove 9s linear infinite"}}>
            <defs>
              <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#bd1d62"/>
<stop offset="50%" stopColor="#5f3783"/>
<stop offset="100%" stopColor="#1F1135"/>
              </linearGradient>
            </defs>
            <path d="M0,0 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1620,60 C1800,120 1980,0 2160,60 C2340,120 2520,0 2880,0 L2880,120 L0,120 Z" fill="url(#g5)"/>
          </svg>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{position:"relative",background:darkMode?"linear-gradient(160deg, #5f3783, #3a1774, #0a0a0a)":"linear-gradient( 160deg, #431868, #e03470, #d13a68)",zIndex:5,marginTop:"-4px",paddingBottom:"120px",transition:"background 0.5s ease"}}>
        <Footer darkMode={darkMode} />
      </div>

    </div>
  );
}