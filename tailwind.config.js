import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './helpers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      rose: colors.rose,
      red: colors.red,
      gray: colors.stone,
      background: 'hsl(var(--background) / <alpha-value>)',
      foreground: 'hsl(var(--foreground) / <alpha-value>)',
      primary: 'hsl(var(--primary) / <alpha-value>)',
      paper: 'var(--color-paper)',
      'paper-2': 'var(--color-paper-2)',
      'paper-3': 'var(--color-paper-3)',
      ink: 'var(--color-ink)',
      'ink-2': 'var(--color-ink-2)',
      'ink-3': 'var(--color-ink-3)',
      rule: 'var(--color-rule)',
      accent: 'var(--color-accent)',
      'accent-soft': 'var(--color-accent-soft)',
      'accent-ink': 'var(--color-accent-ink)',
      focus: 'var(--color-focus)',
      surface: 'var(--color-surface)',
      band: 'var(--color-band)',
      'band-ink': 'var(--color-band-ink)',
      'band-muted': 'var(--color-band-muted)',
      lagoon: 'var(--color-lagoon)',
      deep: 'var(--color-deep)',
      glass: 'var(--color-glass)',
      mist: 'var(--color-mist)',
      ice: 'var(--color-ice)',
      foam: 'var(--color-foam)',
      ocean: 'var(--color-ocean)',
      water: 'var(--color-water)',
      aqua: 'var(--color-aqua)',
      pulse: 'var(--color-pulse)',
      'deep-ink': 'var(--color-deep-ink)',
      blue: {
        50: '#f0f9ff',
        100: '#dff1ff',
        200: '#b8e4ff',
        300: '#99dbff',
        400: '#33b9fd',
        500: '#09a0ee',
        600: '#007fcc',
        700: '#0065a5',
        800: '#045688',
        900: '#0a4870',
        950: '#062d4b',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        '2xl': '1400px',
        '3xl': '2000px',
      },
      borderWidth: {
        1: '1px',
      },
      animation: {
        reveal: 'reveal 0.7s var(--ease-out)',
        float: 'float 5s var(--ease-in-out) infinite',
        wave: 'wave 18s linear infinite',
        lift: 'lift 0.22s var(--ease-out)',
      },
      fontFamily: {
        sans: ['var(--font-figtree)'],
        heading: ['var(--font-gabarito)'],
        display: ['var(--font-gabarito)'],
        measure: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(0.35rem)',
          },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        lift: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-2px)' },
        },
      },
    },
    typography: (theme) => ({
      invert: {
        css: {
          '--tw-prose-body': 'var(--tw-prose-invert-body)',
          '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
          '--tw-prose-links': 'var(--tw-prose-invert-links)',
          '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
          '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
          '--tw-prose-underline-hover':
            'var(--tw-prose-invert-underline-hover)',
          '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
          '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
          '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
          '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
          '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
          '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
          '--tw-prose-code': 'var(--tw-prose-invert-code)',
          '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
          '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
          '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
          '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
          '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
          '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
        },
      },
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.gray.600'),
          '--tw-prose-headings': theme('colors.gray.900'),
          '--tw-prose-links': 'var(--color-accent)',
          '--tw-prose-links-hover': 'var(--color-focus)',
          '--tw-prose-underline': 'color-mix(in oklch, var(--color-accent) 30%, transparent)',
          '--tw-prose-underline-hover': 'var(--color-accent)',
          '--tw-prose-bold': theme('colors.gray.900'),
          '--tw-prose-counters': theme('colors.gray.900'),
          '--tw-prose-bullets': theme('colors.gray.900'),
          '--tw-prose-hr': theme('colors.gray.100'),
          '--tw-prose-quote-borders': theme('colors.gray.200'),
          '--tw-prose-captions': theme('colors.gray.400'),
          '--tw-prose-code': theme('colors.gray.700'),
          '--tw-prose-code-bg': theme('colors.gray.300 / 0.2'),
          '--tw-prose-pre-code': theme('colors.gray.100'),
          '--tw-prose-pre-bg': theme('colors.gray.900'),
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-th-borders': theme('colors.gray.200'),
          '--tw-prose-td-borders': theme('colors.gray.100'),

          '--tw-prose-invert-body': theme('colors.gray.400'),
          '--tw-prose-invert-headings': theme('colors.gray.200'),
          '--tw-prose-invert-links': 'var(--color-accent-soft)',
          '--tw-prose-invert-links-hover': 'var(--color-accent-ink)',
          '--tw-prose-invert-underline':
            'color-mix(in oklch, var(--color-accent-soft) 40%, transparent)',
          '--tw-prose-invert-underline-hover': 'var(--color-accent-soft)',
          '--tw-prose-invert-bold': theme('colors.gray.200'),
          '--tw-prose-invert-counters': theme('colors.gray.200'),
          '--tw-prose-invert-bullets': theme('colors.gray.200'),
          '--tw-prose-invert-hr': theme('colors.gray.700 / 0.4'),
          '--tw-prose-invert-quote-borders': theme('colors.gray.500'),
          '--tw-prose-invert-captions': theme('colors.gray.500'),
          '--tw-prose-invert-code': theme('colors.gray.300'),
          '--tw-prose-invert-code-bg': theme('colors.gray.200 / 0.05'),
          '--tw-prose-invert-pre-code': theme('colors.gray.100'),
          '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
          '--tw-prose-invert-pre-border': theme('colors.gray.200 / 0.1'),
          '--tw-prose-invert-th-borders': theme('colors.gray.700'),
          '--tw-prose-invert-td-borders': theme('colors.gray.800'),

          // Base
          color: 'var(--tw-prose-body)',
          lineHeight: theme('lineHeight.7'),
          '> *': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10'),
          },
          p: {
            fontSize: theme('fontSize.base')[0],
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),

            '@media (min-width: 640px)': {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },

            '@media (min-width: 768px)': {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
          },

          'p:first-of-type': {
            marginTop: 0,
          },

          'p:last-of-type': {
            marginBottom: 0,
          },

          // Headings
          'h2, h3, h4, h5, h6': {
            color: 'var(--tw-prose-headings)',
          },
          h1: {
            fontFamily: theme('fontFamily.heading'),
            fontWeight: theme('fontWeight.bold'),
            lineHeight: theme('lineHeight.tight'),
            fontSize: theme('fontSize.5xl')[0],
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.6'),
          },
          h2: {
            fontFamily: theme('fontFamily.heading'),
            fontWeight: theme('fontWeight.bold'),
            lineHeight: theme('lineHeight.9'),
            fontSize: theme('fontSize.4xl')[0],
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.6'),

            '@media (min-width: 768px)': {
              lineHeight: theme('lineHeight.snug'),
              fontSize: theme('fontSize.5xl')[0],
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.8'),
            },
          },
          h3: {
            fontFamily: theme('fontFamily.heading'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.2xl')[0],
            lineHeight: theme('lineHeight.8'),
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.4'),

            '@media (min-width: 768px)': {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
            },
          },
          h4: {
            fontFamily: theme('fontFamily.heading'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.4'),

            '@media (min-width: 768px)': {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
            },
          },
          h5: {
            fontFamily: theme('fontFamily.heading'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.lg')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),

            '@media (min-width: 768px)': {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
            },
          },
          h6: {
            fontFamily: theme('fontFamily.heading'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),

            '@media (min-width: 768px)': {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
            },
          },
          ':is(h2, h3) + *': {
            marginTop: 0,
          },
          'p + ul, p + ol': {
            marginTop: 0,

            '@media (min-width: 768px)': {
              marginTop: `-${theme('spacing.2')}`,
            },
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            textUnderlineOffset: theme('textUnderlineOffset.4'),
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
          },
          'a:hover': {
            color: 'var(--tw-prose-links-hover)',
            textDecorationColor: 'var(--tw-prose-underline-hover)',
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: theme('fontWeight.bold'),
          },
          code: {
            display: 'inline-block',
            color: 'var(--tw-prose-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
            backgroundColor: 'var(--tw-prose-code-bg)',
            borderRadius: theme('borderRadius.lg'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
          },
          'a code': {
            color: 'inherit',
          },
          ':is(h2, h3) code': {
            fontWeight: theme('fontWeight.bold'),
          },

          // Quotes
          blockquote: {
            paddingLeft: theme('spacing.6'),
            borderLeftWidth: theme('borderWidth.2'),
            borderLeftColor: 'var(--tw-prose-quote-borders)',
            fontStyle: 'italic',
          },

          // Figures
          figcaption: {
            color: 'var(--tw-prose-captions)',
            fontSize: theme('fontSize.sm')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.3'),
          },
          'figcaption > p': {
            margin: 0,
          },

          // Lists
          ul: {
            listStyleType: 'disc',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            paddingLeft: theme('spacing.6'),
          },
          li: {
            marginTop: theme('spacing.2'),
            marginBottom: theme('spacing.2'),
            paddingLeft: theme('spacing[3.5]'),
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)',
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)',
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
          },

          // Code blocks
          pre: {
            color: 'var(--tw-prose-pre-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: 'var(--tw-prose-pre-bg)',
            borderRadius: theme('borderRadius.3xl'),
            padding: theme('spacing.8'),
            overflowX: 'auto',
            border: '1px solid',
            borderColor: 'var(--tw-prose-pre-border)',
          },
          'pre code': {
            display: 'inline',
            color: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            backgroundColor: 'transparent',
            borderRadius: 0,
            padding: 0,
          },

          // Horizontal rules
          hr: {
            marginTop: theme('spacing.20'),
            marginBottom: theme('spacing.20'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
            '@media (min-width: 1024px)': {
              marginLeft: `calc(${theme('spacing.12')} * -1)`,
              marginRight: `calc(${theme('spacing.12')} * -1)`,
            },
          },

          // Tables
          table: {
            width: '100%',
            tableLayout: 'auto',
            textAlign: 'left',
            fontSize: theme('fontSize.sm')[0],
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-th-borders)',
          },
          'thead th': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
            verticalAlign: 'bottom',
            paddingBottom: theme('spacing.2'),
          },
          'thead th:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          'thead th:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
          // 'tbody tr': {
          //   borderBottomWidth: '1px',
          //   borderBottomColor: 'var(--tw-prose-td-borders)',
          // },
          // 'tbody tr:last-child': {
          //   borderBottomWidth: 0,
          // },
          'tbody td': {
            verticalAlign: 'baseline',
          },
          tfoot: {
            borderTopWidth: '1px',
            borderTopColor: 'var(--tw-prose-th-borders)',
          },
          'tfoot td': {
            verticalAlign: 'top',
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
        },
      },
    }),
  },
  plugins: [tailwindcssAnimate, typography],
}
export default config
