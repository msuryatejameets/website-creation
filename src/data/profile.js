import circleastro from '../assets/ajithphotos/circleastro.jpg'
import gensurgery from '../assets/ajithphotos/gensurgery.jpg'
import grecord from '../assets/ajithphotos/grecord.jpg'

export const profile = {
  name: 'Dr. Ajith Kumar R',
  title: 'Junior Resident, General Surgery | Aspiring Neurosurgeon',
  specialty: 'General Surgery (Junior Resident)',
  location: {
    city: ' Salem',
    state: 'Maharashtra',
    country: 'India',
    clinic: 'Salem Poly Clinic Hospital – Department of General Surgery',
  },
  summary:
    'Dr. Ajith Kumar R is a junior resident in General Surgery with a focused interest in neurosurgery. He is building strong foundations in operative skills, emergency surgical care, and clinical decision-making while actively pursuing research and observerships in cranial and spinal neurosurgery.',
  credentials: [
    'MBBS – All India Institute of Medical Sciences',
    'MS (General Surgery) – In progress, Salem Poly Clinic  Hospital',
    'Advanced Cardiac Life Support (ACLS) Certified',
    'Basic Life Support (BLS) Instructor',
    'Research training in neurosurgical outcomes and trauma care',
  ],
  experience: [
    {
      year: '2024 – Present',
      role: 'Junior Resident, General Surgery',
      org: 'Salem Poly Clinic  Hospital,  Salem',
    },
    {
      year: '2023 – 2024',
      role: 'Senior Resident, General Surgery (Rotating)',
      org: 'Salem Poly Clinic  Hospital,  Salem',
    },
    {
      year: '2022 – 2023',
      role: 'Neurosurgery Observership & Research Associate',
      org: 'National Neuroscience Institute',
    },
  ],
  education: [
    {
      year: '2022 – Present',
      degree: 'MS (General Surgery)',
      institution: 'Salem Poly Clinic  Hospital',
    },
    {
      year: '2016',
      degree: 'MBBS',
      institution: 'All India Institute of Medical Sciences',
    },
  ],
  achievements: [
    {
      title: 'Best Poster – Trauma & Emergency Surgery Symposium',
      year: '2024',
      description:
        'Presented research on early surgical intervention in traumatic brain injury at the Western India Surgical Conference.',
    },
    {
      title: 'Neurosurgery Research Grant – Junior Investigator Award',
      year: '2023',
      description:
        'Received institutional grant for a prospective study on post-operative outcomes in spinal decompression cases.',
    },
    {
      title: 'Gold Medal – General Surgery University Examination',
      year: '2022',
      description:
        'Awarded for top academic performance during the final year MBBS surgical sciences examinations.',
    },
    {
      title: 'Published 5+ Peer-Reviewed Articles',
      year: '2022 – Present',
      description:
        'Co-author on publications in surgical education, trauma care, and introductory neurosurgical case series.',
    },
  ],
  memberships: [
    'Association of Surgeons of India',
    'Neurological Society of India (Associate Member)',
    'Indian Medical Association',
    'International Young Neurosurgeons Association',
  ],
  personal: {
    languages: ['Tamil', 'English', 'Telugu', 'Hindi'],
    interests: ['Neurosurgical anatomy', 'Surgical simulation', 'Medical research', 'Distance running'],
    bio: 'Dr. Smith is passionate about bridging general surgical training with a future career in neurosurgery. She regularly attends neurosurgical conferences, participates in cadaveric workshops, and mentors junior medical students in surgical skills labs.',
  },
  contact: {
    phone: '+91 98765 43210',
    email: 'contact@drjanesmith.example.com',
    address: 'Department of Surgery, Salem Poly Clinic  Hospital, Parel,  Salem, Tamil Nadu 400012, India',
    hours: 'Monday – Saturday: 8:00 AM – 4:00 PM (Hospital duty hours)',
    mapUrl: 'https://maps.google.com/?q=King+Edward+Memorial+Hospital+ Salem',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/dr-r-ajith-kumar-b2346a274/',
    googleScholar: 'https://scholar.google.com/citations?user=example',
    hospitalProfile: 'https://salempolyclinic.com/',
    instagram: 'https://www.instagram.com/dr_psycoma/',
    x: 'https://x.com/dr_psycoma',
    blogspot: 'https://nextauthor.blogspot.com/',
    facebook: 'https://www.facebook.com/shivaji.raj.33',
    spotify: 'https://open.spotify.com/show/2zEF3zdnMq7hw4dN8g2Pvs?si=1387ecf1fdb54e2d',
    youtube: 'https://www.youtube.com/@dr_psycoma',
    quora: 'https://www.quora.com/profile/AJITH-KUMAR-R-46',
    researchgate: 'https://www.researchgate.net/profile/Raj_Ajith_Kumar',
  },
  seo: {
    siteName: 'Dr. Ajith Kumar R – General Surgery Resident',
    baseUrl: 'https://www.drajithkumar.example.com',
    defaultKeywords: [
      'general surgery resident',
      'junior resident surgeon',
      'aspiring neurosurgeon',
      'neurosurgery',
      'general surgery',
      ' Salem',
      'surgical trainee',
      'Salem Poly Clinic  Hospital',
    ],
    ogImage: '/og-image.svg',
  },
  gemini: {
    hero: {
      badge: 'Junior Resident - General Surgery & Aspiring Neuro Surgeon',
      titlePrefix: 'Navigating the Delicate ',
      titleHighlight: 'Inner Cosmos',
      doctorName: 'Dr. R. Ajith Kumar',
      leadText:
        'Bridging structural clinical rigor at Salem Polyclinic Hospital with the vast awe of deep-space cosmic systems. Mapping structural biological frameworks with absolute surgical discipline.',
      hospitalUrl: 'https://salempolyclinic.com/',
      hospitalButtonText: 'VIEW HOSPITAL DETAILS',
      image: gensurgery,
    },
    aboutSlides: [
      {
        id: 'celestial-photography',
        badge: 'STAR GAZING BY Dr. R. Ajith Kumar',
        badgeIcon: true,
        titlePrefix: 'From Surgical Precision to ',
        titleHighlight: 'Deep Space Photography',
        description: '',
        url: 'https://www.instagram.com/dr_psycoma/',
        urlLabel: 'VIEW INSTAGRAM GALLERY',
        btnClass: 'btn-record',
        image: circleastro,
        imageAlt: 'Celestial Photography',
      },
      {
        id: 'guinness-world-record',
        badge: '✓ CERTIFIED OFFICIAL PARTICIPANT',
        badgeIcon: false,
        title: 'Guinness World Records™ Achievement',
        description:
          'Dr. R. Ajith Kumar is officially recognized as a certified participant in the historic NBEMS national initiative that set the global record for the "Most viewers of an artificial intelligence in healthcare lesson live stream on YouTube." This milestone academic masterclass brought together 17,999 medical professionals.',
        url: 'https://www.guinnessworldrecords.com/world-records/782380-most-viewers-of-an-artificial-intelligence-in-healthcare-lesson-live-stream-on-yo',
        urlLabel: 'VIEW RECORD DETAILS',
        btnClass: 'btn-record',
        image: grecord,
        imageAlt: 'Guinness World Record Certificate',
      },
    ],
    coreFocus: {
      badge: 'Core Focus Dimensions',
      heading: 'Clinical Pathways & Specialization Systems',
      leadText:
        'Acquired fundamental medical expertise during MBBS training at Sree Mookambika Institute Of Medical Sciences (Padanilam, Kulasekharam). Approaching intricate micro-environments with calm, absolute observational methods.',
      dimensions: [
        {
          title: 'General Surgery Rigor',
          description:
            'Active precision operations and residency diagnostics framework executed within the dynamic matrix of Salem Polyclinic.',
        },
        {
          title: 'Neurological Aspiration',
          description:
            'Channelling deep analytical stargazing methods to prepare for complex structural neural network mapping models.',
        },
        {
          title: 'Observational Calm',
          description:
            'Utilizing high-contrast midnight aesthetics to frame patient interfaces with absolute reassurance parameters.',
        },
      ],
    },
    broadcastMatrix: {
      badge: 'Broadcast Matrix',
      heading: 'Connect Across the Constellations',
      leadText:
        'Access direct medical writing records, clinical broadcasts, updates, and astronomical updates across alternative integrated brand nodes.',
      links: [
        { name: 'Instagram', url: 'https://www.instagram.com/dr_psycoma/', className: 'btn-instagram' },
        { name: 'X Platform', url: 'https://x.com/dr_psycoma', className: 'btn-x' },
        { name: 'Blogspot', url: 'https://nextauthor.blogspot.com/', className: 'btn-blogspot' },
        { name: 'Facebook', url: 'https://www.facebook.com/shivaji.raj.33', className: 'btn-facebook' },
        { name: 'Spotify Podcast', url: 'https://open.spotify.com/show/2zEF3zdnMq7hw4dN8g2Pvs?si=1387ecf1fdb54e2d', className: 'btn-spotify' },
        { name: 'YouTube Channel', url: 'https://www.youtube.com/@dr_psycoma', className: 'btn-youtube' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-r-ajith-kumar-b2346a274/', className: 'btn-linkedin' },
        { name: 'Quora', url: 'https://www.quora.com/profile/AJITH-KUMAR-R-46', className: 'btn-quora' },
        { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Raj_Ajith_Kumar', className: 'btn-researchgate' },
      ],
    },
  },
}

