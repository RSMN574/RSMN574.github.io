const nav = Vue.createApp({
  data() {
    return {
    
    }
  }
});
export { };

nav.component('mainnav', {
	template: `
	
  <div class="container" >
	<ul class="menu-bar">
	<img id="logo2" src="https://github.com/RSMN574/RSMN574.github.io/blob/main/234312620_4194227050664394_2296996146416159710_n.png?raw=true">
	
  <li>Android資訊</li>
    <li>Android手機</li>
  <li>Android刷機</li>
  <li>關於我們</li>
   <li>電玩專區</li>
</ul>
</div>`
	 
});

		nav.component('mobilenav', {
	template: `
	 <header tabindex="0"></header>
  <div id="nav-container">
    <div class="bg"></div>
     
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
   <img id="logo" src="https://github.com/RSMN574/RSMN574.github.io/blob/main/234312620_4194227050664394_2296996146416159710_n.png?raw=true">
    <div id="nav-content" tabindex="0">
      <ul>
        <li><a href="#0">Android資訊</a></li>
        <li><a href="#0">Android手機</a></li>
        <li><a href="#0">Android刷機</a></li>
        <li><a href="#0">關於我們</a></li>
        <li><a href="#0">電玩專區</a></li>
        
      </ul>
    </div>
  </div>
	
	
	
	
	`
	

	 
});
nav.mount('#app');
