const app = Vue.createApp({
    data() {
      return {
     
      }
    }
  })
  app.component('postcard', {
    template:` <template v-for="i in article">
    <a class="mt-8 max-h-48 w-6/12 sm:h-max sm:w-9/12 h-full justify-self-center md:w-9/12 justify-self-center" :href="(i.href)">
	<div class="max-w-md h-full sm:h-max mx-auto shadow-md overflow-hidden border border-slate-300 bg-[#f5f8fc]  rounded-xl md:max-w-2xl hover:scale-105 transition ease-in-out">
		<div class="md:flex">
			<div class="md:shrink-0"><img alt="" class="h-full w-full object-cover md:h-full md:w-48 sm:h-1/4 aspect-video" :src="(i.IMG)"></div>
			<div class="p-4">
				<h1 class="block mt-1 text-lg leading-tight font-medium text-black ">{{i.title}}</h1>
				<p class="mt-2 text-slate-500">{{i.introduction}}</p>
				<div class="flex items-center gap-2 p-4">
					<img class="rounded-full w-10 h-10" :src="(i.authorIMG)">
					<div class="flex flex-col">
						<strong class="text-center text-slate-900 text-base font-medium  sm:text-sm">{{i.author}}</strong><span class="text-end text-slate-500 text-sm font-medium dark:text-slate-400">{{i.date}}</span>
					</div>
				</div>
			</div>
		</div>
	</div></a>
   </template>`,
   data(){
    return{
      category:location.pathname,
      article:[{
title:'刷機教學-起始準備篇',
introduction:'刷機警語刷機本來就有風險，可能帶來手機不穩定或甚至死機(變磚)，本人謹提供個人刷機經驗分享，不保證成功也不會對你的手機負責，請認清風險!!!',
author:'samson1357924',
date:'2022-06-21',
authorIMG:"account.svg",
IMG:"a140678fb389d4b090858f09eeca426657aa2cde.jpg",
href:"1.html",
category:"flash"

      },]
    }
  },mounted() {
   if(location.pathname.match("flash")!=null){
this.category="flash"
   }else if(location.pathname.match("media")!=null){
    this.category="media"
   }else if(location.pathname.match("internet")!=null){
    this.category="internet"
   }else if(location.pathname.match("beautification")!=null){
    this.category="beautification"
   }else if(location.pathname.match("other")!=null){
    this.category="other"
   }
    var a=new Array
    for(i in this.article){
      //console.log(this.article[i])
      if(this.article[i].category== this.category){
        a[a.length]=this.article[i]
        
      }
      this.article=a
    }
    
   },
  })
  app.component('navbar', {
  template:` <div class=" hidden md:inline h-16  fixed w-screen border-b border-slate-900/10 backdrop-blur-lg bg-white/30 h-12 rounded-sm ">
  
  

  <ul class="md:flex lg:flex text-center justify-center gap-x-2 mt-5 hidden">
      <a class="router-link-active router-link-exact-active" href="index.html">
      <li class="inline-block "><img class="w-8" src="a-k-o-f.svg"></li>
      </a>
       
        <li class="inline-block "><a class="navbar-item" href="flash.html">刷機專區</a></li>
       
        <li class="inline-block  "><a class="navbar-item" href="internet.html">網路軟體</a></li>
       
        <li class="inline-block  "><a class="navbar-item" href="beautification.html">美化手機</a></li>
       
        <li class="inline-block  "><a class="navbar-item" href="internet.html">網路軟體</a></li>
       
        <li class="inline-block  "><a class="navbar-item" href="media.html">影音娛樂</a></li>
       
        <li class="inline-block  "><a class="navbar-item" href="other.html">其他</a></li>
        <li class="inline-block  "><a class="navbar-item" href="aboutus.html">關於我們</a></li>
      </ul>
    </div>
 
</div>
<div class="fixed md:hidden w-screen border-b border-slate-900/10 backdrop-blur-lg bg-white/30 h-14 rounded-sm ">
<div class="mt-2 left-4 absolute"><a class="router-link-active router-link-exact-active" href="index.html">
<img class="w-8" src="a-k-o-f.svg">
</a></div>

<div class="absolute right-4 mt-1"><input type="checkbox" id="drawer-left" class="drawer-toggle" />

<label for="drawer-left" class="btn bg-gradient-to-r from-[#fa709a] to-[#fee140]"><span class="stroke-blue-500 material-symbols-outlined">
menu
</span></label>
<label class="overlay" for="drawer-left"></label>
<div class="drawer">
	<div class="drawer-content pt-10 flex flex-col h-full">
		<label for="drawer-left" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
    <ul class="">
    
     
      <li class=" my-4 align-top"><a class="navbar-item" href="flash.html">刷機專區</a></li>
     
      <li class=" my-4   align-top"><a class="navbar-item" href="internet.html">網路軟體</a></li>
     
      <li class="  my-4  align-top"><a class="navbar-item" href="beautification.html">美化手機</a></li>
     
      <li class="  my-4  align-top"><a class="navbar-item" href="internet.html">網路軟體</a></li>
     
      <li class=" my-4  align-top"><a class="navbar-item" href="media.html">影音娛樂</a></li>
     
      <li class="  my-4  align-top"><a class="navbar-item" href="other.html">其他</a></li>
      <li class="  my-4  align-top"><a class="navbar-item" href="aboutus.html">關於我們</a></li>
    </ul>
	</div>
</div>
</div>
</div>
  
    
   

`,
    data(){
              return{
                 
              }
             
          }
  
  
  })
  app.mount('#app')