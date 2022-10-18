import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  imgLink?: string;
  canonical?: string;
  ogType?: string;
  ogUrl?: string;
  ogTitle?: string;
  keywords?: string;
};

export const SeoHead = ({ title, description, imgLink, canonical, ogType = 'website', ogUrl, ogTitle, keywords }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <meta property="og:description" content={description} />
      {imgLink ? <meta property="og:image" content={imgLink} /> : null}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle ?? title} />
      {ogUrl ? <meta property="og:url" content={ogType} /> : null}

      <meta property="twitter:title" content={ogTitle ?? title} />
      <meta property="twitter:description" content={description} />
      {imgLink ? <meta property="twitter:image" content={imgLink} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Head>
  );
};
