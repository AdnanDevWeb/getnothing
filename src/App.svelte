 <script lang="ts">
  import Comparaison from "./lib/Comparaison.svelte";
    import Faq from "./lib/Faq.svelte";
    import Gift from "./lib/Gift.svelte";
import Hero from "./lib/Hero.svelte";
import Nav from "./lib/Nav.svelte"
    import Quote from "./lib/Quote.svelte";
    import SecondSection from "./lib/SecondSection.svelte";
    import Sucess from "./lib/Sucess.svelte";
</script>

<main class="bg-main px-6 py-3 md:py-9 md:px-10">
  <div class="max-w-[1300px] mx-auto">
    <Nav />
    <Hero />
  </div>
</main>
<SecondSection/>
<Comparaison />
<Gift />
<Sucess />
<Quote />
