<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";

  import { writable, type Writable } from "svelte/store";
  import Cookies from "js-cookie";

  const lang: Writable<string> = writable(Cookies.get("lang"));
  const modal: Writable<boolean> = writable(!$lang);

  function openModal() {
    modal.set(true);
  }

  lang.subscribe(console.log);
  modal.subscribe(console.log);
</script>

<svelte:head>
  <title>Kheti Badi App</title>
</svelte:head>

<section class="section">
  <div class="container content">
    <h1 class="title">Kheti Badi App</h1>
    <h4>
      Current language: <b>{$lang}</b>
      <button class="mx-1 button is-light is-white is-small" on:click={openModal}> 
        <span class="icon is-medium">✏️</span>
      </button>
    </h4>
    <p class="subtitle">
      We're using <a href="https://bulma.io/"><b>Bulma</b></a> +
      <a href="https://kit.svelte.dev/"><b>Svelte</b></a> now!
    </p>
    <figure class="image is-128x128">
      <img alt="cute boi" src="/modi.jpg" />
    </figure>
  </div>
  <Modal active={modal} {lang} />
</section>
