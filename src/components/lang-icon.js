import * as React from 'react'
import { SiteIcons } from './site-icons';



const getLangIcon = (lang, color) => {
  const iconSize = 22;
  if (!lang) {
    return ""
  } else if (lang.toLowerCase() === 'python') {
    return <SiteIcons.FaPython size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'html') {
    return <SiteIcons.FaHtml5 size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'java') {
    return <SiteIcons.FaJava size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'javascript') {
    return <SiteIcons.SiJavascript size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'typescript') {
    return <SiteIcons.SiTypescript size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'css') {
    return <SiteIcons.FaCss3 size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'scss') {
    return <SiteIcons.FaSass size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'c#') {
    return <SiteIcons.SiCsharp size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'ruby') {
    return <SiteIcons.SiRuby size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'dockerfile') {
    return <SiteIcons.FaDocker size={iconSize} color="0db7ed" />
  } else if (lang.toLowerCase() === 'swift') {
    return <SiteIcons.FaSwift size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'dart') {
    return <SiteIcons.SiDart size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'kotlin') {
    return <SiteIcons.SiKotlin size={iconSize} color={color} />
  } else if (lang.toLowerCase() === 'objective-c') {
    return langC(color)
  } else {
    return lang
  }
}

const langC = (color) => {
  return <span style={{ lineHeight: '22px' }}><span style={{ verticalAlign: 'text-top', backgroundColor: color, paddingLeft: '6px', paddingRight: '6px', paddingBottom: '1px', borderRadius: '2px', color: 'white', fontSize: '16px', fontWeight: '600' }}>C</span></span>
}


const LangIcon = (props) => {
  const tip = `${props.percentile}% ${props.name}`
  return <div className='tooltip' style={{ margin: '4px' }}><span className='tooltiptext tooltiptop'>{tip}</span>{getLangIcon(props.name, props.color)}</div>
}

export default LangIcon