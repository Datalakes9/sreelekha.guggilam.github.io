// src/data/cv.ts - CV data for Sreelekha Guggilam

// Education entries (sorted by time - most recent first)
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
		description: "Buffalo, NY. Thesis: Statistical assessment of tcga ovarian cancer sequencing dataset for prognostic utility"
	},
	{
		title: "Bachelors in Mathematics (B.Math), Honors",
		institution: "Indian Statistical Institute (ISI)",
		time: "2011 - 2014",
		description: "Bangalore, India. Full student scholarship (merit-based) throughout the completion of the degree"
	}
];

// Professional experience entries (sorted by time - most recent first)
export const experiences = [
	{
		title: "Assistant Professor in Data Science",
		institution: "Texas A&M Corpus Christi, Department of Mathematics and Statistics",
		time: "2024 - Present",
		description: "Corpus Christi, TX. Doctoral faculty in Coastal and Marine Sciences Department. Research interests: Time-series databases, anomaly detection, quantum computing, foundation models. Active member of Academics Committee for the Data Science PhD Program Planning Committee and Graduate Admissions Committee. Designed graduate course on advanced topics in Deep Learning including Generative AI model, basics of natural language processing, attention mechanisms, transformers, and model distillation."
	},
	{
		title: "Research and Development Associate in Machine Learning",
		institution: "Oak Ridge National Laboratory, National Security Sciences Directorate",
		time: "2022 - 2024",
		description: "Oak Ridge, TN. Geo-spatial Science and Human Dynamics Division. Focus: Human mobility and pattern of life, disease outbreak prediction, EM signals analysis, time-series databases, anomaly detection, spatio-temporal analysis, quantum computing, foundation models, signals data. DOE Early Career LDRD awardee for research in Quantum computing for spatiotemporal modeling. Principal Investigator on developing novel quantum computing approaches for spatiotemporal classification and anomaly detection. Amongst the 8 selected awardees at ORNL in 2023. Lead on modeling and algorithm development for extended Large deviations Anomaly Detection modeling. Active contributor to multiple Generative AI foundation model projects using multimodal data. Awarded 4 research grants as Principle Investigator and co-Principle Investigator. Lead statistician on developing outbreak prediction models using alternate data sources."
	},
	{
		title: "Research Assistant - Anomaly Detection in Streaming High-Dimensional Time Series Database",
		institution: "University at Buffalo, Institute of Computational Data Science and Department of Computer Science & Engineering",
		time: "2019 - 2022",
		description: "Buffalo, NY. Mentors: Dr. Abani Patra (UB ACM2E Lab, Tufts University), Dr. Varun Chandola (UB Data Science Research Group). Solved outstanding problems in anomaly detection in evolving data and collections of multivariate time series. Developed: 1) Integrated Clustering and Anomaly Detection (INCAD) algorithm for non-parametric, unsupervised anomaly detection in streaming data using extreme value theory. 2) Large Deviations Anomaly Detection (LAD) model for high-dimensional multivariate time-series database. 3) LAD Inspired Iterative Training (LIIT) algorithm for artificial neural networks."
	},
	{
		title: "Teaching Assistant",
		institution: "University at Buffalo, Institute of Computational Data Science",
		time: "2017 - 2019",
		description: "Buffalo, NY. Led and coordinated a team of teaching assistants for graduate courses in data science. Collaborated on developing exams and assignments and lead recitation sessions."
	},
	{
		title: "Risk Manager",
		institution: "American Express, Global Corporate Portfolios",
		time: "2015 - 2016",
		description: "World Financial Center NY, NY. Risk And Data Analytics for Corporate Credit Portfolios. Quantified the change in spending trends in cross-sold clients prior to and post the on-boarding process. Developed and improved risk margins for corporate clients in Global Corporate Payments. Responsible for identifying trends in risk-based industries and states to enable risk control actions on the portfolios."
	}
];

