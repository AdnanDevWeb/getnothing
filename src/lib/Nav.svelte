<script lang="ts">
    import Button from "../components/Button.svelte";


    let isNavOpen = false


</script>

<section class="flex justify-between overflow-hidden relative items-center z-50">
    <p class="text-[26px] font-semibold hover:opacity-80">
        nothing
    </p>
    <div class:translate-x-full={!isNavOpen} class="fixed md:translate-x-0 md:m-0 md:z-0 justify-center  bg-main top-0 z-10 mt-28 p-6 flex flex-col w-full md:w-fit md:h-fit h-full gap-6 left-0 transition-all md:flex-row md:text-lg md:gap-6 md:items-center md:static">
        <a href="#products" class="text-6xl md:text-lg">Product</a>
        <a href="#advantages" class="text-6xl md:text-lg">Advantages</a>
        <a href="#gift" class="text-6xl md:text-lg">
            Gift Nothing
            <span class="hidden md:inline-block">🔥</span>
        </a>
        <a href="#stories" class="text-6xl md:text-lg">Stories</a>
        <a href="#faq" class="text-6xl md:text-lg">FAQ</a>
        <div class="flex flex-grow items-end md:hidden w-full">
            <Button class="text-2xl gap-3 hover:gap-6 mb-0 w-full py-3"/>
        </div>
    </div>
    <div class="flex gap-3 items-center hover:cursor-pointer">
        {#if !isNavOpen}
            <Button>
                Get Nothing
            </Button>
        {/if}
            <div class:gap-0={isNavOpen} on:click={() => isNavOpen = !isNavOpen} class="flex flex-col gap-1 w-7 md:hidden">
                <div class:translate-y-[1.5px]={isNavOpen} class:-rotate-45={isNavOpen} class="w-full h-[2px] bg-black transition-all border-rounded-sm"></div>
                <div class:hidden={isNavOpen} class="w-full h-[2px] bg-black transition-all border-rounded-sm"></div>
                <div class:rotate-45={isNavOpen} class="w-full h-[2px] bg-black transition-all border-rounded-sm"></div>
            </div>
        </div>
</section>

