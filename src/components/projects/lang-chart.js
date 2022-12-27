import * as React from 'react'
import BubbleChart from '@weknow/react-bubble-chart-d3';


const LangChart = ({ repos, blurbs, onSelect }) => {
    const allLanguagesData = {};
    const includeLanguages = blurbs.map(b => b.name);
    repos.nodes.forEach(repo => {
        repo.languages.edges.forEach(language => {
            if (!includeLanguages.includes(language.node.name.toLowerCase())) return;
            allLanguagesData[language.node.name] = allLanguagesData[language.node.name] || { label: '', value: 0, color: '' }
            allLanguagesData[language.node.name].label = language.node.name
            allLanguagesData[language.node.name].value += language.size
            allLanguagesData[language.node.name].color = language.node.color

        })
    })

    const data = Object.values(allLanguagesData).sort((a, b) => b.value - a.value).slice(0, 8)
    // data.forEach(language => language.color += 'e6')
    
    var width = 350;

    return (
        <div style={{ textAlign: 'center', minWidth: '375px' }}>
            <h2 style={{ marginBottom: '5px' }}>My 8 Most Used Languages</h2>
            <BubbleChart
                graph={{
                    zoom: 1.1,
                    offsetX: -0.08,
                    offsetY: -0.01,
                }}
                width={width}
                height={width + 50}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={false} // optional value, pass false to disable the legend.
                valueFont={{
                    size: 0,
                    color: '#fff',
                }}
                labelFont={{
                    size: 16,
                    color: '#000',
                    // weight: '400',
                    strokeWidth: '1px'
                }}
                bubbleClickFun={(e) => onSelect(e)}
                data={data}
            ></BubbleChart>
            {/* <p style={{ minHeight: '20px', margin: '0 20px' }}>{blurb}</p> */}
        </div>
    )
}

export default LangChart