// Publications list (selected key publications)
export const publications = [
	{
		title: "AI/ML assurance: Applications in geospatial sciences",
		authors: "V. Tombs, J. Wohlgemuth, A. K. Patra, D. Lu, and S. Guggilam",
		venue: "AGU23, AGU",
		time: "2024"
	},
	{
		title: "GeoAI for humanitarian assistance",
		authors: "P. A. Dias, T. Kobayashi-Carvalhaes, S. Walters, T. Frazier, C. Woody, S. Guggilam, D. Adams, A. Potnis, and D. Lunga",
		venue: "Handbook of Geospatial Artificial Intelligence, CRC Press",
		time: "2024"
	},
	{
		title: "Climate variable tipping points for rift valley fever outbreaks",
		authors: "K. Harrod, S. Guggilam, H. Tubbs, and A. Anyamba",
		venue: "AGU24",
		time: "2024"
	},
	{
		title: "Physics-informed machine learning to predict solvatochromic parameters of designer solvents with case studies in CO2 and lignin dissolution",
		authors: "M. Mohan, N. Gugulothu, S. Guggilam, T. R. Rajeshwar, M. K. Kidder, and J. C. Smith",
		venue: "Green Chemical Engineering",
		time: "2024"
	},
	{
		title: "High-throughput screening and accurate prediction of ionic liquid viscosities using interpretable machine learning",
		authors: "M. Mohan, K. D. Jetti, S. Guggilam, M. D. Smith, M. K. Kidder, and J. C. Smith",
		venue: "ACS Sustainable Chemistry & Engineering, vol. 12, no. 18, pp. 7040–7054",
		time: "2024"
	},
	{
		title: "An agenda for multimodal foundation models for earth observation",
		authors: "P. Dias, A. Potnis, S. Guggilam, L. Yang, A. Tsaris, H. Medeiros, and D. Lunga",
		venue: "IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium, IEEE",
		time: "2023"
	},
	{
		title: "Large deviations anomaly detection (LAD) for collection of multivariate time series data: Applications to COVID-19 data",
		authors: "S. Guggilam, V. Chandola, and A. K. Patra",
		venue: "Journal of Computational Science, vol. 72, p. 102 101",
		time: "2023"
	},
	{
		title: "Position papers for the ASCR workshop on basic research needs in quantum computing and networking",
		authors: "P. Lougovski, O. Parekh, J. Broz, M. Byrd, Y. Chembo, W. A. de Jong, E. Figueroa, T. S. Humble, J. Larson, G. Quiroz, et al.",
		venue: "USDOE Office of Science (SC), Advanced Scientific Computing Research (ASCR), Tech. Rep.",
		time: "2023"
	},
	{
		title: "Data-driven humanitarian mapping and policymaking: Toward planetary-scale resilience, equity, and sustainability",
		authors: "S. Gaikwad, S. Iyer, D. Lunga, T. Yabe, X. Liang, B. Ananthabhotla, N. Behari, S. Guggilam, and G. Chi",
		venue: "Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
		time: "2022"
	},
	{
		title: "Tracking clusters and anomalies in evolving data streams",
		authors: "S. Guggilam, V. Chandola, and A. Patra",
		venue: "Statistical Analysis and Data Mining: The ASA Data Science Journal, vol. 15, no. 2, pp. 156–178",
		time: "2022"
	},
	{
		title: "Classifying anomalous members in a collection of multivariate time series data using large deviations principle: An application to COVID-19 data",
		authors: "S. Guggilam, V. Chandola, and A. K. Patra",
		venue: "International Conference on Computational Science, Springer",
		time: "2022"
	},
	{
		title: "Anomaly detection for high-dimensional data using large deviations principle",
		authors: "S. Guggilam, V. Chandola, and A. Patra",
		venue: "arXiv preprint arXiv:2109.13698",
		time: "2021"
	},
	{
		title: "Integrated clustering and anomaly detection (INCAD) for streaming data",
		authors: "S. Guggilam, S. M. A. Zaidi, V. Chandola, and A. K. Patra",
		venue: "Computational Science–ICCS 2019: 19th International Conference, Springer International Publishing",
		time: "2019"
	},
	{
		title: "Bayesian anomaly detection using extreme value theory",
		authors: "S. Guggilam, S. Zaidi, V. Chandola, and A. Patra",
		venue: "arXiv preprint arXiv:1905.12150",
		time: "2019"
	}
];

// Skills array
export const skills = [
	"Research Areas: Time-series databases, Anomaly detection, Quantum computing, Foundation models, Spatio-temporal analysis",
	"Machine Learning: Deep Learning, Generative AI models, Natural language processing, Attention mechanisms, Transformers, Model distillation",
	"Statistical Methods: Extreme value theory, Large deviations theory, Bayesian methods, Multivariate time series analysis",
	"Programming & Tools: Python, R, Statistical computing, High-dimensional data analysis",
	"Quantum Computing: Quantum variational inference, Spatiotemporal modeling, Quantum algorithms",
	"Applications: Human mobility analysis, Disease outbreak prediction, EM signals analysis, Pattern of life modeling, Geospatial sciences",
	"Data Science: Streaming data analysis, Clustering algorithms, Non-parametric methods, Unsupervised learning",
	"Interdisciplinary Research: Biostatistics, Bioinformatics, Transportation statistics, Environmental modeling, GeoAI"
];