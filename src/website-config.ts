export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */

  footer?: string;
  contact: string;
  email: string;
}

const config: WebsiteConfig = {
  title: 'SCALAR LAB',
  description: 'SCALable ARchitecture Lab.',
  coverImage: 'img/blog-cover.png',
  logo: 'img/hongik_logo.jpg',
  lang: 'en',
  siteUrl: 'https://huiji0315/github.io/sacalar-webpage',
  footer: 'is based on Hongik Univ.',
  contact: 'Contact : (02)320-3012',
  email: 'konwoo@hongik.ac.kr',
};

export default config;
