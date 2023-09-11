<script>
    import Question from "../components/Question.svelte";

    let items = [
        {
            question: 'Random',
            answer: 'Yeesss'
        }
    ]
</script>

<section>
    <div class="w-container mx-auto flex lg:flex-row">
        <h2 class="h2">FAQ</h2>
    </div>
    <ul>
        {#each items as item }
            <Question answer={item.answer} question={item.question} />
        {/each}
    </ul>
</section>