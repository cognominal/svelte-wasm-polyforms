type svgAttrs = { [key: string]: string | number | boolean }

export function svgElt(svgType: string, attrs: svgAttrs): SVGElement {
    let sElt = document.createElementNS("http://www.w3.org/2000/svg", svgType);
    for (const attrNm in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, attrNm)) {
            const element = attrs[attrNm];
            sElt.setAttribute(attrNm, element.toString())
        }
    }
    return sElt
}
