function GoToWeb(url)
{
    document.location.href = url;
}

function ChangeVideo()
{
    var vid = document.getElementById('background-video');
    vid.src = 'resources/bgVid.mp4';
}

if(esNavegadorMovil())
{
    var  vid = document.getElementById('background-video');
    vid.parentNode.removeChild(vid);
    
    document.body.style.backgroundImage ='https://w0.peakpx.com/wallpaper/958/696/HD-wallpaper-simple-luxury-dark-elegant-gold-golden-metallic-modern-shiny.jpg';
}
function esNavegadorMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
