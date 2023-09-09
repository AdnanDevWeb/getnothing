<script>
    import Separator from "./Separator.svelte";

</script>
<div class="max-w-[1300px] bg-red-500 rounded-[2.5rem] mx-auto mt-28 py-20 px-32">
    <div id="table">
        <div  class="grid grid-cols-5" id="th">
            <div></div>
            <div>
                <p>Spotify</p>
                <p>Apple Music</p>
            </div>
            <div>
                <p>Netflix</p>
                <p>Disney+</p>
                <p>HBO</p>
                <p>Hulu</p>
            </div>
            <div>
                <p>Doordash</p>
                <p>Love With Food</p>
                <p>HelloFresh</p>
            </div>
            <div class="highlight-gray rounded-t-3xl flex items-center">
                <p>n</p>
                <div class="p-[2px] border-white border-[2px] rounded-full border-solid">
                    <div class="p-1 bg-white rounded-full"></div>
                </div>
                <p>thing</p>
            </div>
        </div>
        <Separator />

        <!-- First row -->
        <div class="row">
            <p class="title">Music</p>
            <p class="active">Yes</p>
            <p>No</p>
            <p>No</p>
            <p class="highlight-gray">No</p>
        </div>

        <Separator />

        <div class="row">
            <p class="title">Video</p>
            <p>No</p>
            <p class="active">Yes</p>
            <p>No</p>
            <p class="highlight-gray">No</p>
        </div>

        <Separator />

        <div class="row">
            <p class="title">Food</p>
            <p>No</p>
            <p>No</p>
            <p class="active">Yes</p>
            <p class="highlight-gray rounded-b-3xl">No</p>
        </div>
    </div>
</div>



<style>
    #table {
        color: white;
        font-size: 1.4rem;
    }

    .row p {
        padding: 2rem;
    }
     #th {
        align-self: self-end;
        text-align: center;
        & div {
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding-bottom: 1.6rem;
        }
     }

     .row  :not(.title, .active,.highlight-gray){
        color: rgb(189, 179, 179);
     }

     .row  :not(.title){
        text-align: center;
     }

     .highlight-gray {
        background-color: rgba(242, 240, 243, .3);
    }

</style>