// TODO: this is totally empty right now. Needs to hide the approprate psalms
// and collects, or perhaps show the proper psalms and collects. Who knows?
// Also needs to set things up to be able to show the others, if necessary.
// Maybe.

function setupPrayer() {
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    let today = new Date();
    let day = days[today.getDay()];
    let dayParts = document.getElementsByClassName(day);
    for (let p of dayParts) {
        p.style = 'display: block;';
    }
}
