console.log("loaded")
browser.runtime.onMessage.addListener((data) => {
    console.log("got data ")
    let html = `<style>
    .kadenAndNotification {
        width: 320px;
        height: 150px;
        background-color: rgba(5,5,5,.8);
        border-radius: 3px;
        bottom: 2%;
        right: 1%;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
        position: absolute;
        translate: opacity 0.5s ease-in;
        opacity: 1;
    }
    .hide {
        transition: opacity 0.25s;
        opacity: 0;
    }
</style>
<div class="kadenAndNotification" id="main">
<h style="color: rgb(2, 138, 117);font-family: Helvetica; font-size: 2rem; top: 0%; position: absolute; left:1%">Kaden</h>

<img src="favicon.png" style="position: absolute;top:30%;left: 4%;"><p style="font-family: Helvetica; font-size: 1rem; color:white; position: absolute;top:34%;left: 25%; text-align: left;">` + data.text + `</p>
</div>
<script>
    const element = document.getElementById("main")
    element.addEventListener("click",() => {
        element.classList.add("hide")
    })
</script>
`
document.body += html
})