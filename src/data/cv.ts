// src/data/cv.ts - CV data for Sreelekha Guggilam
// Source of truth: cv/main.tex

// Education entries
export const education = [
	{
		title: "Ph.D. in Computational Data Science (CDSE)",
		institution: "University at Buffalo, The State University of New York",
		time: "2017 - 2022",
		description: "Buffalo, NY. Dissertation: Non-parametric probabilistic anomaly detection in evolving data: Applications to time series"
	},
	{
		title: "Masters in Civil Engineering (Transportation Statistics)",
		institution: "University at Buffalo, The State University of New York",
		time: "2016 - 2017",
		description: "Buffalo, NY"
	},
	{
		title: "Masters in Biostatistics-Bioinformatics",
		institution: "University at Buffalo and Roswell Park Cancer Institute (RPCI)",
		time: "2014 - 2015",
		description: "Buffalo, NY. Thesis: Statistical assessment of TCGA ovarian cancer sequencing dataset for prognostic utility"
	},
	{
		title: "Bachelors in Mathematics (B.Math), Honors",
		institution: "Indian Statistical Institute (ISI)",
		time: "2011 - 2014",
		description: "Bangalore, India. Full student scholarship (merit-based) throughout the completion of the degree"
	}
];

// Professional experience entries
export const experiences = [
	{
		title: "Assistant Professor in Data Science",
		institution: "Texas A&M University--Corpus Christi, Department of Mathematics and Statistics",
		time: "2024 - Present",
		description: "Doctoral faculty in Coastal and Marine Sciences Department. Designed graduate course on Advanced Topics in Deep Learning covering generative AI, attention mechanisms, transformers, and model distillation techniques. Active member of Academics Committee for Data Science PhD Program Planning Committee, Graduate Admissions Committee, Tenure Track Search Committee, and College of Science Curriculum Committee."
	},
	{
		title: "Research and Development Associate in Machine Learning",
		institution: "Oak Ridge National Laboratory, National Security Sciences Directorate",
		time: "2022 - 2024",
		description: "Geo-spatial Science and Human Dynamics Division. DOE Early Career LDRD awardee for research in quantum computing for spatiotemporal modeling. Principal Investigator on developing novel quantum computing approaches for spatiotemporal classification and anomaly detection. Amongst the 8 selected awardees at ORNL in 2023. Lead on modeling and algorithm development (invention disclosure submitted) for extended Large Deviations Anomaly Detection modeling. Active contributor to multiple Generative AI foundation model projects using multimodal data. Awarded 4 research grants as Principal Investigator and co-Principal Investigator."
	},
	{
		title: "Research Assistant",
		institution: "University at Buffalo, Institute of Computational Data Science & Dept. of Computer Science and Engineering",
		time: "2019 - 2022",
		description: "Mentors: Dr. Abani Patra (Tufts University), Dr. Varun Chandola (University at Buffalo). Developed INCAD for non-parametric unsupervised anomaly detection using extreme value theory. Designed LAD for high-dimensional multivariate time-series databases. Created LIIT, a novel low-shot training algorithm for neural networks."
	},
	{
		title: "Teaching Assistant",
		institution: "University at Buffalo, Institute of Computational Data Science",
		time: "2017 - 2019",
		description: "Led and coordinated a team of teaching assistants for graduate courses in data science. Collaborated on developing exams and assignments and led recitation sessions."
	},
	{
		title: "Risk Manager, Global Corporate Portfolios",
		institution: "American Express, World Financial Center, New York, NY",
		time: "2015 - 2016",
		description: "Quantified changes in spending trends in cross-sold clients. Developed and improved risk margins for corporate clients in Global Corporate Payments. Identified trends in risk-based industries and states to enable risk control actions on portfolios."
	}
];

