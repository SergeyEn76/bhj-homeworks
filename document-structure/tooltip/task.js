let hastooltipArray = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < hastooltipArray.length; i++) {
    let tooltipTitle = hastooltipArray[i].title;
    hastooltipArray[i].insertAdjacentHTML('afterend',`<div class="tooltip">${tooltipTitle}</div>`);
};

let tooltipArray = Array.from(document.querySelectorAll('.tooltip'));

for (let i = 0; i < hastooltipArray.length; i++) {
    hastooltipArray[i].onclick = (event) => {
        event.preventDefault();
        let position = hastooltipArray[i].getBoundingClientRect();
        tooltipArray[i].setAttribute('style', `left: ${Math.round(position.left)}px; top: ${Math.round(position.top)+20}px`);
        tooltipArray[i].classList.toggle('tooltip_active');
    };
}
