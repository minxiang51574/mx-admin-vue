// const pkg = state => state.pkg
// const app = state => state.app
// const buttons = state => state.app.buttons
const auth = state => state.auth.data
const events = state => state.events.data
const menuItems = state => state.menu.items

export {
    // pkg,
    // app,
    // buttons,
  events,
    auth,
    menuItems
}
