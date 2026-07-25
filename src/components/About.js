import Image from "next/image";
import styles from "./About.module.css";
import { FadeIn, FadeInStaggerItem } from "./animations/FadeIn";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <FadeIn direction="right" delay={0.2} className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <Image 
              src="/dinakar-photo.jpg" 
              alt="Dinakar S - Data Analyst & Consultant" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', borderRadius: '12px' }} 
              priority
            />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.years}>1+</span>
            <span className={styles.text}>Year Analytics Experience</span>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.4} staggerChildren={0.2} className={styles.contentWrapper}>
          <FadeInStaggerItem>
            <h2 className={styles.heading}>About Me</h2>
          </FadeInStaggerItem>
          
          <div className={styles.description}>
            <FadeInStaggerItem>
              <p>
                Dinakar S is a <strong>Project Associate in Performance Management &amp; Business Consulting</strong>, with hands-on experience in organizational performance improvement and business transformation across the manufacturing sector.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                Holding an MBA in Marketing &amp; HR from the University of Calicut and a foundation in Computer Applications, he bridges strategic business thinking with analytical rigor — enabling him to design data-driven solutions that drive measurable organizational outcomes.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                He has contributed to multiple organizational restructuring and business transformation projects, delivering work in KPI architecture, Performance Management System (PMS) design, process optimization, MIS &amp; executive dashboard development, and cross-functional organizational analytics. His consulting engagements have spanned complex manufacturing environments where operational efficiency and structured performance governance are critical.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                Dinakar translates complex organizational data into clear, actionable intelligence — supporting leadership teams in making informed decisions, improving process efficiency, and building scalable performance frameworks for sustainable business growth.
              </p>
            </FadeInStaggerItem>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
