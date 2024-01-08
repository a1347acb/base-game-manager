<script setup lang="ts">
const formData = ref({
  account: '',
  password: ''
})
</script>

<template>
  <AForm class="login-form">
    <h2 class="login-form-title">登录</h2>
    <AFormItem label="账号">
      <AInput v-model:value="formData.account"/>
    </AFormItem>
    <AFormItem label="密码">
      <AInputPassword v-model:value="formData.password"/>
    </AFormItem>
    <AButton block type="primary">登录</AButton>
  </AForm>
</template>

<style scoped>
.login-form{
  background-color: rgba(255,255,255,1);
  padding: 20px;
  border-radius: 8px;
  .login-form-title{
    text-align: center;
    font-weight: bold;
  }
}
</style>