function Ui() {
    this.overlay = document.getElementById("overlay");

    document.getElementById("camera__select").addEventListener("change", function () { // aby this = select
        console.log(this.value)

    })

    window.addEventListener('resize', () => {
        level.camera.aspect = window.innerWidth / window.innerHeight;
        level.camera.updateProjectionMatrix();
        level.renderer.setSize(window.innerWidth, window.innerHeight);
    }, false)


    document.addEventListener("mousedown", utils.findRaycasted, false);
}