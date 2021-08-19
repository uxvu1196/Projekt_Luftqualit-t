
function checkAirQuality() {
    console.log("test")
    let slide = document.getElementById("myRange").value
    document.getElementById("resultSum").innerHTML = slide
    let text1 = document.getElementById("text1")
    let text2 = document.getElementById("text2")
    
    //Ich habe mir die ID schon gespeichert, deswegen brauche ich das nicht bei if mit document.get.... ausführen 
    if (slide <= 50){
        document.body.style.background="green"
        text1.innerHTML ="Level of health concern: Good "
        text2.innerHTML ="Level of health effect: Little or no risk"
    } else if (slide <= 100){
        document.body.style.background="yellow"
        text1.innerHTML ="Level of health concern: Moderate "
        text2.innerHTML ="Level of health effect: Acceptable quality"
    } else {
        document.body.style.background="orange"
        text1.innerHTML ="Level of health concern: Unhealthy for sensitive groups  "
        text2.innerHTML ="Level of health effect: Generable publics not likely affected"
    }
}