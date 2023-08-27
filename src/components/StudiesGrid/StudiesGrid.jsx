import { AiFillCheckCircle } from 'react-icons/ai'
import './StudiesGrid.css'

// eslint-disable-next-line react/prop-types
export const StudiesGrid = ({ userData }) => {
	
	let studies = []
	let studiesDone = {}
	let studiesLinks = {}
	for (const key in userData) {
		if (key.endsWith('_done')) {
			studiesDone[key.split('_')[0].trim()] = Boolean(userData[key][0])
		}
		if (key.endsWith('_link')) {
			studiesLinks[key.split('_')[0].trim()] = userData[key][0]
		}
	}

	for (const key in studiesDone) {
		studies.push({
			[key]: {
				done: studiesDone[key],
				link: studiesLinks[key] || null
		} })
	}
	
	studies.sort(
		(s1, s2) => (
			s1['done'] && !s2['done'] ? 1 : -1
		)
	)

	return (
		<div className="studies__grid">
			{studies.map((study, index) => {
				const studyName = Object.keys(study)[0]
				const studyDone = study[studyName]['done'] ? 'study__done' : ''
				const studyLink = study[studyName]['link'] ? study[studyName]['link'] : '#'
				return (
					<a key={index} className={"study__card " + studyDone} href={studyLink}>
						<p className="study__name ">{studyName}</p>
						{study[studyName]['done'] ? <i className="study__done--icon"><AiFillCheckCircle/></i> : null}
					</a>
				)
			})}
		</div>
	)
}
