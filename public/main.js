const init = async () => {
    
    let rustApp = null;

    try {
        rustApp = await import('../pkg');
    }
    catch(err) {
        console.error(err);
        return;
    }

    const input = document.getElementById("upload");
    const fileReader = new FileReader();
   
    input.addEventListener('change', (e) => {
        fileReader.readAsDataURL(input.files[0]);
        fileReader.onloadend = () => {
            const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");
            let imgDataUrl = rustApp.grayscale(base64)
            
            document.getElementById('new-img').setAttribute(
                'src', imgDataUrl
            )
        }

    })
}

init()