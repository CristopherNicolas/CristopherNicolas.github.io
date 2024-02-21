

function GoToWeb(url)
{
    document.location.href = url;
}

function ChangeVideo()
{
    if(!esNavegadorMovil()) return;
    const src = document.getElementById('vidSrc');
      const vid = document.getElementById('background-video');

        src.src = 'resources/bgVidMobile.mp4';
        vid.load();
        vid.play();
}

function esNavegadorMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
