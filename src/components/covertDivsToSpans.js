
export default function myFunc (elements) {
    if (NodeList.prototype.isPrototypeOf(elements)) {

        for (var i = 0; i < elements.length; ++i) {
            myFunc(elements[i]);
        }
    } else {
        elements.style.overflow = "hidden";
        elements.innerHTML = elements.innerText
            .split("")
            .map((char) => {
                if (char === " ") {
                    return `<span>&nbsp;</span>`;
                }
                return `<span class="animatedis">${char}</span>`;
            })
            .join("");

        return elements;
    }
}