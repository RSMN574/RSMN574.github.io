const app=Vue.createApp({});

app.component('main-nav', { 
  template: <nav class="navbar navbar-expand-lg navbar-dark "id="nav">
  <a class="navbar-brand" href="https://rsmn574.github.io">Android手機王</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent">
	
	<span class="navbar-toggler-icon"></span>
  </button>

	
  <div class="collapse navbar-collapse" >
	 
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="hh1">
          Android資訊 
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown" id="dropdown1">
          <a class="dropdown-item" href="https://rsmn574.github.io/androidsys.html">Android系統</a>
	<a class="dropdown-item" href="https://rsmn574.github.io/android12.html">Android 12專區</a>
	<a class="dropdown-item" href="https://rsmn574.github.io/android-app.html">Android APP</a>	
		</div>
      </li>
	       
	    <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle" href="#" id="navbardropdown2" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        Android手機
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown" id="dropdown2">
          <a class="dropdown-item" href="https://rsmn574.github.io/三星.html">三星</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/小米.html">小米</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/OPPO.html">OPPO</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/realme.html">realme</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="https://rsmn574.github.io/其他手機.html">其他</a>
        </div>
	 	
          
      </li>
	    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Android刷機 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown3">
          <a class="dropdown-item" href="https://rsmn574.github.io/Android-TWRP.html">Android TWRP</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/Android-flash.html">Android刷機</a>
         <a class="dropdown-item" href="https://rsmn574.github.io/magisk-mod.html">magisk 模組</a>
         <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="https://rsmn574.github.io/其他刷機.html">其他</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          關於我們 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown4">
          <a class="dropdown-item" href="https://rsmn574.github.io/社群網站.html">社群網站</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/介紹.html">Android手機王 介紹</a>
          <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSfZdrlM5mZDUYbIfLHNo3TVjDXOJeWdwl55-qipSpNLRFdh4Q/viewform?usp=sf_link">加入我們</a>
		</div>
	      </div>
      </li>
      
    </ul>
    
  </div>
	</div>
</nav>
	 <div class="collapse position-fixed" id="navbarToggleExternalContent">
     <div class="offset-2" class="sh5" >
   
      <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="navbardropdown1" >
            Android資訊  
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown" id="dropdown1">
          <a class="dropdown-item" href="https://rsmn574.github.io/androidsys.html">Android系統</a>
	<a class="dropdown-item" href="https://rsmn574.github.io/android12.html">Android 12專區</a>
	<a class="dropdown-item" href="https://rsmn574.github.io/android-app.html">Android APP</a>	
		</div>
      </li>
	       
	    <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle" href="#" id="navbardropdown2" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
         Android手機 
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown" id="dropdown2">
          <a class="dropdown-item" href="https://rsmn574.github.io/三星.html">三星</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/小米.html">小米</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/OPPO.html">OPPO</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/realme.html">realme</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="https://rsmn574.github.io/其他手機.html">其他</a>
        </div>
	 	
          
      </li>
	    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Android刷機 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown3">
          <a class="dropdown-item" href="https://rsmn574.github.io/Android-TWRP.html">Android TWRP</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/Android-flash.html">Android刷機</a>
         <a class="dropdown-item" href="https://rsmn574.github.io/magisk-mod.html">magisk 模組</a>
         <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="https://rsmn574.github.io/其他刷機.html">其他</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           關於我們  
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown4">
          <a class="dropdown-item" href="https://rsmn574.github.io/社群網站.html">社群網站</a>
          <a class="dropdown-item" href="https://rsmn574.github.io/介紹.html">Android手機王 介紹</a>
          <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSfZdrlM5mZDUYbIfLHNo3TVjDXOJeWdwl55-qipSpNLRFdh4Q/viewform?usp=sf_link">加入我們</a>
		</div>
      </li>
      
    </ul>
	    
    </div>
  </div>
	
  
  
  });
app.mount('#app');
