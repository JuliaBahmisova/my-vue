<script setup lang="js">
import { v4 as uuid } from 'uuid'

useHead({
  title: "Login | CRM System",
})
const emailRef = ref("")
const passwordRef = ref("")
const nameRef = ref("")

const authStore = useAuthStore()
const isLoadingStore = useIsLoadingStore() 
const router = useRouter()

const login = async () => { 
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
      
    })
  }
  emailRef.value = ""
  passwordRef.value = ""
  nameRef.value = ""
  
  await router.push("/")
  isLoadingStore.set(false)
}

const register = async () => { 
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  await login()
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
      <form>
        <div class="flex flex-col gap-4">
          <Input
            placeholder="Email"
            type="email"
            class="mb-3"
            v-model="emailRef"
          />
          <Input
            placeholder="Password"
            type="password"
            class="mb-3"
            v-model="passwordRef"
          />
          <Input
            placeholder="Name"
            type="name"
            class="mb-3"
            v-model="nameRef"
          />
        </div>
        <div class="flex items-center justify-center gap-5 mt-5">
          <Button type="button" @click="login">Login</Button>
          <Button type="button" @click="register">Register</Button>
        </div>
      </form>
    </div>
  </div>
</template>
