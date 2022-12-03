<script lang="ts">
    import {LogInWithGoogle,SignIn,LogIn} from "./LogIn"
    let passwordForLogIn = "";
  let passwordForSignIn = "";
  let passwordForSignInVerification = "";
  let LeerlingNummer = ""
  let LeerlingNummerSignIn = "";
  let makeaccount = false
</script>
<main>
<button on:click={function(){
    makeaccount = true;
  }}>Sign Up</button>
  <button on:click={LogInWithGoogle}>Log in met Google</button>
  <input type="number" placeholder="Leerling Nummer" bind:value={LeerlingNummer}>
  <input type="password" placeholder="Wachtwoord" bind:value={passwordForLogIn}>
  <button on:click={function(){
    LogIn(LeerlingNummer,passwordForLogIn)
  }}>Log in</button>
    {#if makeaccount}
    <button on:click={function(){
        makeaccount = false;
    }}>❌</button>
    <input type="number" placeholder="Leerling Nummer" bind:value={LeerlingNummerSignIn}>
    <input type="password" placeholder="Wachtwoord" bind:value={passwordForSignIn}>
    <input type="password" placeholder="Herhaal Wachtwoord" bind:value={passwordForSignInVerification}>
    <!-- <input type="name" placeholder="Naam"> -->
    <button on:click={function(){
      SignIn(LeerlingNummerSignIn,passwordForSignIn,passwordForSignInVerification,"");
    }}>Sign In</button>
    {/if}
</main>