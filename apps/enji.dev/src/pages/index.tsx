import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        ogImage={`${getBaseUrl()}/assets/images/favicon.ico`}
        title="Abhishek Kute ·Software developer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design."
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
