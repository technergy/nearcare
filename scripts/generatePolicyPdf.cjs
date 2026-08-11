const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });

// Pipe its output somewhere, like to a file or HTTP response
doc.pipe(fs.createWriteStream('public/NearCare_Compliance_Policies.pdf'));

// Add standard headers
doc.fontSize(20)
   .font('Helvetica-Bold')
   .fillColor('#0f172a')
   .text('Near Care Support', { align: 'center' });

doc.fontSize(14)
   .font('Helvetica')
   .fillColor('#4b5563')
   .text('NDIS Compliance & Participant Rights', { align: 'center' })
   .moveDown(0.5);

doc.fontSize(10)
   .text('Approved NDIS Registered Provider | Phone: 1300 123 456', { align: 'center' })
   .moveDown(2);

doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#e5e7eb').stroke().moveDown(2);

// Part 1: Rights
doc.fontSize(16).font('Helvetica-Bold').fillColor('#0f172a').text('1. Charter of Participant Rights').moveDown(0.5);
doc.fontSize(11).font('Helvetica').fillColor('#374151').text('Under the National Disability Insurance Scheme (NDIS) Quality and Safeguards framework, you are at the center of every decision. Your voice, your culture, and your goals guide how we work together.').moveDown(1);

const rights = [
  {
    title: 'Choice and Control',
    body: 'You have the right to decide what supports you receive, when and how they are delivered, and who delivers them. You can change your preferences at any time without penalty.'
  },
  {
    title: 'Dignity and Respect',
    body: 'We respect your privacy, independence, individual values, and personal identity. You will always be treated as a valued individual with equal rights.'
  },
  {
    title: 'Cultural & Linguistic Safety',
    body: 'We welcome and support individuals from all cultural, religious, and linguistic backgrounds, including First Nations Australians and LGBTQIA+ community members.'
  },
  {
    title: 'Safety & Freedom from Harm',
    body: 'You have the absolute right to be free from violence, abuse, neglect, exploitation, or discrimination. Our workers undergo rigorous screening and ongoing training.'
  }
];

rights.forEach(right => {
  doc.fontSize(12).font('Helvetica-Bold').fillColor('#0f172a').text(`• ${right.title}`);
  doc.fontSize(11).font('Helvetica').fillColor('#374151').text(right.body, { indent: 15 }).moveDown(0.8);
});

doc.moveDown(1);

// Part 2: Privacy Policy
doc.fontSize(16).font('Helvetica-Bold').fillColor('#0f172a').text('2. Privacy Policy & Confidentiality').moveDown(0.5);
doc.fontSize(11).font('Helvetica').fillColor('#374151').text('We are committed to protecting your personal information in accordance with the Privacy Act 1988 and the NDIS Practice Standards.').moveDown(1);

const privacy = [
  {
    title: 'Collection of Information',
    body: 'We only collect information that is necessary to provide you with high-quality, safe supports. We will always ask for your consent before collecting sensitive health information.'
  },
  {
    title: 'Use and Disclosure',
    body: 'Your information is used strictly to plan and deliver your supports. We will not share your details with third parties (like doctors or family members) without your explicit permission, unless required by law.'
  },
  {
    title: 'Data Security',
    body: 'All physical and digital records are kept strictly secure. Digital data is encrypted and access is limited only to the staff directly involved in your care.'
  },
  {
    title: 'Access to Your Records',
    body: 'You have the right to request access to your personal information at any time, and to ask us to correct any details that are inaccurate or out of date.'
  }
];

privacy.forEach(item => {
  doc.fontSize(12).font('Helvetica-Bold').fillColor('#0f172a').text(`• ${item.title}`);
  doc.fontSize(11).font('Helvetica').fillColor('#374151').text(item.body, { indent: 15 }).moveDown(0.8);
});

// Start new page for Complaints
doc.addPage();

// Part 3: Complaints
doc.fontSize(16).font('Helvetica-Bold').fillColor('#0f172a').text('3. Complaints & Feedback Process').moveDown(0.5);
doc.fontSize(11).font('Helvetica').fillColor('#374151').text('Your feedback helps us improve. We welcome all feedback, whether it is a compliment, suggestion, or complaint. We guarantee that making a complaint will never negatively affect the supports you receive.').moveDown(1);

const complaints = [
  {
    title: 'How to Provide Feedback or Complain',
    body: 'You can speak directly to any staff member, call our office on 1300 123 456, email us at feedback@nearcare.com.au, or use the Contact Form on our website.'
  },
  {
    title: 'Anonymous Complaints',
    body: 'You can make a complaint anonymously. We will investigate all anonymous complaints fully, though we will not be able to report the outcome back to you directly.'
  },
  {
    title: 'Our Resolution Process',
    body: '1. We will acknowledge your complaint within 24 hours.\n2. An impartial manager will investigate the issue transparently.\n3. We will work with you to find a satisfactory resolution within 14 days.\n4. We will keep you updated every step of the way.'
  },
  {
    title: 'NDIS Quality and Safeguards Commission',
    body: 'If you are not satisfied with how we handle your complaint, or prefer to speak to an external body, you can contact the NDIS Commission directly on 1800 035 544 (free call from landlines) or visit ndiscommission.gov.au.'
  }
];

complaints.forEach(item => {
  doc.fontSize(12).font('Helvetica-Bold').fillColor('#0f172a').text(`• ${item.title}`);
  doc.fontSize(11).font('Helvetica').fillColor('#374151').text(item.body, { indent: 15 }).moveDown(0.8);
});

doc.moveDown(2);
doc.fontSize(10).font('Helvetica-Oblique').fillColor('#6b7280').text('Document generated automatically. For the most up-to-date information, please visit nearcare.com.au', { align: 'center' });

doc.end();

console.log('PDF Generated successfully at public/NearCare_Compliance_Policies.pdf');
