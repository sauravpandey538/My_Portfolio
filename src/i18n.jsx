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
              e_commerce:
                "Welcome to our one-stop shopping destination, where you can indulge in unlimited shopping. We cater to all your fashion and accessory needs with three distinct categories: men, women, and jewelry. For men, we offer a wide range of stylish and comfortable clothing and accessories, from casual wear to formal attire. Women will love our extensive collection of fashion-forward pieces, including dresses, tops, pants, and accessories to suit any style. Our jewelry category features exquisite pieces that add a touch of glamour to any look, including necklaces, bracelets, earrings, and rings. Enjoy unlimited shopping with us and elevate your style effortlessly!",
              games:
                "This website showcases my cherished games, all of which I have personally created. It features simple games such as TicTacToe, Snake, and other 2D games. The TicTacToe game offers a unique twist: the cell value gets deleted after the 6th turn, ensuring no game ends in a draw. While the Snake game may seem slow initially, once you get the hang of it, you'll be speeding through like a pro.",

              social_media:
                "This is my social media project built on the MERN stack. Currently, the website does not include notification and chat services, but these features will definitely be added in the future. Priority will be given to enhancing UI/UX and optimizing performance over introducing new features.",
            },
            projectNames: {
              e_commerce: "E-commerce",
              games: "Games",
              social_media: "SocialMedia",
            },
            projectTitle: {
              e_commerce:
                "Trying e-commerce website with react js and third party api",
              games: "Collaboration with Open AI",
              social_media:
                "My personally most advance project that teached me alot.",
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
                "無制限にお買い物をお楽しみいただける、ワンストップ ショッピング サイトへようこそ。メンズ、ウィメンズ、ジュエリーの 3 つの異なるカテゴリーで、ファッションとアクセサリーのあらゆるニーズにお応えします。メンズ向けには、カジュアルウェアからフォーマルウェアまで、スタイリッシュで快適なウェアやアクセサリーを幅広く取り揃えています。女性は、どんなスタイルにも合うドレス、トップス、パンツ、アクセサリーなど、ファッション性の高いアイテムの幅広いコレクションを気に入るはずです。当社のジュエリー カテゴリーには、ネックレス、ブレスレット、イヤリング、リングなど、どんな装いにも華やかさを加える絶妙なアイテムが揃っています。無制限のショッピングを楽しんで、簡単にスタイルを向上させましょう!",
              games:
                "このウェブサイトでは、私が個人的に作成した大切なゲームを紹介しています。 TicTacToe、Snake、その他の 2D ゲームなどのシンプルなゲームが特徴です。 TicTacToe ゲームには、ユニークな工夫が施されています。つまり、6 ターン後にセルの値が削除され、ゲームが引き分けで終わることはありません。 Snake ゲームは最初は遅く見えるかもしれませんが、コツを掴めばプロのようにスピードを出せるようになります。",

              social_media:
                "MERNスタックで構築された私のソーシャルメディアプロジェクトです。現在、このウェブサイトには通知やチャットサービスは含まれていませんが、将来的に追加される予定です。新機能の導入よりも、UI/UXの向上とパフォーマンスの最適化に優先度を置きます",
            },
            projectNames: {
              e_commerce: "電子商取引",
              games: "ゲーム",
              social_media: "ソーシャルメディア",
            },
            projectTitle: {
              e_commerce:
                "React JSとサードパーティのAPIを使用した電子商取引サイトの試み",
              games: "Open AIとのコラボレーション",
              social_media:
                "私にとって個人的に最も先進的なプロジェクトであり、多くのことを学びました",
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
