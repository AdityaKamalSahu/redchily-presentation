const journey = ['VISION', 'UI APPROVAL', 'PRODUCT DEVELOPMENT', 'TESTING', 'PRODUCTION']

export function Slide11Closing() {
  return (
    <div className="closing-slide">
      <div className="closing-slide__brand"><span aria-hidden="true" /><strong>रेड चिली</strong></div>
      <p className="closing-slide__tagline">खबर का पूरा सच</p>
      <h1>आपका जिला <b>→</b> आपकी खबर</h1>
      <p className="closing-slide__description">एक आधुनिक, हिंदी-first डिजिटल न्यूज़ प्लेटफॉर्म।</p>
      <div className="closing-slide__journey" aria-label="Vision से production तक प्रस्तावित अगली यात्रा">{journey.map((step, index) => <span key={step}>{step}{index < journey.length - 1 && <b>→</b>}</span>)}</div>
      <div className="closing-slide__index">रेड चिली / 11</div>
    </div>
  )
}
