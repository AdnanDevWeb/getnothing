<script>
    const testimonials = [
        {
            content: "Nothing has improved every part of my life. I received a promotion at work, and my hair has never looked better. My ex-wife also came back to me, although my current wife didn’t seem to appreciate it.",
            img: "https://getnothing.app/img/people/donald.jpg",
            name: "Donald",
            role: "Blogger"
        },
        {
            content: "I’ve never seen such honest marketing before. I received exactly what I was offered — nothing. It’s incredible!",
            name: "Emma",
            img: "https://getnothing.app/img/people/emma.jpg",
            role: "Mystery Shopper"
        },{
            content: "Subscribing to Nothing made me realize that maybe I didn't need it after all. I've never felt so smart.",
            img: "https://getnothing.app/img/people/stacy.jpg",
            name: "Stacy",
            role: "Philanthropist"
        },{
            content: "Great — another monthly bill to add to the list of things I’ll forget to cancel. Thanks!",
            img: "https://getnothing.app/img/people/phil.jpg",
            name: "Phil",
            role: "Famous Singer"
        },{
            content: "I gave my boss a subscription, and he said it was cooler than the yacht he bought last year. My only complaint is that he didn’t give me a yacht in return.",
            img: "https://getnothing.app/img/people/alex.jpg",
            name: "Alex",
            role: "Ship Captain"
        },
    ]
</script>
<section class="md:mt-12 overflow-hidden">
    <div id="swiper" class="transition-all lg:pl-32 grid grid-cols-[repeat(5,500px)] gap-12">
        {#each testimonials as testimonial }
             <div class="testimonial bg-main md:px-8 md:py-12 rounded-[2rem] flex justify-between  flex-col h-[500px]">
                 <div class="grid gap-3">
                     <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5L8.5875 8.415L0.959999 9.5175L6.48 14.9025L5.175 22.5L12 18.915L18.825 22.5L17.52 14.9025L23.04 9.525L15.4125 8.415L12 1.5Z" fill="#FA5046"></path><path d="M36 1.5L32.5875 8.415L24.96 9.5175L30.48 14.9025L29.175 22.5L36 18.915L42.825 22.5L41.52 14.9025L47.04 9.525L39.4125 8.415L36 1.5Z" fill="#FA5046"></path><path d="M60 1.5L56.5875 8.415L48.96 9.5175L54.48 14.9025L53.175 22.5L60 18.915L66.825 22.5L65.52 14.9025L71.04 9.525L63.4125 8.415L60 1.5Z" fill="#FA5046"></path><path d="M84 1.5L80.5875 8.415L72.96 9.5175L78.48 14.9025L77.175 22.5L84 18.915L90.825 22.5L89.52 14.9025L95.04 9.525L87.4125 8.415L84 1.5Z" fill="#FA5046"></path><path d="M108 1.5L104.588 8.415L96.96 9.5175L102.48 14.9025L101.175 22.5L108 18.915L114.825 22.5L113.52 14.9025L119.04 9.525L111.413 8.415L108 1.5Z" fill="#FA5046"></path></svg>
                     <p class="text-xl">{testimonial.content}</p>
                 </div>
                 <div class="flex gap-3">
                     <img class="w-12 h-12 rounded-full" src={testimonial.img} alt="pfp">
                     <div class="flex flex-col justify-between">
                         <p class="text-xl">{testimonial.name}</p> 
                         <p class="text-sm">{testimonial.role}</p>
                     </div>
                 </div>
             </div>
         {/each} 
    </div>
        
</section> 