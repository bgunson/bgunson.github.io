import * as React from 'react'
// import { SiteIcons } from '../shared/site-icons';
// import './devicon.min.css'

// old implementation using react-icons havbe switched to devicons
// const getLangIcon = (lang, color) => {
//   const iconSize = 22;
//   if (!lang) {
//     return ""
//   } else if (lang.toLowerCase() === 'python') {
//     return <SiteIcons.FaPython size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'html') {
//     return <SiteIcons.FaHtml5 size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'java') {
//     return <SiteIcons.FaJava size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'javascript') {
//     return <SiteIcons.SiJavascript size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'typescript') {
//     return <SiteIcons.SiTypescript size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'css') {
//     return <SiteIcons.FaCss3 size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'scss') {
//     return <SiteIcons.FaSass size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'c#') {
//     return <SiteIcons.SiCsharp size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'ruby') {
//     return <SiteIcons.SiRuby size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'dockerfile') {
//     return <SiteIcons.FaDocker size={iconSize} color="0db7ed" />
//   } else if (lang.toLowerCase() === 'swift') {
//     return <SiteIcons.FaSwift size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'dart') {
//     return <SiteIcons.SiDart size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'c++') {
//     return <SiteIcons.SiCplusplus size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'cmake') {
//     return <SiteIcons.SiCmake size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'kotlin') {
//     return <SiteIcons.SiKotlin size={iconSize} color={color} />
//   } else if (lang.toLowerCase() === 'objective-c') {
//     return langC(color)
//   } else {
//     return lang
//   }
// }

// const langC = (color) => {
//   return <span style={{ lineHeight: '22px' }}><span style={{ verticalAlign: 'text-top', backgroundColor: color, paddingLeft: '6px', paddingRight: '6px', paddingBottom: '1px', borderRadius: '2px', color: 'white', fontSize: '16px', fontWeight: '600' }}>C</span></span>
// }

/**
 * 
 * @param {string} name 
 * @param {string} color
 * @returns raw html icon with class according to devicon stylesheet
 */
const devIcon = (name, color) => {
  let lang = name.toLowerCase();
  lang = lang.replace(/[.*?^${}()|[\]\\]/g, '\\$&');  // escape
  lang = lang.replace(/[+]/g, 'plus');   // edge case for c++ -> cplusplus
  lang = lang.replace(/[#]/g, 'sharp');  // edge case for c# -> csharp
  lang = lang.replace(/[-]/g, '');  // edge case for objective-c -> objectvec or similar

  color = color.replace(/[.+*?^${}()|[\]\\]/g, '\\$&');  // escape

  if (lang === 'dockerfile') {
    lang = 'docker';
    color = '#0db7ed';
  } else if (lang ===  'scss') {
    lang = 'sass'
  } else if (lang === 'html') {
    lang += '5';
  } else if (lang === 'css') {
    lang += '3';
  }
  return { __html: `<i style="color: ${color}" class="devicon-${lang}-plain"></i>` }
}

const LangIcon = (props) => {
  const tip = `${props.percentile}% ${props.name}`
  // return <div className='tooltip' style={{ margin: '4px' }}><span className='tooltiptext tooltiptop'>{tip}</span>{getLangIcon(props.name, props.color)}</div>
  return <div className='tooltip' style={{ margin: '4px' }}><span className='tooltiptext tooltiptop'>{tip}</span>
    <div style={{ fontSize: '24px'}} dangerouslySetInnerHTML={devIcon(props.name, props.color)}></div>
  </div>

}


export default LangIcon