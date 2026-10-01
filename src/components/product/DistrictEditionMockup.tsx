const localStories = [
  { section: 'आज की बड़ी खबरें', headline: 'नगर के साप्ताहिक बाजार को व्यवस्थित करने पर चर्चा', tag: 'स्थानीय' },
  { section: 'आपके आसपास', headline: 'वार्ड पुस्तकालय में बच्चों के लिए खुला पठन-कक्ष', tag: 'गाडरवारा' },
  { section: 'ताज़ा खबरें', headline: 'जिले के विद्यालयों में विज्ञान प्रदर्शनी की तैयारी', tag: 'नरसिंहपुर' },
]

export function DistrictEditionMockup() {
  return (
    <div className="district-ui" aria-label="प्रस्तावित जिला संस्करण mockup">
      <header><span>आपका जिला</span><button type="button">⌖ नरसिंहपुर ⌄</button></header>
      <div className="district-ui__memory"><span className="district-ui__pin">⌖</span><p><b>आपकी पसंद याद रखी जाएगी</b><small>इस डिवाइस पर सेव · लॉगिन की ज़रूरत नहीं</small></p><i>●</i></div>
      <nav><span>होमपेज</span><span>ताज़ा</span><span>ब्रेकिंग</span><span>आपके लिए</span></nav>
      <div className="district-ui__hero"><div className="editorial-image editorial-image--district"><span>नरसिंहपुर संस्करण</span><b>जिला संवाद</b></div><p className="mock-category">नरसिंहपुर · आज की बड़ी खबर</p><h3>जिले की नई पहल से स्थानीय हुनर को मिलेगा साझा मंच</h3><small>जिला संवाददाता · आज</small></div>
      {localStories.map(story => <article className="district-ui__story" key={story.section}><div><span>{story.section}</span><h4>{story.headline}</h4></div><b>{story.tag}</b></article>)}
      <footer><span>ब्रेकिंग</span><span>आपके लिए सुझाव</span><span>स्थानीय खबरें</span></footer>
    </div>
  )
}