// Grant support
export const grants = [
	{
		title: "Autonomous Research Institute Fellowship",
		amount: "$82,000",
		duration: "2 years",
		time: "Sep 2025 - Aug 2027",
		project: "Enhancing Preventive Monitoring through Spatiotemporal Anomaly Detection using Time Series Foundation Models",
		role: "Principal Investigator (100%)"
	},
	{
		title: "Port Corpus Christi",
		amount: "$288,000",
		duration: "1 year",
		time: "Apr 2025 - Dec 2025",
		project: "Vulnerability Index Development -- Phase I -- Data Collection",
		role: "co-Principal Investigator (Share: $8,000)"
	},
	{
		title: "DOE-ORNL Early Career Development Research Award",
		amount: "$300,000",
		duration: "2 years",
		time: "Mar 2023 - Feb 2025",
		project: "Quantum Variational Inference for Anomaly Detection in Spatiotemporal Data",
		role: "Principal Investigator (100%)"
	},
	{
		title: "ORNL Laboratory Directors R&D SEED Funds",
		amount: "$190,000",
		duration: "2 years",
		time: "Feb 2023 - Jan 2025",
		project: "Artificial Intelligence Models for Land Cover Forecasting",
		role: "Contributor"
	},
	{
		title: "ORNL Laboratory Directors R&D Funds",
		amount: "$930,000",
		duration: "2 years",
		time: "Feb 2023 - Jan 2025",
		project: "Environmental Anomaly Detection for Biopreparedness",
		role: "Co-Principal Investigator"
	},
	{
		title: "ORNL Laboratory Directors R&D Funds",
		amount: "$780,000",
		duration: "2 years",
		time: "Oct 2022 - Sep 2024",
		project: "Pattern of Life for Nuclear Non-proliferation",
		role: "Co-Principal Investigator"
	}
];

