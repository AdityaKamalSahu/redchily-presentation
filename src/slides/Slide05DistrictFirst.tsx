import { DistrictEditionMockup } from '../components/product/DistrictEditionMockup'

const geography = [
  { hi: 'भारत', en: 'Country' },
  { hi: 'मध्य प्रदेश', en: 'State' },
  { hi: 'नरसिंहपुर', en: 'District' },
  { hi: 'गाडरवारा', en: 'City / Town / Locality' },
]

export function Slide05DistrictFirst() {
  return (
    <div className="product-slide product-slide--district">
      <header className="district-head"><p>DISTRICT FIRST JOURNALISM / 05</p><h1>खबर की शुरुआत<br />आपके जिले से।</h1><strong>आपका जिला <b>→</b> आपकी खबर</strong></header>
      <div className="district-architecture"><span>उदाहरण · प्रस्तावित विस्तार योग्य संरचना</span><div className="district-architecture__path">{geography.map((place, index) => <div className={`district-architecture__node district-architecture__node--${index + 1}`} key={place.en}><small>0{index + 1} {place.en}</small><b>{place.hi}</b>{index < geography.length - 1 && <i aria-hidden="true">↓</i>}</div>)}</div><p>भारत के लिए तैयार, जिले से शुरू</p></div>
      <section className="district-product"><DistrictEditionMockup /></section>
    </div>
  )
}
