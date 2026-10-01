import { ArticleMockup } from '../components/product/ArticleMockup'

const storyParts = [
  { number: '01', name: 'कहानी', detail: 'हेडलाइन + पूरा लेख' },
  { number: '02', name: 'संदर्भ', detail: 'स्थान + श्रेणी + टैग' },
  { number: '03', name: 'पहचान', detail: 'लेखक + प्रकाशन समय' },
  { number: '04', name: 'पहुंच', detail: 'संबंधित खबरें + साझा करें' },
]

export function Slide06ArticleExperience() {
  return (
    <div className="product-slide product-slide--article">
      <header className="article-slide__heading"><p>06 / ARTICLE EXPERIENCE</p><h1>हर खबर, पूरी कहानी के साथ</h1><span>एक ऐसा article experience जहाँ खबर, संदर्भ, लेखक और स्थान — सब एक साथ मिलें।</span></header>
      <div className="article-showcase"><ArticleMockup /></div>
      <aside className="article-parts"><p>एक स्पष्ट संपादकीय संरचना</p>{storyParts.map(part => <div className="article-part" key={part.number}><b>{part.number}</b><span><strong>{part.name}</strong><small>{part.detail}</small></span></div>)}</aside>
    </div>
  )
}
