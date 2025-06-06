const arrow = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" stroke="" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

const chevron = `
<?xml version="1.0" ?><svg class="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>
`;

const SVG = function () {
    const range = document.createRange();
    let fragment;

    return {
        arrow: () => {
            fragment = range.createContextualFragment(arrow);
            return fragment.querySelector('svg');
        },
        chevron: () => {
            fragment = range.createContextualFragment(chevron);
            return fragment.querySelector('svg');
        }
    }
}();

export default SVG;