<script>
    import { twMerge } from 'tailwind-merge'
</script>


<button class={twMerge('flex hover:opacity-90 transition-all items-center text-white bg-black rounded-full justify-center py-[6px] gap-2 font-light px-5',$$props.class)}>
    <slot>
        Get Nothing
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 5.625L15.5344 6.93094L22.6406 14.0625H3.75V15.9375H22.6406L15.5344 23.0372L16.875 24.375L26.25 15L16.875 5.625Z" fill="white"></path></svg>
    </slot>
</button>