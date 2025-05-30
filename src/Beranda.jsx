import './Beranda.css';



function Beranda () {

     function darkmode () {
     let bodydark = document.getElementById("bodys")
    let dark = document.getElementById("haha")
    let darks = document.getElementById("hahas")
    
    dark.classList.toggle("darkmode")
    darks.classList.toggle("darkmode")
    bodydark.classList.toggle("darkmodebody")
   

  }
   
   

return (
    <>
    <body id='bodys'>
        
   
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css "></link>
 <div class="header" id='haha'>
        <div class="header1">

          
           
            

            <i class="fas fa-user" id="profile"><div class="logout"> <a href="/Login">Login?</a>
                </div></i>
                <p>{localStorage.getItem("username")}</p>
           
           </div>


      
     <div class="header2">
         <h2>Media Pembelajaran IPAS: Konektivitas Antarruang Dan Waktu</h2>
     <h3>by Siti Zaleha S.Pd</h3>

    
     </div>
     
    </div>



    <div class="sidebar" id='hahas'>
        <a href="#home">
            <div class="dropdown">
            Beranda
            </div>
         <i class="fas fa-home"></i></a>
        <a href="#list">  <div class="dropdown" id="dropdowns">
            List Materi
            </div>
            <i class="fas fa-book"></i></a>

        <a href="#latihan" >  <div class="dropdown">
            Latihan
            </div>
            <i class="fas fa-graduation-cap"></i></a>
        
        <a href="#kontak">  <div class="dropdown">
            Kontak
            </div>
            <i class="fas fa-address-book"></i></a>

            <a onClick={darkmode}>  
            <i class="fas fa-moon" id='icons'></i></a>
              <a href="/chat">  <i class="fas fa-comment-dots"></i></a>
           
       
        </div>

     

<div class="content"  id='home'>
    

    <div class="material"  > 
     <div></div>
        <div class="materialbox" id="capaian"  >
            <h1 >Capaian Pembelajaran</h1>

            <h3>Siswa Dapat memahami hubungan antarruang, waktu dan antarwilayah dalam aspek geografis, ekonomi, sosial, dan budaya.</h3>
        </div>
    <br/>
    <br/>
        <div class="materialbox" id="tujuan">
            <h1>Tujuan Pembelajaran</h1>
            <h3>Siswa mampu menjelaskan pentingnya konektivitas antarruang dan waktu dalam kehidupan sehari hari dan perkembangan global.</h3>
        </div>
       
    </div>

    <div id="list">
        <div class="listcard">  
         <div class="card">ddd</div>
         <div class="card"></div>
         <div class="card"></div>
        </div>
       
    </div>
</div>
 </body>



</>

)
}
export default Beranda