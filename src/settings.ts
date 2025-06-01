export const profile = {
	fullName: 'Sreelekha Guggilam',
	title: 'Dr. ',
	institute: 'Texas A&M University Corpus Christi',
	author_name: 'S. Guggilam', // Author name to be highlighted in the papers section
	department: "Department of Mathematics and Statistics",
	position: "Assistant Professor in Data Science",
	email: "sreelekha[dot]guggilam[at]tamucc[dot]edu",
	research_areas: [
		{ title: 'Time series modeling'},
		{ title: 'Anomaly detection' },
		{ title: 'Spatio-temporal analysis' },
		{ title: 'Machine learning' },
		{ title: 'Mathematics in Artificial Intelligence' },
		{ title: 'Foundation models for time series' },
		// { title: 'Statistical machine learning' },
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: "sreelekha[dot]guggilam[at]tamucc[dot]edu", // Update this
	github: "https://github.com/sreelekh", // Verify this URL
	gitlab: "", // Add if you have GitLab
	linkedin: "https://www.linkedin.com/in/sreelekhaguggilam", // Verify this URL
	scholar: "https://scholar.google.com/citations?user=tzu0AM8AAAAJ&hl=en&authuser=1", // Add Google Scholar URL
	inspire: "", // Add INSPIRE-HEP URL if available
	arxiv: "", // Add arXiv author URL if available
	researchGate: "" // Add if available
}

export const template = {
	website_url: 'https://sreelekh.github.io/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: '/sreelekha.guggilam.github.io' // Repository name starting with /
}

export const seo = {
	default_title: 'Sreelekha Guggilam',
	default_description: "Personal academic website of Dr. Sreelekha Guggilam, Assistant Professor in Data Science at Texas A&M University Corpus Christi. Research interests: Time-series databases, anomaly detection, quantum computing, foundation models.",
	default_image: '/images/astro-academia.png',
}

// src/settings.ts - Website settings for Sreelekha Guggilam

export const settings = {
	siteTitle: "Sreelekha Guggilam - Academic Website",
	siteDescription: "Personal academic website of Dr. Sreelekha Guggilam, Assistant Professor in Data Science at Texas A&M University Corpus Christi. Research interests: Time-series databases, anomaly detection, quantum computing, foundation models.",
	author: "S. Guggilam",
	socialLinks: {
		linkedin: "https://linkedin.com/in/sreelekhaguggilam",
		github: "https://github.com/sreelekh",
		email: "sreelekha[dot]guggilam[at]tamucc[dot]edu",
		orcid: "", // Add ORCID if available
		googleScholar: "", // Add Google Scholar profile if available
	},
	university: "Texas A&M University Corpus Christi",
	department: "Department of Mathematics and Statistics",
	position: "Assistant Professor in Data Science",
	location: "Corpus Christi, TX",
	researchInterests: [
		"Time-series modeling",
		"Anomaly detection",
		// "Quantum computing",
		"Foundation models",
		"Spatio-temporal analysis",
		"Machine Learning"
		// "GeoAI"
	]
};