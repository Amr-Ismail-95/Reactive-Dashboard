module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://img.freepik.com/premium-vector/multitasking-concept-illustration-character_23-2148403716.jpg?w=2000')",
          'md-pattern':
          "url('https://cdn.dribbble.com/users/77598/screenshots/5919494/media/a9051eeb36604468216dfa7dfed49727.png?compress=1&resize=768x576&vertical=top')"
        },
      },
    },
    plugins: [],
  };