// Publications list (auto-updated by scripts/update_publications.py)
export const publications = [
	{
		title: "Physics-informed machine learning to predict solvatochromic parameters of designer solvents with case studies in CO2 and lignin dissolution",
		authors: "Mood Mohan and Nikhitha Gugulothu and Sreelekha Guggilam and T Rajitha Rajeshwar and Michelle K Kidder and Jeremy C Smith",
		venue: "Green Chemical Engineering, vol. 6, no. 2, pp. 275-287",
		time: "2025",
		doi: "10.1016/j.gce.2024.11.003",
		citation: "M. Mohan, N. Gugulothu, S. Guggilam, T. R. Rajeshwar, M. K. Kidder, J. C. Smith (2025). Physics-informed machine learning to predict solvatochromic parameters of designer solvents with case studies in CO2 and lignin dissolution. Green Chemical Engineering, vol. 6, no. 2, pp. 275-287. https://doi.org/10.1016/j.gce.2024.11.003"
	},
	{
		title: "Leveraging Natural Language Processing and Generative Models in Molecular Chemistry: Property Prediction and Novel Compound Generation",
		authors: "Mood Mohan and Sreelekha Guggilam and Debsindhu Bhowmik and Michelle K Kidder and Jeremy C Smith",
		venue: "ACS Sustainable Chemistry & Engineering, vol. 13, no. 48, pp. 20737-20753",
		time: "2025",
		doi: "10.1021/acssuschemeng.5c08057",
		citation: "M. Mohan, S. Guggilam, D. Bhowmik, M. K. Kidder, J. C. Smith (2025). Leveraging Natural Language Processing and Generative Models in Molecular Chemistry: Property Prediction and Novel Compound Generation. ACS Sustainable Chemistry & Engineering, vol. 13, no. 48, pp. 20737-20753. https://doi.org/10.1021/acssuschemeng.5c08057"
	},
	{
		title: "The future of artificial intelligence and the mathematical and physical sciences (AI+ MPS)",
		authors: "Andrew L Ferguson and Marisa LaFleur and Lars Ruthotto and Jesse Thaler and Yuan-Sen Ting and Pratyush Tiwary and Soledad Villar",
		venue: "Machine Learning: Science and Technology",
		time: "2025",
		doi: "10.1088/2632-2153/ae3e4e",
		citation: "A. L. Ferguson, M. LaFleur, L. Ruthotto, J. Thaler, Y. Ting, P. Tiwary, S. Villar (2025). The future of artificial intelligence and the mathematical and physical sciences (AI+ MPS). Machine Learning: Science and Technology. https://doi.org/10.1088/2632-2153/ae3e4e"
	},
	{
		title: "Iterative Misclassification Error Training (IMET): An Optimized Neural Network Training Technique for Image Classification",
		authors: "Ruhaan Singh and Sreelekha Guggilam",
		venue: "IEEE Access",
		time: "2025",
		doi: "10.1109/access.2025.3621553",
		citation: "R. Singh, S. Guggilam (2025). Iterative Misclassification Error Training (IMET): An Optimized Neural Network Training Technique for Image Classification. IEEE Access. https://doi.org/10.1109/access.2025.3621553"
	},
	{
		title: "GeoAI for Humanitarian Assistance",
		authors: "Philipe A Dias and Thomaz Kobayashi-Carvalhaes and Sarah Walters and Tyler Frazier and Carson Woody and Sreelekha Guggilam and Daniel Adams and Abhishek Potnis and Dalton Lunga",
		venue: "CRC Press, pp. 260-286",
		time: "2024",
		doi: "10.1201/9781003308423-13",
		citation: "P. A. Dias, T. Kobayashi-Carvalhaes, S. Walters, T. Frazier, C. Woody, S. Guggilam, D. Adams, A. Potnis, D. Lunga (2024). GeoAI for Humanitarian Assistance. CRC Press, pp. 260-286. https://doi.org/10.1201/9781003308423-13"
	},
	{
		title: "High-throughput screening and accurate prediction of ionic liquid viscosities using interpretable machine learning",
		authors: "Mood Mohan and Karuna Devi Jetti and Sreelekha Guggilam and Micholas Dean Smith and Michelle K Kidder and Jeremy C Smith",
		venue: "ACS Sustainable Chemistry & Engineering, vol. 12, no. 18, pp. 7040-7054",
		time: "2024",
		doi: "10.1021/acssuschemeng.4c00631.s001",
		citation: "M. Mohan, K. D. Jetti, S. Guggilam, M. D. Smith, M. K. Kidder, J. C. Smith (2024). High-throughput screening and accurate prediction of ionic liquid viscosities using interpretable machine learning. ACS Sustainable Chemistry & Engineering, vol. 12, no. 18, pp. 7040-7054. https://doi.org/10.1021/acssuschemeng.4c00631.s001"
	},
	{
		title: "Climate Variable Tipping Points for Rift Valley Fever Outbreaks",
		authors: "Karlyn Harrod and Sreelekha Guggilam and Heidi Tubbs and Assaf Anyamba",
		venue: "AGU Fall Meeting Abstracts, vol. 2024, pp. GH51A-04",
		time: "2024",
		doi: "",
		citation: "K. Harrod, S. Guggilam, H. Tubbs, A. Anyamba (2024). Climate Variable Tipping Points for Rift Valley Fever Outbreaks. AGU Fall Meeting Abstracts, vol. 2024, pp. GH51A-04."
	},
	{
		title: "An agenda for multimodal foundation models for earth observation",
		authors: "Philipe Dias and Abhishek Potnis and Sreelekha Guggilam and Lexie Yang and Aristeidis Tsaris and Henry Medeiros and Dalton Lunga",
		venue: "IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium, pp. 1237-1240",
		time: "2023",
		doi: "10.1109/igarss52108.2023.10282966",
		citation: "P. Dias, A. Potnis, S. Guggilam, L. Yang, A. Tsaris, H. Medeiros, D. Lunga (2023). An agenda for multimodal foundation models for earth observation. IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium, pp. 1237-1240. https://doi.org/10.1109/igarss52108.2023.10282966"
	},
	{
		title: "Large Deviations Anomaly Detection (LAD) for collection of multivariate time series data: Applications to COVID-19 data",
		authors: "Sreelekha Guggilam and Varun Chandola and Abani K Patra",
		venue: "Journal of Computational Science, vol. 72, pp. 102101",
		time: "2023",
		doi: "10.1016/j.jocs.2023.102101",
		citation: "S. Guggilam, V. Chandola, A. K. Patra (2023). Large Deviations Anomaly Detection (LAD) for collection of multivariate time series data: Applications to COVID-19 data. Journal of Computational Science, vol. 72, pp. 102101. https://doi.org/10.1016/j.jocs.2023.102101"
	},
	{
		title: "Position Papers for the ASCR Workshop on Basic Research Needs in Quantum Computing and Networking",
		authors: "Pavel Lougovski and Ojas Parekh and Joe Broz and Mark Byrd and Yanne Chembo and Wibe A de Jong and Eden Figueroa and Travis S Humble and Jeffrey Larson and Greg Quiroz and Krysta M Svore",
		venue: "US Department of Energy (USDOE), Office of Science, ASCR",
		time: "2023",
		doi: "10.2172/2283320",
		citation: "P. Lougovski, O. Parekh, J. Broz, M. Byrd, Y. Chembo, W. A. de Jong, E. Figueroa, T. S. Humble, J. Larson, G. Quiroz, K. M. Svore (2023). Position Papers for the ASCR Workshop on Basic Research Needs in Quantum Computing and Networking. US Department of Energy (USDOE), Office of Science, ASCR. https://doi.org/10.2172/2283320"
	},
	{
		title: "Large Deviations for Accelerating Neural Networks Training",
		authors: "Sreelekha Guggilam and Varun Chandola and Abani Patra",
		venue: "arXiv preprint arXiv:2303.00954",
		time: "2023",
		doi: "",
		citation: "S. Guggilam, V. Chandola, A. Patra (2023). Large Deviations for Accelerating Neural Networks Training. arXiv preprint arXiv:2303.00954."
	},
	{
		title: "Earth System Digital Twins: Prototypes and Federations I Oral",
		authors: "Benjamin Smith and Vincent Lonjou and Ryan Berkheimer and Marge Cole and Sreelekha Guggilam",
		venue: "AGU23",
		time: "2023",
		doi: "",
		citation: "B. Smith, V. Lonjou, R. Berkheimer, M. Cole, S. Guggilam (2023). Earth System Digital Twins: Prototypes and Federations I Oral. AGU23."
	},
	{
		title: "Tracking clusters and anomalies in evolving data streams",
		authors: "Sreelekha Guggilam and Varun Chandola and Abani Patra",
		venue: "Statistical Analysis and Data Mining: The ASA Data Science Journal, vol. 15, no. 2, pp. 156-178",
		time: "2022",
		doi: "10.1002/sam.11552",
		citation: "S. Guggilam, V. Chandola, A. Patra (2022). Tracking clusters and anomalies in evolving data streams. Statistical Analysis and Data Mining: The ASA Data Science Journal, vol. 15, no. 2, pp. 156-178. https://doi.org/10.1002/sam.11552"
	},
	{
		title: "Classifying anomalous members in a collection of multivariate time series data using large deviations principle: An application to COVID-19 data",
		authors: "Sreelekha Guggilam and Varun Chandola and Abani K Patra",
		venue: "Springer International Publishing, pp. 133-149",
		time: "2022",
		doi: "10.1007/978-3-031-08751-6_10",
		citation: "S. Guggilam, V. Chandola, A. K. Patra (2022). Classifying anomalous members in a collection of multivariate time series data using large deviations principle: An application to COVID-19 data. Springer International Publishing, pp. 133-149. https://doi.org/10.1007/978-3-031-08751-6_10"
	},
	{
		title: "Data-Driven Humanitarian Mapping and Policymaking: Toward Planetary-Scale Resilience, Equity, and Sustainability",
		authors: "SnehalkumarNeil' Gaikwad and Shankar Iyer and Dalton Lunga and Takahiro Yabe and Xiaofan Liang and Bhavani Ananthabhotla and Nikhil Behari and Sreelekha Guggilam and Guanghua Chi",
		venue: "Proceedings of the 28th ACM SIGKDD Conference, pp. 4872-4873",
		time: "2022",
		doi: "",
		citation: "S. Gaikwad, S. Iyer, D. Lunga, T. Yabe, X. Liang, B. Ananthabhotla, N. Behari, S. Guggilam, G. Chi (2022). Data-Driven Humanitarian Mapping and Policymaking. ACM SIGKDD, pp. 4872-4873."
	},
	{
		title: "AI/ML Assurance: Applications in Geospatial Sciences II Poster",
		authors: "Sreelekha Guggilam and Vandy Tombs and Dan Lu and Abani K Patra",
		venue: "AGU Fall Meeting 2022",
		time: "2022",
		doi: "",
		citation: "S. Guggilam, V. Tombs, D. Lu, A. K. Patra (2022). AI/ML Assurance: Applications in Geospatial Sciences II Poster. AGU Fall Meeting 2022."
	},
	{
		title: "Uncertainty, Error and Anomalies in ML models of Remote Sensing Data",
		authors: "Abani K Patra and Sreelekha Guggilam",
		venue: "AGU Fall Meeting Abstracts, vol. 2022, pp. IN33A-06",
		time: "2022",
		doi: "",
		citation: "A. K. Patra, S. Guggilam (2022). Uncertainty, Error and Anomalies in ML models of Remote Sensing Data. AGU Fall Meeting Abstracts, vol. 2022, pp. IN33A-06."
	},
	{
		title: "Non-Parametric Probabilistic Anomaly Detection in Evolving Data: Applications to Time Series",
		authors: "Sreelekha Guggilam",
		venue: "",
		time: "2022",
		doi: "",
		citation: "S. Guggilam (2022). Non-Parametric Probabilistic Anomaly Detection in Evolving Data: Applications to Time Series."
	},
	{
		title: "Anomaly detection for high-dimensional data using large deviations principle",
		authors: "Sreelekha Guggilam and Varun Chandola and Abani Patra",
		venue: "arXiv preprint arXiv:2109.13698",
		time: "2021",
		doi: "",
		citation: "S. Guggilam, V. Chandola, A. Patra (2021). Anomaly detection for high-dimensional data using large deviations principle. arXiv preprint arXiv:2109.13698."
	},
	{
		title: "Integrated clustering and anomaly detection (incad) for streaming data",
		authors: "Sreelekha Guggilam and Syed Mohammed Arshad Zaidi and Varun Chandola and Abani K Patra",
		venue: "Springer International Publishing, pp. 45-59",
		time: "2019",
		doi: "10.1007/978-3-030-22747-0_4",
		citation: "S. Guggilam, S. M. A. Zaidi, V. Chandola, A. K. Patra (2019). Integrated clustering and anomaly detection (incad) for streaming data. Springer International Publishing, pp. 45-59. https://doi.org/10.1007/978-3-030-22747-0_4"
	},
	{
		title: "Bayesian anomaly detection using extreme value theory",
		authors: "Sreelekha Guggilam and SM Zaidi and Varun Chandola and Abani Patra",
		venue: "arXiv preprint arXiv:1905.12150",
		time: "2019",
		doi: "",
		citation: "S. Guggilam, S. Zaidi, V. Chandola, A. Patra (2019). Bayesian anomaly detection using extreme value theory. arXiv preprint arXiv:1905.12150."
	},
	{
		title: "Statistical Assessment of TCGA Ovarian Cancer Sequencing Dataset for Prognostic Utility",
		authors: "Sreelekha Guggilam",
		venue: "",
		time: "2015",
		doi: "",
		citation: "S. Guggilam (2015). Statistical Assessment of TCGA Ovarian Cancer Sequencing Dataset for Prognostic Utility."
	},
];

