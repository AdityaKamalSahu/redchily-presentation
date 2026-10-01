import { NewsHomepageMockup } from '../components/product/NewsHomepageMockup'

const levels = ['स्थानीय', 'जिला', 'राज्य', 'राष्ट्रीय', 'अंतरराष्ट्रीय']

export function Slide04PublicNewsExperience() {
  return (
    <div className="product-slide product-slide--homepage">
      <header className="product-slide__heading"><p>04 / PUBLIC NEWS EXPERIENCE</p><h1>खबर देखने का एक नया अनुभव</h1><span>एक तेज़, हिंदी-first डिजिटल न्यूज़ अनुभव — जहाँ स्थानीय खबर से लेकर राष्ट्रीय खबर तक सब कुछ एक स्पष्ट संरचना में मिलता है।</span></header>
      <div className="homepage-showcase"><NewsHomepageMockup /></div>
      <aside className="product-slide__aside"><p className="product-slide__aside-label">RED CHILY · प्रस्तावित अनुभव</p><h2>एक ही जगह<br />हर स्तर की खबर</h2><ol>{levels.map((level, index) => <li key={level}><b>0{index + 1}</b><span>{level}</span>{index < levels.length - 1 && <i aria-hidden="true" />}</li>)}</ol><p className="product-slide__aside-note">लोकल से राष्ट्रीय तक — एक सहज समाचार प्रवाह में।</p></aside>
    </div>
  )
}
