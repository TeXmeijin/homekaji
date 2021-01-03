import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  srcDir: 'src',

  head: {
    title: 'homekaji',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  hooks: {
    generate: {
      async done(builder: any) {
        // This makes sure nuxt generate does finish without running into a timeout issue.
        // See https://github.com/nuxt-community/firebase-module/issues/93
        const appModule = await import('./.nuxt/firebase/app.js')
        const { session } = await appModule.default(
          builder.options.firebase.config,
          {
            res: null,
          }
        )
        try {
          session.database().goOffline()
        } catch (e) {}
        try {
          session.firestore().terminate()
        } catch (e) {}
      },
    },
  },

  components: ['~/components'],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: `${process.env.FIREBASE_API_KEY}`,
      authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
      databaseURL: `${process.env.FIREBASE_DATABASE_URL}`,
      projectId: `${process.env.FIREBASE_PROJECT_ID}`,
      storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
      messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
      appId: `${process.env.FIREBASE_APP_ID}`,
      measurementId: `${process.env.FIREBASE_MEASUREMENT_ID}`,
    },
    onFirebaseHosting: false,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
        disableEmulatorWarnings: true,
      },
      firestore: {
        memoryOnly: false,
        emulatorPort: process.env.NODE_ENV === 'development' ? 8080 : undefined,
      },
      functions: {
        emulatorPort: process.env.NODE_ENV === 'development' ? 5001 : undefined,
      },
      storage: true,
      database: {
        emulatorPort: process.env.NODE_ENV === 'development' ? 9000 : undefined,
      },
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
    },
  },

  modules: ['@nuxtjs/pwa'],

  build: {},

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },
}
export default config