// Teaching
export const teaching = [
	{ course: "DASC-5307", title: "Machine Learning in Data Science", semester: "Spring 2026", institution: "Texas A&M University--Corpus Christi" },
	{ course: "DASC-5390", title: "Advanced Topics in Deep Learning", semester: "Spring 2025", institution: "Texas A&M University--Corpus Christi" },
	{ course: "EAS 501", title: "Introduction to Numerical Mathematics for Computing and Data Science", semester: "Fall 2017, Fall 2018", institution: "University at Buffalo", role: "Teaching Assistant" },
	{ course: "EAS 502", title: "Introduction to Probability Theory for Data Science", semester: "Fall 2017, Fall 2018", institution: "University at Buffalo", role: "Teaching Assistant" },
	{ course: "EAS 503", title: "Programming and Database Fundamentals for Data Scientists", semester: "Fall 2017, Fall 2018", institution: "University at Buffalo", role: "Teaching Assistant" },
	{ course: "EAS 504", title: "Applications of Data Science: Industry Overview", semester: "Summer 2017, Summer 2018", institution: "University at Buffalo", role: "Teaching Assistant" },
	{ course: "EAS 508", title: "Statistical Learning and Data Mining I", semester: "Fall 2017, Fall 2018", institution: "University at Buffalo", role: "Teaching Assistant" },
];

