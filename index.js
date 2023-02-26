const fs=require('fs')
const turf=require('@turf/turf')


fs.readFile('tmp.json',(err,data)=>{
    const dat=JSON.parse(data);
    
    const args=process.argv.slice(2);
    let x=parseFloat(args[0]);
    let y=parseFloat(args[1]);
    var point=turf.point([x,y]);
    console.log(point);
    

    for(let i=0;i<dat['features'].length;i++){
        let assembly=dat['features'][i];
        let polygon =turf.feature(assembly['geometry']);
        
        //console.log(typeof(polygon));
        try{
        
            if(turf.booleanPointInPolygon(point,polygon)){
                console.log(assembly['properties']['AC_NAME']);
            }
            // else{
            //     console.log('not');
            // }


        }
        catch{
//            console.log(assembly['properties']['AC_NAME']);
            console.log('error')
        }
        
       
    }




    //console.log(dat);
})