export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/bot') {
      return navigateTo('https://discord.com/oauth2/authorize?client_id=1309244360789069948')
    }
    if (to.path === '/invite') {
      return navigateTo('https://discord.gg/AbMuFaCJ7F')
    }
  })
  