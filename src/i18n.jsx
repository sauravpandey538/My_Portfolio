import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          project: {
            project: "Projects",
            pendingStatus: "SocialMedia website is in process...",
            viewCode: "View Code",
            viewWebsite: "View Website",
            projectDescription: {
              e_commerce: "Welcome to our one-stop shopping destination...",
              games: "This website showcases my cherished games...",
            },
            projectNames: {
              e_commerce: "E-commerce",
              games: "Games",
            },
            projectTitle: {
              e_commerce:
                "Trying e-commerce website with react js and third party api",
              games: "Collaboration with Open AI",
            },
          },
          navigation: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contacts: "Contacts",
          },
          myDetail: {
            title: "Front-End React Developer 😀",
            cv: "View my CV",
            cv_goBack: "Return",
            description:
              "Hi, I'm Saurav Pandey. A passionate Front-end React Developer based in Kathmandu, Nepal",
            comfortableOn: "I'm comfortable on",
          },
          aboutMe: {
            title: "Front-end Developer based in Kathmandu, Nepal",
            name: "Hey, My name is Saurav, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users",
            stack:
              "My main stack currently is React/Next.js in combination with Chakra UIand Typescript",
          },
          contactMe: {
            title: "Hit me up ! 👇",
            location: "Location",
            locationName: "Samakhusi, Kathmandu",
            email: "E-mail",
            emailName: "sauravpandey0325@gmail.com",
            phone: "Phone",
          },
        },
      },
      jp: {
        translation: {
          project: {
            project: "プロジェクト",
            pendingStatus: "ソーシャルメディア Web サイトは処理中です...",
            viewCode: "コードを見る",
            viewWebsite: "ウェブサイトを見る",
            projectDescription: {
              e_commerce:
                "無限のショッピングを楽しめるワンストップショッピングデスティネーションへようこそ...",
              games:
                "このウェブサイトでは、私が個人的に作成した大切なゲームを紹介しています...",
            },
            projectNames: {
              e_commerce: "電子商取引",
              games: "ゲーム",
            },
            projectTitle: {
              e_commerce:
                "React JSとサードパーティのAPIを使用した電子商取引サイトの試み",
              games: "Open AIとのコラボレーション",
            },
          },
          navigation: {
            home: "ホーム",
            about: "約",
            projects: "プロジェクト",
            contacts: "連絡先",
          },
          myDetail: {
            title: "フロントエンドReact開発者 😀",
            cv: "履歴書を見る",
            cv_goBack: "戻る",

            description:
              "こんにちは、サウラヴ・パンディです。ネパールのカトマンズに拠点を置く情熱的なフロントエンドReact開発者です",
            comfortableOn: "以下の技術に精通しています",
          },
          aboutMe: {
            title: "カトマンズ、ネパールを拠点とするフロントエンド開発者",
            name: "こんにちは、私の名前はサウラブです。フロントエンド開発者です。ユーザー向けに清潔で使いやすいUI/UXを作成・開発することが私の情熱です。",
            stack:
              "現在のメインスタックはReact/Next.jsを中心に、Chakra UIとTypescriptを組み合わせています。",
          },
          contactMe: {
            title: "連絡方法",
            location: "位置",
            locationName: "サマクシ、カトマンズ",
            email: "メール",
            emailName: "sauravpandey0325@gmail.com",
            phone: "電話",
          },
        },
      },
    },
  });

export default i18n;
