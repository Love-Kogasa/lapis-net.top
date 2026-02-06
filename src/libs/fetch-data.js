import json5 from 'json5';

const urlBase =
'https://cdn.jsdelivr.net/gh/LapisNet/.public_data/';

const dataNames = {
	news: 'news.txt',
	members: 'members.json',
	projects: 'projects.json',
	projects_v2: 'projects2.jsonc',
	contacts: 'contacts.json',
	links: 'links.json',
}

/**
 * 
 * @param {DataName} name data name
 * @returns {DataReturns} fetched data
 */
export const fetchData = async(name) => {
	if(name === 'news' || name === 'projects') console.warn(`[Deprecation Warning] Fetching "${name}" from fetchData is deprecated and will be removed in future versions. Please migrate to the new data source.`);
	if(!dataNames[name]) throw new Error(`Data "${name}" is not defined in fetchData.`);
	const res = await fetch(urlBase + dataNames[name]);
	return name === 'news'? await res.text(): json5.parse(await res.text());
}
