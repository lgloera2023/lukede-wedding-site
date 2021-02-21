/*************************************************************************
 * Created By: Luke Loera
 * Date: 12/30/2020
 * Description:
 * Provides the initial alert to give instructions on how to view the
 * stories and also provides the animations for the story slideshows.
 *************************************************************************/

// Initial alert
setTimeout(function() {alert("(HOW TO LOOK AT STORIES)\nScroll through the stories by clicking on the box outlines.");}, 250);

//////////////////////////////////////////////////////////////////////////
// Pulse white
function pulseWhite(idNum) {
    let bar = document.getElementById("bar" + idNum);
    bar.classList.add('white-bar');
    setTimeout(() => {bar.classList.remove('white-bar'); }, 250);
}