var con=document.createElement('div');
con.setAttribute('class','container');

var row=document.createElement('div');

row.setAttribute('class','row');
function ta(a,b){
var col=document.createElement('div');
col.classList.add('col-lg-4','col-md-4','col-sm-4');
var cen=document.createElement('div');
cen.setAttribute('class','center');
cen.innerHTML=a+" "+" "+b;
col.append(cen);
row.append(col);
con.append(row);
document.body.append(con);
}






fetch("https://restcountries.eu/rest/v2/all")
.then((response)=>{
    return response.json();
})
.then((result)=>
{
    for(var i in result){
        var res=result[i].name;
        var fa=result[i].capital;
    
        ta(res,fa);
    }
})
.catch((err)=>{
    console.log(err);
});
