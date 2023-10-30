import { FAQ } from '@/lib/types'
import { LucideFacebook, LucideGithub, LucideYoutube } from 'lucide-react'

export const FAQS: FAQ[] = [
  {
    question: 'How to download TikTok videos without watermark?',
    answer: 'Just copy the link of the video you want to download, then paste it into the search box above and hit the Download button.',
  },
  {
    question: 'How to get TikTok video link?',
    answer: 'Open the TikTok app, tap Share and tap Copy Link.',
  },
  {
    question: 'Where are TikTok videos saved after being downloaded?',
    answer: 'TikTok videos are saved in the default download folder of your browser.',
  },
  {
    question: 'Does TikTok video downloader store downloaded videos or keep a copy of videos?',
    answer: 'TikTok video downloader doesn\'t store downloaded videos. The downloaded videos are stored ' +
      'in the default download folder of your browser.',
  },
  {
    question: 'Does KTik provide high-resolution videos?',
    answer: 'Yes, KTik provides high-resolution videos whenever it\'s available.',
  },
  {
    question: 'Does KTik provide audio only?',
    answer: 'Yes, you can download video, image and even audio only from TikTok. However, we respect intellectual' +
      ' property rights, you can download the audio but are not allowed to use it for any commercial purpose.',
  },
  {
    question: 'How to download image from TikTok slide?',
    answer: 'Just copy the link of the TikTok slide, then paste it into the search box above and hit the Download' +
      ' button. You can choose how many images you want to download from the slide.',
  },
  {
    question: 'Does KTik limit the number of downloads?',
    answer: 'No, you can download as many videos as you want.',
  },
  {
    question: 'Do I have to pay to download TikTok videos?',
    answer: 'TikTok video downloader is completely free to use. You can support us by turning off your adblocker, ' +
      'it helps us keep the server costs low.',
  },
  {
    question: 'Can I download TikTok videos on Android?',
    answer: 'Yes, but we recommend using KTik app in Google Play Store. It\'s free and easy to use.',
  },
  {
    question: 'Can I edit TikTok videos after downloading?',
    answer: 'No, KTik is just a TikTok video downloader, not suitable for editing TikTok videos. ' +
      'You can use other apps that support video editing like Adobe Premiere Pro, Final Cut Pro, iMovie, etc.',
  },
  {
    question: 'Can I download TikTok videos without watermark on iPhone?',
    answer: 'Yes, you can download TikTok videos without watermark on iPhone, iPad, Android phones, Windows and Mac computers.',
  },
]

export const socialLinks = [
  {
    href: 'https://www.facebook.com/code_with_koi',
    icon: LucideFacebook,
  },
  {
    href: 'https://www.github.com/ankoi0310',
    icon: LucideGithub,
  },
  {
    href: 'https://www.youtube.com/@ankoi0310',
    icon: LucideYoutube,
  }
]
