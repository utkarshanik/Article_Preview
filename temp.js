const s= document.querySelector("#share")
const show= document.querySelector(".sh")
const imgg= document.querySelector("#sv")
const imgshare= document.querySelector(".shareimg")

s.addEventListener('click',()=>{
    show.style.display='flex';
    imgshare.style.backgroundColor=' hsl(217, 19%, 35%)';
    imgg.setAttribute('fill',' white');
    
     
    })
    


function mobile()
{
    
    if(window.innerWidth<=768)
        {
        const ndiv= document.createElement("div")
        ndiv.className='shareimg2'
        ndiv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="white" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" id="sv" ></svg>';
        show.appendChild(ndiv) 
    }
}

mobile();