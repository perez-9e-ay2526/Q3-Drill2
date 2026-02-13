// write the function to get the area of a circle //

function multiplication(){
    let valRad = document.getElementById("radNum").value;
    let valArea = Math.PI* Number(valRad)**2;

    document.getElementById("areaNum").value=valArea.toFixed(2);
}