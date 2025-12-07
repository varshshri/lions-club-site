export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: "All" | "Health & Wellness" | "Environmental Initiatives" | "Youth Empowerment" | "Community Support";
  images: string[];
  highlights: string[];
  date: string;
  location: string;
  impact: {
    peopleHelped: number;
    volunteers: number;
    itemsDonated?: number;
    treesPlanted?: number;
  };
}

export const events: Event[] = [
  {
    id: "1",
    title: "Annual Blood Donation Drive",
    category: "Health & Wellness",
    shortDescription: "Join us in saving lives through our annual blood donation drive supporting local hospitals.",
    description: "Our Annual Blood Donation Drive is one of our flagship events, bringing together community members to contribute to the critical need for blood in local hospitals. This event has been running successfully for over a decade, creating a significant impact on healthcare services in Agara and surrounding areas. We partner with leading blood banks and medical facilities to ensure that every donation reaches those in need. The event includes health screenings, refreshments for donors, and certificates of appreciation. Our dedicated team of volunteers works tirelessly to make this event a success, ensuring a smooth and comfortable experience for all participants. Through this initiative, we've been able to save countless lives and raise awareness about the importance of regular blood donation.",
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Over 500 units of blood collected annually",
      "Partnership with 3 major hospitals",
      "Free health check-ups for all donors",
      "Certificates of appreciation",
      "Refreshments and snacks provided",
    ],
    date: "March 15, 2024",
    location: "Agara Community Center",
    impact: {
      peopleHelped: 500,
      volunteers: 45,
    },
  },
  {
    id: "2",
    title: "Free Eye Check-up Camp",
    category: "Health & Wellness",
    shortDescription: "Providing free eye examinations and vision care services to underserved community members.",
    description: "Our Free Eye Check-up Camp addresses the critical need for accessible eye care in the Agara community. Many residents, especially from economically disadvantaged backgrounds, lack access to regular eye examinations. This camp brings qualified ophthalmologists and optometrists to provide comprehensive eye screenings, vision tests, and consultations. We also distribute free reading glasses to those in need and refer patients requiring advanced treatment to partner hospitals. The camp has been instrumental in early detection of eye conditions, preventing vision loss, and improving the quality of life for hundreds of community members. Our volunteers assist with registration, patient flow, and post-examination guidance, ensuring a smooth experience for all attendees.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "500+ eye examinations conducted",
      "Free reading glasses distributed",
      "Qualified ophthalmologists on-site",
      "Follow-up care referrals",
      "Vision awareness education",
    ],
    date: "April 10, 2024",
    location: "Agara Primary Health Center",
    impact: {
      peopleHelped: 350,
      volunteers: 30,
    },
  },
  {
    id: "3",
    title: "Tree Plantation Initiative",
    category: "Environmental Initiatives",
    shortDescription: "Planting trees to create a greener, healthier environment for future generations in Agara.",
    description: "Our Tree Plantation Initiative is a long-term commitment to environmental conservation and creating a sustainable future for Agara. We organize large-scale tree planting drives involving community members, schools, and local organizations. The initiative focuses on planting native species that are well-suited to the local climate and ecosystem. We work with environmental experts to select appropriate locations and tree varieties. Each planting event includes educational sessions about the importance of trees, environmental conservation, and climate change. We also maintain the planted trees, ensuring their survival and growth. This initiative has transformed several areas in Agara, creating green spaces that benefit both the environment and the community. Our volunteers participate in regular maintenance activities, including watering, mulching, and monitoring tree health.",
    images: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "2000+ trees planted across Agara",
      "Community participation in every drive",
      "Native species selection",
      "Long-term maintenance program",
      "Educational workshops included",
    ],
    date: "June 5, 2024 (World Environment Day)",
    location: "Various locations in Agara",
    impact: {
      peopleHelped: 2000,
      volunteers: 120,
      treesPlanted: 2000,
    },
  },
  {
    id: "4",
    title: "Community Cleanliness Drive",
    category: "Environmental Initiatives",
    shortDescription: "Organizing cleanliness campaigns to keep Agara clean and promote environmental awareness.",
    description: "The Community Cleanliness Drive is a regular initiative that brings together residents, students, and volunteers to clean up public spaces in Agara. We organize drives in parks, streets, markets, and other community areas, focusing on waste collection, segregation, and proper disposal. The initiative also includes awareness sessions about waste management, recycling, and the importance of maintaining clean public spaces. We collaborate with local authorities to ensure proper waste disposal and recycling facilities. The drive has significantly improved the cleanliness of several areas in Agara and has raised awareness about environmental responsibility. Our volunteers work in teams, covering different zones and ensuring comprehensive cleanup. We also distribute educational materials about waste segregation and environmental conservation.",
    images: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd4628902d7a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Monthly cleanup drives",
      "Waste segregation training",
      "Community participation",
      "Partnership with local authorities",
      "Environmental awareness education",
    ],
    date: "First Saturday of every month",
    location: "Various locations in Agara",
    impact: {
      peopleHelped: 500,
      volunteers: 60,
    },
  },
  {
    id: "5",
    title: "Youth Scholarship Program",
    category: "Youth Empowerment",
    shortDescription: "Supporting deserving students with scholarships to pursue their educational dreams.",
    description: "Our Youth Scholarship Program provides financial assistance to meritorious students from economically disadvantaged backgrounds in Agara. We believe that education is the key to breaking the cycle of poverty and empowering the next generation. The program includes comprehensive support including tuition fees, books, uniforms, and other educational expenses. We work closely with local schools and colleges to identify deserving candidates and ensure that financial constraints don't hinder their academic progress. The scholarship recipients also receive mentorship and career guidance from our members. This program has enabled hundreds of students to continue their education and achieve their dreams. We organize annual award ceremonies to recognize the achievements of scholarship recipients and inspire other students in the community.",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "50+ scholarships awarded annually",
      "Support from primary to college level",
      "Mentorship programs included",
      "Annual recognition ceremonies",
      "Career guidance and counseling",
    ],
    date: "Ongoing - Applications open year-round",
    location: "Agara and surrounding areas",
    impact: {
      peopleHelped: 150,
      volunteers: 25,
    },
  },
  {
    id: "6",
    title: "Career Guidance & Skill Workshop",
    category: "Youth Empowerment",
    shortDescription: "Empowering youth with career guidance and practical skills for better employment opportunities.",
    description: "The Career Guidance & Skill Workshop is designed to help young people in Agara make informed career choices and develop practical skills for employment. We organize workshops covering resume writing, interview skills, communication, and various technical skills. Industry professionals and career counselors conduct sessions, sharing their expertise and real-world insights. The workshops also include personality assessments, career aptitude tests, and one-on-one counseling sessions. We partner with local businesses and training institutes to provide hands-on training opportunities. Many workshop participants have successfully found employment or started their own businesses. The program has been instrumental in reducing youth unemployment in Agara and empowering young people to achieve their career goals.",
    images: [
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Quarterly workshops",
      "Industry expert sessions",
      "Resume and interview training",
      "Technical skill development",
      "Job placement assistance",
    ],
    date: "Quarterly - Next: July 20, 2024",
    location: "Agara Community Hall",
    impact: {
      peopleHelped: 200,
      volunteers: 35,
    },
  },
  {
    id: "7",
    title: "Food Distribution for the Needy",
    category: "Community Support",
    shortDescription: "Providing nutritious meals to underprivileged families and individuals in Agara.",
    description: "Our Food Distribution program addresses food insecurity in Agara by providing regular meals to families and individuals in need. We work with local restaurants, food suppliers, and community kitchens to prepare and distribute nutritious meals. The program operates on a regular schedule, ensuring consistent support for vulnerable community members. We also organize special distribution drives during festivals and difficult times. Our volunteers handle food preparation, packaging, and distribution, ensuring that meals reach those who need them most. The program has been a lifeline for many families, especially during economic hardships. We also conduct nutrition awareness sessions to promote healthy eating habits among beneficiaries.",
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd4628902d7a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "500+ meals distributed monthly",
      "Regular distribution schedule",
      "Nutritious and balanced meals",
      "Festival special drives",
      "Nutrition awareness sessions",
    ],
    date: "Every Sunday and special occasions",
    location: "Agara Community Kitchen",
    impact: {
      peopleHelped: 300,
      volunteers: 40,
    },
  },
  {
    id: "8",
    title: "Clothes & Blanket Donation Drive",
    category: "Community Support",
    shortDescription: "Collecting and distributing clothes and blankets to help those in need during all seasons.",
    description: "The Clothes & Blanket Donation Drive collects gently used and new clothing items, blankets, and winter essentials from community members and distributes them to those in need. We organize collection drives throughout the year, with special focus during winter months when warm clothing is most needed. The program includes sorting, cleaning, and organizing donated items to ensure quality distribution. We work with local shelters, orphanages, and directly with families in need. The drive has provided essential clothing to hundreds of individuals and families, helping them stay warm and maintain dignity. Our volunteers handle collection, sorting, and distribution, ensuring that items reach those who need them most. We also organize awareness campaigns to encourage community participation in donation drives.",
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d7a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "1000+ items collected annually",
      "Year-round collection drives",
      "Winter special distribution",
      "Quality sorting and cleaning",
      "Direct distribution to beneficiaries",
    ],
    date: "Ongoing - Special drive in November",
    location: "Agara Community Center",
    impact: {
      peopleHelped: 400,
      volunteers: 30,
      itemsDonated: 1000,
    },
  },
  {
    id: "9",
    title: "Women Empowerment Awareness Program",
    category: "Community Support",
    shortDescription: "Empowering women through awareness programs, skill development, and support initiatives.",
    description: "Our Women Empowerment Awareness Program focuses on empowering women in Agara through education, skill development, and awareness about their rights and opportunities. We organize workshops on financial literacy, health awareness, legal rights, and entrepreneurship. The program includes skill development sessions in areas like tailoring, handicrafts, and digital literacy. We also provide support for women entrepreneurs, helping them start and grow their businesses. The program has been instrumental in building confidence and independence among women in the community. We collaborate with women's organizations, government agencies, and NGOs to provide comprehensive support. Regular awareness sessions address issues like gender equality, domestic violence prevention, and women's health. The program has created a strong network of empowered women supporting each other.",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Monthly awareness workshops",
      "Skill development programs",
      "Entrepreneurship support",
      "Legal rights education",
      "Women's health awareness",
    ],
    date: "Monthly - Third Saturday",
    location: "Agara Women's Center",
    impact: {
      peopleHelped: 250,
      volunteers: 20,
    },
  },
  {
    id: "10",
    title: "Health Awareness & Fitness Camp",
    category: "Health & Wellness",
    shortDescription: "Promoting health awareness and fitness through educational camps and physical activities.",
    description: "The Health Awareness & Fitness Camp combines health education with practical fitness activities to promote overall well-being in the Agara community. We organize camps featuring health screenings, nutrition counseling, fitness demonstrations, and group exercise sessions. Qualified health professionals conduct sessions on preventive healthcare, chronic disease management, and healthy lifestyle choices. The camp includes activities like yoga, aerobics, and group walks, making fitness accessible and enjoyable. We also provide health check-ups including blood pressure, blood sugar, and BMI measurements. The camp has been successful in raising health awareness and encouraging community members to adopt healthier lifestyles. Our volunteers assist with registrations, health screenings, and fitness activities, ensuring a smooth and engaging experience for all participants.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Free health screenings",
      "Fitness demonstrations",
      "Nutrition counseling",
      "Yoga and exercise sessions",
      "Health education workshops",
    ],
    date: "August 15, 2024",
    location: "Agara Sports Complex",
    impact: {
      peopleHelped: 400,
      volunteers: 50,
    },
  },
];

export const categories = ["All", "Health & Wellness", "Environmental Initiatives", "Youth Empowerment", "Community Support"] as const;
