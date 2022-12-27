import * as React from 'react'

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

export default LangIcon;