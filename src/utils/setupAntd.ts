import type { App } from 'vue'
import { Layout, Menu, Drawer, Button, Dropdown, Tooltip } from 'ant-design-vue'
const components = [Layout, Menu, Button, Tooltip, Dropdown]

export default function setupAntd(app: App<Element>): void {
  components.forEach((component: any) => {
    app.use(component)
  })
}
