<section class="py-20">
    <div class="marquee">
        <div class="marquee-content">
            <span class="text">innovative</span>
            <span class="bull">·</span>
            <span class="text">surprising</span>
            <span class="bull">·</span>
            <span class="text">stylish</span>
            <span class="bull">·</span>
            <span class="text">minimalist</span>
            <span class="bull">·</span>
            <span class="text">premium</span>
            <span class="bull">·</span>
        </div>
        <div class="marquee-content" aria-hidden="true">
            <span class="text">innovative</span>
            <span class="bull">·</span>
            <span class="text">surprising</span>
            <span class="bull">·</span>
            <span class="text">stylish</span>
            <span class="bull">·</span>
            <span class="text">minimalist</span>
            <span class="bull">·</span>
            <span class="text">premium</span>
            <span class="bull">·</span>
        </div>
    </div>
    
    
    <!-- 2 -->
    
    <div class="marquee">
        <div class="marquee-content marquee-reverse">
            <span class="text">refined</span>
            <span class="bull">·</span>
            <span class="text">modern</span>
            <span class="bull">·</span>
            <span class="text">impressive</span>
            <span class="bull">·</span>
            <span class="text">unique</span>
            <span class="bull">·</span>
            <span class="text">trendy</span>
            <span class="bull">·</span>
        </div>
        <div class="marquee-content marquee-reverse" aria-hidden="true">
            <span class="text">refined</span>
            <span class="bull">·</span>
            <span class="text">modern</span>
            <span class="bull">·</span>
            <span class="text">impressive</span>
            <span class="bull">·</span>
            <span class="text">unique</span>
            <span class="bull">·</span>
            <span class="text">trendy</span>
            <span class="bull">·</span>
        </div>
    </div>
    
    
    
    <!-- 3 -->
    <div class="marquee">
        <div class="marquee-content">
            <span class="text">visionary</span>
            <span class="bull">·</span>
            <span class="text">fashionable</span>
            <span class="bull">·</span>
            <span class="text">incredible</span>
            <span class="bull">·</span>
            <span class="text">awesome</span>
            <span class="bull">·</span>
            <span class="text">phenomenal</span>
            <span class="bull">·</span>
            <span class="text">unbelievable</span>
            <span class="bull">·</span>
            <span class="text">fantastic</span>
            <span class="bull">·</span>
            <span class="text">amazing</span>
            <span class="bull">·</span>
        </div>
        <div class="marquee-content" aria-hidden="true">
            <span class="text">visionary</span>
            <span class="bull">·</span>
            <span class="text">fashionable</span>
            <span class="bull">·</span>
            <span class="text">incredible</span>
            <span class="bull">·</span>
            <span class="text">awesome</span>
            <span class="bull">·</span>
            <span class="text">phenomenal</span>
            <span class="bull">·</span>
            <span class="text">unbelievable</span>
            <span class="bull">·</span>
            <span class="text">fantastic</span>
            <span class="bull">·</span>
            <span class="text">amazing</span>
            <span class="bull">·</span>
        </div>
    </div>
</section>

<style>
    .marquee {
        --gap: 1rem;
        display: flex;
        gap: var(--gap);
        overflow: hidden;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .marquee-reverse {
        animation: scroll 20s linear infinite reverse !important;
    }

    /* .marquee-content:hover {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -o-animation-play-state: paused;
        animation-play-state: paused;
    } */
    .marquee-content {
        animation: scroll 20s linear infinite;
        display: flex;
        flex-shrink: 0;
        gap: var(--gap);
        justify-content: space-around;
        min-width: 100%;
        white-space: nowrap;
    }

    .text {
        letter-spacing: -0.03em;
        line-height: 90px;
        white-space: nowrap;
    }

    .bull {
        color: #edfa60;
        font-family: "Poppins", sans-serif;
        font-size: 180px;
        line-height: 90px;
        margin: 0 40px;
    }
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc( -100% - var(--gap) ));
        }
    }


    @keyframes reverse-scroll {
        0% {
            transform: translateX(calc( -100% - var(--gap) ));
        }
        100% {
            transform: translateX(0);
        }
    }
</style>