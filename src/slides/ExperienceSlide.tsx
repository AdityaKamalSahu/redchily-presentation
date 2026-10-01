const readerFeatures = ['Homepage', 'Latest', 'Breaking', 'District', 'Search', 'Articles', 'Video', 'Photo Stories', 'Most Read']
const newsroomRoles = ['Reporter', 'Editor', 'Content', 'Media', 'Homepage']
const workflow = ['Draft', 'Review', 'Approved', 'Published']
const businessTools = ['Ads', 'Analytics', 'SEO', 'Social Sharing']

export function ExperienceSlide() {
  return (
    <div className="ecosystem-slide">
      <header className="ecosystem-title">
        <div>
          <p className="ecosystem-title__eyebrow">RED CHILY · PRODUCT ECOSYSTEM</p>
          <h1>सिर्फ न्यूज़ वेबसाइट नहीं।<br /><span>एक पूरा डिजिटल न्यूज़रूम।</span></h1>
        </div>
        <span className="ecosystem-title__index">03 / 03</span>
      </header>

      <div className="ecosystem-body">
        <section className="reader-experience" aria-label="Reader Experience">
          <div className="reader-experience__heading">
            <p className="ecosystem-meta">01 · READER</p>
            <h2>Reader<br /><span>Experience</span></h2>
            <p>पाठक के लिए खुला, तेज़ और जिला-first अनुभव।</p>
          </div>
          <div className="reader-experience__content">
            <div className="reader-experience__masthead"><strong>पाठक अनुभव</strong><span>जिले से शुरू करें <b>⌖</b></span></div>
            <div className="reader-experience__features">
              {readerFeatures.map((feature, index) => <span className="reader-feature" key={feature}><b>0{index + 1}</b>{feature}</span>)}
            </div>
          </div>
        </section>
        <div className="ecosystem-branches">
          <section className="ecosystem-branch" aria-label="Newsroom">
            <div className="ecosystem-branch__heading"><b>02</b><h2>Newsroom</h2></div>
            <div className="ecosystem-branch__roles">{newsroomRoles.map(role => <span key={role}>{role}</span>)}</div>
            <div className="workflow" aria-label="Draft, Review, Approved, Published">
              {workflow.map(step => <span key={step}>{step}</span>)}
            </div>
          </section>
          <section className="ecosystem-branch" aria-label="Business and Growth">
            <div className="ecosystem-branch__heading"><b>03</b><h2>Business &amp; Growth</h2></div>
            <div className="ecosystem-branch__roles">{businessTools.map(tool => <span key={tool}>{tool}</span>)}</div>
            <p className="ecosystem-branch__note">विकास, पहुँच और स्थिरता</p>
          </section>
        </div>
      </div>
    </div>
  )
}
