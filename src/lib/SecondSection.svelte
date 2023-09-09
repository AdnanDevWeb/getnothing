<script>
    import Screenshot from "../components/Screenshot.svelte";
    import Marquee from "./Marquee.svelte";

</script>
<section class="-mt-3 bg-white rounded-[4rem] rounded-b-none">
    <div class="pt-10 px-6 lg:pl-52 lg:pt-52 rounded-[40px] md:rounded-[60px] md:py-14 bg-white grid gap-12">
        <article>
            <h2 class="h2">Whaaat?</h2>
            <p class="desc max-w-[800px]" > You’re already signed up for a bunch of stuff, like streaming services, software, and delivery apps. Honestly, it seems like you have everything you need.</p>
        </article>
        <article class="grid lg:grid-cols-2 gap-28">
            <div class="flex flex-col gap-8 lg:pr-20">
                <h3 class="h3">So, what else do you need to find happiness? Nothing.</h3>
                <p class="desc">Rather than offering you more things or services, Nothing suggests that you refrain from buying anything else. It’s about taking a step back from the constant pressure to consume and acquire, and finding joy in the things that really matter.</p>
            </div>
            <div class="hidden lg:flex items-center justify-center">
                <svg class="w-[400px] h-[600px]"  viewBox="0 0 420 540" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="310" height="540" rx="155" fill="#EDFA60"></rect><path d="M74 155.726C74 198.955 106.191 231.452 150.033 231.452C150.296 231.452 344.493 231.451 344.755 231.449C388.194 231.062 420 198.695 420 155.726C420 112.501 388.568 80.4591 344.909 80.0049C344.595 80.0016 150.347 80 150.033 80C105.885 80 74 112.191 74 155.726ZM381.677 155.726C381.677 179.596 366.193 195.723 344.909 196.185C344.596 196.192 150.348 196.195 150.033 196.195C128.265 196.195 112.323 179.946 112.323 155.726C112.323 131.506 128.265 115.257 150.033 115.257C150.348 115.257 344.596 115.261 344.909 115.267C366.193 115.729 381.677 131.857 381.677 155.726Z" fill="#FA5046"></path><circle id="product-circle" cx="154.638" cy="155.88" r="29.8919" fill="#FA5046"></circle></svg>
            </div>
        </article>
        <Screenshot>
            <img src="/сertificate.png" class="rounded-xl"  alt="">
        </Screenshot>
    </div>


    <section class="pt-10 px-6 lg:pl-52 lg:pt-12 rounded-[40px] md:rounded-[60px] md:py-14 bg-white grid gap-12 ">
        <article>
            <h2 class="h2">Advantages</h2>
            <p class="big-h-desc text-left">Not a subscriber yet? There’s nothing stopping you! Read on for more reasons why you should sign up.</p>
        </article>
        <div class="grid grid-rows-[repeat(9,110px)] grid-cols-2 mt-8 gap-4 max-w-[1080px]">
            <div class="card bg-red-500 text-white row-span-5">
                <h3 class="h3">Thoughtful gift</h3>
                <p class="desc">Give Nothing to yourself or to someone you appreciate more than anything. This unique gift serves as a powerful reminder that true happiness cannot be found in material possessions.</p>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 49.999C50 77.5982 72.3993 99.9976 99.9985 99.9976C99.9985 72.3984 77.5992 49.999 50 49.999Z" fill="#EDFA60"></path>
                    <path d="M0 99.9966C27.5992 99.9966 49.9985 77.5972 49.9985 49.998C22.3993 49.998 0 72.3974 0 99.9966Z" fill="#EDFA60"></path>
                    <path d="M99.9985 0.000488281C72.3993 0.000488281 50 22.3998 50 49.999C77.5992 49.999 99.9985 27.5997 99.9985 0.000488281Z" fill="#EDFA60"></path>
                    <path d="M0 0C0 27.5992 22.3993 49.9985 49.9985 49.9985C49.9985 22.3993 27.5992 0 0 0Z" fill="#EDFA60"></path>
                </svg>
            </div>
            <div class="card max-h-[470px] row-span-4">
                <h3 class="h3">Mindfulness</h3>
                <p class="desc">Nothing promotes a simpler and mre mindful lifestyle</p>
                <svg width="100" height="87" viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.1328 43.3333H75.0338L50.1004 0L25.1328 43.3333Z" fill="#FA5046"></path>
                    <path d="M100.001 86.6663L75.0349 43.333L50.1016 86.6663H100.001Z" fill="#FA5046"></path>
                    <path d="M0 86.6668H49.901L24.9676 43.3335L0 86.6668Z" fill="#FA5046"></path>
                </svg>
            </div>
            <div class="card row-span-5">
                <h3 class="h3">Sustainability</h3>
                <p class="desc">Nothing generates no physical waste or clutter, making it beneficial for the environment.</p>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 50.7633C0 77.925 22.0528 99.8984 49.0854 99.8984C48.6785 73.042 26.9309 51.2719 0 50.7633ZM0 49.1355C26.9309 48.7289 48.6789 26.9585 49.0854 0.000348438C22.0528 -0.101124 0 21.9738 0 49.1355ZM50.813 100C77.9472 100 99.8984 77.9248 99.8984 50.8649C73.0691 51.2722 51.3211 73.0418 50.813 100ZM100 49.1355C100 21.9738 77.9472 0.000348438 50.9146 0.000348438C51.3215 26.8568 73.0691 48.6268 100 49.1355Z" fill="#FA5046"></path>
                </svg>
            </div>
            <div class="card row-span-4">
                <h3 class="h3">Freedom</h3>
                <p class="desc">We aren’t trying to make you spend more time and money on our website. We have no idea what CTR, DAU, MAU, or retention rate mean.</p>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V100C27.6 100 49.9657 77.6 49.9657 50C49.9657 22.4 27.5981 0 0 0Z" fill="#FA5046"></path>
                    <path d="M100.001 50C100.001 22.4 77.6333 0 50.0352 0V100C77.6352 100 100.001 77.6 100.001 50Z" fill="#FA5046"></path>
                </svg>
            </div>
        </div>
    </section>

    <Marquee />
    
</section>

<style>
    article{
        display: grid;
        gap: 1rem;
    }
</style>
