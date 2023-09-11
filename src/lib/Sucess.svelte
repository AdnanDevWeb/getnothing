<script>
    import { onMount } from "svelte";
    import Swiper from "../components/Swiper.svelte";

    let swiper;
    let translated = 0
    onMount(() => {
        swiper = document.getElementById('swiper');
        console.log(swiper)
    })
    const handleNextClick = () => {
        if(translated > 1300) return
        translated+=500
        swiper.style.transform=`translateX(-${translated}px)`
    }


    const handlePrevClick = () => {
        if(translated <= 0) return
        translated-=500
        swiper.style.transform=`translateX(-${translated}px)`
    }
    
</script>
<section class="bg-white lg:py-[200px]">
    <div class="w-container mx-auto">
        <h2 class="h2">Sucsess Stories</h2>
        <div class="flex justify-between items-center">
            <p class="big-h-desc text-start md:mt-4">Discover how Nothing has changed subscribers’ lives.</p>
            <div class="flex">
                <button class:opacity-40={translated === 0} on:click={handlePrevClick}>
                    <svg  class=" w-10 rotate-180 custom-arrow custom-arrow-prev" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <button class:opacity-40={translated >= 1300} on:click={handleNextClick}>
                    <svg class="w-10 custom-arrow custom-arrow-next" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        </div>
    </div>   
    <Swiper />
</section>