// Mentorship
export const mentorship = {
	postdoc: [
		{ name: "Madhavi Pagare", time: "2025--Present" },
	],
	phd: [
		{ name: "Anshika Rani", role: "Advisor", institution: "Texas A&M University--Corpus Christi", time: "2025--Present" },
		{ name: "Jahnavi Krishna Koda", role: "Committee Member", institution: "Texas A&M University--Corpus Christi", time: "2025--Present" },
		{ name: "Nene Coulibaly", role: "Committee Member", institution: "Texas A&M University--Corpus Christi", time: "2024--Present" },
	],
	masters: [
		{ name: "Vigneshwar Lokoji", time: "2025--Present" },
		{ name: "Yejin Hwang", institution: "Texas A&M Corpus Christi", time: "2024--Present" },
		{ name: "Nikitha Gugulothu", note: "First Appointment: Oak Ridge National Laboratory", time: "2022--2023" },
	],
	undergrad: [
		{ name: "Tri Do", note: "First appointment: Ph.D at Oden Institute, UT Austin", time: "2023" },
		{ name: "Mikolaj Jakowski", institution: "University of Tennessee, Knoxville", time: "2023" },
	],
	highschool: [
		{ name: "Ruhaan Singh", institution: "Farragut High School", time: "2022--2024" },
	],
};

