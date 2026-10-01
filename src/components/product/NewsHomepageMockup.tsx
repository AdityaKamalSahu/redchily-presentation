const navItems = ['ताज़ा', 'श्रेणियाँ', 'मध्य प्रदेश', 'जिला', 'राष्ट्रीय', 'अंतरराष्ट्रीय', 'विशेष', 'वीडियो']

export function NewsHomepageMockup() {
  return (
    <div className="news-site" aria-label="Red Chily conceptual homepage mockup">
      <header className="news-site__header">
        <div className="news-site__brand"><span aria-hidden="true" /><strong>रेड चिली</strong></div>
        <span className="news-site__date">गुरुवार, १ अक्टूबर २०२६</span>
        <div className="news-site__tools"><span>⌕ खोजें</span><b>⌖ जिला चुनें</b><i>☰</i></div>
      </header>
      <div className="news-site__breaking"><b>ब्रेकिंग</b><span>गाडरवारा में आज से शुरू होगा साप्ताहिक जनसंवाद कार्यक्रम</span><i>◀ ▶</i></div>
      <nav className="news-site__nav" aria-label="मुख्य समाचार अनुभाग">{navItems.map(item => <span key={item}>{item}</span>)}<b>☰</b></nav>
      <div className="news-site__edition"><span>आपका संस्करण</span><strong>नरसिंहपुर</strong><b>बदलें ⌄</b></div>
      <div className="news-site__content">
        <section className="news-site__lead">
          <div className="editorial-image editorial-image--lead"><span>जिले की तस्वीरें</span><b>गाडरवारा</b></div>
          <p className="mock-category">जिले से · गाडरवारा</p>
          <h3>शहर के पुराने तालाब को नया जीवन देने की तैयारी</h3>
          <p>स्थानीय नागरिकों और निकाय की बैठक में सामने आया विकास का साझा प्रस्ताव।</p>
          <small>संवाददाता · १२ मिनट पहले</small>
        </section>
        <section className="news-site__latest"><header><h3>ताज़ा खबरें</h3><span>सभी खबरें →</span></header><article><b>जिला</b><strong>किसान समूह ने प्राकृतिक खेती पर साझा किए अनुभव</strong><small>२४ मिनट पहले</small></article><article><b>राज्य</b><strong>क्षेत्रीय पुस्तक मेले में स्थानीय लेखकों की भागीदारी</strong><small>५२ मिनट पहले</small></article><article><b>राष्ट्रीय</b><strong>युवाओं के कौशल संवाद के लिए नई पहल का प्रस्ताव</strong><small>१ घंटा पहले</small></article></section>
        <aside className="news-site__rail"><div className="ad-placeholder"><span>विज्ञापन क्षेत्र</span><small>प्रस्तावित स्थान</small></div><h3>सबसे ज्यादा पढ़ी गई</h3><p><b>01</b> अपने जिले में इस सप्ताह होने वाले प्रमुख आयोजन</p><p><b>02</b> स्थानीय पुस्तकालय में शुरू हुई नई पाठशाला</p></aside>
        <div className="news-site__lower"><span>राज्य</span><span>विशेष रिपोर्ट</span><span>संपादकीय</span><span>वीडियो</span><span>फोटो स्टोरी</span><span>और देखें →</span></div>
      </div>
      <footer className="news-site__footer"><b>रेड चिली</b><span>खबर का पूरा सच</span><span>हमारे बारे में · संपर्क · गोपनीयता</span></footer>
    </div>
  )
}
