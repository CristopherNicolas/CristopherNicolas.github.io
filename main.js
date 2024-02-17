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
    alert("estas en un navegador movil");
}
function esNavegadorMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
