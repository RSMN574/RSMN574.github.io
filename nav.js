const nav = Vue.createApp({
  data() {
    return {
   
    }
  }
});


// 子元件
nav.component('mainnav', {
	template: `
<ul class="menu-bar">
	<li class="navdd">Android資訊
	  <nav class="submenu">
                <ul class="submenu-items">
                    <li class="submenu-item"><a href="https://rsmn574.github.io/androidsys.html" class="submenu-link">Android系統</a></li>
                    <li class="submenu-item"><a href="https://rsmn574.github.io/android12.html" class="submenu-link">Android12專區</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Android APP</a></li>
                </ul>
            </nav>
	</li>
	<li class="navdd">Android資訊
	  <nav class="submenu">
                <ul class="submenu-items">
                    <li class="submenu-item"><a href="https://rsmn574.github.io/androidsys.html" class="submenu-link">Android系統</a></li>
                    <li class="submenu-item"><a href="https://rsmn574.github.io/android12.html" class="submenu-link">Android12專區</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Android APP</a></li>
                </ul>
            </nav>
	</li>
  <li class="navdd">Android資訊
	  <nav class="submenu">
                <ul class="submenu-items">
                    <li class="submenu-item"><a href="https://rsmn574.github.io/androidsys.html" class="submenu-link">Android系統</a></li>
                    <li class="submenu-item"><a href="https://rsmn574.github.io/android12.html" class="submenu-link">Android12專區</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Android APP</a></li>
                </ul>
            </nav>
	</li>`
  
  
   
});

nav.mount('#app');
