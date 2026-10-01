const geography = [
  { level: 'LOCALITY', place: 'आपकी स्थानीयता', note: 'आपका इलाका' },
  { level: 'DISTRICT', place: 'आपका जिला', note: 'आपकी खबर' },
  { level: 'STATE', place: 'आपका राज्य', note: 'बड़ी तस्वीर' },
  { level: 'INDIA', place: 'भारत', note: 'राष्ट्रीय संदर्भ' },
]

export function CoverSlide() {
  return (
    <div className="cover-slide">
      <div className="cover-copy">
        <div className="cover-brand">
          <span className="cover-brand__slot" aria-hidden="true" />
          <strong>रेड चिली</strong>
        </div>
        <p className="cover-kicker">HINDI NEWS · DISTRICT FIRST</p>
        <h1>खबर का<br /><span>पूरा सच</span></h1>
        <p className="cover-proposition"><span>आपका जिला</span><b>→</b><span>आपकी खबर</span></p>
      </div>
      <div className="cover-map" aria-label="स्थानीयता से जिले, राज्य और भारत तक">
        <p className="cover-map__kicker">NEWS STARTS HERE</p>
        <div className="cover-map__track" aria-hidden="true" />
        {geography.map((item, index) => (
          <div className="cover-map__stop" key={item.level}>
            <span className="cover-map__dot" aria-hidden="true" />
            <span className="cover-map__number">0{index + 1} / {item.level}</span>
            <strong className="cover-map__place">{item.place}</strong>
            <span className="cover-map__note">{item.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
