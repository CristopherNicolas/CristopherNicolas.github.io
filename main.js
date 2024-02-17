function GoToWeb(url)
{
    document.location.href = url;
}

function ChangeVideo()
{
    var vid = document.getElementById('background-video');
    vid.src = 'resources/bgVidMobile.mp4';
}

if(esNavegadorMovil())
{
    alert("es mobil!")
    ChangeVideo();
}
function esNavegadorMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
