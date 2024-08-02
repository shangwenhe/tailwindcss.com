import NextLink from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '将 Play CDN 脚本添加到 HTML',
    body: () => (
      <p>
        Add the Play CDN script tag to the <code>&lt;head&gt;</code> of your HTML file, and start
        using Tailwind’s utility classes to style your content.
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
>   <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
  {
    title: '尝试自定义配置',
    body: () => (
      <p>
        Edit the <code>tailwind.config</code> object to{' '}
        <NextLink href="/tailwind/docs/configuration">customize your configuration</NextLink> with your own
        design tokens.
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
    <script src="https://cdn.tailwindcss.com"></script>
>   <script>
>     tailwind.config = {
>       theme: {
>         extend: {
>           colors: {
>             clifford: '#da373d',
>           }
>         }
>       }
>     }
>   </script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline **text-clifford**">
      Hello world!
    </h1>
  </body>
  </html>`,
    },
  },
  {
    title: '尝试添加一些自定义 CSS',
    body: () => (
      <p>
        Use <code>type="text/tailwindcss"</code> to add custom CSS that supports all of Tailwind's
        CSS features.
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
    <script src="https://cdn.tailwindcss.com"></script>
>   <style type="text/tailwindcss">
>     @layer utilities {
>       .content-auto {
>         content-visibility: auto;
>       }
>     }
>   </style>
  </head>
  <body>
>   <div class="lg:content-auto">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
  {
    title: '尝试使用 first-party 插件',
    body: () => (
      <p>
        Enable first-party plugins, like forms and typography, using the <code>plugins</code> query
        parameter.
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
>   <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
  </head>
  <body>
>   <div class="prose">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
]

export default function PlayCdn({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark"
      >
        <h3 className="sr-only">Play CDN</h3>
        <p>
          使用 Play CDN 在浏览器中直接尝试 Tailwind CSS，而不执行任何构建步骤。Play CDN
          仅为开发目的而设计，不是生产的最佳选择。
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
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

PlayCdn.layoutProps = {
  meta: {
    title: '使用 Play CDN 尝试 Tailwind CSS',
    description: '使用Play CDN在浏览器中直接尝试Tailwind，而不执行任何构建步骤。',
    section: '快速入门',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