// Talks and presentations
export const talks = [
	{ title: "Time-series Modeling -- Opportunities and Challenges with Emerging Methods", venue: "University of Texas Rio Grande Valley", year: "2025" },
	{ title: "Anomaly Detection in Spatio-temporal Data", venue: "ORNL Early Career Development Program", year: "2023" },
	{ title: "Quantum Variational Inference for Spatiotemporal Anomaly Detection", venue: "Oak Ridge Scientific Advisory Board", year: "2023" },
	{ title: "Quantum computing for spatiotemporal analysis", venue: "National Security Sciences Week", year: "2023" },
	{ title: "Large Deviations for Accelerating Neural Networks Training", venue: "Conference on Data Analysis (CoDA), Santa Fe, NM", year: "2023" },
	{ title: "Uncertainty, error and anomalies in ML models of remote sensing data", venue: "AGU Fall Meeting", year: "2022" },
	{ title: "Classifying anomalous members in multivariate time series using large deviations principle", venue: "ICCS", year: "2022" },
	{ title: "Classifying Collection of Multivariate Time Series Data", venue: "ASA UP-STAT Conference, Buffalo, NY", year: "2022" },
	{ title: "Identifying anomalous COVID-19 trends using large deviations", venue: "Women in STEM Cooperative (WiSC)", year: "2021" },
	{ title: "Integrated clustering and anomaly detection (INCAD) for streaming data", venue: "ICCS", year: "2019" },
	{ title: "Integrating clustering and anomaly detection", venue: "CDSE Days, SUNY Buffalo", year: "2019" },
	{ title: "National Program on Differential Equations (NPDE) Workshop", venue: "IIT Madras", year: "2013" },
];

