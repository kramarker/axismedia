// src/app/page.tsx
"use client";

export default function HomePage() {
  const year = new Date().getFullYear();
  const toggleMenu = () => {
    const links = document.querySelector(".nav-links") as HTMLElement | null;
    if (!links) return;
    const visible = getComputedStyle(links).display !== "none";
    links.style.display = visible ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.gap = "8px";
    links.style.padding = "10px 0";
  };

  return (
    <>
      <header>
        <div className="container nav">
          <a href="#top" className="logo" aria-label="Axis Media home">
            <span className="logo-mark" aria-hidden="true"></span>
            <span>
              Axis <span style={{ color: "var(--brand)" }}>Media</span>
            </span>
          </a>
          <nav>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
            <button className="mobile-menu btn btn-ghost" aria-label="Open menu" onClick={toggleMenu}>
              Menu
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="chip">Chicagoland • Local Service Specialists</div>
            <h1>Websites &amp; growth for blue-collar businesses.</h1>
            <p>
              We build fast, clean websites and run campaigns that turn searches into phone calls. Electricians, HVAC,
              plumbers, landscapers — if you work with your hands, we help fill your calendar.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#contact">Get a free audit</a>
              <a className="btn btn-ghost" href="#work">See recent wins</a>
            </div>
            <div className="trust">
              <small>Average site load: <strong>&lt;1.2s</strong></small>
              <small>Core Web Vitals: <strong>Green</strong></small>
              <small>Response time: <strong>&lt;24h</strong></small>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>What we do</h2>
            <p className="lead">Everything you need to get found and hired — packaged for busy owners.</p>
            <div className="grid grid-3 mt-16">
              <article className="card"><h3>Website Design &amp; Build</h3>
                <p>Modern, mobile-first sites that load fast and showcase your work. Hosting &amp; maintenance included.</p>
              </article>
              <article className="card"><h3>SEO That Actually Works</h3>
                <p>Local SEO, citations, reviews, and content that ranks in your service areas.</p>
              </article>
              <article className="card"><h3>Paid Ads &amp; Tracking</h3>
                <p>Google Ads and Meta campaigns with call tracking so you see exactly what converts.</p>
              </article>
              <article className="card"><h3>Photo &amp; Video Packages</h3>
                <p>Simple on-site shoots and edits that make your jobs look premium.</p>
              </article>
              <article className="card"><h3>Brand &amp; Copy</h3>
                <p>Clear messaging and visual identity that feels professional, not corporate.</p>
              </article>
              <article className="card"><h3>Review Engine</h3>
                <p>Inbox-simple follow-ups that turn happy customers into 5-star reviews.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="work" className="section" aria-label="Selected work">
          <div className="container showcase">
            <div>
              <h2>Recent work</h2>
              <p className="lead">Before/after rebuilds and ad campaigns for local service pros.</p>
              <div className="grid grid-2 mt-16">
                <div className="mock">
                  <div className="window"></div>
                  <div className="caption">Electrician • 3.2× more calls after site refresh</div>
                </div>
                <div className="mock">
                  <div className="window"></div>
                  <div className="caption">HVAC • $38 cost-per-lead with call tracking</div>
                </div>
              </div>
            </div>
            <aside className="card">
              <h3>Why this works</h3>
              <ul>
                <li>Fast pages win local search and conversions.</li>
                <li>Clear calls-to-action route to phone &amp; forms.</li>
                <li>We write for humans first, Google second.</li>
                <li>We measure every call and form submission.</li>
              </ul>
              <p className="mt-14"><a className="btn btn-primary" href="#contact">Ask for an audit</a></p>
            </aside>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <h2>Proven process</h2>
            <p className="lead">Simple, transparent, and quick — most sites launch in 2–3 weeks.</p>
            <div className="steps">
              <div className="step"><div className="num">01</div><strong>Discovery</strong><br /><span className="muted">30-min call to align on goals and budget.</span></div>
              <div className="step"><div className="num">02</div><strong>Strategy</strong><br /><span className="muted">Site map, messaging, keywords, ad plan.</span></div>
              <div className="step"><div className="num">03</div><strong>Build</strong><br /><span className="muted">Design + development with weekly check-ins.</span></div>
              <div className="step"><div className="num">04</div><strong>Launch &amp; Grow</strong><br /><span className="muted">Tracking live, iterate with SEO &amp; ads.</span></div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <h2>Simple pricing</h2>
            <p className="lead">Start small, scale when it’s working. Month-to-month options available.</p>
            <div className="plans">
              <article className="card plan">
                <h3>Starter Website</h3>
                <div className="price">$990</div>
                <ul className="features">
                  <li>Up to 4 pages</li>
                  <li>Mobile-first, fast hosting</li>
                  <li>Basic SEO + analytics</li>
                  <li>1 week turnaround</li>
                </ul>
                <p className="mt-14"><a href="#contact" className="btn btn-primary">Get started</a></p>
              </article>
              <article className="card plan featured">
                <h3>Local Growth</h3>
                <div className="price">$1,990</div>
                <ul className="features">
                  <li>Up to 8 pages</li>
                  <li>Local SEO setup</li>
                  <li>Reviews + call tracking</li>
                  <li>Copywriting included</li>
                </ul>
                <p className="mt-14"><a href="#contact" className="btn btn-primary">Book a consult</a></p>
              </article>
              <article className="card plan">
                <h3>Ongoing</h3>
                <div className="price">from $499/mo</div>
                <ul className="features">
                  <li>SEO &amp; content</li>
                  <li>Google Ads management</li>
                  <li>Site care &amp; updates</li>
                  <li>Monthly reporting</li>
                </ul>
                <p className="mt-14"><a href="#contact" className="btn btn-primary">See packages</a></p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container grid grid-2">
            <div>
              <h2>Built by students, obsessed with results</h2>
              <p className="lead">We’re Axis Media — a small team of UIUC engineers and creators who ship fast, talk straight, and measure everything.</p>
              <ul>
                <li>Honest timelines and clear pricing.</li>
                <li>No long contracts. We earn the renewal.</li>
                <li>You own your site and your data.</li>
              </ul>
            </div>
            <div className="card">
              <h3>What we value</h3>
              <p><strong>Speed</strong> over perfection. <strong>Clarity</strong> over jargon. <strong>Proof</strong> over promises.</p>
              <p className="muted">Bring us your mess. We’ll bring a plan.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container grid grid-2">
            <div>
              <h2>Let’s talk</h2>
              <p className="lead">Tell us about your business and we’ll send a quick plan with pricing.</p>
              {/* Replace the action with your real Formspree endpoint later */}
              <form action="https://formspree.io/f/your-id" method="POST">
                <label><span>Name</span><input type="text" name="name" required /></label>
                <label><span>Email</span><input type="email" name="email" required /></label>
                <label><span>Phone</span><input type="tel" name="phone" /></label>
                <label><span>What do you need?</span><textarea name="message" placeholder="Website, SEO, ads…"></textarea></label>
                <button className="btn btn-primary" type="submit">Send message</button>
              </form>
              <p className="disclaimer">By submitting, you agree we may contact you about your project. No spam.</p>
            </div>
            <div className="card">
              <h3>Contact details</h3>
              <p>
                Phone: <a href="tel:+12242345689">(224) 234-5689</a><br />
                Chicagoland, IL
              </p>
              <p className="muted">Email: <em>coming soon</em></p>
              <p className="muted">Prefer text? Add your number in the form and we’ll text you back.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerwrap">
          <div>© {year} Axis Media. All rights reserved.</div>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

    </>
  );
}
