import * as React from 'react';

const DeviconImage = ({ icon }) => {

    const fallbacks = ['plain.svg', 'original-wordmark.svg', 'plain-wormark.svg'];

    const [svgType, setSvgType] = React.useState('original.svg');
    const [fallbackIndex, setFallbackIndex] = React.useState(0);

    const onHover = (enter) => {
        if (enter) {
            setFallbackIndex(1);

        } else {
            setFallbackIndex(0);
        }
        onError();
    }

    const onError = () => {
        if (fallbackIndex > fallbacks.length) {
            return;
        }

        setSvgType(fallbacks[fallbackIndex]);
        setFallbackIndex(fallbackIndex+1);
    }

    return <img onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} height={42} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${svgType}`} onError={onError} />

}

export default DeviconImage;