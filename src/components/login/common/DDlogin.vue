<template>
    <iframe :id="this.options.id" 
             :src="src" 
             frameborder="0" 
             scrolling="no"
             :width="this.options.width"
             :height="this.options.height" 
             :class="this.options.className"/>
</template>

<script>
export default {
    data(){
        return {
            url:"https://login.dingtalk.com/login/qrcode.htm?goto="
        }
    },
    props:["options"],
    computed:{
        src(){
            const { goto, style, href } = this.options
            let src = this.url + encodeURIComponent(goto)
            src += style ? "&style=" + style : "";
            src += href ? "&href=" + href : "";
            return src  
        }
    }  
}
</script>
