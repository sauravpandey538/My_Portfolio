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
            pendingStatus: "Learning MySQL with ShadCN...",
            viewCode: "View Code",
            viewWebsite: "View Website",
            projectDescription: {
              e_commerce:
                "I have used third party api to fetch product here. We can buy products for three catagory. Visit it for more info.",
              games:
                "This website has two games. This games are fun to play. TicTacToe is so unique so give it try.",

              social_media:
                "This is my social media project built on the MERN stack. We can upload a post, like a post and comment too. we can add friends too.",
              college_works_pro:
                "This is a assignment helper to the college student where they can send their details along with plan suitable for them at minimum charge. It used discord webhook to call api which helps to get realtime message.",
              auth: "This is a basic authentication system built with NextAuth and shadCN. It includes an OTP system for email verification and password changes. It automatically checks for unique usernames or emails. Additionally, it utilizes Zod for validation.",
            },
            projectNames: {
              e_commerce: "E-commerce",
              games: "Games",
              social_media: "SocialMedia",
              college_works_pro: "CollegeWorksPro",
              auth: "0-Auth",
            },
            projectTitle: {
              e_commerce: "Framer-Motion | ChakraUI | Axios",
              games: "JS | Framer-Motion",
              social_media: " MERN | Vercel | ChakraUI | Framer-Motion",
              college_works_pro: "NextJS | TailwindCSS | TS | WebHook",
              auth: "NextAuth | Google 0-Auth | TailwindCSS | ZOD",
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
            pendingStatus: "MySQLとShadCNを学んでいます！",
            viewCode: "コードを見る",
            viewWebsite: "ウェブサイトを見る",
            projectDescription: {
              e_commerce:
                "ここではサードパーティのAPIを使用して商品を取得しました。3つのカテゴリの商品を購入できます。詳細はサイトをご覧ください。",
              games:
                "このウェブサイトには2つのゲームがあります。このゲームは遊ぶのが楽しいです。TicTacToeはとてもユニークなので、試してみてください。",
              social_media:
                "これはMERNスタックで構築された私のソーシャルメディアプロジェクトです。投稿をアップロードしたり、投稿に「いいね」したり、コメントを追加することができます。友達を追加することもできます。",
              college_works_pro:
                "これは大学生向けの課題ヘルパーで、最低料金で自分に合ったプランと一緒に詳細を送ることができます。ディスコードウェブフックを使用してリアルタイムメッセージを取得するAPIを呼び出します。",
              auth: "これは NextAuth と shadCN で構築された基本認証システムです。電子メール検証とパスワード変更のための OTP システムが含まれています。一意のユーザー名または電子メールを自動的にチェックします。さらに、検証に Zod を利用します。",
            },
            projectNames: {
              e_commerce: "電子商取引",
              games: "ゲーム",
              social_media: "ソーシャルメディア",
              college_works_pro: "カレッジワークスプロ",
              auth: "認証",
            },
            // projectTitle: {
            //   e_commerce:
            //     "React JSとサードパーティのAPIを使用した電子商取引サイトの試み",
            //   games: "Open AIとのコラボレーション",
            //   social_media:
            //     "私にとって個人的に最も先進的なプロジェクトであり、多くのことを学びました",
            // },
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
