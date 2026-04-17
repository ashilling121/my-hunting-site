import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const photos = [
  "/IMG_0842.jpg",
  "/IMG_2376.jpg",
  "/IMG_3953.jpg",
  "/IMG_4096.jpg",
  "/IMG_4097.jpg",
  "/IMG_4146.jpg",
  "/IMG_4150.jpg",
  "/IMG_4252.jpg",
  "/IMG_4304.jpg",
  "/IMG_4408.jpg",
  "/IMG_4416.jpg",
  "/IMG_4475.jpg",
  "/IMG_4680.jpg",
  "/IMG_4702.jpg",
  "/IMG_4758.jpg",
  "/IMG_4792.jpg",
];

export default function Website() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({firstName:"",lastName:"",location:"",size:"",description:""});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleSubmit = () => {
    setSending(true);
    emailjs.send(
      "service_fm4gq9i",
      "template_mm375k7",
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        location: formData.location,
        size: formData.size,
        description: formData.description,
        name: `${formData.firstName} ${formData.lastName}`,
      },
      "tt1-R3-37C-7H_4FF"
    ).then(() => {
      setSending(false);
      setSubmitted(true);
      setShowForm(false);
      setFormData({firstName:"",lastName:"",location:"",size:"",description:""});
    }).catch(() => {
      setSending(false);
      alert("Something went wrong. Please try again.");
    });
  };

  const prev = () => setCurrent((current - 1 + photos.length) % photos.length);
  const next = () => setCurrent((current + 1) % photos.length);

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#0a1a0a",color:"#f5f0e8",fontFamily:"sans-serif"}}>

      <nav style={{backgroundColor:"#0a1a0a",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1a3a1a"}}>
        <span style={{fontSize:"1.3rem",fontWeight:"bold",color:"#d97706"}}>HuntPro Land Management & Consulting</span>
        <a href="https://www.huntpro.app" target="_blank" rel="noreferrer" style={{color:"#d97706",textDecoration:"none",fontWeight:"bold",fontSize:"0.95rem",border:"1px solid #d97706",padding:"6px 14px",borderRadius:"6px"}}>Visit HuntPro App →</a>
      </nav>

      <section style={{textAlign:"center",padding:"80px 24px",backgroundColor:"#0d2b0d",color:"white"}}>
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} style={{fontSize:"3rem",fontWeight:"bold",marginBottom:"16px",color:"#f5f0e8"}}>
          HuntPro Land Management and Consulting
        </motion.h1>
        <p style={{fontSize:"1.2rem",maxWidth:"600px",margin:"0 auto 24px",color:"#c9c3b5"}}>Helping landowners maximize their property's potential through proven strategy, wildlife expertise, and modern technology.</p>
        <button onClick={() => setShowForm(true)} style={{fontSize:"1.1rem",padding:"12px 28px",backgroundColor:"#d97706",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>Request a Consultation</button>
      </section>

      {showForm && (
        <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000}}>
          <div style={{backgroundColor:"#0d2b0d",padding:"40px",borderRadius:"16px",width:"90%",maxWidth:"500px",border:"1px solid #d97706"}}>
            <h2 style={{marginBottom:"24px",fontSize:"1.5rem",fontWeight:"bold",color:"#d97706"}}>Request a Consultation</h2>
            <input placeholder="First Name" value={formData.firstName} onChange={e => setFormData({...formData,firstName:e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #d97706",boxSizing:"border-box",backgroundColor:"#0a1a0a",color:"white"}} />
            <input placeholder="Last Name" value={formData.lastName} onChange={e => setFormData({...formData,lastName:e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #d97706",boxSizing:"border-box",backgroundColor:"#0a1a0a",color:"white"}} />
            <input placeholder="Property Location" value={formData.location} onChange={e => setFormData({...formData,location:e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #d97706",boxSizing:"border-box",backgroundColor:"#0a1a0a",color:"white"}} />
            <input placeholder="Property Size (acres)" value={formData.size} onChange={e => setFormData({...formData,size:e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #d97706",boxSizing:"border-box",backgroundColor:"#0a1a0a",color:"white"}} />
            <textarea placeholder="What are you looking for?" value={formData.description} onChange={e => setFormData({...formData,description:e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #d97706",boxSizing:"border-box",backgroundColor:"#0a1a0a",color:"white",height:"100px"}} />
            <div style={{display:"flex",gap:"12px"}}>
              <button onClick={handleSubmit} disabled={sending} style={{flex:1,padding:"12px",backgroundColor:"#d97706",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold",fontSize:"1rem"}}>
                {sending ? "Sending..." : "Submit"}
              </button>
              <button onClick={() => setShowForm(false)} style={{flex:1,padding:"12px",backgroundColor:"#1a3a1a",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold",fontSize:"1rem"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <div style={{backgroundColor:"#d97706",padding:"16px",textAlign:"center",color:"white",fontWeight:"bold"}}>
          Thank you! We will be in touch soon.
        </div>
      )}

      <section style={{padding:"64px 24px",maxWidth:"800px",margin:"0 auto"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",marginBottom:"16px",color:"#d97706"}}>About</h2>
        <p style={{fontSize:"1.1rem",lineHeight:"1.8",color:"#c9c3b5"}}>We specialize in large-scale land and wildlife management, combining hands-on ranch experience with data-driven decision making. With experience managing an 8,400-acre ranch and working with advanced wildlife analytics tools, we help landowners improve habitat, optimize hunting strategy, and make smarter decisions backed by real data.</p>
      </section>

      <section style={{padding:"64px 24px",backgroundColor:"#0d2b0d"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",textAlign:"center",marginBottom:"48px",color:"#d97706"}}>Services</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px",maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{borderRadius:"16px",border:"1px solid #d97706",padding:"24px",backgroundColor:"#0a1a0a"}}>
            <h3 style={{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"8px",color:"#d97706"}}>Property Audit</h3>
            <p style={{color:"#c9c3b5"}}>Comprehensive evaluation of your property including camera strategy, habitat, and hunting pressure analysis.</p>
          </div>
          <div style={{borderRadius:"16px",border:"1px solid #d97706",padding:"24px",backgroundColor:"#0a1a0a"}}>
            <h3 style={{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"8px",color:"#d97706"}}>Ongoing Consulting</h3>
            <p style={{color:"#c9c3b5"}}>Monthly or seasonal consulting to analyze data, refine strategy, and improve overall property performance.</p>
          </div>
          <div style={{borderRadius:"16px",border:"1px solid #d97706",padding:"24px",backgroundColor:"#0a1a0a"}}>
            <h3 style={{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"8px",color:"#d97706"}}>Full Property Setup</h3>
            <p style={{color:"#c9c3b5"}}>End-to-end setup including camera systems, stand placement, access routes, and data integration.</p>
          </div>
        </div>
      </section>

      <section style={{padding:"64px 24px",maxWidth:"900px",margin:"0 auto"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",textAlign:"center",marginBottom:"32px",color:"#d97706"}}>From the Ranch</h2>
        <div style={{position:"relative",borderRadius:"16px",overflow:"hidden",border:"1px solid #d97706"}}>
          <img src={photos[current]} alt="Ranch" style={{width:"100%",height:"500px",objectFit:"contain",backgroundColor:"#0a1a0a",display:"block"}} />
          <button onClick={prev} style={{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",backgroundColor:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:"48px",height:"48px",fontSize:"1.5rem",cursor:"pointer"}}>‹</button>
          <button onClick={next} style={{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",backgroundColor:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:"48px",height:"48px",fontSize:"1.5rem",cursor:"pointer"}}>›</button>
          <div style={{position:"absolute",bottom:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"8px"}}>
            {photos.map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:i===current?"#d97706":"rgba(255,255,255,0.5)",cursor:"pointer"}} />
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"64px 24px",maxWidth:"800px",margin:"0 auto"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",marginBottom:"24px",color:"#d97706"}}>Why Work With Us</h2>
        <ul style={{listStyle:"none",padding:0,fontSize:"1.1rem",lineHeight:"2",color:"#c9c3b5"}}>
          <li>✓ Managed 8,000+ acre ranch operations</li>
          <li>✓ Expertise in wildlife data and analytics</li>
          <li>✓ Real-world hunting and land management experience</li>
          <li>✓ Technology-driven approach for better results</li>
        </ul>
      </section>

      <section style={{padding:"48px 24px",backgroundColor:"#0d2b0d",textAlign:"center"}}>
        <h2 style={{fontSize:"1.8rem",fontWeight:"600",marginBottom:"16px",color:"#d97706"}}>Powered by HuntPro Technology</h2>
        <p style={{color:"#c9c3b5",marginBottom:"24px",maxWidth:"600px",margin:"0 auto 24px"}}>We use HuntPro's cutting-edge AI wildlife management platform to deliver data-driven insights for your property.</p>
        <a href="https://www.huntpro.app" target="_blank" rel="noreferrer" style={{fontSize:"1.1rem",padding:"12px 28px",backgroundColor:"#d97706",color:"white",borderRadius:"8px",fontWeight:"bold",textDecoration:"none"}}>Learn About HuntPro →</a>
      </section>

      <section style={{padding:"80px 24px",backgroundColor:"#0a1a0a",textAlign:"center"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",marginBottom:"16px",color:"#d97706"}}>Get Started</h2>
        <p style={{marginBottom:"24px",fontSize:"1.1rem",color:"#c9c3b5"}}>Reach out to discuss your property and how we can improve it.</p>
        <button onClick={() => window.location.href="mailto:ashilling@121g.io"} style={{fontSize:"1.1rem",padding:"12px 28px",backgroundColor:"#d97706",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>Contact Now</button>
      </section>

    </div>
  );
}
