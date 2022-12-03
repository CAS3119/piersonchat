<script lang="ts">
  import {auth} from "./firebase"
  import {LogOut} from "./LogIn"
  import Login from "./Login.svelte"
  import ChatApp from "./ChatApp.svelte"
  let loggedIn = auth.currentUser == null ? false : true
  
  let name = auth?.name

  
  
  auth.onAuthStateChanged(auth => {
  // if user is not logged in the auth will be null
  if (auth) {
    loggedIn = true
    // email = auth.email
  } else {
    loggedIn = false
  }
});
</script>

<main>
  {#if loggedIn}
  <ChatApp/>
  {:else} 
 <Login/>
  {/if}
</main>

<style>
  
</style>