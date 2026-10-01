const hierarchy = [
  { level: 'भारत', example: 'India' },
  { level: 'राज्य', example: 'Madhya Pradesh' },
  { level: 'जिला', example: 'Narsinghpur' },
  { level: 'शहर / कस्बा / स्थानीयता', example: 'Gadarwara' },
]

export function VisionSlide() {
  return (
    <div className="vision-slide">
      <div className="vision-copy">
        <p className="vision-eyebrow">DISTRICT FIRST JOURNALISM</p>
        <h1>एक नया डिजिटल<br /><span>न्यूज़रूम</span><br />जहाँ खबर की शुरुआत<br />आपके जिले से होती है।</h1>
        <p className="vision-copy__support">A serious, modern, fast and scalable Hindi digital news platform—built around the places people call home.</p>
        <p className="vision-proposition"><span>आपका जिला</span><b>→</b><span>आपकी खबर</span></p>
      </div>
      <div className="geo-hierarchy" aria-label="जिला-first समाचार की भौगोलिक परतें और उदाहरण">
        <p className="geo-hierarchy__label">GEOGRAPHIC REACH</p>
        <p className="geo-hierarchy__example">उदाहरण · India → Madhya Pradesh → Narsinghpur → Gadarwara</p>
        <div className="geo-hierarchy__rule" aria-hidden="true" />
        {hierarchy.map((item, index) => (
          <div className="geo-hierarchy__row" key={item.level}>
            <span className="geo-hierarchy__number">0{index + 1}</span>
            <strong className="geo-hierarchy__level">{item.level}</strong>
            <span className="geo-hierarchy__example-value">{item.example}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
