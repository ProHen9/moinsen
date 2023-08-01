<script lang="ts">
    export let title: string;
    export let small_content: string;
    export let content: string;
    export let author: string;
    export let date: string;
    let showMenuState: boolean = false;
    function showMenu() {
        showMenuState = true
    }
    function closeMenu() {
        showMenuState = false
    }
</script>

<div class="card" style="position: absolute; bottom: 40px;">
    <h2>{title}</h2>
    <p>{small_content}</p>
    <a class="Link" on:click={showMenu}>anschauen</a>
    <div id="bigMenu" class="bigMenu" style="display: {showMenuState? "flex": "none"}">
        <a class="Link" on:click={closeMenu}>schließen</a>
        <h2>{title}</h2>
        <p>Geschrieben von {author} am {date}.</p>
        <p>{content}</p>

    </div>
</div>
<style>
    .Link {
        background-color: var(--primary);
        cursor: pointer;
        border-radius: 5px;
        padding: 11px;
    }
    .bigMenu > .Link {
        position: fixed;
        top: 20px;
        right: 20px;
    }
    .bigMenu {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--background);
        
    }
    .bigMenu > * {
        color: var(--text)
    }
</style>