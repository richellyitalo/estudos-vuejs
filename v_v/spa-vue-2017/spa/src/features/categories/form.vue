<script>
export default {
}
</script>

<template>
  <div>
    <form @submit.prevent="submit" class="well">
      <div class="form-group">
        <label for="" class="control-label">Nome</label>
        <input type="text" class="form-control">
      </div>
      <div class="text-right">
        <button class="btn btn-primary btn-x" type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>
