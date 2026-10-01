const groups = [
  { name: 'CONTENT', items: 'Articles  Drafts  Review  Published' },
  { name: 'STRUCTURE', items: 'Categories  States  Districts  Localities' },
  { name: 'PEOPLE', items: 'Authors  Users  Roles' },
  { name: 'MEDIA', items: 'Media Library  Galleries  Videos' },
  { name: 'PUBLISHING', items: 'Homepage  Breaking News  Editorial  Ads' },
  { name: 'SYSTEM', items: 'Site Settings  SEO  Analytics  Audit Logs' },
]
const contentRows = [
  ['नगर पुस्तकालय में शुरू हुआ साप्ताहिक पठन सत्र', 'REVIEW', 'समुदाय', 'नरसिंहपुर', 'संवाददाता', 'आज'],
  ['जिले के विद्यालयों में विज्ञान प्रदर्शनी की तैयारी', 'DRAFT', 'शिक्षा', 'गाडरवारा', 'संवाददाता', 'आज'],
  ['स्थानीय बाजार में हस्तशिल्प को मिला नया मंच', 'PUBLISHED', 'व्यापार', 'नरसिंहपुर', 'संवाददाता', 'कल'],
]

export function Slide08AdminControl() {
  return (
    <div className="ops-slide ops-slide--admin">
      <header className="ops-heading ops-heading--light"><p>ADMIN &amp; CONTENT CONTROL / 08</p><h1>पूरे प्लेटफॉर्म का नियंत्रण<br /><span>एक ही न्यूज़रूम से।</span></h1><span>सामग्री, स्थान, मीडिया, होमपेज और विज्ञापन — सब एक संगठित CMS से।</span></header>
      <div className="cms-concept" aria-label="प्रस्तावित न्यूज़रूम CMS अवधारणा">
        <aside className="cms-rail"><strong>रेड चिली</strong><small>न्यूज़रूम CMS</small>{groups.map(group => <div className="cms-group" key={group.name}><b>{group.name}</b><span>{group.items}</span></div>)}</aside>
        <main className="cms-main"><header><span>डैशबोर्ड / संपादकीय नियंत्रण</span><b>संकल्पित स्क्रीन · ⌄</b></header><div className="cms-metrics">{[['कुल लेख', '—'], ['ड्राफ्ट', '—'], ['रिव्यू', '—'], ['प्रकाशित', '—'], ['ब्रेकिंग', '—']].map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</div><div className="cms-table"><header><b>लेख प्रबंधन</b><span>फ़िल्टर ⌄  लेख खोजें ⌕</span></header><div className="cms-table__labels"><span>शीर्षक</span><span>स्थिति</span><span>श्रेणी</span><span>जिला</span><span>लेखक</span><span>अपडेट</span></div>{contentRows.map((row, index) => <div className="cms-row" key={row[0]}><b><i>0{index + 1}</i>{row[0]}</b><span className={`cms-status cms-status--${row[1].toLowerCase()}`}>{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span><span>{row[4]}</span><span>{row[5]}</span></div>)}</div><footer>सामग्री और प्रकाशन नियंत्रण · एक संगठित न्यूज़रूम से</footer></main>
      </div>
    </div>
  )
}
