export async function consultarApi(){
    const URI='https://api.spotify.com/v1/artists/5ZNxiPcbKgaNcBrERMpqeu/top-tracks?market=US';
    const TOKEN='Bearer BQCT0Nl4sRTYYaukODju0gx-YRuMjPJmXbuh7Y6IkwhFD24KXR4OYXWV_q1MC4ASlhSNi8-km0wfRZIKM9LR-YSxxWDTq1Xse9C_HcuDWRvZI8-WJNoI3pm-jCFAKoYUh2ahe8kWnoiqkyOJtQRr3qmQa1ueWCvAsO85bMIzLbsAySv6xw';
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    //consumiendo api
    let respuesta=await fetch(URI,PETICION);
    let datosServicio=await respuesta.json();
    
    return datosServicio

}