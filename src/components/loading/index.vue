<template>
 <div class='loading'>
  <div class='loading-mode'>
       <ul class='loading-container'>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
    
   </ul>
  </div>
 </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped lang='scss'>
   .loading{
       position: absolute;
       top:0;
       left:0;
       right: 0;
       bottom:0;
       z-index: 2;
       margin: 0 auto;
       background-color:black;
       opacity:0.5;
      .loading-mode{
          width: 100%;
          height: 100%;
          display: flex;
        justify-content: center;
        align-items: center;
    .loading-container{
           width:100px;
           height: 100px;
            display: flex;
        
               list-style-type: none;
               li{
                   height: 50px;
                   width: 20px;
                   background:rgb(130, 211, 8);
                   border-radius: 5px;
                  animation: loading 1400ms infinite; 
                  &:nth-child(1){
                      animation-delay: 200ms;
                  }
                   &:nth-child(2){
                      animation-delay: 400ms;
                  }
                   &:nth-child(3){
                      animation-delay: 600ms;
                  }
                   &:nth-child(4){
                      animation-delay: 800ms;
                  }
                   &:nth-child(5){
                      animation-delay: 1000ms;
                  }
                   &:nth-child(6){
                      animation-delay: 1200ms;
                  }
               }
        
           

       } 
      }
     
   }
   @keyframes loading{
       0%,100%{
      
        transform: scale(1);
       }
       50%{
       transform: scale(0.5);
       }
   }
</style>
