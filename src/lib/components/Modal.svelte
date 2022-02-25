<script lang="ts">
  import type { Writable } from "svelte/store";
  import Cookies from "js-cookie";

  export let lang: Writable<string>;
  export let active: Writable<boolean>;
  let l: string;

  function close() {
    active.set(false);
  }
</script>

<div class="modal {$active ? 'is-active' : ''} ">
  <div class="modal-background" />
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Select Language</p>
      <button class="delete" aria-label="close" on:click={close} />
    </header>
    <section class="modal-card-body">
      <select class="select is-medium" bind:value={l}>
        <option value="english1">English</option>
        <option value="english2">English Returns</option>
        <option value="english3">English 3</option>
        <option value="english4">English Again</option>
      </select>
    </section>
    <footer class="modal-card-foot">
      <button
        class="button is-success"
        on:click={() => {
          Cookies.set("lang", l);
          lang.set(Cookies.get("lang"));
          close();
        }}>Continue</button
      >
    </footer>
  </div>
</div>