// Awards
export const awards = [
	{ title: "Top Downloaded Author in Wiley Journal of Statistical Analysis and Data Mining", year: "2023" },
	{ title: "Oak Ridge National Lab Early Career LDRD Competition Winner", year: "2023" },
	{ title: "Runner up: STEM for Everyone -- Women in STEM Cooperative (WiSC)", year: "2021" },
	{ title: "Travel Support: UB Navigate Project for women in STEM", year: "2018" },
	{ title: "Travel Support: SAMSI -- Model Uncertainty: Mathematical and Statistical (MUMS)", year: "2018" },
	{ title: "Travel Support: SAMSI -- Precision Medicine (PMED)", year: "2018" },
	{ title: "Honors degree in Mathematics from Indian Statistical Institute", year: "2014" },
	{ title: "Full student scholarship (merit-based) at Indian Statistical Institute", year: "2011--2014" },
];

// Professional service
export const service = {
	committees: [
		{ title: "AGU 2023 Fall Meeting Session on Earth System Digital Twins: Prototypes and Federations", year: "2023" },
		{ title: "AGU 2022 Fall Meeting Session on AI/ML Assurance: Applications in Geospatial Science", year: "2022" },
		{ title: "KDD Workshop on Data-driven Humanitarian Mapping", year: "2022" },
		{ title: "CDSE Days, Institute of Computational Data Science, SUNY Buffalo", year: "2018, 2019" },
	],
	referee: [
		"Data Mining and Knowledge Discovery", "Information Systems", "Journal of Computational Science",
		"Journal of Hydrology", "IEEE Geoscience and Remote Sensing Letters", "Frontiers in Earth",
		"Information Sciences", "Neural Networks"
	],
	judge: [
		{ title: "Judge for Health Sciences and Technology Research Symposium", year: "2025" },
		{ title: "Judge for the IGNITE Talks", year: "2023" },
		{ title: "Judge for SCUDEM VII -- Modeling with Differential Equations", year: "2022, 2023" },
		{ title: "Albert Einstein Distinguished Educator Fellowship (AEF) Program", year: "2022" },
	],
};

// Professional memberships
export const memberships = [
	{ org: "Delta Omega Honorary Society in Public Health", time: "2023--Present" },
	{ org: "Institute of Electrical and Electronics Engineers (IEEE)", time: "2022--Present" },
	{ org: "Association for Computing Machinery (ACM)", time: "2022--Present" },
	{ org: "American Geophysical Union (AGU)", time: "2022--Present" },
	{ org: "Society for Industrial and Applied Mathematics (SIAM)", time: "2019--Present" },
	{ org: "Association for Women in Mathematics (AWM)", time: "2017--2023" },
	{ org: "Women in STEM Cooperative (WiSC)", time: "2017--2022" },
];

// Skills
export const skills = [
	"Research Focus: Anomaly detection, Large Deviations Theory, Bayesian Non-parametric Models, Extreme Value Theory, Probabilistic Modeling, Multivariate Time Series, High-Dimensional Streams, Unsupervised Learning",
	"Deep Learning and AI: Data and Knowledge Distillation, Transformers, Diffusion Models, Attention Mechanisms, Large Language Models, Foundation Models, Generative AI",
	"Programming: Python (Pandas, NumPy, SciPy, Scikit-learn, PyTorch, TensorFlow, GeoPandas, MPI, OpenMP), C/C++, R, SQL, MATLAB, SAS",
	"Tools and Platforms: NVIDIA Rapids, Docker, Hadoop, Spark, Git, HPC/Cluster Computing",
];
