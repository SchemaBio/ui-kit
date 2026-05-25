# @schema/ui-kit

Schema 基因组学分析平台的共享 UI 组件库，基于 Radix UI + Tailwind CSS 构建。

## 安装

```bash
pnpm add @schema/ui-kit
```

## 组件

| 组件 | 说明 |
|------|------|
| **Avatar** | 头像及头像组 |
| **Button** | 按钮（primary/secondary/danger/ghost） |
| **DataTable** | 数据表格，支持虚拟滚动、排序、行选择 |
| **Form** | 表单组件集（Input/Select/Checkbox/Radio/TextArea/FormItem） |
| **Modal** | 模态框（Header/Body/Footer/Dialog） |
| **Navigation** | 导航组件（Header/Sidebar/Breadcrumb/BottomNav） |
| **Tag** | 标签组件 |
| **Tooltip** | 工具提示及 Popover |
| **ThemeProvider** | 主题提供者（支持亮色/暗色模式） |

## 使用

```tsx
import { Button, Input, DataTable, ThemeProvider } from '@schema/ui-kit';
```

### 导入 CSS Token

在全局 CSS 中：

```css
@import '@schema/ui-kit/tokens';
```

### Tailwind 预设

```js
// tailwind.config.js
module.exports = {
  presets: [require('@schema/ui-kit/tailwind-preset')],
  // ...
};
```

## 开发

```bash
pnpm install
pnpm build      # 构建
pnpm dev        # 开发模式（watch）
pnpm test       # 运行测试
pnpm typecheck  # 类型检查
```

## 技术栈

- React 18
- Radix UI（无障碍原语）
- Tailwind CSS
- TanStack Virtual（虚拟滚动）
- tsup（构建）
- Vitest（测试）
