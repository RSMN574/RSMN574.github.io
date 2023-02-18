const app = Vue.createApp({
    data() {
      return {
     
      }
    }
  })
  app.component('postcard', {
    template:` <template v-for="i in article">
    <a class="mt-8 max-h-48 w-6/12 sm:h-max sm:w-9/12 h-full justify-self-center md:w-9/12 justify-self-center" :href="(i.href)">
	<div class="max-w-md h-full sm:h-max mx-auto shadow-md overflow-hidden border border-slate-300 bg-[#f5f8fc] dark:bg-[#1c1f26] dark:border-slate-700 rounded-xl md:max-w-2xl hover:scale-105 transition ease-in-out">
		<div class="md:flex">
			<div class="md:shrink-0"><img alt="" class="h-full w-full object-cover md:h-full md:w-48 sm:h-1/4 aspect-video" :src="(i.IMG)"></div>
			<div class="p-4">
				<h1 class="block mt-1 text-lg leading-tight font-medium text-black dark:text-gray-200">{{i.title}}</h1>
				<p class="mt-2 text-slate-500">{{i.introduction}}</p>
				<div class="flex items-center gap-2 p-4">
					<img class="rounded-full w-10 h-10" :src="(i.authorIMG)">
					<div class="flex flex-col">
						<strong class="text-center text-slate-900 text-base font-medium dark:text-slate-200 sm:text-sm">{{i.author}}</strong><span class="text-end text-slate-500 text-sm font-medium dark:text-slate-400">{{i.date}}</span>
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
  template:`<div class="navbar navbar-glass navbar-sticky sticky rounded-lg w-11/12 mx-auto mb-12">
          <div class="navbar-start">
              <a class="navbar-item" href="index.html"><font style="vertical-align: inherit;"><img class="inline w-6 mr-4" src="a-k-o-f.svg"><font style="vertical-align: inherit;">Android Tips</font></font></a>
          </div>
          <div class="navbar-center">
          
          <a class="navbar-item" href="flash.html">刷機專區</a>
          <a class="navbar-item" href="beautification.html">美化手機</a>
          <a class="navbar-item" href="internet.html">網路軟體</a>
          <a class="navbar-item" href="media.html">影音娛樂</a>
          <a class="navbar-item" href="other.html">其他</a>
          <a class="navbar-item" href="aboutus.html">關於我們</a>
      </div>
      <div class="navbar-end">
		<div class="avatar avatar-ring avatar-md">
			<div class="dropdown-container">
				<div class="dropdown">
					<label class="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
					<span class="material-symbols-outlined">
account_circle
</span>
					</label>
					<div class="dropdown-menu dropdown-menu-bottom-left">
						<a class="dropdown-item text-sm" href="login.html">登入</a>
					
					</div>
				</div>
			</div>
		</div>
      </div>`,
    data(){
              return{
                 
              }
             
          }
  
  
  })
  app.mount('#app')