const workflow = [
  { number: '01', status: 'DRAFT', role: 'REPORTER', action: 'लेख तैयार करे और ड्राफ्ट सेव करे' },
  { number: '02', status: 'REVIEW', role: 'EDITOR', action: 'लेख की समीक्षा और संपादन करे' },
  { number: '03', status: 'APPROVED', role: 'EDITOR', action: 'प्रकाशन के लिए मंज़ूरी दे' },
  { number: '04', status: 'PUBLISHED', role: 'READERS', action: 'स्वीकृत खबर पाठकों तक पहुँचे' },
]

export function Slide07NewsroomWorkflow() {
  return (
    <div className="ops-slide ops-slide--workflow">
      <header className="ops-heading"><p>NEWSROOM WORKFLOW / 07</p><h1>एक खबर।<br /><span>एक स्पष्ट संपादकीय प्रक्रिया।</span></h1></header>
      <div className="workflow-path" aria-label="Reporter से Published तक संपादकीय प्रक्रिया">
        {workflow.map((step, index) => <div className={`workflow-step workflow-step--${index + 1}`} key={step.status}><b className="workflow-step__number">{step.number}</b><strong>{step.status}</strong><span>{step.role}</span><p>{step.action}</p>{index < workflow.length - 1 && <i aria-hidden="true">↓</i>}</div>)}
      </div>
      <section className="editor-concept" aria-label="प्रस्तावित लेख संपादन स्क्रीन">
        <header><span>रेड चिली / लेख संपादक</span><b>संकल्पित स्क्रीन</b></header>
        <div className="editor-concept__body"><p>शीर्षक</p><h2>गाडरवारा में खुली विज्ञान पाठशाला की तैयारी</h2><div className="editor-concept__meta"><span>श्रेणी शिक्षा</span><span>जिला नरसिंहपुर</span><span>लेखक संवाददाता</span></div><div className="editor-concept__lines"><i /><i /><i /><i /></div><div className="editor-concept__status"><span>स्थिति</span><b>02 REVIEW</b></div><footer><span>ड्राफ्ट सेव करें</span><b>समीक्षा के लिए भेजें →</b></footer></div>
      </section>
      <div className="workflow-roles"><div><b>REPORTER</b><span>बनाएँ · सेव करें · भेजें</span></div><div><b>EDITOR</b><span>समीक्षा · संपादन · मंज़ूरी · प्रकाशित</span></div><div><b>SUPER ADMIN</b><span>पूर्ण नियंत्रण</span></div></div>
    </div>
  )
}
