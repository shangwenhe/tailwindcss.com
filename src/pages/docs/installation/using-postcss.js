import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '安装 Tailwind CSS',
    body: () => (
      <p>
        Install <code>tailwindcss</code> and its peer dependencies via npm, and create your{' '}
        <code>tailwind.config.js</code> file.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
    },
  },
  {
    title: '将 Tailwind 添加到 PostCSS 配置',
    body: () => (
      <p>
        Add <code>tailwindcss</code> and <code>autoprefixer</code> to your{' '}
        <code>postcss.config.js</code> file, or wherever PostCSS is configured in your project.
      </p>
    ),
    code: {
      name: 'postcss.config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
    }
  }`,
    },
  },
  {
    title: '配置模板路径',
    body: () => (
      <p>
        Add the paths to all of your template files in your <code>tailwind.config.js</code> file.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: '将Tailwind指令添加到CSS',
    body: () => (
      <p>
        Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your main CSS
        file.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '启动 dev 环境',
    body: () => (
      <p>
        Run your build process with <code>npm run dev</code> or whatever command is configured in
        your <code>package.json</code> file.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: '开始在 HTML 中使用 Tailwind',
    body: () => (
      <p>
        Make sure your compiled CSS is included in the <code>{'<head>'}</code>{' '}
        <em>(your framework might handle this for you)</em>, then start using Tailwind’s utility
        classes to style your content.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/main.css" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function UsingPostCss({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      >
        <h3 className="sr-only">Installing Tailwind CSS as a PostCSS plugin</h3>
        <p>
          将 Tailwind CSS 安装为 PostCSS 插件是将其与 webpack、Rollup、Vite 和 Parcel
          等构建工具集成的最无缝的方法。
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      <Cta
        label="Explore our framework guides"
        href="/tailwind/docs/installation/framework-guides"
        description={
          <>
            <strong className="font-semibold text-slate-900 dark:text-slate-200">
              Are you stuck?
            </strong>{' '}
            Setting up Tailwind with PostCSS can be a bit different across different build tools.
            Check our framework guides to see if we have more specific instructions for your
            particular setup.
          </>
        }
      />
    </InstallationLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

UsingPostCss.layoutProps = {
  meta: {
    title: '使用 PostCSS 安装 Tailwind CSS',
    description:
      '将Tailwind CSS安装为PostCSS插件是将其与webpack、Rollup、Vite和Parcel等构建工具集成的最无缝的方法。',
    section: '快速入门',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
