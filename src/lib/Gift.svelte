<script>
    import Button from "../components/Button.svelte";
    import Screenshot from "../components/Screenshot.svelte";

</script>
<section class="bg-white pt-[200px] overflow-hidden">
    <div class="w-container mx-auto pb-28">
        <h2 class="h2">Gift Nothing</h2>
        <p class="big-h-desc text-start pb-10 pt-2">Struggling to figure out what to give your friend, coworker, or that relative you haven’t seen in years? Consider gifting Nothing. Show how much you appreciate them, even if they need nothing.</p>
        <Button class="text-2xl py-3 px-14" />
    </div>
    <div class="relative">
        <Screenshot>
            <img class="rounded-2xl" src="/gift.png" alt="gift screenshot" />
        </Screenshot>
        <div class="absolute flex items-center justify-center w-[300px] h-[300px] badge right-12 -top-28 scale-[1.15]">
            <span class="relative z-20 text-white text-3xl rotate-12 -translate-x-4">Bestseller</span>
            <svg class="w-64 absolute left-0 top-0" viewBox="0 0 310 309" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M172.447 33.5954L192.125 10.4093L198.198 40.207L198.963 43.9619L202.091 41.7486L226.917 24.1844L225.389 54.5563L225.196 58.3835L228.776 57.0177L257.19 46.1791L248.156 75.2168L247.018 78.8759L250.826 78.4435L281.042 75.0114L265.071 100.89L263.059 104.152L266.854 104.68L296.974 108.87L275.069 129.964L272.309 132.622L275.854 134.077L303.986 145.627L277.523 160.611L274.189 162.499L277.261 164.79L301.637 182.972L272.279 190.905L268.579 191.904L270.985 194.887L290.073 218.561L259.665 218.943L255.833 218.991L257.421 222.478L270.023 250.155L240.475 242.963L236.752 242.057L237.422 245.83L242.745 275.771L215.914 261.456L212.533 259.653L212.245 263.474L209.954 293.798L187.526 273.261L184.7 270.673L183.47 274.302L173.71 303.104L157.094 277.634L155 274.425L152.906 277.634L136.29 303.104L126.53 274.302L125.3 270.673L122.474 273.261L100.046 293.798L97.7554 263.474L97.4668 259.653L94.0858 261.456L67.255 275.771L72.5776 245.83L73.2483 242.057L69.5249 242.963L39.9773 250.155L52.5786 222.478L54.1665 218.991L50.3347 218.943L19.9268 218.561L39.0151 194.887L41.4205 191.904L37.7211 190.905L8.3635 182.972L32.7394 164.79L35.8111 162.499L32.4765 160.611L6.0139 145.627L34.1458 134.077L37.6908 132.622L34.9305 129.964L13.0256 108.87L43.1459 104.68L46.9414 104.152L44.9289 100.89L28.9582 75.0114L59.1742 78.4435L62.9818 78.8759L61.8435 75.2168L52.8103 46.1791L81.2236 57.0177L84.804 58.3835L84.6115 54.5563L83.0835 24.1843L107.909 41.7486L111.037 43.9619L111.802 40.207L117.875 10.4093L137.553 33.5954L140.032 36.5172L141.707 33.0706L155 5.71933L168.293 33.0706L169.968 36.5172L172.447 33.5954Z" fill="#fa5046" stroke="#edfa60" stroke-width="5"></path></svg>
        </div>
    </div>
</section>



<style>
    @keyframes rotateInfinite {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .badge > svg {
        animation: rotateInfinite 5s linear 0s infinite;
        height: 100%;
    }
</style>
