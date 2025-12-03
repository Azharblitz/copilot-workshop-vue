<template>
  <div class="code-block">
    <div class="code-header">
      <span v-if="filename" class="filename">{{ filename }}</span>
      <span v-else class="language">{{ language }}</span>
      <button class="copy-btn" @click="copyCode" :class="{ 'copied': copied }">
        <svg v-if="!copied" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="5" y="5" width="9" height="9" rx="1"/>
          <path d="M3 11V3a1 1 0 0 1 1-1h8"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 8L7 11L12 5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre class="code-content"><code :class="languageClass" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import markdown from 'highlight.js/lib/languages/markdown'
import yaml from 'highlight.js/lib/languages/yaml'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('json', json)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)

export default {
  name: 'CodeBlock',
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'javascript'
    },
    filename: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      copied: false
    }
  },
  computed: {
    languageClass() {
      return `language-${this.language}`
    },
    highlightedCode() {
      try {
        const result = hljs.highlight(this.code, { language: this.language })
        return result.value
      } catch (e) {
        return this.escapeHtml(this.code)
      }
    }
  },
  methods: {
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.code)
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    },
    escapeHtml(text) {
      const div = document.createElement('div')
      div.textContent = text
      return div.innerHTML
    }
  }
}
</script>

<style scoped>
.code-block {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--spacing-4) 0;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-bg-tertiary);
  border-bottom: 1px solid var(--color-border-primary);
}

.filename {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.language {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-3);
  background: transparent;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border-color: var(--color-text-muted);
}

.copy-btn.copied {
  color: var(--color-success);
  border-color: var(--color-success);
}

.code-content {
  margin: 0;
  padding: var(--spacing-4);
  overflow-x: auto;
  background: transparent;
  border: none;
}

.code-content code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-text-primary);
  background: transparent;
  padding: 0;
}

/* Syntax Highlighting Colors */
:deep(.hljs-keyword) { color: #ff7b72; }
:deep(.hljs-string) { color: #a5d6ff; }
:deep(.hljs-number) { color: #79c0ff; }
:deep(.hljs-function) { color: #d2a8ff; }
:deep(.hljs-title) { color: #d2a8ff; }
:deep(.hljs-params) { color: #c9d1d9; }
:deep(.hljs-comment) { color: #8b949e; }
:deep(.hljs-built_in) { color: #ffa657; }
:deep(.hljs-class) { color: #f0883e; }
:deep(.hljs-attr) { color: #79c0ff; }
:deep(.hljs-variable) { color: #ffa657; }
:deep(.hljs-template-variable) { color: #ffa657; }
:deep(.hljs-literal) { color: #79c0ff; }
:deep(.hljs-property) { color: #79c0ff; }
:deep(.hljs-punctuation) { color: #c9d1d9; }
:deep(.hljs-selector-tag) { color: #7ee787; }
:deep(.hljs-selector-class) { color: #d2a8ff; }
:deep(.hljs-selector-id) { color: #79c0ff; }
</style>
