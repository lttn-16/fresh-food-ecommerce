module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      phone: "600px",
      // => @media (min-width: 600px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1270px",
      // => @media (min-width: 1270px) { ... }
    },
    colors: {
      primary: "#0F9D58",
      secondary: "#9da2ad",
      tertiary: "#f0f3f7",
      black: "#1B0F0F",
      white: "#FFFFFF",
      grey: "#7a7a7b",
      line: "#E9E9E9",
      body: "#959494",
      success: "#1E95EB",
      error: {
        light: "#da3733",
        DEFAULT: "#C72C41",
        dark: "#920400",
      },
      warring: "#F88F01",
      transparent: "transparent",
      overplay: "rgba(0, 0, 0, 0.5)",
    },
    fontSize: {
      DEFAULT: "13px",
      "2xs": "10px",
      xs: "12px",
      sm: "13px",
      md: "14px",
      lg: "16px",
      "18": "18px",
      xl: "20px",
      "24": "24px",
      mxl: "26px",
      "2xl": "30px",
      "3xl": "32px",
      "4xl": "48px",
      "title": "140px"
    },
    /**
     * 1 means 10px
     */
    spacing: {
      unset: "unset",
      full: "100%",
      0: "0",
      0.1: "1px",
      0.2: "2px",
      0.5: "5px",
      1: "10px",
      1.3: "13px",
      1.5: "15px",
      2: "20px",
      2.5: "25px",
      3: "30px",
      3.5: "35px",
      4: "40px",
      4.3: "43px",
      4.5: "45px",
      5: "50px",
      5.5: "55px",
      6: "60px",
      7: "70px",
      8: "80px",
      9: "90px",
      10: "100px",
      11: "110px",
      12: "120px",
      13: "130px",
      15: "150px",
      17: "170px",
      20: "200px",
      24: "240px",
      25: "250px",
      26: "260px",
      27: "270px",
      28: "280px",
      30: "300px",
      32: "320px",
      35: "350px",
      37: "370px",
      40: "400px",
      46: "460px",
      50: "500px",
      60: "600px",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    fontWeight: {
      DEFAULT: 400,
      light: 200,
      "extra-light": 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      "extra-bold": 800,
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      rotate: {
        '28': '28deg',
      },
      backgroundImage: {
        'slider1': "url('./assets/images/goi-cuon-bg.jpg')",
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      borderRadius: {
        md: "5px",
        lg: "8px",
        xl: "10px",
        xxl: "15px",
        "3xl": "32px",
        "35": "35px"
      },
      boxShadow: {
        md: "2px 0px 20px -2px rgba(0, 0, 0, 0.05)",
        nav: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "nav-mobile": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },

      zIndex: {
        "-1": "-1",
        100: "100",
      },
      cursor: {
        "zoom-in": "zoom-in",
      },
      minHeight: {
        5: "50px",
        11: "110px",
        20: "200px",
        25: "250px",
        message: "calc(100vh - 110px)",
      },
      maxHeight: {
        unset: "unset",
        "11/12": "90%",
        message: "calc(100vh - 110px)",
      },
      maxWidth: {
        16: "160px",
        20: "200px",
        27: "270px",
        50: "500px",
        60: "600px",
        122: "1220px",
      },
      minWidth: {
        11: "110px",
        17: "170px",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
