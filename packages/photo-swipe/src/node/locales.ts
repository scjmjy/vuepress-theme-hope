import type { PhowoSwipeLocaleConfig } from "../shared";

export const photoSwipeLocales: PhowoSwipeLocaleConfig = {
  "/en/": {
    close: "Close",
    fullscreen: "Switch to full screen",
    share: "Share",
    zoom: "Zoom in/out",
    prev: "Prev (Arrow Left)",
    next: "Next (Arrow Right)",
    buttons: [
      {
        id: "facebook",
        label: "Share on Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "download",
        label: "Download image",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/zh/": {
    close: "关闭",
    fullscreen: "切换全屏",
    share: "分享",
    zoom: "缩放",
    prev: "上一个 (左箭头)",
    next: "下一个 (右箭头)",
    buttons: [
      {
        id: "qq",
        label: "分享到 QQ",
        url: "https://connect.qq.com/widget/shareqq/iframe_index.html?url={{url}}&title={{text}}&pics={{image_url}}",
      },
      {
        id: "qzone",
        label: "分享到 Qzone",
        url: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{url}}&title={{text}}&pics={{image_url}}",
      },
      {
        id: "weibo",
        label: "分享到 Weibo",
        url: "http://service.weibo.com/share/share.php?url={{url}}&title={{text}}&content=utf8&pic={{image_url}}",
      },
      {
        id: "download",
        label: "下载图片",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/tw/": {
    close: "關閉",
    fullscreen: "切換全屏",
    share: "分享",
    zoom: "縮放",
    prev: "上一個 (左箭頭)",
    next: "下一個 (右箭頭)",
    buttons: [
      {
        id: "facebook",
        label: "分享到 Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "download",
        label: "下載圖片",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/de/": {
    close: "Schließen",
    fullscreen: "Toggle fullscreen",
    share: "Teilen",
    zoom: "Rein / rauszoomen",
    prev: "Zurück (Pfeil links)",
    next: "Weiter (Pfeil rechts)",
    buttons: [
      {
        id: "facebook",
        label: "Teilen auf Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "download",
        label: "Bild herunterladen",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/vi/": {
    close: "Đóng",
    fullscreen: "Bật chế độ toàn màn hình",
    share: "Chia sẻ",
    zoom: "Phóng to / thu nhỏ",
    prev: "Trước (Mũi tên trái)",
    next: "Tiếp theo (Mũi tên Phải)",
    buttons: [
      {
        id: "facebook",
        label: "Share on Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "download",
        label: "Download image",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/uk/": {
    close: "Закрити",
    fullscreen: "Перейти на повний екран",
    share: "Поділіться",
    zoom: "Збільшити/Зменшити",
    prev: "Попередня (Стрілка вліво)",
    next: "Далі (стрілка вправо)",
    buttons: [
      {
        id: "facebook",
        label: "Поділіться на Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "Завантажити",
        label: "Завантажити зображення",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/ru/": {
    close: "Закрыть",
    fullscreen: "Переключиться на полный экран",
    share: "Поделиться",
    zoom: "Увеличить/Уменьшить",
    prev: "Предыдущая (Стрелка влево)",
    next: "Далее (стрелка вправо)",
    buttons: [
      {
        id: "facebook",
        label: "Поделиться на Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "Загрузить",
        label: "Загрузить изображение",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },

  "/br/": {
    close: "Fechar",
    fullscreen: "Alternar para tela cheia",
    share: "Compartilhar",
    zoom: "Aproximar mais/menos",
    prev: "Anterior (Seta Esquerda)",
    next: "Próximo (Seta Direita)",
    buttons: [
      {
        id: "facebook",
        label: "Compartilhar no Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
      },
      {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "download",
        label: "baixar imagem",
        url: "{{raw_image_url}}",
        download: true,
      },
    ],
  },
};
