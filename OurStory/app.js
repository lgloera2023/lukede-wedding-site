/*************************************************************************
 * Created By: Luke Loera
 * Date: 12/30/2020
 * Description:
 * Provides the animations for the story slideshows.
 *************************************************************************/


//////////////////////////////////////////////////////////////////////////
// Pulse white
function pulseWhite(idNum) {
    let bar = document.getElementById("bar" + idNum);
    bar.classList.add('white-bar');
    setTimeout(() => {bar.classList.remove('white-bar'); }, 250);
}