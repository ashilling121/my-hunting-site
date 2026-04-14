import { useState } from "react";
import { motion } from "framer-motion";

export default function Website() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", location: "", size: "", description: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const subject = `Consultation Request from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}%0AProperty Location: ${formData.location}%0AProperty Size: ${formData.size}%0ADescription: ${formData.description}`;
    window.location.href = `mailto:ashilling121@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#f9fafb",fontFamily:"sans-serif"}}>
      <section style={{textAlign:"center",padding:"80px 24px",backgroundColor:"#14532d",color:"white"}}>
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} style={{fontSize:"3rem",fontWeight:"bold",marginBottom:"16px"}}>
          HuntPro Land Management and Consulting
        </motion.h1>
        <p style={{fontSize:"1.2rem",maxWidth:"600px",margin:"0 auto 24px"}}>Helping landowners maximize their property's potential through proven strategy, wildlife expertise, and modern technology.</p>
        <button onClick={() => setShowForm(true)} style={{fontSize:"1.1rem",padding:"12px 28px",backgroundColor:"white",color:"#14532d",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>Request a Consultation</button>
      </section>

      {showForm && (
        <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000}}>
          <div style={{backgroundColor:"white",padding:"40px",borderRadius:"16px",width:"90%",maxWidth:"500px"}}>
            <h2 style={{marginBottom:"24px",fontSize:"1.5rem",fontWeight:"bold"}}>Request a Consultation</h2>
            <input placeholder="First Name" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #ccc",boxSizing:"border-box"}} />
            <input placeholder="Last Name" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #ccc",boxSizing:"border-box"}} />
            <input placeholder="Property Location" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #ccc",boxSizing:"border-box"}} />
            <input placeholder="Property Size (acres)" value={formData.size} onChange={e => setFormData({...formData, size: e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #ccc",boxSizing:"border-box"}} />
            <textarea placeholder="What are you looking for?" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} style={{width:"100%",padding:"10px",marginBottom:"12px",borderRadius:"8px",border:"1px solid #ccc",boxSizing:"border-box",height:"100px"}} />
            <div style={{display:"flex",gap:"12px"}}>
              <button onClick={handleSubmit} style={{flex:1,padding:"12px",backgroundColor:"#14532d",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold",fontSize:"1rem"}}>Submit</button>
              <button onClick={() => setShowForm(false)} style={{flex:1,padding:"12px",backgroundColor:"#ccc",color:"#333",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold",fontSize:"1rem"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <div style={{backgroundColor:"#dcfce7",padding:"16px",textAlign:"center",color:"#14532d",fontWeight:"bold"}}>
          Thank you! We will be in touch soon.
        </div>
      )}

      <section style={{padding:"64px 24px",maxWidth:"800px",margin:"0 auto"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",marginBottom:"16px"}}>About</h2>
        <p style={{fontSize:"1.1rem",lineHeight:"1.8"}}>We specialize in large-scale land and wildlife management, combining hands-on ranch experience with data-driven decision making. With experience managing an 8,400-acre ranch and working with advanced wildlife analytics tools, we help landowners improve habitat, optimize hunting strategy, and make smarter decisions backed by real data.</p>
      </section>

      <section style={{padding:"64px 24px",backgroundColor:"white"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",textAlign:"center",marginBottom:"48px"}}>Services</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px",maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{borderRadius:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",padding:"24px",backgroundColor:"white"}}>
            <h3 style={{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"8px"}}>Property Audit</h3>
            <p>Comprehensive evaluation of your property including camera strategy, habitat, and hunting pressure analysis.</p>
          </div>
          <div style={{borderRadius:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",padding:"24px",backgroundColor:"white"}}>
            <h3 style={{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"8px"}}>Ongoing Consulting</h3>
            <p>Monthly or seasonal consulting to analyze data, refine strategy, and improve overall property performance.</p>
          </div>
          <div style={{borderRadius:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",padding:"24px",backgroundColor:"white"}}>
            <h3 style={{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"8px"}}>Full Property Setup</h3>
            <p>End-to-end setup including camera systems, stand placement, access routes, and data integration.</p>
          </div>
        </div>
      </section>

      <section style={{padding:"64px 24px",maxWidth:"800px",margin:"0 auto"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",marginBottom:"24px"}}>Why Work With Us</h2>
        <ul style={{listStyle:"none",padding:0,fontSize:"1.1rem",lineHeight:"2"}}>
          <li>✓ Managed 8,000+ acre ranch operations</li>
          <li>✓ Expertise in wildlife data and analytics</li>
          <li>✓ Real-world hunting and land management experience</li>
          <li>✓ Technology-driven approach for better results</li>
        </ul>
      </section>

      <section style={{padding:"80px 24px",backgroundColor:"#14532d",color:"white",textAlign:"center"}}>
        <h2 style={{fontSize:"2rem",fontWeight:"600",marginBottom:"16px"}}>Get Started</h2>
        <p style={{marginBottom:"24px",fontSize:"1.1rem"}}>Reach out to discuss your property and how we can improve it.</p>
        <button onClick={() => window.location.href = "mailto:ashilling121@gmail.com"} style={{fontSize:"1.1rem",padding:"12px 28px",backgroundColor:"white",color:"#14532d",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>Contact Now</button>
      </section>
    </div>
  );
}
